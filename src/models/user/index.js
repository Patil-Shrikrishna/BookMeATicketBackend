const sequalize = require("../../configs/dbConn");
const s = require("sequelize");
const Booking = require("../booking");

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
        isEmail: { msg: "must have a valid email" },
      },
    },
    password: {
      type: s.STRING,
      allowNull: false,
    },
    role: {
      type: s.STRING,
      defaultValue: "USER",
    },
  },
  { timestamps: false, freezeTableName: true }
);

User.belongsToMany(Booking);
User.sync({ alter: true });
module.exports = User;
