import sequelize from "../../configs/dbConn";
import s from "sequelize";

sequelize.define(
  "show",
  {
    show_id: {
      type: s.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    show_name: {
      type: s.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false }
);
