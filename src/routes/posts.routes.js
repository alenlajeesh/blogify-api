const express = require("express");
const { getAllPosts, getPostById,createPost } = require("../controllers/posts.controller");

const router = express.Router();

router.post("/",createPost)
router.get("/", getAllPosts);
router.get("/:postId", getPostById);

module.exports = router;
;

