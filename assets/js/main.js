/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });


/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("nav");
  if(menuBtn.className === "nav-container"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-container";
  }
}
 
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})
/* -- HOME -- */
sr.reveal('.container',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.header-info',{delay: 200})
sr.reveal('.btn',{delay: 200})
sr.reveal('.social-media',{delay: 200})
sr.reveal('.header-left',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project',{interval: 200})
/* -- HEADINGS -- */

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about',{delay: 100})
srLeft.reveal('.contac',{delay: 100})
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})


  