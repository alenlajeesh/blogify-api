const User =require("../models/User.js")
const hashPass= require("../utils/hashpass.js");
const ApiError = require('../utils/ApiError.js');
const jwt =require("jsonwebtoken")
const bcrypt= require("bcryptjs")
exports.registerAuth=async(req,res,next)=>{
	try{
		const {name,email,password}=req.body;

		if(!name || !email || !password){
			return next(new ApiError(
				400,
				"Email, password and name are required",
			))
			 
		}
		const hashedPassword= await hashPass(password);
		const user=new User({
			name,
			email,
			password:hashedPassword
		})
		await user.save();
		
		res.status(201).json({
			success:true,
			message:"Successfully User created"
		})
		 
	}catch(err){
		next(err);
	}
}

exports.loginAuth=async (req,res,next)=>{
	try{
		const {email,password}= req.body;
		if(!email||!password){
			return next(new ApiError(401,"Invalid email,password"))
		}

		const user= await User.findOne({email});
		if(!user){
			return next(new ApiError(401,"Invalid email,password"))
		}

		const isMatch =await bcrypt.compare(password,user.password)
		if(!isMatch){
			return next(new ApiError(401,"Invalid Password or Email"))
		}
		const payload ={
			id:user._id,
			name:user.name
		};
		
		const token= jwt.sign(payload,process.env.JWT_SECRET,{
			expiresIn:process.env.JWT_EXPIRES_IN
		})

		res.json({
			success:true,
			JWT_TOKEN:token,
			user:{
				id:user._id,
				name:user.name
			}
		})
	 }catch(err){
		next(err);
	}
}
