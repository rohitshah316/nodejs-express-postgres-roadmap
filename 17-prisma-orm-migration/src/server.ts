import express from "express";
import prisma from "./db";

const app=express();
const PORT=3000;


app.use(express.json());


app.get("/",(_req,res)=>{
    res.json({
        message:"Todo API with Prisma is running",
    });
})

app.get("/todos", async (_req,res)=>{
    try{
        const todos=await prisma.todo.findMany();
        res.json(todos);

    }catch(err){
        console.error("Failed to fetch todos:",err);
        res.status(500).json({error:"Internal server error"});
    }
});

app.post("/todos", async (req,res)=>{
    try{
        const {title}=req.body;

        if(typeof title!=="string" || !title.trim()){
            res.status(400).json({
                error:"Title is required and must be a non-empty string."
            });
            return;
        }

        const todo=await prisma.todo.create({
            data:{
                title:title.trim(),
            }
        });

        res.status(201).json(todo);
    }catch(err){
        console.error("Failed to create todo:", err);
    res.status(500).json({ err: "Internal server error" });
    }
})




app.patch("/todos/:id", async (req,res)=>{
    const id=Number(req.params.id);

    if(!Number.isInteger(id) || id<=0){
        res.status(400).json({error:"Invalid todo ID"});
        return;
    }

    const {title,completed}=req.body;
    const data:{title?:string;completed?:boolean}={};

    if(title!==undefined){
        if(typeof title!=="string" || !title.trim()){
            res.status(400).json({
                error:"Title must be a non-empty string"
            });
            return;
        }
        data.title=title.trim();
    }

    if(completed!==undefined){
        if(typeof completed!=="boolean"){
            res.status(400).json({
                error:"Completed must be a boolean"
            });
            return;
        }
        data.completed=completed;
    }

    if(Object.keys(data).length===0){
        res.status(400).json({
            error:"Provide a title or completed field to update",
        });
        return;
    }

    try{
        const existingTodo=await prisma.todo.findUnique({
            where:{id}
        });

        if(!existingTodo){
            res.status(404).json({error:"Todo not found"});
            return;
        }

        const updatedTodo=await prisma.todo.update({
            where:{id},
            data,
        });
        res.json(updatedTodo)
    }catch(err){
        console.error("Failed to update todo:",err);
        res.status(500).json({error:"Internal server error"});
    }
});

app.delete("/todos/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: "Invalid todo ID" });
    return;
  }

  try {
    const existingTodo = await prisma.todo.findUnique({
      where: { id },
    });

    if (!existingTodo) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }

    await prisma.todo.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.error("Failed to delete todo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})