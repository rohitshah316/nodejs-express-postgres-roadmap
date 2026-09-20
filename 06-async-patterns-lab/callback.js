

function getUser(callback){
    setTimeout(() => {
        const user={
            id:1,
            name:"Alex"
        };


        callback(null,user)
    }, 2000);
}

console.log("Start");
getUser((error,user)=>{
    if(error){
        console.log("Error:",error.message);
        return;
    }
    console.log("User fetched!")
    console.log("User:",user.name)
});
console.log("End")