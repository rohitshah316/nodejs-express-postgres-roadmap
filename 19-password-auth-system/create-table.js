require("dotenv").config();

const pool=require("./src/config/db");
const fs=require("node:fs");
const path=require("node:path");

async function createTable(){
    try{
        const schemaPath=path.join(__dirname,"src","config","schema.sql");

        const sql=fs.readFileSync(schemaPath,"utf8");

        await pool.query(sql);

        console.log("Users table created successfully");
    }catch(err){
        console.error("Failed to create user table:",err.message);
        process.exitCode=1;

    }finally{
        await pool.end();
    }
}


createTable();