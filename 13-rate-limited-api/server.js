
const express=require("express");
const ratelimit=require("express-rate-limit");
const helmet=require("helmet");
const cors=require("cors");

const app=express();
app.use(helmet());
const PORT=5000;
app.use(cors())
app.use(express.json());

const limiter=ratelimit({
    windowMs: 15*60*1000,
    limit:5,
    message:{
        error:"Too many requests, please try again later."
    }
})

app.use(limiter)

app.get("/",(req,res)=>{
    res.json({
        message:"Project 13"
    });
});

app.get("/api/users",(req,res)=>{
    res.json({
        users:[
            {id:1,name:"Alex"},
            {id:2,name:"Ani"},
        ]
    });
})

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})