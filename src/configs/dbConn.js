require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    define: {
      freezeTableName: true,
      timestamps: false,
      
    }
  }
);

sequelize.sync({alter: true});

module.exports = sequelize;
