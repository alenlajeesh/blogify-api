const ApiError = require('../utils/ApiError');

const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(
        new ApiError(401, 'You must be logged in to access this resource.')
      );
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(
        new ApiError(
          403,
          `Users with role '${req.user.role}' are not authorized to access this resource. Required role(s): ${allowedRoles.join(', ')}`
        )
      );
    }

    next();
  };
};

module.exports = authorize;

