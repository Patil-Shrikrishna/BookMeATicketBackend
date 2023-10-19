const Address = require("./address");
const Booking = require("./booking");
const Hall = require("./hall");
const Schedule = require("./schedule");
const Show = require("./show");
const Theater = require("./theater");
const TheaterOwner = require("./theater_owner");
const User = require("./user");

Address.hasOne(Theater, {foreignKey: {name: "address_id"}});
Theater.belongsTo(Address, {foreignKey: {name: 'address_id'}});

Address.hasOne(TheaterOwner, {foreignKey: {name: 'address_id'}});
TheaterOwner.belongsTo(Address, {foreignKey: {name: 'address_id'}});

User.hasMany(Booking, {foreignKey: {name: "user_id"}});
Booking.belongsTo(User, {foreignKey: {name: "user_id"}});

Schedule.hasMany(Booking, {foreignKey: {name: 'schedule_id'}});
Booking.belongsTo(Schedule, {foreignKey: {name: "schedule_id"}});

Theater.hasMany(Schedule, {foreignKey: {name: 'theater_id'}});
Schedule.belongsTo(Theater, {foreignKey: {name: 'theater_id'}});

Hall.hasMany(Schedule, {foreignKey: {name: 'schedule_id'}});
Schedule.belongsTo(Hall, {foreignKey: {name: 'schedule_id'}});

Show.hasMany(Schedule, {foreignKey: {name: 'schedule_id'}});
Schedule.belongsTo(Show, {foreignKey: {name: 'schedule_id'}});

TheaterOwner.hasMany(Theater, {foreignKey: {name: 'owner_id'}})
Theater.belongsTo(TheaterOwner, {foreignKey: {name: 'owner_id'}});


module.exports = {
    Booking,
    Address,
    Hall,
    Schedule,
    Show,
    Theater,
    TheaterOwner,
    User
};