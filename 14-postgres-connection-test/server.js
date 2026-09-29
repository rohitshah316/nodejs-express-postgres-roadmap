
const {Pool}=require("pg");
require("dotenv").config();

const  pool= new Pool({
      user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME

});

async function testConnection(){
    try{
        const result=await pool.query("SELECT NOW()");

        console.log("Connected to PostgreSQL");
        console.log("Database time:",result.rows[0].now);
    }catch(err){
        console.log("Database connection failed:",err.message);
    }finally{
        await pool.end();
    }
}

testConnection();


console.log("Pool created");
