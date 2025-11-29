exports.getAllPosts = (req, res) => {
    res.json({
        success: true,
        message: "All posts fetched successfully!",
    });
};

exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;

    return res.json({
      message: `Fetching data for post with ID: ${postId}`
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

