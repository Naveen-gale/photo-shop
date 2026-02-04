const mongoose = require("mongoose"); // 1. Fixed typo: "mongose" -> "mongoose"

const connectDB = async () => {
    try {
        // 2. Ensure you have dotenv configured to read process.env.MONGO_URI
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // 3. Exit process with failure
    }
};

module.exports = connectDB;