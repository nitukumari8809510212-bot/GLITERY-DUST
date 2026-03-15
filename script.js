const products = [

{
id:1,
name:"Matte Lipstick",
price:15,
image:"images/lipstick.jpg"
},

{
id:2,
name:"Liquid Foundation",
price:30,
image:"images/foundation.jpg"
},

{
id:3,
name:"Eye Shadow Palette",
price:25,
image:"images/eyeshadow.jpg"
}

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(){

const container = document.getElementById("product-list");

if(!container) return;

products.forEach(p=>{

container.innerHTML += `
<div class="product">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>$${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>
`;

});

}

function addToCart(id){

cart.push(id);

localStorage.setItem("cart",JSON.stringify(cart));

alert("Product added to cart");

}

function showCart(){

const cartDiv = document.getElementById("cartItems");

if(!cartDiv) return;

let total = 0;

cart.forEach(id=>{

const product = products.find(p=>p.id===id);

total += product.price;

cartDiv.innerHTML += `
<p>${product.name} - $${product.price}</p>
`;

});

document.getElementById("total").innerText = "Total: $" + total;

}

function checkout(){

alert("Payment Successful! Order placed.");

localStorage.removeItem("cart");

location.reload();

}

displayProducts();
showCart();