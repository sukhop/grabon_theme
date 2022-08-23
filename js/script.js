// Navbar script
let overlay = document.querySelector('.overlay');
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.main-menu');
let menuClose = document.querySelector('.menu-close');

hamburger.addEventListener('click', ()=> {
    toggleMenu();
});

menuClose.addEventListener('click', ()=> {
    toggleMenu();
});

overlay.addEventListener('click', ()=> {
    toggleMenu();
});

function toggleMenu() {
    overlay.classList.toggle('visible');
    menu.classList.toggle('visible');
}

window.onresize = function () {
    if (this.innerWidth > 992) {
        if (menu.classList.contains("visible")) {
            toggleMenu();
        }
    }
};

// year script
let yr = new Date().getFullYear();
document.querySelector('.year').innerHTML = yr;

// scroll to top button
let scrollTopBtn = document.querySelector('.scroll_top');

window.onscroll = () => {
    scrollTop();
};

function scrollTop() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.visibility = 'visible';
        scrollTopBtn.style.opacity = '1';
    } else {
        scrollTopBtn.style.visibility = 'hidden';
        scrollTopBtn.style.opacity = '0';
    }
};

scrollTopBtn.addEventListener('click', ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});