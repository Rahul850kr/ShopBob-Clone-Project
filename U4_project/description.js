



// sending related data in local storage

// let related_items_data=JSON.parse((localStorage.getItem("relatedItems"))) ||  [];

// // appending related data in might like box 
// let relatedBigBox=document.getElementById("image-container");
// // related_items_data.forEach(function(e){
//     let box=document.createElement("div")
//     box.setAttribute("class","carousel-cell")

//     let img=document.createElement("img")
//     img.setAttribute("class","r1")

//     img.src=related_items_data.images

//     box.append(img)
//     relatedBigBox.append(box)
// })
    


let adItems=JSON.parse(localStorage.getItem("addToCartData"))||[]
console.log(adItems)
// sending main data in local storage

let cartData = JSON.parse(localStorage.getItem("items")) || []
console.log(cartData)

cartData.map(function (e) {

    let div;
    div = document.getElementById("main-img")
    let img = document.getElementById("image")
    img.src = e.images



    let small_div = document.getElementsByClassName("small-left")
    let smallImg = document.getElementsByClassName("small-left")

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

function addToBag(e){
    // event.preventDefault()

    adItems.push(e)

    localStorage.setItem("addToCartData",JSON.stringify(adItems))

    // window.location.href=""
}


let related=JSON.parse(localStorage.getItem("relatedItems"))||[]

related.map(function(e){
    let box=document.createElement("div")

    
    let img=document.createElement("img")
    img.src=e.images
    
    
    let title=document.createElement("h3").innerText=e.title
    
    let price=document.createElement("p").innerText=e.price
    
    box.append(img,title,price)

    document.getElementById("image-container").append(box)
    
})

