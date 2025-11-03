import jwt from "jsonwebtoken";

// ✅ Admin login => /admin/login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    // ✅ Verify credentials
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // ✅ Generate token
      const admintoken = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      // ✅ Set cookie
      res.cookie("admintoken", admintoken, {
        httpOnly: true,
        secure: false, // set true if using HTTPS
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });

      return res
        .status(200)
        .json({ message: "Login successful", success: true });
    }

    // ❌ Invalid credentials
    return res
      .status(401)
      .json({ message: "Invalid email or password", success: false });
  } catch (error) {
    console.error("Error during admin login:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

// ✅ Check admin authentication => /admin/is-auth
export const checkAuth = async (req, res) => {
  try {
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error during checkAuth:", error);
    res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

// ✅ Admin logout => /admin/logout
export const adminLogout = async (req, res) => {
  try {
    res.clearCookie("admintoken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    res
      .status(200)
      .json({ message: "Admin logged out successfully", success: true });
  } catch (error) {
    console.error("Error during admin logout:", error);
    res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
