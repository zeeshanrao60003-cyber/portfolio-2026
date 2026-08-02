gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   HOME PAGE HERO ANIMATIONS
========================================== */

if (document.querySelector(".hero")) {

    gsap.from(".hero-badge", {
        opacity: 0,
        y: 40,
        duration: .8
    });

    gsap.from(".hero-title", {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: .2
    });

    gsap.from(".hero-description", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: .4
    });

    gsap.from(".hero-buttons", {
        opacity: 0,
        y: 30,
        duration: .8,
        delay: .6
    });


gsap.from(".hero-character", {

    opacity: 0,
    scale: .85,
    y: 40,
    duration: 1.2,
    delay: .2,
    ease: "power3.out"

});

gsap.from(".hero-bg-title", {

    opacity: 0,
    scale: .7,
    duration: 1.5,
    delay: .3,
    ease: "power2.out"

});


gsap.from(".float-icon", {

    opacity: 0,
    scale: .4,
    stagger: .15,
    duration: .8,
    delay: .8,
    ease: "back.out(1.7)"

});

gsap.from(".hero-tech span", {

    opacity: 0,
    y: 20,
    stagger: .08,
    duration: .6,
    delay: .7

});

}


/* ==========================================
   SCROLL ANIMATIONS (ALL PAGES)
========================================== */

gsap.utils.toArray(".section").forEach(section => {

    gsap.from(section, {

        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
        },

        opacity: 0,
        y: 70,
        duration: 1,
        ease: "power3.out"

    });

});


/* ==========================================
   BACKGROUND FLOATING
========================================== */

if (document.querySelector(".gradient-1")) {

    gsap.to(".gradient-1", {

        y: 60,
        repeat: -1,
        yoyo: true,
        duration: 8,
        ease: "sine.inOut"

    });

}

if (document.querySelector(".gradient-2")) {

    gsap.to(".gradient-2", {

        y: -60,
        repeat: -1,
        yoyo: true,
        duration: 10,
        ease: "sine.inOut"

    });

}




/*=====================================
ABOUT PAGE ANIMATIONS
======================================*/

if(document.querySelector(".about-hero")){

gsap.from(".about-image",{

opacity:0,

x:-80,

duration:1,

ease:"power3.out"

});

gsap.from(".about-content",{

opacity:0,

x:80,

duration:1,

delay:.2,

ease:"power3.out"

});

gsap.utils.toArray(

".timeline-item,.expertise-card,.process-card,.certificate-card,.why-card,.cta-box"

).forEach(item=>{

gsap.from(item,{

scrollTrigger:{

trigger:item,

start:"top 85%"

},

opacity:0,

y:60,

duration:.9,

ease:"power3.out"

});

});

}