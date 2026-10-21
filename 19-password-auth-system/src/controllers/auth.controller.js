const bcrypt=require("bcrypt");
const pool=require("../config/db");


async function register(req,res){
    try{
        const {email,password}=req.body;

        //1. validate required fields
        if(
            typeof email!=="string"||
            typeof password!=="string"||
            !email.trim()||
            !password
        ){
            return res.status(400).json({
                message:"Eamil and password are required"
            })
        };


        const normalizedEmail=email.trim().toLowerCase();

        //2. basic email validation
        if(normalizedEmail.length>255||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)){
            return res.status(400).json({
                message:"Please provide a valid email address"
            })
        }

        //3. check password length
        if(password.length<8){
            return res.status(400).json({
                message:"Password must be at least 8 chars long"
            })
        }

        //bcrypt has a 72-byte password input limit
        if(Buffer.byteLength(password,"utf8")>72){
            return res.status(400).json({
                message:"Password must not exceed 72 bytes"
            });
        }

        //4. hash the password
        const passwordHash=await bcrypt.hash(password,12);

        //5. save user in postgresql
        const result = await pool.query(
      `INSERT INTO users (email, password_hash)
       VALUES ($1, $2)
       RETURNING id, email, created_at`,
      [normalizedEmail, passwordHash]
    );

    // 6. Send safe response
    return res.status(201).json({
      message: "User registered successfully",
      user: result.rows[0],
    });
    }catch(err){
 // PostgreSQL unique constraint violation
    if (error.code === "23505") {
      return res.status(409).json({
        message: "An account with this email already exists",
      });
    }

    console.error("Registration error:", error.message);

    return res.status(500).json({
      message: "Internal server error",
    });
    }
}


module.exports = { register };