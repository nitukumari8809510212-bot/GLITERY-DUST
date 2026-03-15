const express = require("express")
const app = express()

app.use(express.json())

app.get("/products",(req,res)=>{
res.json([
{name:"Lipstick",price:499},
{name:"Foundation",price:899}
])
})

app.listen(3000,()=>{
console.log("Server running")
})