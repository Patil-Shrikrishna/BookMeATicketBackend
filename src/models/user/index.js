const sequalize = require("../../configs/dbConn");
const s = require("sequelize");

const User = sequalize.define(
  "user",
  {
    user_id: {
      type: s.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: s.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "invalid email" },
      },
    },
    password: {
      type: s.STRING,
      allowNull: false,
    },
  }
);

module.exports = User;
