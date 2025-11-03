
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Register a new user => /user/signup

export const Signup = async(req,res)=>{
    try{
        const{name,email,password} =req.body;
        if(!name|| !email || !password){
            return res
            .status(500)
            .json({message: "Internal server error", success:false})
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res
            .status(400)
            .json({message: "user already exist", success:false})
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name, email,password:hashedPassword
        })
    
        const token = jwt.sign({id:user._id},process.env.jwt_SECRET,{expiresIn:"1d",})
         res.cookie("token", token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:process.env.NODE_ENV==="production"? "none": "strict",
            maxAge: 24*60*60*1000,
         });
         return res.status(201)
         .json({message: "User registered successfully", success:true,
            user:{name:user.name,
                email:user.email,
            },
        })
    }catch(error){
        console.error("error during signup:", error);
        return res
        .status(500)
        .json({message: "Internal server error ", success:false})
        
    }
}

// login user => /user/login

export const loginUser = async(req,res)=>{
    try{
   const {email,password} = req.body
   if(!email || !password){
    return res.status(400)
    .json({message: "All fields are requerd", success: false})
   }
   const token = jwt.sign({id:user._id},process.env.jwt_SECRET,{expiresIn:"1d",})
         res.cookie("token", token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:process.env.NODE_ENV==="production"? "none": "strict",
            maxAge: 24*60*60*1000,
         });
         return res.status(201)
         .json({message: "User login successfully", success:true,
            user:{name:user.name,
                email:user.email,
            },
        })
   const user = await User.find({email});
    if(!user){
        return res.status(400)
        .json({message:"User not found"})

    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400)
        .json({message: "Invalid credentials", success:false})
    }
   
    }catch(error){
         console.error("error during login:", error);
        return res
        .status(500)
        .json({message: "Internal server error", success:false})
        
    }
}
//  check auth user-=> /user/is-auth
 export const checkAuth = async(req,res)=>{
    try{
        const userId = req.user;
        const user =await User.findById(userId).select("-password");
         if(!user){
        return res.status(400)
        .json({message: "User not found", success:false})
    }
    return res.status(200).json({success:true, 
        user,})
    }catch(error){
      console.error("error during is Auth:", error);
        return res
        .status(500)
        .json({message: "Internal server error", success:false})
    }
 }

// logout user => /user/logout

export const logoutUser = async(req,res)=>{
    try{
       res.clearCookie("token");
       return res.status(400)
    .json({message: "All fields are requerd", success: false})
    }catch(error){
         console.error("error during login:", error);
        return res
        .status(500)
        .json({message: "Internal server error", success:false})
    }
}