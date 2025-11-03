import Book from "../models/book.model.js";

// 📘 Add a new book => POST /book/add
export const addBook = async (req, res) => {
  try {
    // Log request for debugging
    console.log("📦 Request Body:", req.body);
    console.log("📸 Uploaded File:", req.file);

    // Extract fields from request body
    const {
      title,
      author,
      price,
      offerPrice,
      rating,
      reviews,
      category,
      description,
    } = req.body;

    // Validate required text fields
    if (
      !title ||
      !author ||
      !price ||
      !offerPrice ||
      !rating ||
      !reviews ||
      !category ||
      !description
    ) {
      console.log("❌ Missing one or more required fields");
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate uploaded file (image)
    if (!req.file) {
      console.log("❌ No file uploaded");
      return res.status(400).json({
        success: false,
        message: "Book image is required",
      });
    }

    // Get uploaded image filename
    const image = req.file.filename;

    // Create a new book document
    const newBook = await Book.create({
      title,
      author,
      price,
      offerPrice,
      rating,
      reviews,
      category,
      description,
      image,
    });

    console.log("✅ Book created successfully:", newBook);

    // Send success response
    return res.status(200).json({
      success: true,
      message: "Book added successfully",
      book: newBook,
    });
  } catch (error) {
    console.error("💥 Error during add book:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// 📚 Get all books => GET /book/getbook
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    return res.status(200).json({
      success: true,
      books,
    });
  } catch (error) {
    console.error("💥 Error fetching books:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
