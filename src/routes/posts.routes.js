const express = require("express");
const { getAllPosts, getPostById,createPost } = require("../controllers/posts.controller");

const router = express.Router();

const authMiddleware = require("../middlewares/authmiddleware.js");

router.post("/", authMiddleware, createPost); 
router.get("/", getAllPosts);                 
router.get("/:postId", getPostById);         


module.exports = router;


