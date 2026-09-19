
import http from "http"
const server=http.createServer((req,res)=>{
    if(req.method==="GET" && req.url==="/"){
        res.statusCode=200;
        res.end("Welcome to User API.");
    }else if(req.method==="GET" && req.url==="/about"){
        res.statusCode=200;
        res.end("User API built with Node.js");
    }else if(req.method==="GET" && req.url==="/api/users"){
        res.statusCode=200;
        res.setHeader("Content-Type","application/json");

        const users=[
            {id:1,name:"Alex"},
            {id:2,name:"Ani"}
        ];

        res.end(JSON.stringify(users));

    }else if(req.method==="POST" && req.url==="/api/users"){
      res.statusCode=201;
        res.setHeader("Content-Type","application/json");

        res.end(JSON.stringify({message:"User Created"}))
    }else{
        res.statusCode=404;
        res.end("Route Not Found")
    }
});


server.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
})