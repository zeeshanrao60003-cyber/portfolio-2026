gsap.registerPlugin(ScrollTrigger);

// Hero Animation

gsap.from(".hero-badge",{

opacity:0,

y:40,

duration:0.8

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

gsap.from(".profile-card",{

opacity:0,

x:80,

duration:1,

delay:.5

});



gsap.utils.toArray(".section").forEach(section=>{

gsap.from(section,{

opacity:0,

y:80,

duration:1,

scrollTrigger:{

trigger:section,

start:"top 80%"

}

});

});




gsap.registerPlugin(ScrollTrigger);

/* Hero */

gsap.from(".hero-left>*",{

opacity:0,

y:60,

duration:1,

stagger:.15,

ease:"power3.out"

});

gsap.from(".profile-card",{

opacity:0,

scale:.8,

duration:1.2,

delay:.4,

ease:"back.out(1.7)"

});

/* Sections */

gsap.utils.toArray(".section").forEach(section=>{

gsap.from(gsap.registerPlugin(ScrollTrigger);

// Hero
gsap.from(".hero-left > *", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
});

gsap.from(".hero-right", {
    opacity: 0,
    x: 50,
    duration: 1.2,
    ease: "power3.out"
});

// Animate every section
gsap.utils.toArray(".section").forEach((section) => {

    gsap.from(section, {

        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },

        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out"

    });

});,{

scrollTrigger:{

trigger:section,

start:"top 80%"

},

opacity:0,

y:70,

duration:.9,

stagger:.12,

ease:"power3.out"

});

});

/* Floating */

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