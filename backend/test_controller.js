const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const photoController = require("./controllers/photo.controller");
const imagekit = require("./utils/imagekit");
const Photo = require("./models/photo.model");

// Mock dependencies
imagekit.upload = async (data) => {
    console.log("Mock ImageKit upload called with:", data.fileName);
    return {
        url: "http://example.com/image.jpg",
        name: data.fileName,
        fileId: "mock_file_id"
    };
};

Photo.create = async (data) => {
    console.log("Mock Photo.create called with:", data);
    return {
        _id: "mock_db_id",
        ...data
    };
};

// Mock req, res
const req = {
    file: {
        buffer: Buffer.from("test content"),
        originalname: "test.jpg"
    }
};

const res = {
    status: (code) => {
        console.log("Response status:", code);
        return {
            json: (data) => {
                console.log("Response json:", data);
            }
        };
    }
};

async function runTest() {
    console.log("Running uploadPhoto controller...");
    try {
        await photoController.uploadPhoto(req, res);
    } catch (error) {
        console.error("Caught error in test wrapper:", error);
    }
}

runTest();
