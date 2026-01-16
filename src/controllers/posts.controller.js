const Post = require("../models/post.model.js");
const ApiError = require("../utils/ApiError.js");

// Get all posts
exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json({ success: true, posts });
  } catch (err) {
    next(err);
  }
};

// Get a post by ID
exports.getPostById = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);

    if (!post) {
      return next(new ApiError(404, "Post not found or invalid Post ID"));
    }

    res.json({ success: true, post });
  } catch (err) {
    // Handles invalid MongoDB ObjectId errors
    if (err.name === "CastError") {
      return next(new ApiError(404, `Invalid Post ID: ${req.params.postId}`));
    }
    next(err);
  }
};

// Create a new post
exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return next(new ApiError(400, "Title and content are required"));
    }

    const post = new Post({ title, content });
    await post.save();

    res.status(201).json({ success: true, post });
  } catch (err) {
    next(err);
  }
};

