const generateToken = require("../middelware/jwtCreate");
const { isUserExist, registerUserService } = require("../service/user.service");
const bcrypt = require("bcrypt");

//login user api 
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await isUserExist(email);
    console.log("userExist", userExist);

    if (!userExist) {
      return res.status(400).json({
        message: "User with this email not exist",
        statusCode: 400,
      });
    }
    const result = await bcrypt.compare(password, userExist.password);
    console.log("result", result);
    if (!result) {
      return res.status(400).json({
        message: "Password not match ",
        statusCode: 400,
      });
    }

    const token = await generateToken(userExist);
    console.log("token", token);
    return res.status(200).json({
      message: "Login successfully",
      statusCode: 200,
      user: {
        userId: userExist.id,
        name: userExist.name,
        email: userExist.role,
      },
      token,
    });
  } catch (error) {
    console.log("error", error);
  }
};

// register user api
exports.registerUser = async (req, res) => {
  const { name, password, email, role } = req.body;
  console.log("body", req.body);
  try {
    const userExist = await isUserExist(email);
    console.log("userExist", userExist);

    if (userExist) {
      return res.status(400).json({
        message: "User with this email already exist",
        statusCode: 400,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    let body = {
      name,
      email,
      role,
      password: hashedPassword,
    };
    const saveUser = await registerUserService(body);

    if (!saveUser) {
      return res.status(400).json({
        message: "Something went wrong",
        statusCode: 400,
        saveUser,
      });
    }
    return res.status(200).json({
      message: "User registered successfully",
      statusCode: 200,
      saveUser,
    });
  } catch (error) {
    console.log("error", error);
    throw new Error("error", error);
  }
};
