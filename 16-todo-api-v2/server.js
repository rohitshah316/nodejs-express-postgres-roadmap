//todo app


const express = require("express");
const pool=require("./db")

const app = express();

const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      message: "Todo API v2 is running",
      databaseTime: result.rows[0].now,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Database connection failed",
    });
  }
});



app.get("/todos",async (req,res)=>{
  try{
const result=await pool.query("SELECT * FROM todos");

res.json(result.rows)
  }catch(err){
    console.error(err)

    res.status(500).json({
      error:"Failed to fetch todos",
    })
  }
})

app.get("/todos/:id",async (req,res)=>{
  try{
    const {id}=req.params;

    const result=await pool.query("SELECT * FROM todos WHERE id=$1",[id]);

    if(result.rows.length===0){
      return res.status(404).json({
        error:"Todo not found"
      })
    }

    res.json(result.rows[0])
  }catch(err){
    console.error(err);

    res.status(500).json({
      error:"Failed to fetch todo."
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Create project + initialize Node.js

// Install Express, pg, and development dependencies

// Create the Express server structure

// Set up PostgreSQL and create the database

// Connect Node.js to PostgreSQL with pg

// Create the todos table

// Build GET /todos

// Build GET /todos/:id

// Build POST /todos

// Build PUT/PATCH and DELETE

// Add proper error handling and validation

// Test the complete API and compare it with Project 8