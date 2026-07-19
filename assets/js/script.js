const words = [
    "WordPress Developer",
    "Building Fast, SEO-Optimized &",
    "High-Converting Websites."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
    } else {

        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 40 : 80;

    if (!deleting && charIndex === current.length + 1) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;
        const count = +counter.innerText;

        const increment = Math.ceil(target / 60);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(update, 25);

        } else {

            counter.innerText = target + "+";
        }

    };

    update();

});



const progressBar = document.querySelector(".progress-bar");

if (progressBar) {

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const height =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = (scrollTop / height) * 100;

        progressBar.style.width = progress + "%";

    });

}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});





const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}




window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 700);

});



const cursor = document.querySelector(".cursor-glow");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    document.querySelectorAll("a,button,.project-card,.skill-card")
        .forEach(el => {

            el.addEventListener("mouseenter", () => {

                cursor.style.width = "65px";
                cursor.style.height = "65px";

            });

            el.addEventListener("mouseleave", () => {

                cursor.style.width = "28px";
                cursor.style.height = "28px";

            });

        });

}



const card = document.querySelector(".profile-wrapper");

if (card) {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 16;
        const rotateX = ((y / rect.height) - 0.5) * -16;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

}




/*=====================================
MOBILE MENU
=====================================*/

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");
const overlay = document.querySelector(".menu-overlay");

if (menuBtn && navMenu) {

    // Open / Close Menu
    menuBtn.addEventListener("click", () => {

        menuBtn.classList.toggle("active");
        navMenu.classList.toggle("active");

        if (overlay) {
            overlay.classList.toggle("active");
        }

        document.body.classList.toggle("menu-open");

    });

    // Close on Menu Link Click
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            menuBtn.classList.remove("active");
            navMenu.classList.remove("active");

            if (overlay) {
                overlay.classList.remove("active");
            }

            document.body.classList.remove("menu-open");

        });

    });

    // Close on Overlay Click
    if (overlay) {

        overlay.addEventListener("click", () => {

            menuBtn.classList.remove("active");
            navMenu.classList.remove("active");
            overlay.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    }

}





/*=====================================
CONTACT FORM
=====================================*/

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const submitBtn=document.getElementById("submitBtn");
const status=document.getElementById("formStatus");

submitBtn.disabled=true;
submitBtn.innerHTML="Sending...";

status.innerHTML="";
status.className="";

try{

const response=await fetch(contactForm.action,{

method:"POST",

body:new FormData(contactForm),

headers:{
"Accept":"application/json"
}

});

const result=await response.json();

if(response.ok){

status.innerHTML="✅ Thank you! Your message has been sent successfully.";

status.classList.add("success");

contactForm.reset();

}else{

status.innerHTML=result.errors
?result.errors.map(error=>error.message).join("<br>")
:"❌ Something went wrong.";

status.classList.add("error");

}

}catch(error){

status.innerHTML="❌ Network error. Please try again.";

status.classList.add("error");

}

submitBtn.disabled=false;
submitBtn.innerHTML="Send Message";

});

}


/*=====================================
FAQ
=====================================*/

document.querySelectorAll(".faq-question").forEach(question=>{

question.addEventListener("click",()=>{

const item=question.parentElement;

item.classList.toggle("active");

});

});



/*=========================
AUTO YEAR
=========================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*=========================
BACK TO TOP
=========================*/

const backTop=document.getElementById("backTop");

if(backTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.style.opacity="1";

backTop.style.visibility="visible";

}else{

backTop.style.opacity="0";

backTop.style.visibility="hidden";

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}