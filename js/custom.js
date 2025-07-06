const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const themeToggle = document.getElementById('theme-toggle');
const themeBody = document.getElementById('theme-body');
const header = document.getElementById('header');
const logo = document.getElementById('logo');
const authBtn = document.getElementById('auth-btn');
// Removed: const lang = document.getElementById('lang'); // This ID is now on the lang-toggle button
const navLinks = document.getElementById('nav-links');
const introBox = document.getElementById('intro-box');
const introTitle = document.getElementById('intro-title');
const introText = document.getElementById('intro-text');
const introBtn = document.getElementById('intro-btn');
const aiSection = document.getElementById('ai-section');
const aiTitle = document.getElementById('ai-title');
const aiText = document.getElementById('ai-text');
const aiBox1 = document.getElementById('ai-box1');
const aiBox2 = document.getElementById('ai-box2');
const aiLabel1 = document.getElementById('ai-label1');
const aiLabel2 = document.getElementById('ai-label2');
const toolsSection = document.getElementById('tools-section');
const toolsTitle = document.getElementById('tools-title');
const toolButtons = document.querySelectorAll('.tool-btn');
const subscriptionBoxes = document.querySelectorAll('.subscription-box');
const questionBoxes = document.querySelectorAll('.theme-toggle-question');
const answerBoxes = document.querySelectorAll('.theme-toggle-answer');
const footer = document.querySelector('.theme-toggle-footer');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});

window.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.add('translate-x-full');
    }
});

themeToggle.addEventListener('click', () => {
    const isDarkMode = themeBody.classList.toggle('bg-gray-900');
    themeBody.classList.toggle('bg-white');
    themeBody.classList.toggle('text-white', isDarkMode);
    themeBody.classList.toggle('text-black', !isDarkMode);

    header.classList.toggle('bg-gray-100', !isDarkMode);
    header.classList.toggle('text-black', !isDarkMode);
    header.classList.toggle('bg-white/20', isDarkMode);
    header.classList.toggle('text-white', isDarkMode);

    logo.classList.toggle('text-black', !isDarkMode);
    authBtn.classList.toggle('bg-blue-700', !isDarkMode);
    authBtn.classList.toggle('text-white', !isDarkMode);
    authBtn.classList.toggle('bg-blue-500', isDarkMode);
    // Removed: lang.classList.toggle('text-black', !isDarkMode); // Handled by language.js button style
    navLinks.classList.toggle('text-black', !isDarkMode);

    introBox.classList.toggle('bg-white/30', !isDarkMode);
    introBox.classList.toggle('border-white/30', !isDarkMode);
    introBox.classList.toggle('shadow-lg', !isDarkMode);
    introBox.classList.toggle('bg-gray-100/30', isDarkMode);
    introBox.classList.toggle('shadow-xl', isDarkMode);
    introBox.classList.toggle('border-gray-300', isDarkMode);

    introTitle.classList.toggle('text-black', !isDarkMode);
    introTitle.classList.toggle('text-white', isDarkMode);

    introText.classList.toggle('text-gray-800', !isDarkMode);
    introText.classList.toggle('text-white', isDarkMode);

    introBtn.classList.toggle('border-gray-800', !isDarkMode);
    introBtn.classList.toggle('text-gray-900', !isDarkMode);
    introBtn.classList.toggle('border-white', isDarkMode);
    introBtn.classList.toggle('text-white', isDarkMode);

    aiSection.classList.toggle('bg-gray-100/0', !isDarkMode);
    aiSection.classList.toggle('text-black', !isDarkMode);
    aiSection.classList.toggle('bg-gray-900', isDarkMode);
    aiSection.classList.toggle('text-white', isDarkMode);

    aiTitle.classList.toggle('text-black', !isDarkMode);
    aiTitle.classList.toggle('text-white', isDarkMode);

    aiText.classList.toggle('text-gray-700', !isDarkMode);
    aiText.classList.toggle('text-gray-300', isDarkMode);

    aiBox1.classList.toggle('bg-gray-200', !isDarkMode);
    aiBox1.classList.toggle('text-black', !isDarkMode);
    aiBox1.classList.toggle('shadow-md', !isDarkMode);
    aiBox1.classList.toggle('bg-gray-800', isDarkMode);
    aiBox1.classList.toggle('text-white', isDarkMode);

    aiBox2.classList.toggle('bg-gray-200', !isDarkMode);
    aiBox2.classList.toggle('text-black', !isDarkMode);
    aiBox2.classList.toggle('shadow-md', !isDarkMode);
    aiBox2.classList.toggle('bg-gray-800', isDarkMode);
    aiBox2.classList.toggle('text-white', isDarkMode);

    aiLabel1.classList.toggle('text-gray-600', !isDarkMode);
    aiLabel1.classList.toggle('text-gray-400', isDarkMode);

    aiLabel2.classList.toggle('text-gray-600', !isDarkMode);
    aiLabel2.classList.toggle('text-gray-400', isDarkMode);

    toolsSection.classList.toggle('bg-gray-100/0', !isDarkMode);
    toolsSection.classList.toggle('text-black', !isDarkMode);
    toolsSection.classList.toggle('bg-gray-900', isDarkMode);
    toolsSection.classList.toggle('text-white', isDarkMode);

    toolsTitle.classList.toggle('text-black', !isDarkMode);
    toolsTitle.classList.toggle('border-gray-300', !isDarkMode);
    toolsTitle.classList.toggle('text-white', isDarkMode);
    toolsTitle.classList.toggle('border-gray-700', isDarkMode);

    toolButtons.forEach(button => {
        button.classList.toggle('bg-gray-200', !isDarkMode);
        button.classList.toggle('text-black', !isDarkMode);
        button.classList.toggle('shadow-md', !isDarkMode);
        button.classList.toggle('bg-gray-700', isDarkMode);
        button.classList.toggle('text-white', isDarkMode);
    });

    subscriptionBoxes.forEach(box => {
        box.classList.toggle('bg-gray-100', !isDarkMode);
        box.classList.toggle('text-black', !isDarkMode);
        box.classList.toggle('bg-gray-800', isDarkMode);
        box.classList.toggle('text-white', isDarkMode);
    });

    questionBoxes.forEach(box => {
        box.classList.toggle('bg-gray-700', isDarkMode);
        box.classList.toggle('bg-gray-300', !isDarkMode);
        box.classList.toggle('text-white', isDarkMode);
        box.classList.toggle('text-black', !isDarkMode);
    });

    answerBoxes.forEach(box => {
        box.classList.toggle('bg-gray-600', isDarkMode);
        box.classList.toggle('bg-gray-200', !isDarkMode);
        box.classList.toggle('text-white', isDarkMode);
        box.classList.toggle('text-black', !isDarkMode);
    });

    footer.classList.toggle('bg-gray-800', isDarkMode);
    footer.classList.toggle('bg-gray-200', !isDarkMode);
    footer.classList.toggle('text-gray-400', isDarkMode);
    footer.classList.toggle('text-gray-700', !isDarkMode);

    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});


document.addEventListener("DOMContentLoaded", function () {
    // مدیریت نمایش منوی موبایل (این قسمت از کد شما در HTML قبلی وجود نداشت اما در custom.js شما بود، آن را حفظ کردم)
    const menuButton = document.getElementById('menu-button'); // This ID is not present in the HTML header
    const closeMenu = document.getElementById('close-menu'); // This ID is not present in the HTML mobile-menu
    const menu = document.getElementById('mobile-menu');

    if (menuButton && closeMenu && menu) {
        menuButton.addEventListener('click', () => menu.classList.toggle('hidden'));
        closeMenu.addEventListener('click', () => menu.classList.add('hidden'));

        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
                menu.classList.add('hidden');
            }
        });
    }

    // اسلایدر (قسمت غیر Alpine.js که در custom.js شما بود، حذف شد زیرا Alpine.js آن را مدیریت می کند)
    // Removed old slider logic

    // پلن‌های قیمت‌گذاری
    const pricingPlans = {
        1: 1,
        3: 2.5, // 10% تخفیف
        6: 5 // 15% تخفیف
    };

    const buttons = document.querySelectorAll("[data-plan]");
    const priceElements = document.querySelectorAll(".price"); // Changed to class selector

    if (buttons.length && priceElements.length) {
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                const selectedMonths = parseInt(this.dataset.plan);
                buttons.forEach(btn => btn.classList.replace("bg-blue-500", "bg-gray-700"));
                this.classList.replace("bg-gray-700", "bg-blue-500");

                priceElements.forEach(priceSpan => { // Loop through price spans
                    const parentSubscriptionBox = priceSpan.closest('.subscription-box');
                    if (parentSubscriptionBox) {
                        const basePrice = parseInt(parentSubscriptionBox.dataset.price);
                        if (!isNaN(basePrice)) { // Check if basePrice is a number
                             // Get the 'thousandToman' translation from the global translations object
                            const currencyText = window.currentTranslations ? window.currentTranslations.thousandToman : 'هزار تومان';
                            priceSpan.innerHTML = `${(pricingPlans[selectedMonths] * basePrice).toLocaleString()} <span class="text-lg">${currencyText}</span>`;
                        }
                    }
                });

                console.log("پلن انتخاب شده: " + selectedMonths);
            });
        });
    }
});

function slider() {
    return {
        activeSlide: 0,
        slides: [], // Initialize empty; will be filled by updateSlides()
        init() {
            // This 'init' will run when the Alpine component is mounted
            this.updateSlides();
            // Listen for a custom event from language.js to update slides
            window.addEventListener('languageChanged', () => {
                this.updateSlides();
            });
            this.startAutoSlide();
        },
        updateSlides() {
            // Safely access current translations, defaulting to an empty array
            this.slides = (window.currentTranslations && window.currentTranslations.testimonials) ?
                window.currentTranslations.testimonials : [];
            // Reset active slide if the number of slides changes or if it's out of bounds
            if (this.activeSlide >= this.slides.length) {
                this.activeSlide = 0;
            }
        },
        touchStartX: null,
        mouseStartX: null,
        startAutoSlide() {
            // Clear any existing interval to prevent multiple intervals running
            if (this._autoSlideInterval) {
                clearInterval(this._autoSlideInterval);
            }
            this._autoSlideInterval = setInterval(() => {
                this.nextSlide();
            }, 5000);
        },
        nextSlide() {
            this.activeSlide = (this.activeSlide + 1) % this.slides.length;
        },
        prevSlide() {
            this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
        },
        startTouch(e) {
            this.touchStartX = e.touches[0].clientX;
        },
        endTouch(e) {
            let touchEndX = e.changedTouches[0].clientX;
            let diff = this.touchStartX - touchEndX;
            if (diff > 50) {
                this.nextSlide();
            } else if (diff < -50) {
                this.prevSlide();
            }
            this.touchStartX = null;
        },
        startMouse(e) {
            this.mouseStartX = e.clientX;
        },
        endMouse(e) {
            let mouseEndX = e.clientX;
            let diff = this.mouseStartX - mouseEndX;
            if (diff > 50) {
                this.nextSlide();
            } else if (diff < -50) {
                this.prevSlide();
            }
            this.mouseStartX = null;
        },
        cancelMouse() {
            this.mouseStartX = null;
        }
    }
}


function toggleAnswer(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}