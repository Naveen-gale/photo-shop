const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors({ origin: true, credentials: true })); // Allow all origins with credentials for now
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

const adminRoutes = require("./routes/admin.routes");
const photoRoutes = require("./routes/photo.routes");
const contactRoutes = require("./routes/contact.routes");

app.use("/api/admin", adminRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api",contactRoutes);

module.exports = app;
