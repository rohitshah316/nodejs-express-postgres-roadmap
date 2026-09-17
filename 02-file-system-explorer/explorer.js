
const fs=require("fs");

fs.mkdir("project-data",(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("Folder  created");

    fs.writeFile("project-data/info.txt","Node.js file System Explorer",(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("File created");

        fs.readdir("project-data",(err,files)=>{
            if(err){
                console.log(err);
                return;
            }

            console.log("Folder contents:",files);
        })
    })
})



// Method	Purpose
// fs.mkdir()	Create a folder
// fs.writeFile()	Create/write a file asynchronously
// fs.writeFileSync()	Create/write synchronously
// fs.readFile()	Read a file asynchronously
// fs.readFileSync()	Read synchronously
// fs.readdir()	Read folder contents
// fs.unlink()	Delete a file
// fs.rmdir()	Delete an empty folder
// fs.rm()	Remove files/folders
// Callback	Run code when an async operation finishes