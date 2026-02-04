const imagekit = require("../utils/imagekit");
const Photo = require("../models/photo.model");

// Upload Photo



exports.uploadPhoto = async (req, res) => {
  try {
    console.log("Starting photo upload...");
    const file = req.file;

    if (!file) {
      console.log("No file received in request");
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("File received:", {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    });

    // ImageKit accepts buffer directly
    const uploadResponse = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname
    });

    console.log("ImageKit upload successful:", uploadResponse);

    if (!uploadResponse || !uploadResponse.url || !uploadResponse.fileId) {
      throw new Error("Invalid response from ImageKit");
    }

    const newPhoto = await Photo.create({
      imageUrl: uploadResponse.url,
      imageName: uploadResponse.name,
      fileId: uploadResponse.fileId
    });

    console.log("Photo saved to database:", newPhoto);

    res.status(201).json({
      success: true,
      message: "Photo uploaded successfully",
      photo: newPhoto
    });
  } catch (error) {
    console.error("Upload failed error:", error);
    res.status(500).json({
      message: "Upload failed",
      error: error.message || "Unknown error"
    });
  }
};


// Get All Photos (Public)
exports.getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch photos" });
  }
};

// Delete Photo (Admin Only)
exports.deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;

    const photo = await Photo.findById(id);
    if (!photo) {
      return res.status(404).json({ message: "Photo not found" });
    }

    // delete from ImageKit
    await imagekit.deleteFile(photo.fileId);

    // delete from DB
    await Photo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Photo deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error: error.message });
  }
};
