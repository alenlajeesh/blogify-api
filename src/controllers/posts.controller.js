const Post = require("../models/post.model.js")
const ApiError=require("../utils/ApiError.js");
exports.getAllPosts = async(req, res,next) => {
	try{
		const posts = await Post.find();
		res.json({
			success: true,
			posts
		});
	}catch(err){
		next(err);
	}
};
 
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
	const post = await Post.findById(postId); 
	if(!post){
		return next(new ApiError(404,"Post not found or invalid post Id"))
	}
    res.json(post);

  } catch (error) {
		next(err);
	}
};
exports.createPost=async(req,res)=>{
	try{
		const {title,content} =req.body;
		if(!content || !title){
			return next(new ApiError(204,"No Content"));
		}
		const post = new Post({title,content});
		await post.save()
		res.status(201).json({
			success:true,
			post
		})

	}catch(err){
		next(err);
	}
}

