import jwt from "jsonwebtoken";

export const authAdmin = (req, res, next) => {
  try {
    const { admintoken } = req.cookies;

    // Check if token exists
    if (!admintoken) {
      return res.status(401).json({
        message: "Unauthorized access: No token provided",
        success: false,
      });
    }

    // Verify token
    const decoded = jwt.verify(admintoken, process.env.JWT_SECRET);

    // Validate admin email
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({
        message: "Unauthorized access: Invalid admin credentials",
        success: false,
      });
    }

    // ✅ Everything is fine
    next();

  } catch (error) {
    console.error("Error in authAdmin middleware:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
