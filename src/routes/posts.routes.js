const express = require("express");
const { getAllPosts, getPostById,createPost,updatePost,deletePost} = require("../controllers/posts.controller");
const router = express.Router();
const authMiddleware = require("../middlewares/authmiddleware.js");
const authorize = require('../middlewares/authorize.middleware');


router.post("/", authMiddleware, authorize('admin') ,createPost); 
router.get("/", getAllPosts);                 
router.get("/:postId", getPostById);         
router.put('/:postId', authMiddleware, authorize('admin'),updatePost);
router.delete('/:postId', authMiddleware, authorize('admin'), deletePost);


module.exports = router;


