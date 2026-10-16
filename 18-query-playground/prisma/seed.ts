import "dotenv/config";
import {PrismaPg} from "@prisma/adapter-pg";
import {PrismaClient} from "../src/generated/prisma/client";

const adapter=new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma= new PrismaClient({adapter});

async function main(){
    const alex=await prisma.user.upsert({
        where: {email:"alex@gmail.com"},
        update:{},
        create:{
            name:"Alex",
            email:"alex@gmail.com",
            posts:{
                create:[
                    {
                        title:"Learing node.js",
                        content:"Understanding the node.js runtime",
                        published:true,
                        comments:{
                            create:[
                                {content:"Great introduction"},
                                {content:"Very smart."}
                            ],
                        },
                    },
                    {
                        title:"Prisma Basics",
                        content:"Working with database using Prisma",
                        published:true,
                    },
                ],
            },
        },
    });


    const ani=await prisma.user.upsert({
        where:{email:"ani@gmail.com"},
        update:{},
        create: {
      name: "Ani",
      email: "ani@example.com",
      posts: {
        create: [
          {
            title: "SQL Joins Explained",
            content: "Understanding relational queries",
            published: true,
            comments: {
              create: [{ content: "The examples helped me understand joins." }],
            },
          },
          {
            title: "Draft: Indexing",
            content: "Notes about database indexes",
            published: false,
          },
        ],
      },
    },
    })


    const rohit = await prisma.user.upsert({
    where: { email: "rohit@example.com" },
    update: {},
    create: {
      name: "Rohit",
      email: "rohit@example.com",
      posts: {
        create: [
          {
            title: "Pagination Guide",
            content: "Using skip and take",
            published: true,
          },
        ],
      },
    },
  });


  console.log("Seed complete!");
  console.log({alex,ani,rohit});
}

main()
    .catch((err)=>{
        console.error("Seeding failed:",err);
        process.exitCode=1;
    })
    .finally(async ()=>{
        await prisma.$disconnect();
    })