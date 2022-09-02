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

// notification popup
let notifyIcon = document.querySelector('.notification');
let notifyWrapper = document.querySelector('.notify_wrapper');
let notifyOverlay = document.querySelector('.notify-overlay');
let notifyClose = document.querySelector('.notify_close');

notifyIcon.addEventListener('click', ()=> {
    notifyToggle();
});
notifyOverlay.addEventListener('click', ()=> {
    notifyToggle();
});
notifyClose.addEventListener('click', ()=> {
    notifyToggle();
});
function notifyToggle() {
    notifyWrapper.classList.toggle('notify_active');
    notifyOverlay.classList.toggle('visible');
}

// search popup
let searchBtn = document.querySelector('.search');
let searchWrapper = document.querySelector('.search_wrapper');
let searchClose = document.querySelector('.close_search');

searchBtn.addEventListener('click', ()=> {
    searchToggle();
});
searchClose.addEventListener('click', ()=> {
    searchToggle();
});
if(searchWrapper.classList.contains('search_active')) {
    console.log('true');
}
function searchToggle() {
    searchWrapper.classList.toggle('search_active');
    document.body.classList.toggle('overflow');
}

// category accordian
let titleGroup = document.querySelectorAll('.title_group');
titleGroup.forEach(element => {
    element.addEventListener('click', ()=> {
        element.nextElementSibling.classList.toggle('close');
        element.classList.toggle('active');
    });
});

// rate overlay
let rateBtn = document.querySelector('.rate');
let rateWrapper = document.querySelector('.rate_overlay');
let rateClose = document.querySelector('.rate_close');

rateBtn.addEventListener('click', ()=> {
    rateToggle();
});

rateClose.addEventListener('click', ()=> {
    rateToggle();
});

function rateToggle() {
    rateWrapper.classList.toggle('active');
}