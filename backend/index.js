import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";

import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import bookRouter from "./routes/book.routes.js";


const app = express();
const PORT = process.env.PORT || 4000;




dotenv.config();
// connect DB
connectDB();


// middlewares
const allowedOrigins = ["http://localhost:5173"];
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser());
app.use(express.json());


// Api end point

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});
app.use("/images", express.static("uploads"))
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/book",bookRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.log("✅ app.listen callback reached!");
  console.log(`Listening on http://localhost:${PORT}`);
});

