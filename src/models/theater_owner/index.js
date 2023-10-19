const sequelize = require("../../configs/dbConn");
const s = require("sequelize");

const TheaterOwner = sequelize.define("theater_owner", {
    theater_owner_id: {
        type: s.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: s.STRING,
        allowNull: false
    },
    last_name: {
        type: s.STRING,
        allowNull: false
    },
    middle_name: {
        type: s.STRING,
    },
    gender: {
        type: s.STRING,
    },
    dob: {
        type: s.DATE,
        allowNull: false
    },
    email: {
        type: s.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone_number: {
        type: s.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isValidPhoneNumber: (value) => {
                if (!RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/).test(value)) {
                    throw new Error(
                        "Invalid Phone Number"
                    )
                }
            }
        }
    },
    password: {
        type: s.STRING,
        allowNull: false,
        validate: {
            len : {msg: "must contain min 4 max 20 characters", args: [4,20]}
        }
    }
});

module.exports = TheaterOwner;