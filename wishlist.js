let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

function addWishlist(name){

wishlist.push(name)

localStorage.setItem("wishlist",JSON.stringify(wishlist))

alert(name+" added to wishlist")

}
