const User = require("../model/user.model");

exports.isUserExist = async (email) => {
  try {
    const result = await User.findOne({
      where: {
        email: email,
      },
      attributes:["id","name","email","role","password"],
      raw:true
    });
    return result;
  } catch (error) {
    throw error;
  }
};

exports.registerUserService = async (body) => {
  try {
    const result = await User.create({
      name: body.name,
      password: body.password,
      email: body.email,
      role: body.role,
    });
    return result;
  } catch (error) {
    throw error(error);
  }
};
