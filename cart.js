// var data = [ 
//     {
//         id:"1",
//          title: "Vince",
//          images : "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/vince/vince514021071b/vince514021071b_1642101088477_2-1._UY365_QL90_.jpg",
//          price:  545.00,
//          description: "Pomegranate Pleated V Neck Dress"
//     },
//     {
//         id:"2",
//          title: "Playa Lucila",
//          images : "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/playa/playa301381cd73/playa301381cd73_1642095059625_2-0._QL90_UX207_.jpg",
//          price:  132.00,
//          description: "Smocked Midi Dress"
//     },
//     {
//         id:"3",
//          title: "Playa Lucila",
//          images : "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/playa/playa3013415487/playa3013415487_1642107414994_2-0._SH20_QL90_UY365_.jpg",
//          price:  158.00,
//          description: "Printed Maxi"
//     }
// ];


// localStorage.setItem("cartData",JSON.stringify(data));

import {navbar} from "./components/navbar.js";
import {footer} from "./components/footer.js";

document.querySelector(".foot").innerHTML = footer();

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("apply").addEventListener("click",promocode);

var data1 = JSON.parse(localStorage.getItem("addToCartData")) || [];

console.log(data1)

let len = data1.length;
document.getElementById("count").innerText=len;

let append = (data1)=>{
    data1.map((el,i)=>{

        let div = document.createElement("div");
        div.setAttribute("class","productDiv");

        let imageDiv = document.createElement("div");
        imageDiv.setAttribute("class","imageDiv");

        let textDiv = document.createElement("div");
        textDiv.setAttribute("class","textDiv");

        let removeDiv = document.createElement("div");
        removeDiv.setAttribute("class","removeDiv");

        let removeButton = document.createElement("p");
        removeButton.setAttribute("class","removeButton");
        removeButton.innerText= "X";
        removeButton.addEventListener("click",function(){
            removeItem(el,i)
        })

        // let qty = document.createElement("select");
        // qty.setAttribute("class","qty");
        // qty.addEventListener("change",function(){
        //     quantity(el);
        // })

        // let option1 = document.createElement("option");
        // option1.innerText=1;

        // let option2 = document.createElement("option");
        // option2.innerText=2;
        // option2.value = 2;

        // let option3 = document.createElement("option");
        // option3.innerText=3;

        let image = document.createElement("img");
        image.setAttribute("class","productImage");
        image.src = el.images;

        let title = document.createElement("h4");
        title.setAttribute("class","title");
        title.innerText=el.title;

        let des = document.createElement("p");
        des.setAttribute("class","description");
        des.innerText=el.description;

        let price = document.createElement("h5");
        price.setAttribute("class","price");
        price.innerText=`$ ${el.price}`;

        imageDiv.append(image);
        textDiv.append(title,des,price);

        // qty.append(option1,option2,option3)
        removeDiv.append(removeButton);
        div.append(imageDiv,textDiv,removeDiv);

        document.getElementById("leftUpper").append(div)
    })
}



function removeItem(el,i)
{
    data1.splice(i,1);
    localStorage.setItem("addToCartData",JSON.stringify(data1));
    window.location.reload();
}



if(data1.length>0)
{
    document.getElementById("leftUpper").innerHTML=null;

    let div = document.createElement("div");
    div.setAttribute("id","upperbox");

    let upperimagediv = document.createElement("div");
    upperimagediv.setAttribute("id","upperimagediv");

    let uppertextdiv =  document.createElement("div");
    uppertextdiv.setAttribute("id","uppertextdiv");

    let image = document.createElement("img");
    image.setAttribute("id","dataemptyimg");
    image.src = "data:image/svg+xml,%3Csvg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M30 0c16.568 0 30 13.432 30 30 0 10.044-4.941 18.925-12.52 24.368l5.061-18.887c.19-.711-.226-1.44-.928-1.628l-2.768-.741a.923.923 0 00-.2-.51l-.005-.008a.925.925 0 00-.19-.172l-.042-.028a.925.925 0 00-.241-.107l-3.43-.92c.447-4.801-2.678-9.406-7.575-10.718a9.681 9.681 0 00-1.475-.264 10.085 10.085 0 00-1.633-1.046c-.025-.012-.047-.026-.072-.038a10.216 10.216 0 00-.796-.353l-.144-.062c-.317-.12-.641-.227-.976-.317-2.545-.682-5.235-.3-7.576 1.075-2.03 1.192-3.553 2.99-4.367 5.129l-7.718-2.069a.921.921 0 00-1.13.653L5.037 46.638A29.858 29.858 0 010 30C0 13.432 13.431 0 30 0zM12.82 24.727l3.204.858c-.012.034-.029.065-.038.1L9.073 51.481a30.273 30.273 0 01-2.638-2.928l6.384-23.826zm25.832-.535l.235.155c2.08 1.44 3.332 3.821 3.256 6.326l-2.811-.754c.053-.283.09-.565.118-.848.01-.101.015-.201.021-.303a9.263 9.263 0 00.019-.908 9.111 9.111 0 00-.024-.421c-.01-.148-.02-.295-.037-.441l-.033-.212a9.697 9.697 0 00-.464-1.89l-.02-.06a9.6 9.6 0 00-.26-.644zm-10.746 2.666c1.578-2.725 4.783-4.312 7.92-3.775 1.43 1.746 2.113 4.045 1.715 6.356zm-2.48-5.623c1.911-1.122 4.1-1.436 6.163-.883.26.07.512.151.759.243-2.998.697-5.65 2.728-7.043 5.566l-3.38-.906a8.287 8.287 0 013.501-4.02z' fill='%23FFE7DB'/%3E%3Cpath d='M16.022 25.585l4.062 1.088c.105.094.23.168.374.207.145.038.29.037.427.008l16.703 4.475a.92.92 0 00.615.24c.058 0 .114-.018.17-.03l8.424 2.258-6.528 24.364A29.938 29.938 0 0130 60c-8.144 0-15.523-3.25-20.927-8.519l6.912-25.796c.01-.035.025-.066.037-.1zm32.823 7.527l2.767.741c.703.189 1.12.917.929 1.628l-5.06 18.887a29.985 29.985 0 01-5.062 2.94l6.4-23.89a.922.922 0 00.025-.306h.001zM35.687 20.385l.37.045c.37.051.738.121 1.105.22 4.897 1.312 8.022 5.915 7.574 10.718l-1.4-.376-1.193-.32c.078-2.596-1.271-5.06-3.492-6.48l-.152-.329a9.99 9.99 0 00-.726-1.248l-.02-.027a10.03 10.03 0 00-1.133-1.37l-.051-.05a9.956 9.956 0 00-.882-.783zm-3.34.21a8.193 8.193 0 013.477 2.488c-3.136-.537-6.341 1.05-7.919 3.775l-2.6-.697c1.393-2.838 4.044-4.87 7.041-5.566z' fill='%23FFCBB1'/%3E%3Cpath d='M37.54 29.44l-9.635-2.583-2.6-.696-3.381-.906a8.287 8.287 0 013.501-4.02c1.911-1.122 4.1-1.436 6.163-.882a8.19 8.19 0 014.236 2.73c1.43 1.746 2.114 4.045 1.716 6.356m11.305 3.673a.922.922 0 00-.2-.51l-.005-.008a.896.896 0 00-.19-.172c-.014-.01-.028-.018-.043-.027a.915.915 0 00-.24-.108l-3.431-.92-1.4-.375-1.194-.32-2.811-.753c.053-.283.09-.566.118-.848.01-.1.015-.201.021-.303a9.26 9.26 0 00-.004-1.329c-.012-.147-.02-.295-.038-.441-.009-.071-.022-.141-.033-.212a9.722 9.722 0 00-.463-1.89l-.021-.06c-.08-.217-.165-.433-.26-.644v-.001a9.934 9.934 0 00-2.03-2.973l-.052-.05a10.14 10.14 0 00-1.692-1.357l-.004-.004a10.245 10.245 0 00-.82-.468l-.07-.038a9.89 9.89 0 00-.798-.353c-.049-.02-.094-.044-.144-.062-.316-.12-.64-.227-.975-.317-2.545-.682-5.235-.3-7.576 1.074-2.03 1.193-3.553 2.99-4.367 5.13l-7.718-2.068a.92.92 0 00-1.13.652L5.037 46.638c.44.658.908 1.295 1.398 1.915l6.384-23.826 3.204.858 4.061 1.088a.91.91 0 00.374.207c.144.038.29.037.427.008l16.703 4.475a.92.92 0 00.615.24c.058 0 .114-.018.17-.03l8.425 2.258-6.528 24.364a29.89 29.89 0 002.148-.888l6.402-23.89a.891.891 0 00.025-.305' fill='%23000'/%3E%3C/g%3E%3C/svg%3E";

    let h3 = document.createElement("h3");
    h3.setAttribute("id","uppertexth3");
    h3.innerText="Shopping Bag";

    let countingitem = document.createElement("span");
    countingitem.setAttribute("id","countingitem");
    countingitem.innerText = ` - ${data1.length} items`;

    let uppertextP=document.createElement("p");
    uppertextP.setAttribute("id","uppertextp");
    uppertextP.innerText="Items are saved to your bag, but availability is not guaranteed.";

    upperimagediv.append(image);
    h3.append(countingitem);
    uppertextdiv.append(h3,uppertextP);

    div.append(upperimagediv,uppertextdiv);

    document.getElementById("leftUpper").append(div);

    append(data1);

    document.getElementById("qty").innerText = data1.length;
    
    let sum = 0;
    for(let i=0;i<data1.length;i++)
    {
        sum=sum+data1[i].price;
    }
    // console.log(sum)
    document.getElementById("price").innerText=sum;
    document.getElementById("totalPrice").innerText=sum;
}

function promocode()
{
    let inputPromo = document.getElementById("promo").value;
    let sum = document.getElementById("price").innerText;
    
    if(inputPromo == "teamshopbop")
    {
        sum = sum - sum*0.5;
    }

    document.getElementById("totalPrice").innerText=Math.floor(sum);
    localStorage.setItem("finalprice",Math.floor(sum));

    document.getElementById("promo").value=null;
}


let recom = [
    {
        id: "10",
        title: "Hansen & Gretel",
        images: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/hnsgr/hnsgr3001311524/hnsgr3001311524_1642103825307_2-0._SH20_QL90_UY365_.jpg",
        price: 299.00,
        description:
            "Bisset Dress"

    },
    {
        id: "11",
        title: "STAUD",
        images: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/staud/staud3110012765/staud3110012765_1642114249868_2-0._SH20_QL90_UY365_.jpg",
        price: 265.00,
        description:
            "Rockey Sweater"

    },
    {
        id: "12",
        title: "Significant Other",
        images: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/sothe/sothe3003811338/sothe3003811338_1642104363841_2-0._UY365_QL90_.jpg",
        price: 228.00,
        description:
            "Sassari Dress"

    },
    {
        id: "13",
        title: "Veronica Beard",
        images: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/vbear/vbear318761c893/vbear318761c893_1642023906926_2-0._SH20_QL90_UY365_PGshopbop-db-sticker-3_UY365_.jpg",
        price: 398.00,
        description:
            "Lenna Mini Dress"

    },
    {
        id: "14",
        title: "Tibi",
        images: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/tibdb/tibdb302671c5f0/tibdb302671c5f0_1642174896547_2-0._SH20_QL90_UY365_PGshopbop-db-sticker-3_UY365_.jpg",
        price: 365.00,
        description:
            "Off-Shoulder Dress"

    },
    {
        id: "15",
        title: "Tibi",
        images: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/tibdb/tibdb3027017460/tibdb3027017460_1642174922844_2-0._SH20_QL90_UY365_PGshopbop-db-sticker-3_UY365_.jpg",
        price: 375.00,
        description:
            "Flora on jersy fitted long Sleeve"

    },
    {
        id: "16",
        title: "Tibi",
        images: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/tibdb/tibdb302661c5f0/tibdb302661c5f0_1642174887678_2-0._UY365_QL90_.jpg",
        price: 495.00,
        description:
            "Pleated Wrap Skirt",
    },
    
];

recommend(recom);

function recommend(data)
{
    data.map((el)=>{

        let div = document.createElement("div");
        div.setAttribute("class","recDiv");

        let image = document.createElement("img");
        image.setAttribute("class","recImage");
        image.src = el.images;

        let title = document.createElement("h5");
        title.setAttribute("class","recTitle");
        title.innerText=el.title;

        let des = document.createElement("p");
        des.setAttribute("class","recDes");
        des.innerText=el.description;

        let price = document.createElement("h5");
        price.setAttribute("class","recPrice");
        price.innerText=`$ ${el.price}`;

        div.append(image,title,des,price);

        document.getElementById("recommendation").append(div);
        })
    
}



