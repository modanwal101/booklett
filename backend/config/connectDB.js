import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch(error){
        console.error("Database connected failed", error.message)
        process.exit(1);  // exit the process with failure
    }
}