
require("dotenv").config();

const express=require("express");
const config=require("./config");

const app=express();

const PORT=config.port;
const name=config.name;



app.get("/", (req, res) => {
  res.send(`Hello my name is ${name}`);

});

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})
