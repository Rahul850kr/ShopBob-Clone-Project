

import {navbar} from "../components/navbar.js"

document.getElementById("navbar").innerHTML=navbar()


import {footer} from "../components/footer.js"

document.getElementById("footer").innerHTML=footer()

var data1 = JSON.parse(localStorage.getItem("addToCartData")) || [];

console.log(data1)

let len = data1.length;
document.getElementById("count").innerText=len;

let adItems=JSON.parse(localStorage.getItem("addToCartData"))||[]
console.log(adItems)


//  script For slide show 
const swiper = new Swiper('.swiper', {

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  // geting add to bag date from local storage
  
  let cartData = JSON.parse(localStorage.getItem("items"))||[]
  // console.log(cartData)
  
  
  cartData.map(function(e){
    console.log("items",e)
    let img_box = document.getElementById("main-img")
    img_box.innerHTML=null

    let img=document.createElement("img")
    img.src = e.images

    img_box.append(img)

    

    let small_div = document.getElementsByClassName("small-left")
    let smallImg = document.getElementsByClassName("small-left")


    // adding data in localstorage for add to bag
    let button=document.getElementById("btn-notify").addEventListener("click",function(){
        console.log("1")
        addToBag(e)
    })

    let title=document.getElementById("title").innerText=e.title
    let desc=document.getElementById("desc").innerText=e.description
    let price = document.getElementById("price").innerHTML=`<h3>&#x20B9 ${e.price} </h3>`

    smallImg.src = e.smallSide


})
   
// for pushing data in add to bag array then local storage
function addToBag(e){

    adItems.push(e)
    alert("Item added to cart");
    localStorage.setItem("addToCartData",JSON.stringify(adItems));
   window.location.reload();

}





