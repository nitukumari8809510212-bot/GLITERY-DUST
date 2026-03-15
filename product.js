let products = [

{ id:1, name:"Luxury Lipstick", price:499 },

{ id:2, name:"Glow Foundation", price:899 },

{ id:3, name:"Waterproof Mascara", price:599 },

{ id:4, name:"Matte Compact Powder", price:399 },

{ id:5, name:"Beauty Blender", price:299 },

{ id:6, name:"Eyeliner", price:249 }

]

function loadProducts(){

let container = document.getElementById("products")

products.forEach(p=>{

container.innerHTML += `

<div class="product">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>

<button onclick="addWishlist('${p.name}')">❤️ Wishlist</button>

</div>

`

})

}
