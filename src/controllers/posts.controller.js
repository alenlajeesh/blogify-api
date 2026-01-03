const Post = require("../models/post.model.js")
const ApiError=require("../utils/ApiError.js");
exports.getAllPosts = async(req, res) => {
	try{
		const posts = await Post.find();
		res.json({
			success: true,
			posts
		});
	}catch(err){
		throw new ApiError(
			500,
			"Failed to retrive All Post",
			true,
			err.stack
		)
	}
};
 
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
	const post = await Post.findById(postId); 
    res.json(post);

  } catch (error) {
		throw new ApiError(
			500,
			"Failed to retrive All Post",
			true,
			err.stack
		)
	}
};
exports.createPost=async(req,res)=>{
	try{
		const {title,content} =req.body;
		if(!content || !title){
			return res.status(204).send("No content");
		}
		const post = new Post({title,content});
		await post.save()
		res.status(201).json({
			success:true,
			post
		})

	}catch(err){
		throw new ApiError(
			500,
			"Failed to create Post",
			true,
			err.stack
		);
	}
}

