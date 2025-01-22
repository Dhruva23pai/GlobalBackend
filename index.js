require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/authDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// User Schema and Model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Endpoint for signing in
app.post("/signin", async (req, res) => {
  try {
    const { username } = req.body;

    // Search for the user in the database
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ success: true }); // Username found
    } else {
      return res.json({ success: false }); // Username not found
    }
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Default route to test connection
app.post("/", (req, res) => {
  res.json({ success: true });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
