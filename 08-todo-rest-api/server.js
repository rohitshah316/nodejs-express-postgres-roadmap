

const express=require("express");

const app=express();

app.use(express.json());

const PORT=3000;


let todos=[
    {
        id:1,
        title:"Learn Node.js",
        completed: false
    },
    {
        id:2,
        title:"Learn Express",
        completed: true
    },
]


app.get("/",(req,res)=>{
    res.send("Hello world")
});

app.get("/todos",(req,res)=>{
    res.json(todos);
})


//route paramter :id
app.get("/todos/:id",(req,res)=>{
    const id=Number(req.params.id);

    const todo=todos.find(todo=>todo.id===id);

    if(!todo){
        return res.status(404).json({
            message:"Todo not found"
        })
    }
    res.json(todo);
});

app.post("/todos",(req,res)=>{
    const newId=todos.length+1;
    const newTodo={
        id:newId,
        title:req.body.title,
        completed:false
    };

    todos.push(newTodo);

    res.json(newTodo);
});


app.put("/todos/:id",(req,res)=>{
    const id=Number(req.params.id);

    const todo=todos.find(todo=>todo.id===id);

    todo.title=req.body.title;
    todo.completed=req.body.completed;

    res.json(todo);
});


app.delete("/todos/:id",(req,res)=>{
    const id=Number(req.params.id);

    todos=todos.filter(todo=>todo.id!==id);

    res.json(todos);
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})