const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim()
// نبدأ بالنماذج الأخف، وننتقل تلقائياً لبديل إذا كان النموذج مزدحماً.
const PREFERRED_MODELS = ['gemini-3.5-flash-lite', 'gemini-2.5-flash-lite', 'gemini-2.5-flash', 'gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-flash-latest']
const INSTRUCTIONS = `أنت مساعد ذكي عام داخل الموقع الشخصي للمطور زياد العريقي.
أجب عن أسئلة الزوار في البرمجة وتطوير الويب وJavaScript وVue وLaravel وقواعد البيانات وGit والتصميم والعمل الحر، وكذلك الأسئلة العامة المفيدة. أجب بلغة المستخدم، واستخدم العربية غالباً بأسلوب واضح وودود.
في الأسئلة البرمجية اشرح الفكرة ثم أعط مثالاً صحيحاً. لا تخترع معلومات شخصية أو أسعاراً أو روابط عن زياد؛ استخدم معلومات الموقع فقط ووجّه الزائر لصفحة التواصل عند الحاجة. إذا لم تعرف معلومة أو كانت تحتاج تحديثاً، قل ذلك بوضوح. حافظ على سياق المحادثة ولا تكرر الترحيب.`

let activeModelName = null
let conversationHistory = []

const readError = async (response) => {
  try {
    const body = await response.json()
    return body?.error?.message || `HTTP ${response.status}`
  } catch {
    return `HTTP ${response.status}`
  }
}

const discoverModel = async (excludedModels = []) => {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models', {
    headers: { 'x-goog-api-key': apiKey },
  })
  if (!response.ok) throw new Error(await readError(response))
  const data = await response.json()
  const supported = (data.models || []).filter((item) => item.supportedGenerationMethods?.includes('generateContent'))
  const selected = PREFERRED_MODELS.find((name) => !excludedModels.includes(name) && supported.some((item) => item.name === `models/${name}`))
    || supported.find((item) => !excludedModels.includes(item.name.replace('models/', '')) && /flash/i.test(item.name))?.name?.replace('models/', '')
    || supported.find((item) => !excludedModels.includes(item.name.replace('models/', '')))?.name?.replace('models/', '')
  if (!selected) throw new Error('NO_SUPPORTED_GENERATION_MODEL')
  activeModelName = selected
}

export const getGeminiResponse = async (message) => {
  if (import.meta.env.PROD) {
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history: conversationHistory }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data?.error || `HTTP ${response.status}`)
      const answer = data.answer?.trim()
      if (!answer) throw new Error('EMPTY_RESPONSE')
      conversationHistory = [
        ...conversationHistory,
        { role: 'user', parts: [{ text: message }] },
        { role: 'model', parts: [{ text: answer }] },
      ].slice(-12)
      return answer
    } catch (error) {
      console.error('Gemini proxy error:', error)
      return `تعذر تشغيل المساعد: ${error?.message || 'خطأ غير معروف'}`
    }
  }

  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
    return 'المساعد غير مفعّل بعد. أغلق خادم Vite وشغّله من جديد بعد التأكد من وجود VITE_GEMINI_API_KEY في ملف .env. إذا كنت تفتح مجلد dist فأعد بناء المشروع أولاً.'
  }

  try {
    const contents = [...conversationHistory, { role: 'user', parts: [{ text: message }] }]
    const triedModels = []
    let response
    let lastError = ''

    for (let attempt = 0; attempt < 3; attempt += 1) {
      if (!activeModelName || triedModels.includes(activeModelName)) {
        activeModelName = null
        await discoverModel(triedModels)
      }
      triedModels.push(activeModelName)
      response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${activeModelName}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body: JSON.stringify({ systemInstruction: { parts: [{ text: INSTRUCTIONS }] }, contents, generationConfig: { maxOutputTokens: 600, temperature: 0.7 } }),
      })
      if (response.ok) break
      lastError = await readError(response)
      const busy = response.status === 429 || response.status === 503 || /high demand|temporarily|overloaded/i.test(lastError)
      if (!busy) throw new Error(lastError)
      activeModelName = null
    }

    if (!response?.ok) throw new Error(lastError || 'Gemini is temporarily busy')
    const data = await response.json()
    const answer = data.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join('').trim()
    if (!answer) throw new Error('EMPTY_RESPONSE')
    conversationHistory = [...contents, { role: 'model', parts: [{ text: answer }] }].slice(-12)
    return answer
  } catch (error) {
    console.error('Gemini error:', error)
    const text = String(error?.message || '').toLowerCase()
    if (text === 'no_supported_generation_model') return 'هذا المفتاح لا يملك صلاحية استخدام أي نموذج نصي من Gemini.'
    if (text.includes('401') || text.includes('403') || text.includes('api key') || text.includes('permission')) return 'مفتاح Gemini مرفوض. أنشئ مفتاحاً جديداً وتأكد من تفعيل Generative Language API للمشروع.'
    if (text.includes('404') || text.includes('not found')) return `النموذج ${activeModelName || 'المحدد'} غير متاح لهذا المفتاح. تأكد من أن المفتاح من Google AI Studio وليس من خدمة أخرى.`
    if (text.includes('429') || text.includes('quota') || text.includes('high demand') || text.includes('temporarily') || text.includes('overloaded')) return 'نموذج Gemini مزدحم مؤقتاً. تم تجربة النماذج المتاحة، حاول مرة أخرى بعد قليل.'
    if (text.includes('failed to fetch') || text.includes('networkerror')) return 'تعذر الاتصال بـ Gemini من المتصفح. عطّل VPN أو إضافات الحجب، وتأكد من أن generativelanguage.googleapis.com متاح.'
    return `تعذر تشغيل Gemini${activeModelName ? ` (${activeModelName})` : ''}: ${error?.message || 'خطأ غير معروف'}`
  }
}
