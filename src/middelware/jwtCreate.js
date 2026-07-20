const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  console.log("user",user)
  const payload = {
    id: user.id,
    email: user.email,
    role:user.role
  };

  const token = jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: "24h",
  });

  return token;
};

module.exports = generateToken;
