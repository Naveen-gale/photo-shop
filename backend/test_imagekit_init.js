const ImageKit = require("imagekit");

try {
    console.log("Initializing ImageKit with empty config...");
    const imagekit = new ImageKit({
        publicKey: undefined,
        privateKey: undefined,
        urlEndpoint: undefined
    });
    console.log("Initialization successful.");

    // Try upload
    imagekit.upload({ file: "test", fileName: "test.jpg" })
        .then(res => console.log("Upload success:", res))
        .catch(err => {
            console.error("Upload failed promise:", err);
            console.error("Error message:", err.message);
        });

} catch (error) {
    console.error("Initialization failed:", error);
    console.error("Error message:", error.message);
}
