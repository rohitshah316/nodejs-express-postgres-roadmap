

//express is a function provided by the Express package
const express=require("express");

const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/about",(req,res)=>{
    res.send("This is the about page.")
})

app.get("/contact",(req,res)=>{
    res.send("This is the contact page.")
})
app.get("/products",(req,res)=>{
    res.send("These are the products")
})

app.post("/users",(req,res)=>{
    console.log(req.body)
    res.send("User created");
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})