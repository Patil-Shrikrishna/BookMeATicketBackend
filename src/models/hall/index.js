const sequalize = require("../../configs/dbConn");
const s = require("sequelize");
const { schemaValidator } = require("../../utils/revalidator");

const Hall = sequalize.define("hall", {
    hall_id: {
        type: s.INTEGER,
        autoIncrement:true,
        primaryKey: true,
    },
    seat_count: {
        type: s.INTEGER,
        allowNull: false
    },
    hall_name: {
        type: s.STRING,
        allowNull: false
    },
    aminities: {
        type: JSONB,
        validate: {
            schema: schemaValidator({
                type: "array", 
                items: {
                    type: "string"
                }

            })
        },
        allowNull: true
    },
})


module.exports = Hall;