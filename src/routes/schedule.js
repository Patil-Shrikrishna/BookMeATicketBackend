const express = require("express");
const router = express.Router();

const scheduleController = require("../controllers/schedule");

router.get("/createschedule", scheduleController.handleCreateSchedule);
router.get("/deleteschedule", scheduleController.handleDeleteSchedule);
router.get("/listschedule", scheduleController.handleListSchedule);
router.get("/updateschedule", scheduleController.handleUpdateSchedule);
module.exports = router;
