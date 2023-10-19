const sequelize = require("../../configs/dbConn");
const s = require("sequelize");

const Theater = sequelize.define("theater", {
    theater_id: {
        type: s.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    theater_name: {
        type: s.STRING,
        allowNull: false
    },
    theater_status: {
        type: s.STRING,
        defaultValue: "ACTIVE"
    },
    status_description: {
        type: s.STRING,
    }
});

module.exports = Theater;
