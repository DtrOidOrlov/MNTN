$(function () {
    // Arrow
    var $arrow_up = $('.arrow_up');
    
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 70) {
            $arrow_up.fadeIn();
        } else {
            $arrow_up.fadeOut();
        }
    });

    $arrow_up.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 900);
    });

    // Nav
    // let nav = $('#nav');
    // let navToggle = $('#navToggle');
    
    // navToggle.on('click', function (event) {
    //     event.preventDefault();

    //     nav.toggleClass('show');
    //     navToggle.toggleClass('rotate');


    // });

});


// Інше рішення натискання меню

const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('#nav');
// const body = document.body;     Знаходимо боді

navToggle.addEventListener('click', function (event) {
    event.stopPropagation();

    toggleNav();
    // body.classList.toggle('no__scroll')   Вішаємо клас на боді, "заборона скролити"
});


// Клік за межами навігації

window.addEventListener('click', function () {

    console.log('click on window')
    
    if (navToggle.classList.contains('rotate')) {
        toggleNav();
    }
});

// Зупиняємо клік в відкритій навігації
nav.addEventListener('click', function (event) {
    event.stopPropagation();
});


// Виносимо в функцію однакові події (Оптимізація коду)
function toggleNav() {
    nav.classList.toggle('show');
    navToggle.classList.toggle('rotate');
};

















