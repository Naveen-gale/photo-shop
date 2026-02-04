const express = require("express");
const {
  uploadPhoto,
  getAllPhotos,
  deletePhoto
} = require("../controllers/photo.controller");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const router = express.Router();

router.get("/", getAllPhotos);
router.post("/upload", authMiddleware, upload.single("image"), uploadPhoto);
router.delete("/:id", authMiddleware, deletePhoto);

module.exports = router;
