const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container")

let desktopMenuTimer = null;

menuEmail.addEventListener("mouseenter", toggleDesktopMenu);
menuEmail.addEventListener("mouseleave", hideDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

desktopMenu.addEventListener("mouseenter", stopHideDesktopMenu);
desktopMenu.addEventListener("mouseleave", hideDesktopMenu);


function toggleDesktopMenu() {
    clearTimeout(desktopMenuTimer);
    desktopMenu.classList.remove("inactive");
}

function hideDesktopMenu() {
    desktopMenuTimer = setTimeout(() => {
        desktopMenu.classList.add("inactive");
    }, 500);
}

function stopHideDesktopMenu(event) {
    event.stopPropagation();
    clearTimeout(desktopMenuTimer);
}

function toggleMobileMenu() {

    const isAsideClosed = aside.classList.contains("inactive")

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

        if (!isMobileMenuClosed) {
            mobileMenu.classList.add("inactive")
        }
         
        aside.classList.toggle("inactive");
    

    
}


const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "computadora",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


function renderProducts (arr) {
for (product of arr) {
   const productCard = document.createElement("div")
   productCard.classList.add("product-card")

   const productImg = document.createElement("img")
   productImg.setAttribute("src", product.image)

   //product = {name, price, image} -> product.image

   const productInfo = document.createElement("div")
   productInfo.classList.add("product-info")

   const productInfoDiv = document.createElement("div")


   const productPrice = document.createElement("p")
   productPrice.innerText = "$" + product.price;

   const productName = document.createElement("p")
   productName.innerText = product.name;

   productInfoDiv.appendChild(productPrice)
   productInfoDiv.appendChild(productName)

   const productInfoFigure = document.createElement("figure")
   
   const productImgCart = document.createElement("img")
   productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")

   productInfoFigure.appendChild(productImgCart)

   productInfo.appendChild(productInfoDiv)
   productInfo.appendChild(productInfoFigure)

   productCard.appendChild(productImg)
   productCard.appendChild(productInfo)

   cardContainer.appendChild(productCard)
}
}

renderProducts(productList)