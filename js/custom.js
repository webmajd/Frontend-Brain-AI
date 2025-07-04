const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const themeToggle = document.getElementById('theme-toggle');
const themeBody = document.getElementById('theme-body');
const header = document.getElementById('header');
const logo = document.getElementById('logo');
const authBtn = document.getElementById('auth-btn');
const lang = document.getElementById('lang');
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
    lang.classList.toggle('text-black', !isDarkMode);
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
    // مدیریت نمایش منوی موبایل
    const menuButton = document.getElementById('menu-button');
    const closeMenu = document.getElementById('close-menu');
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

    // اسلایدر
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const nextSlideBtn = document.getElementById('next-slide');
    const prevSlideBtn = document.getElementById('prev-slide');

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };

    if (nextSlideBtn && prevSlideBtn && slides.length) {
        nextSlideBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        });

        prevSlideBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        });

        showSlide(currentSlide);
    }

    // پلن‌های قیمت‌گذاری
    const pricingPlans = {
        1: 1,
        3: 2.5, // 10% تخفیف
        6: 5  // 15% تخفیف
    };

    const buttons = document.querySelectorAll("[data-plan]");
    const priceElements = document.querySelectorAll("[data-price]");

    if (buttons.length && priceElements.length) {
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                const selectedMonths = parseInt(this.dataset.plan);
                buttons.forEach(btn => btn.classList.replace("bg-blue-500", "bg-gray-700"));
                this.classList.replace("bg-gray-700", "bg-blue-500");

                priceElements.forEach(plan => {
                    const basePrice = parseInt(plan.dataset.price);
                    plan.querySelector(".price").innerHTML = `${(pricingPlans[selectedMonths] * basePrice).toLocaleString()} <span class="text-lg">هزار تومان</span>`;
                });

                console.log("پلن انتخاب شده: " + selectedMonths);
            });
        });
    }
});

function slider() {
            return {
                activeSlide: 0,
                slides: [
                    {image: './img/image2.jpg', text: 'مدت‌ها دنبال یه سرویس سریع و پایدار برای پردازش متن با هوش مصنوعی بودم، ولی همیشه مشکل تاخیر داشتم. این سایت واقعا تونست نیازم رو برطرف کنه، سرعت پاسخگویی عالیه و مهم‌تر از اون، دقیق‌ترین خروجی‌ها رو گرفتم!'},
                    {image: './img/image3.jpg', text: 'هر روز از این سرویس برای تحلیل داده‌های مشتریان و استخراج اطلاعات کلیدی استفاده می‌کنم. رابط کاربری ساده، اما قدرتمنده و پشتیبانی هم همیشه جوابگو بوده. از تیم توسعه‌دهنده ممنونم'},
                    {image: './img/image1.jpg', text: 'ترجمه متون با این سیستم از همه مترجم‌های ماشینی که قبلا استفاده کردم بهتره. ساختار جملات طبیعی‌تره و مخصوصا توی متن‌های تخصصی، خیلی کمتر نیاز به ویرایش دارم.'}
                ],
                touchStartX: null,
                mouseStartX: null,
                startAutoSlide() {
                    setInterval(() => {
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



