const jwt = require("jsonwebtoken");

const jwtVerify = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status().json({
        message: "Access denied",
        statuscode: 401,
      });
    }

    const decode = jwt.verify(token, process.env.JWT_KEY);
    req.user.role = decode;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = jwtVerify;
