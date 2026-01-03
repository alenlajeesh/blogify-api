const mongoose = require("mongoose");
const ApiError = require("../utils/ApiError.js")

const connectDB =async()=> {
	try{
		await mongoose.connect(process.env.MONGO_URI)
		console.log("Connected to MongoDB");

	}catch(err){
		throw new ApiError(
			500,
			"Database connection failed",
			false,
			err.stack
		);
	}
}

module.exports=connectDB;
