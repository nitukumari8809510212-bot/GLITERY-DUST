function signup(){

let user={

email:document.getElementById("email").value,
password:document.getElementById("password").value

}

localStorage.setItem("user",JSON.stringify(user))

alert("Account created")

}

function login(){

let user=JSON.parse(localStorage.getItem("user"))

let email=document.getElementById("email").value
let password=document.getElementById("password").value

if(user.email===email && user.password===password){

alert("Login successful")

window.location="index.html"

}

else{

alert("Invalid login")

}

}
