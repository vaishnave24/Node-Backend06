
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sqlConnection");

const User = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey:true,
    autoIncrement:true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue:['user']
  },
});
module.exports = User;
