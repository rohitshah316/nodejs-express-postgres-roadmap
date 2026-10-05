const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todo_api_v2",
  password: "rohitshah12",
  port: 5432,
});

module.exports = pool;
