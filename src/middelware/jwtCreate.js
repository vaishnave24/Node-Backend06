const jwt = requires("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = jwttoken.sign(payload, process.env.JWT_KEY, {
    expiresIn: "1h",
  });

  return token;
};

module.exports = generateToken;
