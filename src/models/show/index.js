const sequelize = require("../../configs/dbConn");
const s = require('sequelize');

const Show = sequelize.define(
  "show",
  {
    show_id: {
      type: s.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    show_name: {
      type: s.STRING,
      allowNull: false,
    },
    show_description : {
      type: s.TEXT,
      allowNull: false
    },
    show_image_url: {
      type: s.STRING,
      allowNull: false
    },
    show_release_date: {
      type: s.DATE,
      allowNull:false
    },
    rating: {
      type: s.INTEGER,
      defaultValue: 0
    },
    duration_in_seconds: {
      type: s.INTEGER,
      allowNull: false
    },
    genre: {
      type: s.STRING,
      defaultValue: "All"
    },
    language: {
      type: s.STRING,
      allowNull: false
    },
    graphic_type: {
      type: s.STRING,
      defaultValue: "2D"
    },
    show_status: {
      type: s.STRING,
      defaultValue: "ACTIVE"
    },
    status_description: {
      type: s.STRING
    }
  }
);

module.exports = Show;