const router = require("express").Router();
const {loginAuth,registerAuth}=require("../controllers/auth.controller.js")

router.post("/register",registerAuth);
router.post("/login",loginAuth);

module.exports=router;
