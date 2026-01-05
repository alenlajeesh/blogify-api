const router = require("express").Router();
const authmiddleware = require("../middlewares/authmiddleware.js")
const {loginAuth,registerAuth}=require("../controllers/auth.controller.js")

router.post("/register",registerAuth);
router.post("/login",loginAuth);

module.exports=router;
