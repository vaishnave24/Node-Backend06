const { json } = require("sequelize");

const allowedRoles = (...roles) => {
  try {
    return (req, res, next) => {
      const user = req.user.role;
      if (!roles.includes(user)) {
        return res.status(403).json({
          message: "You are not autherize to access this",
          statusCode: 403,
        });
      }
      next();
    };
  } catch (error) {
    throw error;
  }
};

module.exports = allowedRoles;
