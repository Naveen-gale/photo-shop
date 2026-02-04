const { adminlogin } = require("./controllers/admin.controller");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

// Mock res
const res = {
    status: (code) => {
        console.log("Status:", code);
        return {
            json: (data) => console.log("JSON:", data)
        };
    },
    cookie: (name, val, options) => {
        console.log(`Cookie set: ${name}=${val.substring(0, 15)}...`, options);
    }
};

// Test Case 1: Valid Credentials
console.log("\n--- Test Case 1: Valid Credentials ---");
const req1 = {
    body: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    }
};
adminlogin(req1, res);

// Test Case 2: Invalid Credentials
console.log("\n--- Test Case 2: Invalid Credentials ---");
const req2 = {
    body: {
        email: "wrong@gmail.com",
        password: "wrong"
    }
};
adminlogin(req2, res);
