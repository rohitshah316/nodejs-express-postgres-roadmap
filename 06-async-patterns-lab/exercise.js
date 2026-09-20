

// function getUser(callback){
//         setTimeout(() => {
//             const user={
//                 id:1,
//                 name:"Alex"
//             }

//             callback(null,user)
//         }, 1000);

// }

// function getOrders(userId,callback){
//         setTimeout(() => {
//             const orders=[
//   { id: 101, product: "Laptop" },
//   { id: 102, product: "Mouse" }
// ]

//     callback(null,orders)
//         }, 1000);
    
// }




// getUser((error,user)=>{
//     if(error){
//         console.log("Error:",error.message);
//         return;
//     }

//     console.log("User:",user.name)
//     getOrders(user.id,(error,orders)=>{
//         if(error){
//             console.log("Order error:",error.message);
//             return;
//         }
//         console.log("Orders:")
//         orders.forEach(order => {
//             console.log(`${order.id} - ${order.product}`)
//         });

//     })
// })





// function getUser(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve({
//                 id:1,name:"Alex"
//             })
//         }, 1000);
//     })
// }

// function getOrders(userId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve([
//                 { id: 101, product: "Laptop" },
//         { id: 102, product: "Mouse" }
//             ])
//         }, 1000);
//     })
// }

// getUser().then((user)=>{
//     console.log("User:",user.name);
//     return getOrders(user.id);
// }).then((orders)=>{
//     console.log("Orders:");

//     orders.forEach(order => {
//         console.log(`${order.id} - ${order.product}`)
//     });
// }).catch((error)=>{
//     console.log("Error:",error.message);
// })




async function getUser() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            const user={
                id:1,
                name:"Alex"
            }

            resolve(user);
        }, 1000);
    })
}


async function getOrders(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const orders=[
                 { id: 101, product: "Laptop" },
        { id: 102, product: "Mouse" }
            ];

            resolve(orders)
        }, 1000);
    })
}


async function main(){
    try{
        const user=await getUser();

        console.log("User:",user.name);

        const orders=await getOrders(user.id);

        console.log("Orders:");

        orders.forEach(order => {
            console.log(`${order.id} - ${order.product}`)
        });
    }catch(err){
        console.log("Error:",err.message)
    }
}

main()