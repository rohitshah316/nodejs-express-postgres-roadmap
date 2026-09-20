


function getUser(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            const user={
                id:101,
                name:"Alex"
            }

            resolve(user)
        }, 2000);


    })
}

console.log("Start")
async function main(){
    try{
        const user=await getUser();


        console.log("User:",user.name)
    }catch(err){
        console.log("Error:",err.message);
    }
}

main()

console.log("End")