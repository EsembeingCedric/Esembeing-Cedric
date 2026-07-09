// ==========================================
// PORTFOLIO WEBSITE SCRIPT
// ==========================================

// -------------------------------
// Sticky Header
// -------------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
        header.style.background = "rgba(13,17,23,.98)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(13,17,23,.95)";
    }

});

// -------------------------------
// Smooth Scroll
// -------------------------------

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// -------------------------------
// Active Navigation
// -------------------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// -------------------------------
// Typing Effect
// -------------------------------

const heroTitle = document.querySelector(".hero h1");

const text = "Creative Web Developer";

let index = 0;

function typing(){

    if(index < text.length){

        heroTitle.textContent += text.charAt(index);

        index++;

        setTimeout(typing,100);

    }

}

heroTitle.textContent = "";

typing();

// -------------------------------
// Scroll Reveal
// -------------------------------

const revealElements = document.querySelectorAll(

".about-box,.card,.project,.skills div,form"

);

function reveal(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = ".8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// -------------------------------
// Project Hover Animation
// -------------------------------

document.querySelectorAll(".project").forEach(project=>{

    project.addEventListener("mouseenter",()=>{

        project.style.transform="translateY(-12px) scale(1.02)";

    });

    project.addEventListener("mouseleave",()=>{

        project.style.transform="translateY(0) scale(1)";

    });

});

// -------------------------------
// Skills Animation
// -------------------------------

document.querySelectorAll(".skills div").forEach(skill=>{

    skill.addEventListener("mouseenter",()=>{

        skill.style.transform="translateY(-10px) rotate(2deg)";

    });

    skill.addEventListener("mouseleave",()=>{

        skill.style.transform="translateY(0) rotate(0deg)";

    });

});

// -------------------------------
// Contact Form Validation
// -------------------------------

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

    const name = form.querySelector('input[name="name"]').value.trim();

    const email = form.querySelector('input[name="email"]').value.trim();

    const message = form.querySelector("textarea").value.trim();

    if(name==="" || email==="" || message===""){

        e.preventDefault();

        alert("Please fill in all required fields.");

    }

});

}

// -------------------------------
// Scroll To Top Button
// -------------------------------

const topButton = document.createElement("button");

topButton.innerHTML = "▲";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "100px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#00c2ff";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.transition = ".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// -------------------------------
// Mobile Menu
// -------------------------------

const menuIcon = document.querySelector(".menu-icon");

const nav = document.querySelector("nav");

if(menuIcon){

menuIcon.addEventListener("click",()=>{

    nav.classList.toggle("show");

});

}

// -------------------------------
// Console Message
// -------------------------------

console.log("Portfolio Website Loaded Successfully!");
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || subject === "" || message === ""){

        alert("Please fill in all the fields.");
        return;

    }

    const phone = "237679459422"; // Your WhatsApp number

    const text =
`*NEW PORTFOLIO MESSAGE*

👤 Name: ${name}

📧 Email: ${email}

📝 Subject: ${subject}

💬 Message:
${message}`;

    const url =
`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    contactForm.reset();

});