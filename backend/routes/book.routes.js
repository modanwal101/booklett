import express from "express";
import { authAdmin } from "../middlewares/authadmin.js";
import { addBook, getBooks } from "../controllers/book.controller.js";
import { upload } from "../config/multer.js";

const bookRouter = express.Router();

// Add a new book — include image upload middleware
bookRouter.post("/add", authAdmin, upload.single("image"), addBook);

// Get all books
bookRouter.get("/getbook", getBooks); // ✅ keep consistent with controller route

export default bookRouter;
