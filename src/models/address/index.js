const sequelize = require("../../configs/dbConn");
const s = require("sequelize");

const Address = sequelize.define("address", {
    address_id: {
        type: s.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    city: {
        type: s.STRING,
        allowNull: false
    },
    pin_code: {
        type: s.INTEGER,
        allowNull: false,
    },
    state: {
        type: s.STRING,
        allowNull: false
    },
    longitude: {
        type: s.FLOAT,
    },
    latitue: {
        type: s.FLOAT
    },
    address_line_1: {
        type: s.STRING,
        allowNull: false
    },
    address_line_2: {
        type: s.STRING,
    },
    street: {
        type: s.STRING
    },
    country_code: {
        type: s.STRING,
        defaultValue: "IN"
    },
    house_number: {
        type: s.INTEGER,
    },
    building_number: {
        type: s.INTEGER
    },
    floor_number : {
        type: s.INTEGER
    }
});

module.exports = Address;