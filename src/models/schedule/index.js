const sequelize = require( "../../configs/dbConn");
const s = require( "sequelize");
const {schemaValidator} = require("../../utils/revalidator");

const Schedule = sequelize.define("schedule", {
    schedule_id: {
        type: s.DECIMAL,
        autoIncrement: true,
        primaryKey: true,
    },
    timings: {
        type: s.JSONB,
        allowNull: false,
        validate: {
            schema: schemaValidator({
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        start_time_in_mins: { type: "integer", required: true},
                        end_time_in_mins: {type: "integer", required: true},
                        status: {type: "string", required: false},
                        status_description: {type: "string", required: false}
                    }
                }
            })
        }
    },
    from_date: {
        type: s.DATE,
        allowNull:false
    },
    to_date: {
        type: s.DATE,
        allowNull: false
    },

})

ś
module.exports = Schedule;