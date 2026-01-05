const bcrypt =require("bcryptjs");

const hashPass=async(text)=>{
	try{
		const saltRounds=10;
		const hashedPassw=await bcrypt.hash(text,saltRounds);
		return hashedPassw;

	}catch(err){
		console.log("Error Hashing");
	}
}

module.exports=hashPass;
