
const express=require("express");
const signupSchema=require("./schema");
const  validate  = require("./middlware");

const app=express();

app.use(express.json());

app.post("/signup",validate(signupSchema),(req,res)=>{
      

    res.json({
        message:"Signup data is valid",
        data:req.body
    })
})

app.listen(3000,()=>{
    console.log(`Server running on http://localhost:3000`)
})