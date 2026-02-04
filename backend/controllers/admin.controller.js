const jwt = require("jsonwebtoken");

async function adminlogin(req, res) {
    try {
        const { email, password } = req.body;

        // Debugging logs (will show in server console)
        console.log("Login attempt:", { email });
        console.log("Env Check:", {
            HAS_ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,
            HAS_ADMIN_PASSWORD: !!process.env.ADMIN_PASSWORD,
            HAS_JWT_SECRET: !!process.env.JWT_SECRET
        });

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        if (
            email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD
        ) {
            if (!process.env.JWT_SECRET) {
                throw new Error("JWT_SECRET is not defined in environment variables");
            }

            const token = jwt.sign(
                { role: "admin" },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );

            // Set cookie
            res.cookie("token", token, {
                httpOnly: true,
                secure: false, // Set to true in production with HTTPS
                maxAge: 24 * 60 * 60 * 1000 // 1 day
            });

            return res.status(200).json({
                success: true,
                message: "Login successful",
                token
            });
        }

        return res.status(401).json({
            success: false,
            message: "Invalid admin credentials"
        });
    } catch (error) {
        console.error("Admin Login Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
}

module.exports = { adminlogin };
