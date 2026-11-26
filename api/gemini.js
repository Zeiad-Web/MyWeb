const PREFERRED_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-2.5-flash-lite',
  'gemini-2.5-flash',
  'gemini-3.6-flash',
  'gemini-3.5-flash',
]

const readError = async (response) => {
  try {
    const body = await response.json()
    return body?.error?.message || `HTTP ${response.status}`
  } catch {
    return `HTTP ${response.status}`
  }
}

const getModel = async (apiKey) => {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models', {
    headers: { 'x-goog-api-key': apiKey },
  })
  if (!response.ok) throw new Error(await readError(response))
  const data = await response.json()
  const supported = (data.models || []).filter((model) => model.supportedGenerationMethods?.includes('generateContent'))
  return PREFERRED_MODELS.find((name) => supported.some((model) => model.name === `models/${name}`))
    || supported.find((model) => /flash/i.test(model.name))?.name?.replace('models/', '')
    || supported[0]?.name?.replace('models/', '')
}

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' })

  const apiKey = process.env.GEMINI_API_KEY?.trim()
  if (!apiKey) return response.status(500).json({ error: 'GEMINI_API_KEY is not configured on Vercel' })

  try {
    const { message, history = [] } = request.body || {}
    if (!message?.trim()) return response.status(400).json({ error: 'Message is required' })

    const model = await getModel(apiKey)
    if (!model) return response.status(500).json({ error: 'No supported Gemini model found' })

    const contents = [...history, { role: 'user', parts: [{ text: message }] }]
    const result = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: `أنت مساعد ذكي داخل الموقع الشخصي للمطور زياد العريقي. أجب بلغة المستخدم بأسلوب واضح وودود. ساعد في البرمجة وتطوير الويب وVue وLaravel وقواعد البيانات وGit والعمل الحر. لا تخترع معلومات شخصية أو أسعاراً أو روابط عن زياد. حافظ على سياق المحادثة ولا تكرر الترحيب.` }] },
        contents,
        generationConfig: { maxOutputTokens: 600, temperature: 0.7 },
      }),
    })

    if (!result.ok) return response.status(result.status).json({ error: await readError(result) })
    const data = await result.json()
    const answer = data.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join('').trim()
    if (!answer) return response.status(502).json({ error: 'EMPTY_RESPONSE' })
    return response.status(200).json({ answer, model })
  } catch (error) {
    console.error('Gemini proxy error:', error)
    return response.status(500).json({ error: error?.message || 'Gemini request failed' })
  }
}
