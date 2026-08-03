/* ===================================
   SIMA HOTEL SUMBA
   PREMIUM LANDING PAGE
=================================== */

// =======================
// Loading Screen
// =======================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").classList.add("hide");

    }, 1500);

});

// =======================
// Smooth Scroll
// =======================

const scrollBtn = document.querySelector(".scroll-btn");

if (scrollBtn) {

    scrollBtn.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector("#services").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// =======================
// Back To Top
// =======================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =======================
// Fade Animation
// =======================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

document.querySelectorAll(".card").forEach((card)=>{

    card.classList.add("hidden");

    observer.observe(card);

});

// =======================
// Button Click Effect
// =======================

document.querySelectorAll(".btn").forEach((btn)=>{

    btn.addEventListener("click",()=>{

        btn.style.transform="scale(.96)";

        setTimeout(()=>{

            btn.style.transform="scale(1)";

        },150);

    });

});
// =======================
// Navbar Scroll
// =======================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}
// =======================
// WhatsApp Popup
// =======================

const popup = document.getElementById("waPopup");
const closeWA = document.getElementById("closeWA");

setTimeout(() => {

    if (popup) {
        popup.style.display = "block";
    }

}, 5000);

if (closeWA) {

    closeWA.addEventListener("click", () => {

        popup.style.display = "none";

    });

}