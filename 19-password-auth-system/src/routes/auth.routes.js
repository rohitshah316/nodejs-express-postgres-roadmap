const express=require("express");
const { register } = require("../controllers/auth.controller");

const router=express.Router();

router.post("/register", register);

router.post("/login", (req, res) => {
  res.status(501).json({
    message: "Login is not implemented yet",
  });
});

module.exports = router;