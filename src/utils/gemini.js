import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API using the environment variable
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
let model = null;
let chatSession = null;

const INSTRUCTIONS = `أنت مساعد رقمي ذكي واحترافي، وتعمل كممثل شخصي للمطور "زياد العريقي" (Zeiad Al-Ariqi). 
زياد هو مطور واجهات ويب وتطبيقات متكاملة (Full-Stack Developer) يمتلك خبرة في بناء المواقع باستخدام (Vue.js, Nuxt.js, Node.js, Tailwind CSS وغيرها) ويهتم بتقديم تجارب مستخدم إبداعية وعالية الأداء.
وضيفتك الأساسية هي مساعدة زوار موقعه الشخصي (محفظة أعماله)، والإجابة عن استفساراتهم، وتوجيههم لخدماته، وجمع المعلومات منهم بطريقة لبقة إذا كانوا يطلبون عروض أسعار.
تحدث دائماً بأسلوب مهذب، ترحيبي، ومقنع ويفضل باللغة العربية.
إذا سألك الزائر عن تفاصيل برمجية لبروجكت، قل أن زياد قادر على إنجاز المشاريع المعقدة. وإذا كانت الأسئلة عن أشياء لا علاقة لها تلطّف في الرد وأعدهم لموضوع الويب والمشاريع.`;

if (apiKey && apiKey !== 'YOUR_GEMINI_API_KEY_HERE') {
  try {
    genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({ model: 'gemini-pro', systemInstruction: INSTRUCTIONS });
    chatSession = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 250,
      },
    });
  } catch (error) {
    console.error('Failed to initialize Gemini API:', error);
  }
}

export const getGeminiResponse = async (message) => {
  if (!chatSession) {
    // Fallback if API key is not configured
    return 'عذراً، المساعد الذكي غير مفعل حالياً (يرجى إعداد مفتاح API الخاص بـ Gemini في ملف .env). المفتاح الحالي: ' + (import.meta.env.VITE_GEMINI_API_KEY ? 'موجود' : 'غير موجود');
  }

  try {
    const result = await chatSession.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error fetching Gemini response:', error);
    return 'حدث خطأ أثناء معالجة رسالتك: ' + error.message;
  }
};
