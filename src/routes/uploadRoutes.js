const router = require("express").Router();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const auth = require("../middleware/authMiddleware");

const upload = multer({ dest: "uploads/" });

router.post("/", auth, upload.single("image"), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);

  res.json({
    url: result.secure_url
  });
});

module.exports = router;
