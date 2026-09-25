//what is zod?
//zod lets us sdescribe our rules as code.

// Instead of manually doing:

// if (!username) ...
// if (typeof username !== "string") ...
// if (username.length < 3) ...

// we'll eventually be able to describe it more declaratively:

// username: z.string().min(3)

// That one line means:

// username must be a string with at least 3 characters.


const {z}=require("zod");

const signupSchema=z.object({
    username:z.string().trim().min(3).max(30),
    age: z.number().min(18).max(120),
    email:z.string().email(),
})

module.exports=signupSchema;


const result=signupSchema.safeParse({
    username:"Alex",
    age:21,
    email:"alex@gmail.com"
})

console.log(result)