const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/booking");

router.post("/createbooking", bookingController.handleCreateBooking);

module.exports = router;
