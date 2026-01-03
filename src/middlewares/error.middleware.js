const ApiError = require("../utils/ApiError");

const errorHandler =(err,req,res,next)=>{
	let {
		statusCode,
		message
	}=err;

	if(err.name==='CastError'){
		const message=`Resource not found with id of ${err.value}`;
		statusCode=404;
	}

	if(err.codee===11000){
		const message='Duplicate filed value entered';
		statusCode=400;
	}
	if(err.name==='validationError'){
		const errors=Object.values(err.errors).map(el=>el.message);
		const message=`Invalid input data. ${errors.join('. ')}`;
		statusCode=400;
	}
	
	if(err.isOperational){
		statusCode=500;
		message=err.message || 'Something went wrong';
	}
	else{
		statusCode=500;
		message='Internal Server Error';
	}
	console.error('Error',err);

	res.status(statusCode).json({
		success:false,
		error:{
			message,message
		}
	})

}

module.exports=errorHandler;
