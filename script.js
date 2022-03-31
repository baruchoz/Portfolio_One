// Side Navigation Code
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");

menuBtn.onclick = function () {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
};

cancelBtn.onclick = function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
};

// Sticky Navigation Code
let nav = document.querySelector("nav");
let val;
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};