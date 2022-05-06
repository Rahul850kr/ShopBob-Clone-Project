

import {navbar} from "../component/navbar.js"

let navbar=document.getElementById("navbar").innerHTML=navbar()

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
let adItems=JSON.parse(localStorage.getItem("addToCartData"))||[]
console.log(adItems)

let cartData = JSON.parse(localStorage.getItem("items")) || []
console.log(cartData)

cartData.map(function (e) {

    let div;
    div = document.getElementById("main-img")
    let img = document.getElementById("image")
    img.src = e.images



    let small_div = document.getElementsByClassName("small-left")
    let smallImg = document.getElementsByClassName("small-left")


    // adding data in localstorage for add to bag
    let button=document.getElementById("btn-notify")
    button.addEventListener("click",function(){
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

    localStorage.setItem("addToCartData",JSON.stringify(adItems))

}


import {footer} from "../component/footer.js"

let footer=document.getElementById("footer").innerHTML=footer()


