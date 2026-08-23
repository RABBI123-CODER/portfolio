document.addEventListener('DOMContentLoaded', () => {
    // GSAP ScrollTrigger রেজিস্টার
    gsap.registerPlugin(ScrollTrigger);

    // ১. নেভবার স্ক্রোল
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 530) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ২. প্রতিবার স্ক্রোলে বারবার রিভিল হওয়ার অ্যানিমেশন
    gsap.fromTo('.reval-txt',
        { y: '100%', opacity: 0 },
        {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.hero-sec',
                start: 'top 75%',
                end: 'bottom 20%',
                toggleActions: 'restart reverse restart reverse'
            }
        }
    );

    // ৩. স্পার্কল আইকন মাউস মুভ অ্যানিমেশন (ক্লিন ও ফিক্সড ভার্সন)
    const icon = document.querySelector('.icon-set-center svg'); // আপনার সঠিক ক্লাস বসানো হলো
    let isSpinning = false;

    if (icon) {
        window.addEventListener('mousemove', () => {
            if (!isSpinning) {
                isSpinning = true;

                // GSAP দিয়ে ৩৬০ ডিগ্রি ঘুরিয়ে স্মুথলি থামানো
                gsap.to(icon, {
                    rotate: '+=360', 
                    duration: 2,
                    ease: 'power2.out',
                    onComplete: () => {
                        isSpinning = false;
                    }
                });
            }
        });
    }

}); // DOMContentLoaded বন্ধ