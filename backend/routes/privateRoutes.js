const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// authMiddleware laga do — ab ye route protected hai
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: `Welcome ${req.user.username}! This is your private dashboard.`,
    user: req.user,
  });
});

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "This is your private profile.",
    user: req.user,
  });
});

// Ek example — sirf admin access kar sake
router.get("/admin", authMiddleware, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only!" });
  }
  res.json({ success: true, message: "Admin panel — restricted area." });
});

module.exports = router;
