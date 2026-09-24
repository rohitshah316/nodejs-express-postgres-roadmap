
require("dotenv").config();

const config={
    port: Number(process.env.PORT) || 3000,
    name: process.env.MY_NAME || "Unknown",
};

module.exports=config;

