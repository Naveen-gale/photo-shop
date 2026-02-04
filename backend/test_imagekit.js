require("dotenv").config({ path: "./.env" });
const imagekit = require("./utils/imagekit");

async function testUpload() {
    try {
        console.log("Starting upload test...");
        console.log("Public Key:", process.env.IMAGEKIT_PUBLIC_KEY ? "Present" : "Missing");

        // Mock a file buffer (small 1x1 png or just text)
        const buffer = Buffer.from("test file content");

        const response = await imagekit.upload({
            file: buffer.toString("base64"),
            fileName: "test_upload.txt"
        });

        console.log("Upload successful:", response);
    } catch (error) {
        console.error("Upload failed:", error);
    }
}

testUpload();
