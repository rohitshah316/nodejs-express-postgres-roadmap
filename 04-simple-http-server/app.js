import http from "http";


const server=http.createServer((req,res)=>{
    if(req.method==="GET" && req.url==="/"){
        res.statusCode=200;
        res.end("GET request to the  page");

    }else if(req.method==="GET" && req.url==="/about"){
        res.statusCode=200;
        res.end("this is the about page");
    }else if(req.method ==="POST" && req.url==="/users"){
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");

        res.end(JSON.stringify({message:"User Created"}))
    }else if(req.method==="GET" && req.url==="/api/users"){
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");

        const users=[
            {id:1,name:"Alex"},
            {id:2,name:"Ani"}
        ];

        res.end(JSON.stringify(users))
    }else{
        res.statusCode=404;
        res.end("Route not found")
    }
});


server.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
})




// Common methods are:

// GET → retrieve something

// POST → send/create something

// PUT → replace/update something

// PATCH → partially update something

// DELETE → delete something