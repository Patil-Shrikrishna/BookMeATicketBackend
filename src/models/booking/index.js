const sequalize = require("../../configs/dbConn");
const s = require("sequelize");
const User = require("../user");

const Booking = sequalize.define(
  "booking",
  {
    booking_id: {
      type: s.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    booking_date: {
      type: s.DATE,
      defaultValue: () => new Date(),
    },
    show_date: {
      type: s.DATE,
      allowNull: false,
    },
    seat_numbers: {
      type: s.ARRAY(s.STRING),
      allowNull: false,
      validate: {
        hasSeats: (value) => {
          if (!Array.isArray(value) || value.length <= 0) {
            throw new Error(
              `Invalid value received for seat_numbers, expecting non-empty string array, received ${JSON.stringify(
                value
              )}`
            );
          }
          const unmatched = value.filter((val) => {
            !RegExp(/[A-Z]:[0-9][0-9]?\z/gm).test(val);
          });
          if (unmatched.length > 0) {
            throw new Error(
              `Invalid value(s) received for seat_number, expecting in format <capitalized row letter>:<2 digit col number>, e.g : A:21, J:33, received : ${JSON.stringify(
                unmatched
              )}`
            );
          }
        },
      },
    },
    booking_status: {
      type: s.STRING,
      defaultValue: "CREATED",
    },
  },
  { freezeTableName: true, timestamps: false }
);

// TODO :: link with schedule
// Booking.hasOne(schedule);
Booking.hasOne(User);
Booking.sync({ alter: true });
module.exports = Booking;
