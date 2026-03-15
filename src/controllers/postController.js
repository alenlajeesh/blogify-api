const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};

exports.createPost = async (req, res) => {
  const post = await Post.create({
    ...req.body,
    author: req.user
  });

  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(post);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
};
