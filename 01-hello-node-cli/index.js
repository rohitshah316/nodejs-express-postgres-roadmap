console.log("Hello from Node.js")


//node provides a global object called process.
// console.log(process)


//process.argv =>argv stand for argument vector
//it contains the arguments passed to your Node program from command line

// const name = process.argv[2];
// const age = process.argv[3];
// const country = process.argv[4];

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`Country: ${country}`);




const name=process.argv[2];
const ageInput=process.argv[3];
const tech=process.argv[4];

const errors=[];

if(!name){

    errors.push("name is requried (Arg 1)");
}
if(!ageInput){

    errors.push("Age is requried (Arg 2)");
}else if(Number.isNaN(Number(ageInput))){
    errors.push("Age must be a number");
}
if(!tech){

    errors.push("Tech is requried (Arg 3)");
}

if(errors.length>0){
    console.log("Invalid input:");


    errors.forEach((err)=>{
        console.log(`- ${err}`)
    });
    process.exit(1);
}

const age=Number(ageInput)

console.log("Developer Information");
console.log("---------------------");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Favorite Technology: ${tech}`);