const jwt = require("jsonwebtoken");

// authMiddleware — req aate hi token verify karo
const authMiddleware = (req, res, next) => {
  // Step 1: Header se token nikalo
  const authHeader = req.headers.authorization;

  // Step 2: Token hai ya nahi check karo
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  // Step 3: "Bearer TOKEN" se sirf TOKEN part nikalo
  const token = authHeader.split(" ")[1];

  try {
    // Step 4: Token verify karo secret key se
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "mysecretkey");

    // Step 5: User info request object mein daal do
    req.user = decoded;

    // Step 6: next() call karo — request aage jayegi
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

module.exports = authMiddleware;
