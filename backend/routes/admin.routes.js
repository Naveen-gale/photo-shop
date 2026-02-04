const express = require("express");
const { adminlogin } = require("../controllers/admin.controller");

const router = express.Router();

router.post("/login", adminlogin);
console.log("Admin routes loaded");


module.exports = router;
