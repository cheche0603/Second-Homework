
const a = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-lift",
  },
});



const b = new Swiper(".list_swiper", {
  slidesPerView: 10,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-lift",
  },
});



const c = new Swiper(".product_flashsale_swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-lift",
  },
});


const d = new Swiper(".product_hotclass_swiper", {
  loop: true,
  slidesPerView: 10,
  spaceBetween: 30,
});

const e = new Swiper(".theme_product", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-lift",
  },
});