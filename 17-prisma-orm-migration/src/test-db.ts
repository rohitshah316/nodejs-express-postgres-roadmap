import prisma from "./db"


async function main(){
    const todos=await prisma.todo.findMany();

    console.log("Database connected successfully!");
    console.log("Todos:",todos);
}

main()
    .catch(
        (err)=>{
            console.error("Database connection failed:",err);
            process.exitCode=1;
        }
    ).finally(async ()=>{
        await prisma.$disconnect();
    })

