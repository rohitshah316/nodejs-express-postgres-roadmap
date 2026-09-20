
const EventEmitter=require("events");

const orderSystem=new EventEmitter();

orderSystem.on("orderCreated",(order)=>{
    console.log(`New order: ${order.id}`);
    console.log(`Customer: ${order.customer}`);
    console.log(`Product: ${order.product}`)
})

orderSystem.on("orderCreated",()=>{
    console.log("Sending confirmation email...")
})

orderSystem.on("orderCreated",()=>{
    console.log("Preparing order for shipping...")
})

orderSystem.once("paymentProcessed",()=>{
    console.log("Payment processed successfully!")
});

orderSystem.on("error",(err)=>{
    console.log("Order error:",err.message)
})
orderSystem.emit("orderCreated",{
    id:101,
    customer:"Alex",
    product:"Laptop"
})

orderSystem.emit("paymentProcessed");
orderSystem.emit("error",new Error("Payment failed"));


