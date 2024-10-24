let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = ()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// FOOD
var swiper = new Swiper(".food-slider", {
    loop:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
    },
});


//Gallery
lightGallery(document.querySelector('.gallery .gallery-container'));

// MENU
var swiper = new Swiper(".menu-slide", {
    grabCursor : true,
    loop:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
    },
});