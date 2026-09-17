
const fs=require("fs");

//fs means file system
// which lets program interact with files and folders: reading,creating, updating, and deleting



// fs.writeFile("hello.txt","Hello from Node.js",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("File created successfully");
// })


// fs.readFile("hello.txt","utf8",(err,data)=>{
//     if(err) {
        
//         console.log(err) 
//         return;}

//         console.log(data)
// })

// "hello.txt" → file we want to read

// "utf8" → tells Node to give us the content as a string

// err → error, if reading fails

// data → the actual file contents



// fs.writeFile("hello.txt","The file has been updated!",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("File updated successfully.");
// })

// fs.readFile("hello.txt","utf8",(err,data)=>{
//     if(err) {
        
//         console.log(err) 
//         return;}

//         console.log(data)
// })


// fs.unlink("hello.txt",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("File deleted successfully.")
// })




// fs.mkdir("my-folder",(err)=>{
//     if(err){
//         console.log(err);

//         return;
//     }

//     console.log("Folder created successfully!")
// })



// fs.writeFile("my-folder/notes.txt","These are my notes.",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File created inside folder!");
// })


// fs.readdir("my-folder",(err,files)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(files);
// })

// fs.readFile("my-folder/notes.txt","utf8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(data);
// })


// fs.unlink("my-folder/notes.txt",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("File deleted successfully")
// })
// fs.rmdir("my-folder",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("Folder deletd successfully")
// })



// fs.rm("my-folder",{recursive:true},(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("Folder deleted successfully.")
// })