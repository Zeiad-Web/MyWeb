import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [
            {
                slug: 'abo-hussein-kitchens',
                title: 'موقع ابو حسين للمطابخ',
                category: 'Full Stack',
                client: 'أبو حسين لتفصيل المطابخ – مؤسسة رائدة في سوق الرياض',
                websiteUrl: 'https://abo-hussein-kitchens.com/',
                videoUrl: '/images/project/project.png',
                languages: ['Laravel', 'Vue 3', 'Nuxt 3', 'TailwindCSS', 'Filament'],
                description: 'موقع رقمي متطورة لتصميم وتفصيل المطابخ الفاخرة في الرياض، تجمع بين فخامة العرض وسلاسة تجربة المستخدم.',
                longDescription: 'موقع رقمي متكاملة وعصرية متخصصة في عرض خدمات تفصيل وتصميم المطابخ الفاخرة في مدينة الرياض. يهدف الموقع إلى تقديم تجربة مستخدم استثنائية تجمع بين الفخامة في التصميم وسهولة الوصول للخدمات، مع التركيز على إبراز جودة العمل والخبرة الطويلة للعلامة التجارية (أبو حسين للمطابخ).  .',
                image: '/images/project/project.png',
                tags: ['Vue 3', 'TailwindCSS', 'Nuxt 3', 'Laravel', 'Filament',],
                tasksAccomplished: [
                    ' (Dashboard): بناء لوحة تحكم متقدمة باستخدام Filament PHP تتيح إدارة كاملة للمحتوى (المدونات، الخدمات، معرض الأعمال) .',
                    'تطوير واجهة مستخدم سريعة جداً باستخدام Nuxt.js و Vue.js لضمان تجربة تصفح سلسة (SSR) توافق تطلعات العملاء في سوق الرياض.',
                    ' تحسين محركات البحث (SEO): تهيئة النظام برمجياً لدعم الـ SEO بشكل كامل، مما يضمن ظهور خدمات تفصيل المطابخ في أوائل نتائج البحث لزيادة الوصول العضوي.',
                    'هندسة معرض وسائط تفاعلي غامر (Immersive Media Hub) يدمج بسلاسة بين الصور عالية الدقة والفيديوهات السينمائية، مع معمارية لغوية ذكية توفر تجربة تصفح عالمية فائقة السلاسة.',

                ]
            },
             {
                slug: 'noor-quran',
                title: 'نور القران',
                category: 'Frontend',
                client: 'صدقة جاريه',
                websiteUrl: 'https://rattel-alquran.vercel.app/',
                videoUrl: '/images/project/project9.png',
                languages: ['Nuxt 3', 'Vue 3', 'TailwindCSS'],
                description: 'موقع إسلامي حديث وشامل يُتيح للمسلم قراءة وتدبر القرآن الكريم،,ومكتبة التفسير الشاملة ,الاستماع لكبار القراء..',
                longDescription: '.موقع إسلامي حديث وشامل يُتيح للمسلم قراءة وتدبر القرآن الكريم،,ومكتبة التفسير الشاملة ,الاستماع لكبار القراء، ومتابعة الأذكار اليومية بكل سهولة وبدون إنترنت.',
                image: '/images/project/project9.png',
                tags: ['TailwindCSS', 'Vue 3', 'Nuxt 3'],
                tasksAccomplished: [
                    'قراءة القرآن الكريم المصحف الشريف المصور والتفاعلي: عرض صفحات مصحف المدينة النبوية ',
                    'مكتبة التفسير الشاملة: عرض الآيات مقترنة بالتفاسير المعتمدة (التفسير الميسر، ابن كثير، السعدي) مع محرك بحث سريع',
                    ' الاستماع إلى القرآن الكريم بأصوات كبار القراء والأذكار والمسبحة الإلكترونية أذكار الصباح والمساء وحصن المسلم.'
                ]
            },
            
            {
                slug: 'arab-house-kitchens',
                title: 'موقع البيت العربي للمطابخ',
                category: 'Frontend',
                client: 'البيت العربي لتفصيل المطابخ – مؤسسة رائدة في سوق الرياض',
                websiteUrl: 'https://riyadh-kitchens.vercel.app/',
                videoUrl: '/images/project/project1.png',
                languages: ['Nuxt 3', 'Vue 3', 'TailwindCSS'],
                description: 'موقع إلكتروني تعريفي وتفاعلي متكامل مخصص لعرض خدمات تصميم وتفصيل وتنفيذ المطابخ في مدينة الرياض (مودرن، كلاسيك، ألمنيوم، خشب، رخام وغيرها).',
                longDescription: 'موقع إلكتروني تعريفي وتفاعلي متكامل مخصص لعرض خدمات تصميم وتفصيل وتنفيذ المطابخ في مدينة الرياض (مودرن، كلاسيك، ألمنيوم، خشب، رخام وغيرها).',
                image: '/images/project/project1.png',
                tags: ['TailwindCSS', 'Vue 3', 'Nuxt 3'],
                tasksAccomplished: [
                    'جذب العملاء وتسهيل طلب الاستشارات والمعاينات المجانية.وتمكين العميل من استكشاف أنواع المطابخ المختلفة واختيار الخامة المناسبة قبل الشراء.',
                    'تحسين محركات البحث (SEO): تهيئة النظام برمجياً لدعم الـ SEO بشكل كامل.',
                    'إتاحة التواصل المباشر مع فريق المبيعات والدعم عبر الواتساب والهاتف.وتوفير تجربة مستخدم سلسة متعددة اللغات (عربي / إنجليزي).'
                ]
            },
           
            {
                slug: 'amaken',
                title: 'أماكن للهندسة والمقاولات والديكور',
                category: 'Full Stack',
                client: 'المهندس وائل عثمان',
                websiteUrl: 'https://amaken.com',
                videoUrl: '/images/project/project5.png',
                languages: ['Laravel'],
                description: 'مكتب "أماكن" عبارة عن مكتب هندسة ومقاولات وديكور متكاملة، متخصصة في تحويل الأفكار إلى واقع ملموس.',
                longDescription: 'مكتب "أماكن" عبارة عن مكتب هندسة ومقاولات وديكور متكاملة، متخصصة في تحويل الأفكار إلى واقع ملموس. نقدم حلولاً مبتكرة في التصميم الداخلي والإشراف على المشاريع وتنفيذ أعمال المقاولات.',
                image: '/images/project/project5.png',
                tags: ['Laravel', 'Vue 3', 'TailwindCSS'],
                tasksAccomplished: [
                    'واجهة مستخدم عصرية ومتجاوبة تصميم جذاب يعكس الاحترافية ويتكيف مع جميع الأجهزة',
                    'عرض الخدمات الهندسية: صفحات تفصيلية مخصصة لكل خدمة (تصميم، مقاولات، ديكور) مع شرح واضح للمراحل.',
                    'عرض احترافي لمشاريع المكتب المنجزة مع صور عالية الجودة وتفاصيل كل مشروع',
                    '(Dashboard): بناء لوحة تحكم متقدمة تتيح إدارة كاملة للمحتوى'
                ]
            },
            {
                slug: 'yemen-jobs',
                title: 'منصة توظيف في اليمن (YemenJobs)',
                category: 'Full Stack',
                client: 'YemenJobs',
                websiteUrl: 'https://github.com/Zeiad-Web/laravel-job',
                videoUrl: '/images/project/project4.png',
                languages: ['Laravel', 'Vue 3', 'TailwindCSS'],
                description: 'منصة توظيف متكاملة تهدف إلى ربط أصحاب الأعمال بالكوادر المؤهلة في مختلف المجالات بيئة رقمية سهلة الاستخدام.',
                longDescription: 'منصة توظيف متكاملة تهدف إلى ربط أصحاب الأعمال بالكوادر المؤهلة في مختلف المجالات. يوفر الموقع بيئة رقمية سهلة الاستخدام تتيح لأصحاب الشركات نشر الوظائف الشاغرة، وللباحثين عن عمل تقديم طلبات التوظيف.',
                image: '/images/project/project4.png',
                tags: ['TailwindCSS', 'Vue 3', 'Laravel'],
                tasksAccomplished: [
                    'تسجيل ودخول آمن للمستخدمين مع تقسيم الأدوار والصلاحيات.',
                    'إمكانية إضافة وتعديل الوظائف وتصفيتها حسب الموقع، الراتب، والتخصص.',
                    'تنبيهات وإشعارات فورية وتتبع حالة الطلبات.'
                ]
            },
            {
                slug: 'hr-system',
                title: 'نظام إدارة الموارد البشرية (HR System)',
                category: 'Full Stack',
                client: 'HR System',
                websiteUrl: 'https://hr-system.com',
                videoUrl: '/images/project/project7.png',
                languages: ['Laravel', 'Bootstrap'],
                description: 'نظام إدارة الموارد البشرية الشامل، يهدف إلى أتمتة وإدارة كافة العمليات والأنشطة الإدارية الخاصة بالشركات والمؤسسات.',
                longDescription: 'نظام إدارة الموارد البشرية الشامل، يهدف النظام إلى أتمتة وإدارة كافة العمليات والأنشطة الإدارية الخاصة بالشركات والمؤسسات، بدءاً من استقطاب وتوظيف الكفاءات، وحتى إدارة شؤون الموظفين، الحضور والانصراف، ومسير الرواتب.',
                image: '/images/project/project7.png',
                tags: ['Bootstrap', 'Laravel'],
                tasksAccomplished: [
                    'وحدة إدارة الموظفين والأقسام وسجلات الدوام ونظام الصلاحيات.',
                    'وحدة الإجازات والحضور لتتبع طلبات الإجازات والشاشة المباشرة.',
                    'وحدة إدارة الرواتب وكشوفات الأجور الشهرية.',
                    'وحدة بوابة التوظيف واستقبال الطلبات.'
                ]
            },
            {
                slug: 'e-commerce',
                title: 'منصة التجارة الإلكترونية (E-Commerce)',
                category: 'Full Stack',
                client: 'E-Commerce Platform',
                websiteUrl: 'https://ecommerce.com',
                videoUrl: '/images/project/project2.png',
                languages: ['Livewire', 'Laravel',],
                description: 'منصة تقنية متكاملة تتيح بيع وشراء المنتجات والخدمات عبر الإنترنت بمرونة وأمان عالٍ.',
                longDescription: 'نظام التجارة الإلكترونية هو منصة تقنية تسمح للشركات أو الأفراد ببيع وشراء المنتجات أو الخدمات عبر الإنترنت، يشمل عرض المنتجات، معالجة الطلبات، الدفع الإلكتروني، وإدارة الشحن والتوصيل.',
                image: '/images/project/project2.png',
                tags: ['Livewire', 'Laravel',],
                tasksAccomplished: [
                    'عرض المنتجات مع فلاتر حسب الفئة والسعر والتقييم.',
                    'إدارة الطلبات والشحن وسلة الشراء والخصومات.',
                    'بوابة دفع إلكترونية خيارات دفع متناسبة.'
                ]
            },
                {
                slug: 'school-system',
                title: 'نظام المدارس الالكتروني',
                category: 'Full Stack',
                client: 'Electronic School System',
                websiteUrl: 'https://github.com/Zeiad-Web',
                videoUrl: '/images/project/project8.png',
                languages: ['Laravel', 'Bootstrap'],
                description: 'يُعدّ نظام إدارة المدارس منصة تقنية متكاملة تهدف إلى أتمتة جميع العمليات الإدارية والتعليمية داخل المؤسسة التعليمية في مكان واحد.',
                longDescription: ' يُعدّ نظام إدارة المدارس منصة تقنية متكاملة تهدف إلى أتمتة جميع العمليات الإدارية والتعليمية داخل المؤسسة التعليمية في مكان واحد. يوفّر هذا النظام بيئة رقمية موحّدة تربط بين الإدارة، المعلمين، الطلاب، وأولياء الأمور..',
                image: '/images/project/project8.png',
                tags: ['Livewire', 'Laravel',],
               tasksAccomplished: [
    'إدارة الطلاب: التسجيل، الحضور والغياب، الإنذارات، الفصول، الأقسام، الدرجات والشهادات.',
    'إدارة المعلمين والموظفين: البيانات، الحصص، الجداول، الأجور، الإجازات والصلاحيات.',
    'إدارة النظام: المستخدمين، المواد الدراسية، الامتحانات والدرجات، مع إمكانية إنشاء وطباعة الشهادات.',
    'بوابة الطالب: الاطلاع على الجدول والدرجات والحضور والغياب وتحميل المواد التعليمية.',
    'بوابة المعلم: إدارة الفصول والمواد، إدخال الدرجات، رفع المواد وإعداد الجداول حسب الصلاحيات.'
]
            },
            {
                slug: 'pos-system',
                title: 'نظام نقطة البيع (POS System)',
                category: 'Backend',
                client: 'Point of Sale System',
                websiteUrl: 'https://pos-system.com',
                videoUrl: '/images/project/project6.png',
                languages: ['Laravel', 'Bootstrap'],
                description: 'نظام إداري متكامل لإدارة المبيعات والمخزون والموظفين والعمليات المالية عبر لوحة تحكم تفاعلية.',
                longDescription: 'نظام إداري متكامل لإدارة المبيعات والمخزون والموظفين والعمليات المالية، يوفر حلولاً فعّالة لنقاط البيع، إدارة المنتجات والباركود، متابعة المخزون والرواتب، بالإضافة إلى التقارير والفواتير.',
                image: '/images/project/project6.png',
                tags: ['Bootstrap', 'Laravel'],
                tasksAccomplished: [
                    'إدارة المبيعات ونقطة البيع بواجهة POS سريعة وسهلة.',
                    'إدارة المنتجات وتتبع مستويات المخزون مع التنبيهات.',
                    'إدارة الصلاحيات والمالية وإصدار الفواتير.'
                ]
            },
            

        ]
    }),
    getters: {
        getProjectBySlug: (state) => (slug) => {
            if (!slug) return null
            const decoded = decodeURIComponent(slug).toLowerCase().trim().replace(/\s+/g, '-')
            return state.projects.find(p => {
                const pSlug = decodeURIComponent(p.slug).toLowerCase().trim().replace(/\s+/g, '-')
                return pSlug === decoded || p.slug === slug
            })
        }
    }
})
