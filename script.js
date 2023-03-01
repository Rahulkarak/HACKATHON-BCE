let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// var swiper = new Swiper(".home-slider",{
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 2,
//         slideShadows: true,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     loop:true,
//     autoplay:{
//         delay: 3000,
//         disableOnInteraction:false,
//     }
// });