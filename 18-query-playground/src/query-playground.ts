
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
//   // Query 1: Get all posts written by Alex (authorId = 1)
//   const alexPosts = await prisma.post.findMany({
//     where: {
//       authorId: 1,
//     },
//   });

//   console.log("Alex's posts:");
//   console.log(alexPosts);

//   // Query 2: Get Alex's published posts
//   const publishedPosts = await prisma.post.findMany({
//     where: {
//       authorId: 1,
//       published: true,
//     },
//   });

//   console.log("Alex's published posts:");
//   console.log(publishedPosts);


//   const alexAndRohitPosts = await prisma.post.findMany({
//   where: {
//     OR: [
//       { authorId: 1 },
//       { authorId: 3 },
//     ],
//   },
// });

// console.log("Posts by Alex or Rohit:");
// console.log(alexAndRohitPosts);


// const recentPosts = await prisma.post.findMany({
//   where: {
//     id: {
//       gt: 2,
//     },
//   },
//   orderBy: {
//     id: "desc",
//   },
// });

// console.log("Posts with ID greater than 2, newest ID first:");
// console.log(recentPosts);


// const page1 = await prisma.post.findMany({
//   orderBy: {
//     id: "asc",
//   },
//   skip: 0,
//   take: 2,
// });

// console.log("Page 1:");
// console.log(page1);

// const page2 = await prisma.post.findMany({
//   orderBy: {
//     id: "asc",
//   },
//   skip: 2,
//   take: 2,
// });

// console.log("Page 2:");
// console.log(page2);

// const totalPosts = await prisma.post.count();

// const pageSize = 2;
// const totalPages = Math.ceil(totalPosts / pageSize);

// console.log("Total posts:", totalPosts);
// console.log("Page size:", pageSize);
// console.log("Total pages:", totalPages);


// const postsWithAuthors = await prisma.post.findMany({
//   include: {
//     author: true,
//   },
// });

// console.dir(postsWithAuthors, { depth: null });


// const postsByAuthor = await prisma.post.groupBy({
//   by: ["authorId"],
//   _count: {
//     id: true,
//   },
// });

// console.log("Posts by author:");
// console.log(postsByAuthor);

const searchResults = await prisma.post.findMany({
  where: {
    title: {
      contains: "Prisma",
      mode: "insensitive",
    },
  },
});

console.log("Search results:", searchResults);

}

main()
  .catch((error) => {
    console.error("Query failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
