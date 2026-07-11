gsap.registerPlugin(ScrollTrigger);

/* ===========================
   HERO ANIMATIONS
=========================== */

gsap.from(".hero-badge",{
    opacity:0,
    y:40,
    duration:.8
});

gsap.from(".hero-title",{
    opacity:0,
    y:60,
    duration:1,
    delay:.2
});

gsap.from(".hero-description",{
    opacity:0,
    y:40,
    duration:1,
    delay:.4
});

gsap.from(".hero-buttons",{
    opacity:0,
    y:30,
    duration:.8,
    delay:.6
});

gsap.from(".hero-stats",{
    opacity:0,
    y:30,
    duration:.8,
    delay:.8
});

gsap.from(".hero-right",{
    opacity:0,
    x:60,
    duration:1.2,
    delay:.4,
    ease:"power3.out"
});


/* ===========================
   SCROLL ANIMATION
=========================== */

gsap.utils.toArray(".section").forEach(section=>{

    gsap.from(section,{

        scrollTrigger:{
            trigger:section,
            start:"top 80%",
            toggleActions:"play none none none"
        },

        opacity:0,
        y:70,
        duration:1,
        ease:"power3.out"

    });

});


/* ===========================
   BACKGROUND FLOAT
=========================== */

gsap.to(".gradient-1",{

    y:60,
    repeat:-1,
    yoyo:true,
    duration:8,
    ease:"sine.inOut"

});

gsap.to(".gradient-2",{

    y:-60,
    repeat:-1,
    yoyo:true,
    duration:10,
    ease:"sine.inOut"

});