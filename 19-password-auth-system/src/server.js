require("dotenv").config();


const express=require("express");
const pool = require("./config/db");
const authRoutes=require("./routes/auth.routes")

const app=express();
const PORT=process.env.PORT ||3000;

//parse incoming json request bodies
app.use(express.json());

//basic test route
app.get("/", (req,res)=>{
    res.send("Password Auth API is running");
});


app.get("/db-test",async (req,res)=>{
    try{
        const result=await pool.query("SELECT NOW() AS current_time");

        res.json({
            message:"Database connected Successfully!",
            time: result.rows[0].current_time,
        })
    }catch(err){
        console.error("Datbase connection failed:",err.message);
        res.status(500).json({
            message:"Datbase connection failed"
        })
    }
})


//mount auth routes
app.use("/api/auth",authRoutes);

//start the server
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})