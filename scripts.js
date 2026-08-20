// 

// document.addEventListener('DOMContentLoaded', () => {
//     // নেভবার স্ক্রোল
//     window.addEventListener('scroll', () => {
//         const navbar = document.querySelector('.navbar');
//         if (window.scrollY > 50) {
//             navbar.classList.add('scrolled');
//         } else {
//             navbar.classList.remove('scrolled');
//         }
//     });

//     // GSAP রিভিল এনিমেশন (এটি টেক্সট অটোমেটিক দেখাবে)
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.fromTo('.reval-txt', 
//         { y: '100%', opacity: 0 }, 
//         { 
//             y: '0%', 
//             opacity: 1, 
//             duration: 1, 
//             stagger: 0.15, 
//             ease: 'power3.out',
//             scrollTrigger: {
//                 trigger: '.hero-sec',
//                 start: 'top 80%',
//             }
//         }
//     );
// });

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
                toggleActions: 'restart reverse restart reverse' /* প্রতিবার ভিউপোর্টে আসলেই অ্যানিমেশন পুনরায় চলবে */
            }
        }
    );
});