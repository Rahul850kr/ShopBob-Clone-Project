// imported navbar;
import { navbar } from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar();
var data1 = JSON.parse(localStorage.getItem("addToCartData")) || [];

console.log(data1)

let len = data1.length;
document.getElementById("count").innerText=len;

// imported footer;
import { footer } from "../components/footer.js";
let n1=document.getElementById("footer");
n1.innerHTML=footer();

// swipper
var swiper = new Swiper(".mySwiper", {
    slidesPerView:4,
    spaceBetween:30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

