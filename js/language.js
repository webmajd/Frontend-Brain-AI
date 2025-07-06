// js/language.js

const langToggle = document.getElementById('lang-toggle');
const htmlElement = document.querySelector('html');

// Global objects to store active translations and current language
window.currentTranslations = {};
window.currentLang = 'fa'; // Default language

const translations = {
    fa: {
        pageTitle: "BrainAI",
        startFree: "شروع رایگان",
        products: "محصولات",
        subscriptions: "اشتراک‌ها",
        adminPanel: "پنل ادمین",
        userPanel: "پنل کاربر",
        editAccount: "ویرایش حساب",
        faq: "سوالات",
        blog: "وبلاگ",
        aboutUs: "درباره ما",
        loginRegister: "ورود | ثبت‌نام",
        introTitle: "با BrainAI، هوش مصنوعی در خدمت شماست!",
        introText: "BrainAI یک پلتفرم هوش مصنوعی است که با بیش از 87 ابزار هوش مصنوعی و خدمات متنوع، به طور ویژه برای کاربران فارسی زبان طراحی شده است.",
        startFreeButton: "رایگان شروع کنید!",
        aiSectionTitle: "آینده‌ای هوشمند با ۸۷ ابزار قدرتمند",
        aiSectionText: "وارد دنیای نوآورانه هوش مصنوعی شوید! برای مشاهده دمو رایگان محصولات و آشنایی با قدرت ابزارهای هوش مصنوعی، کافی است کلیک کنید. هوش مصنوعی در خدمت نوآوری شما، تنها یک قدم فاصله دارید!",
        contentCreated: "محتوا ایجاد شده",
        usersCount: "تعداد کاربران",
        textTools: "ابزارهای متنی",
        nutritionist: "متخصص تغذیه",
        accountant: "حسابدار",
        adSpecialist: "متخصص تبلیغات",
        consultantPsychologist: "مشاور و روانشناس",
        tourGuide: "راهنمای تور",
        workoutPlan: "برنامه ورزشی",
        ourClients: "مشتریان دائمی ما",
        testimonials: [
            { image: './img/image2.jpg', text: 'مدت‌ها دنبال یه سرویس سریع و پایدار برای پردازش متن با هوش مصنوعی بودم، ولی همیشه مشکل تاخیر داشتم. این سایت واقعا تونست نیازم رو برطرف کنه، سرعت پاسخگویی عالیه و مهم‌تر از اون، دقیق‌ترین خروجی‌ها رو گرفتم!' },
            { image: './img/image3.jpg', text: 'هر روز از این سرویس برای تحلیل داده‌های مشتریان و استخراج اطلاعات کلیدی استفاده می‌کنم. رابط کاربری ساده، اما قدرتمنده و پشتیبانی هم همیشه جوابگو بوده. از تیم توسعه‌دهنده ممنونم' },
            { image: './img/image1.jpg', text: 'ترجمه متون با این سیستم از همه مترجم‌های ماشینی که قبلا استفاده کردم بهتره. ساختار جملات طبیعی‌تره و مخصوصا توی متن‌های تخصصی، خیلی کمتر نیاز به ویرایش دارم.' }
        ],
        buySubscription: "خرید اشتراک",
        oneMonth: "1 ماهه",
        threeMonths: "3 ماهه",
        sixMonths: "6 ماهه",
        free: "رایگان",
        freeDescription: "به مدت 2 ساعت رایگان امتحان کنید.",
        hours: "ساعت",
        start: "شروع",
        aiTools: "ابزار هوش مصنوعی",
        limitedTool1: "شامل 1 ابزار محدود",
        imageTools: "ابزار تصویری",
        audioService: "سرویس صوتی",
        textService: "سرویس متنی",
        imageToAnimation: "تصویر به انیمیشن",
        toolDetails: "جزئیات ابزار",
        standard: "استاندارد",
        standardDescription: "بسته استاندارد شامل چند ابزار محدود است.",
        thousandToman: "هزار تومان",
        purchase: "خرید",
        limitedTool12: "شامل 12 ابزار محدود",
        dailyService: "سرویس روز",
        popular: "محبوب",
        popularDescription: "این بسته انتخاب اول کاربران است.",
        limitedTool68: "شامل 68 ابزار محدود",
        gold: "طلایی",
        goldDescription: "دسترسی تخصصی و حرفه ای",
        advancedModels: "ChatGPT, Gemini, Claude, Llama, Simlar Flux, Stable Diffusion, Midjourney",
        faqTitle: "سوالات پر تکرار",
        faqQ1: "هزینه خرید اشتراک ai irani چقدر است؟",
        faqA1: "این یک متن نمونه برای پاسخ به سوال است. شما می‌توانید آن را تغییر دهید.",
        faqQ2: "چه نوع فایل هایی قابل پردازش هستند ؟",
        faqA2: "این یک متن نمونه برای پاسخ به سوال است. شما می‌توانید آن را تغییر دهید.",
        faqQ3: "آیا می توانم اشتراک خود را با دوستانم به اشتراک بگذارم؟",
        faqA3: "این یک متن نمونه برای پاسخ به سوال است. شما می‌توانید آن را تغییر دهید.",
        faqQ4: "تفاوت اشتراک ai irani و اشتراک رسمی ChatGPT چیست؟",
        faqA4: "این یک متن نمونه برای پاسخ به سوال است. شما می‌توانید آن را تغییر دهید.",
        faqQ5: "چرا باید از خدمات هوش مصنوعی ai irani استفاده کنم؟",
        faqA5: "این یک متن نمونه برای پاسخ به سوال است. شما می‌توانید آن را تغییر دهید.",
        faqQ6: "چه مدل های هوش مصنوعی در پلتفرم ai irani در دسترس هستند؟",
        faqA6: "این یک متن نمونه برای پاسخ به سوال است. شما می‌توانید آن را تغییر دهید.",
        faqQ7: "چطور می توانم در پلتفرم ai irani ثبت نام کنم؟",
        faqA7: "این یک متن نمونه برای پاسخ به سوال است. شما می‌توانید آن را تغییر دهید.",
        faqQ8: "با خرید اشتراک طلایی ai irani، چه امکاناتی دریافت می کنم؟",
        faqA8: "این یک متن نمونه برای پاسخ به سوال است. شما می‌توانید آن را تغییر دهید.",
        faqQ9: "آیا ai irani برای کودکان مناسب است ؟",
        faqA9: "این یک متن نمونه برای پاسخ به سوال است. شما می‌توانید آن را تغییر دهید.",
        faqQ10: "آیا همه امکانات Irani AI رایگان هستند؟",
        faqA10: "این یک متن نمونه برای پاسخ به سوال است. شما می‌توانید آن را تغییر دهید.",
        contactUs: "ارتباط با ما",
        address: "تهران، خیابان آزادی",
        email: "webmajdcom@gmail.com",
        phone: "09905583776",
        website: "webmajd.com",
        collaboration: "همکاری",
        developerPlatform: "پلتفرم توسعه دهندگان",
        api: "API",
        industrialAI: "هوش مصنوعی صنعتی",
        personalModeling: "مدل سازی شخصی",
        getStarted: "شروع کنید",
        faqFooter: "سوالات پر تکرار",
        register: "ثبت نام",
        blogFooter: "وبلاگ",
        aboutUsFooter: "درباره ما",
        priceList: "لیست قیمت ها",
    },
    en: {
        pageTitle: "BrainAI",
        startFree: "Start Free",
        products: "Products",
        subscriptions: "Subscriptions",
        adminPanel: "Admin Panel",
        userPanel: "User Panel",
        editAccount: "Edit Account",
        faq: "FAQ",
        blog: "Blog",
        aboutUs: "About Us",
        loginRegister: "Login | Register",
        introTitle: "With BrainAI, AI is at Your Service!",
        introText: "BrainAI is an AI platform offering over 87 AI tools and diverse services, specifically designed for Farsi-speaking users.",
        startFreeButton: "Start Free!",
        aiSectionTitle: "A Smart Future with 87 Powerful Tools",
        aiSectionText: "Enter the innovative world of AI! To see a free demo of our products and explore the power of AI tools, just click. AI at your service for innovation, you're just one step away!",
        contentCreated: "Content Created",
        usersCount: "Users Count",
        textTools: "Text Tools",
        nutritionist: "Nutritionist",
        accountant: "Accountant",
        adSpecialist: "Advertising Specialist",
        consultantPsychologist: "Consultant & Psychologist",
        tourGuide: "Tour Guide",
        workoutPlan: "Workout Plan",
        ourClients: "Our Permanent Clients",
        testimonials: [
            { image: './img/image2.jpg', text: 'I had been looking for a fast and stable service for AI text processing for a long time, but always faced latency issues. This website truly met my needs; the response speed is excellent, and more importantly, I got the most accurate outputs!' },
            { image: './img/image3.jpg', text: 'Every day I use this service to analyze customer data and extract key information. The user interface is simple yet powerful, and support has always been responsive. Thanks to the development team.' },
            { image: './img/image1.jpg', text: 'Text translation with this system is better than all machine translators I\'ve used before. Sentence structures are more natural, and especially in specialized texts, I need much less editing.' }
        ],
        buySubscription: "Buy Subscription",
        oneMonth: "1 Month",
        threeMonths: "3 Months",
        sixMonths: "6 Months",
        free: "Free",
        freeDescription: "Try for 2 hours free.",
        hours: "Hours",
        start: "Start",
        aiTools: "AI Tools",
        limitedTool1: "Includes 1 limited tool",
        imageTools: "Image Tools",
        audioService: "Audio Service",
        textService: "Text Service",
        imageToAnimation: "Image to Animation",
        toolDetails: "Tool Details",
        standard: "Standard",
        standardDescription: "The standard package includes a few limited tools.",
        thousandToman: "Thousand Toman",
        purchase: "Purchase",
        limitedTool12: "Includes 12 limited tools",
        dailyService: "Daily Service",
        popular: "Popular",
        popularDescription: "This package is users' first choice.",
        limitedTool68: "Includes 68 limited tools",
        gold: "Gold",
        goldDescription: "Specialized and professional access",
        advancedModels: "ChatGPT, Gemini, Claude, Llama, Simlar Flux, Stable Diffusion, Midjourney",
        faqTitle: "Frequently Asked Questions",
        faqQ1: "How much does an AI Irani subscription cost?",
        faqA1: "This is a sample answer to the question. You can change it.",
        faqQ2: "What types of files can be processed?",
        faqA2: "This is a sample answer to the question. You can change it.",
        faqQ3: "Can I share my subscription with friends?",
        faqA3: "This is a sample answer to the question. You can change it.",
        faqQ4: "What is the difference between AI Irani subscription and official ChatGPT subscription?",
        faqA4: "This is a sample answer to the question. You can change it.",
        faqQ5: "Why should I use AI Irani's AI services?",
        faqA5: "This is a sample answer to the question. You can change it.",
        faqQ6: "Which AI models are available on the AI Irani platform?",
        faqA6: "This is a sample answer to the question. You can change it.",
        faqQ7: "How can I register on the AI Irani platform?",
        faqA7: "This is a sample answer to the question. You can change it.",
        faqQ8: "What features do I get by purchasing the AI Irani Gold subscription?",
        faqA8: "This is a sample answer to the question. You can change it.",
        faqQ9: "Is AI Irani suitable for children?",
        faqA9: "This is a sample answer to the question. You can change it.",
        faqQ10: "Are all Irani AI features free?",
        faqA10: "This is a sample answer to the question. You can change it.",
        contactUs: "Contact Us",
        address: "Tehran, Azadi Street",
        email: "webmajdcom@gmail.com",
        phone: "09905583776",
        website: "webmajd.com",
        collaboration: "Collaboration",
        developerPlatform: "Developer Platform",
        api: "API",
        industrialAI: "Industrial AI",
        personalModeling: "Personal Modeling",
        getStarted: "Get Started",
        faqFooter: "FAQ",
        register: "Register",
        blogFooter: "Blog",
        aboutUsFooter: "About Us",
        priceList: "Price List",
    }
};

// Function to set the language
function setLanguage(lang) {
    window.currentLang = lang;
    window.currentTranslations = translations[lang];

    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

    langToggle.textContent = lang === 'fa' ? 'EN' : 'فا';

    // Update all elements with data-key
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (window.currentTranslations[key]) {
            element.textContent = window.currentTranslations[key];
        }
    });

    // Dispatch a custom event for Alpine.js components to react
    // This will notify the slider component to update its slides
    window.dispatchEvent(new CustomEvent('languageChanged'));

    // Store the selected language in Local Storage
    localStorage.setItem('lang', lang);

    // Update pricing plan currency text based on selected language
    // This logic is also duplicated in custom.js for initial load and plan changes
    // It's good to keep it here as well for when language itself changes without a plan click
    const priceElements = document.querySelectorAll(".price");
    if (priceElements.length > 0) {
        const currentCurrencyText = window.currentTranslations.thousandToman;
        priceElements.forEach(priceSpan => {
            // Find the current numerical value to re-apply the currency text
            // This is a simple approach assuming the number is at the beginning
            const currentText = priceSpan.innerHTML;
            const match = currentText.match(/(\d[\d,]*)/);
            if (match) {
                const numericalPart = match[1];
                priceSpan.innerHTML = `${numericalPart} <span class="text-lg">${currentCurrencyText}</span>`;
            }
        });
    }
}

// Event listener for language toggle button
langToggle.addEventListener('click', () => {
    const newLang = window.currentLang === 'fa' ? 'en' : 'fa';
    setLanguage(newLang);
});

// Load language preference from Local Storage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang');
    setLanguage(savedLang || 'fa'); // Default to Farsi if no language is saved
});