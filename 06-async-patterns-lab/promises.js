

//a promise represents a value that is not available yet, but expected to get later.


    //        ┌───────────────┐
    //        │    Pending    │
    //        └───────┬───────┘
    //                │
    //       ┌────────┴────────┐
    //       ↓                 ↓
    //  Fulfilled          Rejected
    //   (success)           (error)



console.log("Start")
function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const user={
                id:1,
                name:"Alex"
            };

            // resolve(user);

            reject(new Error("User not found"))
        }, 2000);
    })
}


getUser().then((user)=>{
    console.log("User fetched!")
    console.log("User:",user.name)
}).catch((err)=>{
    console.log("Error:",err.message);
})


console.log("End")