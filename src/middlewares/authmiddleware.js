const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const ApiError = require("../utils/ApiError.js");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return next(new ApiError(401, "No token provided"));
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return next(new ApiError(401, "Invalid token format"));
    }

    // Verify JWT
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return next(new ApiError(401, "Your token has expired. Please log in again."));
      }
      return next(new ApiError(401, "Invalid token. Please log in again."));
    }

    // Optional: fetch user from DB to attach full object
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(new ApiError(401, "User no longer exists"));
    }

    req.user = currentUser; // attach full user object
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authMiddleware;

