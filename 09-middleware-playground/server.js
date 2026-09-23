//middleware is a function that runs between the incoming request and the final response

// Middleware can do things like:

// Log information about the request

// Check authentication

// Measure request duration

// Validate data

// Modify req or res

// Stop a request

// Pass the request to the next middleware

//middleware syntax
// (req, res, next) => {
//     // do something

//     next();
// }


// const express=require("express");
// const app=express();


// // const requestLogger=(req,res,next)=>{
// //     console.log("Someone made a request");

// //     // next();
// // }
// // app.use(requestLogger);

// // app.get("/",requestLogger,(req,res)=>{
// //     res.send("Hello world")
// // });

// // app.get("/about",requestLogger,(req,res)=>{
// //     res.send("about page")
// // })

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


const express=require("express");
const app=express();
const PORT=3000;

// const middleware1=(req,res,next)=>{
//     console.log("Middlware 1");
//     next();
// }

// const middleware2=(req,res,next)=>{
//     console.log("middleware2");

//     next()
// };

// app.use(middleware1,middleware2);



const logger=(req,res,next)=>{

    const start=Date.now();

    res.on("finish",()=>{
        const duration=Date.now()-start;

        console.log(`${req.method} ${req.url} - ${duration}ms`)
    })
    console.log(req.method, req.url);

    next()
}


const notFound=(req,res,next)=>{
    res.status(404).send("Route not found")
}

const errorHandler=(err,req,res,next)=>{
    console.error(err.message);

    res.status(500).send("Soemthing went wrong");
}

app.use(logger)

app.get("/",(req,res)=>{
    res.send("Hello world")
});


app.get("/error", (req, res) => {
    throw new Error("Something went wrong!");
});


app.use(notFound)
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})

// Situation	Handler
// Normal request processing	Normal middleware
// Continue processing	next()
// Successful response	res.send() / etc.
// Route doesn't exist	404 middleware
// Application error	Error-handling middleware
// Error middleware signature	(err, req, res, next)