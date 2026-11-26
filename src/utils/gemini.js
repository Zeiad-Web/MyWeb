const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim()
// Google لم تعد تتيح Gemini 2.5 للمستخدمين الجدد؛ نبدأ بالنموذج الموصى به.
const PREFERRED_MODELS = ['gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-2.5-flash-lite', 'gemini-flash-latest']
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

const discoverModel = async () => {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models', {
    headers: { 'x-goog-api-key': apiKey },
  })
  if (!response.ok) throw new Error(await readError(response))
  const data = await response.json()
  const supported = (data.models || []).filter((item) => item.supportedGenerationMethods?.includes('generateContent'))
  const selected = PREFERRED_MODELS.find((name) => supported.some((item) => item.name === `models/${name}`))
    || supported.find((item) => /flash/i.test(item.name))?.name?.replace('models/', '')
    || supported[0]?.name?.replace('models/', '')
  if (!selected) throw new Error('NO_SUPPORTED_GENERATION_MODEL')
  activeModelName = selected
}

export const getGeminiResponse = async (message) => {
  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
    return 'المساعد غير مفعّل بعد. أغلق خادم Vite وشغّله من جديد بعد التأكد من وجود VITE_GEMINI_API_KEY في ملف .env. إذا كنت تفتح مجلد dist فأعد بناء المشروع أولاً.'
  }

  try {
    if (!activeModelName) await discoverModel()
    const contents = [...conversationHistory, { role: 'user', parts: [{ text: message }] }]
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${activeModelName}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: INSTRUCTIONS }] }, contents, generationConfig: { maxOutputTokens: 600, temperature: 0.7 } }),
    })
    if (!response.ok) throw new Error(await readError(response))
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
    if (text.includes('429') || text.includes('quota')) return 'تم تجاوز حد استخدام Gemini مؤقتاً. حاول مرة أخرى بعد قليل.'
    if (text.includes('failed to fetch') || text.includes('networkerror')) return 'تعذر الاتصال بـ Gemini من المتصفح. عطّل VPN أو إضافات الحجب، وتأكد من أن generativelanguage.googleapis.com متاح.'
    return `تعذر تشغيل Gemini${activeModelName ? ` (${activeModelName})` : ''}: ${error?.message || 'خطأ غير معروف'}`
  }
}
