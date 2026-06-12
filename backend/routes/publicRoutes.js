const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Public route — koi bhi access kar sakta hai
router.get("/", (req, res) => {
  res.json({ message: "Ye public route hai, sab access kar sakte hain!" });
});

// Login route — token generate karta hai
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Simple check (real app mein DB se validate karo)
  if (username === "admin" && password === "password123") {
    const token = jwt.sign(
      { id: 1, username: "admin", role: "admin" },
      process.env.JWT_SECRET || "mysecretkey",
      { expiresIn: "1h" }
    );
    return res.json({ success: true, token });
  }

  res.status(401).json({ success: false, message: "Invalid credentials" });
});

module.exports = router;