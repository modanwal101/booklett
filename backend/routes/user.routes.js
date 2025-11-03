import express from "express";
import { Signup, loginUser, logoutUser, checkAuth } from "../controllers/user.controller.js";
import { authUser } from "../middlewares/authUser.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", loginUser);
router.get("/is-auth",authUser, checkAuth);
router.get("/logout",authUser, logoutUser);

export default router;
