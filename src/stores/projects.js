import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [
            {
                slug: 'smart-real-estate',
                title: 'نظام إدارة العقارات الذكي',
                category: 'Full Stack',
                client: 'شركة العقارات المتحدة',
                websiteUrl: 'https://real-estate-demo.com',
                languages: ['Nuxt 3', 'Node.js', 'PostgreSQL'],
                description: 'منصة لإدارة العقارات والمبيعات مع تحليل ذكي للسوق وتقارير آلية.',
                longDescription: 'هذا المشروع هو منصة متكاملة تهدف إلى تسهيل عملية إدارة العقارات والمبيعات. قمت ببناء النظام باستخدام Nuxt 3 للواجهة الأمامية و Node.js للخلفية، مع قاعدة بيانات PostgreSQL. يتضمن النظام لوحة تحكم متقدمة، نظام تنبيهات، وتقارير دورية تعتمد على تحليل البيانات.',
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                tags: ['Nuxt 3', 'Node.js', 'PostgreSQL'],
                tasksAccomplished: [
                    'تصميم وبناء قاعدة البيانات وتحسين الاستعلامات.',
                    'تطوير واجهة المستخدم باستخدام تقنيات حديثة وتفاعلية.',
                    'دمج بوابات الدفع الإلكتروني وتأمين المعاملات.',
                    'إعداد نظام تقارير ذكي يعتمد على تحليلات السوق.'
                ]
            },
            {
                slug: 'smart-energy-dashboard',
                title: 'لوحة تحكم الطاقة الذكية',
                category: 'Full Stack',
                client: 'EcoSmart Solutions',
                websiteUrl: 'https://energy-dashboard.eco',
                languages: ['Vue 3', 'Tailwind v4', 'Node.js'],
                description: 'واجهة تحليلية متطورة لمراقبة استهلاك الطاقة في المباني الذكية باستخدام تقنيات IoT وتحليل البيانات.',
                longDescription: 'مشروع مبتكر يهدف إلى تحسين كفاءة استهلاك الطاقة في المباني الذكية. يعتمد النظام على حساسات IoT لجمع البيانات ومعالجتها فورياً لعرضها على لوحة تحكم تفاعلية تساعد المستخدمين على اتخاذ قرارات مبنية على بيانات دقيقة.',
                image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                tags: ['Vue 3', 'Tailwind v4', 'Node.js'],
                tasksAccomplished: [
                    'الربط مع حساسات IoT ومعالجة تدفق البيانات اللحظي.',
                    'تطوير رسوم بيانية تفاعلية باستخدام D3.js لتحليل الاستهلاك.',
                    'تنفيذ نظام تنبيهات فورية عند تجاوز حدود الاستهلاك المسموح بها.',
                    'تحسين أداء الواجهة لضمان سرعة الاستجابة.'
                ]
            },
            {
                slug: 'fitness-app',
                title: 'تطبيق اللياقة البدنية',
                category: 'Mobile',
                client: 'FitLife Gym',
                websiteUrl: 'https://fitlife-app.com',
                languages: ['Flutter', 'Firebase'],
                description: 'تطبيق جوال لمتابعة التمارين الرياضية مع نظام تنبيهات ذكي.',
                longDescription: 'تطبيق جوال متكامل يساعد المستخدمين على تتبع نشاطهم البدني، وضع أهداف يومية، ومشاركة تقدمهم مع الآخرين. تم تطوير التطبيق باستخدام Flutter لضمان أداء عالٍ على كل من Android و iOS.',
                image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                tags: ['Flutter', 'Firebase'],
                tasksAccomplished: [
                    'بناء نظام تتبع التمارين والسعرات الحرارية.',
                    'تكامل مع Google Fit و Apple Health.',
                    'تطوير نظام اجتماعي لمشاركة التحديات والنتائج.',
                    'إضافة خاصية التذكيرات الذكية والمخصصة.'
                ]
            },
            {
                slug: 'ar-interior-design',
                title: 'رؤية التصميم الداخلي بتقنية AR',
                category: 'Mobile',
                client: 'Modern Spaces',
                websiteUrl: 'https://ar-spaces.com',
                languages: ['SwiftUI', 'ARKit', 'Firebase'],
                description: 'تطبيق جوال يتيح للمستخدمين تصور قطع الأثاث في منازلهم باستخدام الواقع المعزز (AR) بدقة عالية.',
                longDescription: 'تجربة فريدة في عالم التصميم الداخلي، حيث يسمح التطبيق للمستخدمين بوضع نماذج ثلاثية الأبعاد للأثاث في مساحاتهم الفعلية باستخدام تقنية الواقع المعزز للتأكد من الملاءمة قبل الشراء.',
                image: 'https://images.unsplash.com/photo-1551650992-ee4fd47df41f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                tags: ['SwiftUI', 'ARKit', 'Firebase'],
                tasksAccomplished: [
                    'تطوير محرك عرض النماذج ثلاثية الأبعاد بدقة واقعية.',
                    'تطبيق خوارزميات قياس المساحات باستخدام الحساسات.',
                    'دعم العرض المباشر والتفاعل مع الإضاءة المحيطة.',
                    'تكامل مع متجر إلكتروني لطلب المنتجات مباشرة.'
                ]
            },
            {
                slug: 'jewelry-store',
                title: 'متجر المجوهرات الراقي',
                category: 'Frontend',
                client: 'Elara Diamonds',
                websiteUrl: 'https://elara-jewelry.com',
                languages: ['Vue 3', 'GSAP Animation'],
                description: 'تجربة تسوق فاخرة مع حركات تفاعلية مخصصة وأداء فائق السرعة.',
                longDescription: 'متجر إلكتروني يركز على الفخامة والجمال البصري. تم استغلال مكتبة GSAP لإنشاء حركات انتقالية سلسة تبهر المستخدمين وتمنحهم تجربة فريدة تتناسب مع قيمة المنتجات المعروضة.',
                image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                tags: ['Vue 3', 'GSAP Animation'],
                tasksAccomplished: [
                    'تصميم وتنفيذ حركات تفاعلية مخصصة لكل صفحة.',
                    'تحسين تجربة المستخدم وتحميل الصور بدقة عالية وسرعة.',
                    'تطوير واجهة العرض ثلاثية الأبعاد للمجوهرات.',
                    'بناء نظام تصفية وبحث متطور وسهل الاستخدام.'
                ]
            },
            {
                slug: 'crypto-pulse',
                title: 'نبض الكريبتو للتحليلات',
                category: 'Frontend',
                client: 'Pulse Analytics',
                websiteUrl: 'https://crypto-pulse.analytx',
                languages: ['React', 'D3.js', 'WebSocket'],
                description: 'منصة عرض بيانات حية للعملات الرقمية مع رسوم بيانية تفاعلية وتنبيهات فورية لتغيرات السوق.',
                longDescription: 'أداة تحليلية قوية للمتداولين في سوق العملات الرقمية. يتم عرض البيانات بشكل حي باستخدام WebSockets، مع توفير رسوم بيانية تفاعلية تمكن المستخدمين من تحليل الاتجاهات بدقة.',
                image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                tags: ['React', 'D3.js', 'WebSocket'],
                tasksAccomplished: [
                    'الربط مع واجهات برمجية متعددة لجلب بيانات السوق الحية.',
                    'بناء رسوم بيانية معقدة وتفاعلية باستخدام D3.js.',
                    'تحسين استهلاك الذاكرة والتعامل مع تدفق البيانات الكبير.',
                    'إعداد نظام تنبيهات ذكي يعمل في الخلفية.'
                ]
            }
        ]
    }),
    getters: {
        getProjectBySlug: (state) => (slug) => {
            return state.projects.find(p => p.slug === slug)
        }
    }
})
