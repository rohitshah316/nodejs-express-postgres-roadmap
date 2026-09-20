

// // const EventEmitter=require("events");  //node built in EventEmitter class.

// // const emitter=new EventEmitter();

// // emitter.on("userRegistered",(user)=>{
// //     console.log("A new user registered!");
// //     console.log(`New user: ${user.name}`);
// //     console.log(`Email: ${user.email}`)
// // });

// // emitter.on("userRegistered",()=>{
// //     console.log("Sending welcome email...")
// // })
// // emitter.on("userRegistered",()=>{
// //     console.log("Creating user profile...")
// // })
// // emitter.emit("userRegistered",{
// //     name:"Alex",
// //     email:"alex@gmail.com"
// // });

// // //one event can have multiple listener




// const EventEmitter=require("events");

// const payment=new EventEmitter();

// payment.once("paymentProcessed",()=>{
//     console.log("Payment processed successfully!");
// });

// payment.emit("paymentProcessed");
// payment.emit("paymentProcessed");
// payment.emit("paymentProcessed");

// // .on()   → every time
// // .once() → only once
// const EventEmitter=require("events");

// const emitter=new EventEmitter();

// emitter.on("error",(err)=>{
//     console.log("Something went wrong:",err.message)
// });


// emitter.emit("error",new Error("Payment failed"))


const EventEmitter=require("events");

const payment=new EventEmitter();

payment.on("error",(err)=>{
    console.log("Payment error:",err.message);
})

payment.emit("error",new Error("Insufficient balance"))