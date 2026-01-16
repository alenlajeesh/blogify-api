const User = require("../models/User.js");
const hashPass = require("../utils/hashpass.js");
const ApiError = require('../utils/ApiError.js');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.registerAuth = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return next(new ApiError(400, "Name, email, and password are required"));
    }

    const hashedPassword = await hashPass(password);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({
      success: true,
      message: "User created successfully"
    });
  } catch (err) {
    // Duplicate email error handling
    if (err.code === 11000) {
      return next(new ApiError(409, "Email already exists"));
    }
    next(err);
  }
};

exports.loginAuth = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ApiError(400, "Email and password are required"));
    }

    const user = await User.findOne({ email });
    if (!user) {
      return next(new ApiError(401, "Invalid email or password"));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new ApiError(401, "Invalid email or password"));
    }

    const payload = { id: user._id, name: user.name };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.json({
      success: true,
      JWT_TOKEN: token,
      user: { id: user._id, name: user.name, email:user.email, role:user.role }
    });
  } catch (err) {
    next(err);
  }
};

