//todo app


const express = require("express");
const pool=require("./db")

const app = express();
app.use(express.json())
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


app.post("/todos", async (req,res)=>{
 
  try{
 const {title,completed}=req.body;


  if(!title || typeof title!=="string" || !title.trim()){
    return res.status(400).json({
      error:"Title is required and must be a non-empty string"
    })
  }

  if (typeof completed !== "boolean") {
      return res.status(400).json({
        error: "Completed must be true or false",
      });
    }


      const result=await pool.query(
    "INSERT INTO todos (title,completed) VALUES ($1,$2) RETURNING *",[title,completed]
  );

   res.status(201).json(result.rows[0]);
  }catch(err){
    console.error(err);

    res.status(500).json({
      error:"server error"
    })
  }
})


app.put("/todos/:id",async (req,res)=>{
 try{

if(!title || typeof title!=="string" || !title.trim()){
    return res.status(400).json({
      error:"Title is required and must be a non-empty string"
    })
  }

  if (typeof completed !== "boolean") {
      return res.status(400).json({
        error: "Completed must be true or false",
      });
    }

   const {id}=req.params;
  const {title,completed}=req.body;

  const result=await pool.query("UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *",[title,completed,id]);
  if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Todo not found",
      });
    }

    res.status(200).json(result.rows[0]);


 }catch(err){
  console.error(err);
   res.status(500).json({
      error: "Failed to update todo",
    });
 }
  

})



app.delete("/todos/:id",async(req,res)=>{
  try{
    const {id}=req.params;


if (!/^[1-9]\d*$/.test(id)) {
  return res.status(400).json({
    error: "Invalid todo ID",
  });
}
    const result=await pool.query(
      "DELETE FROM todos WHERE id =$1 RETURNING *",[id]
    );

    if(result.rows.length===0){
      return res.status(404).json({
        error:"Todo not found"
      })
    }

    res.status(200).json({
      message:"Todo deleted successfully.",
      todo: result.rows[0]
    })

  }catch(err){
     console.error(err);

    res.status(500).json({
      error: "Failed to delete todo",
    });
  
  }
})


app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      error: "Invalid JSON format",
    });
  }

  res.status(500).json({
    error: "Internal server error",
  });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
