const express = require("express");
const router = express.Router();
const {
  submitContactForm,
  getAllContacts
} = require("../controllers/contact.controller");

const authMiddleware = require("../middleware/authMiddleware");

// Public route (for users)
router.post("/contact", submitContactForm);

// Protected route (only admin can see messages)
router.get("/contact", authMiddleware, getAllContacts);

module.exports = router;
