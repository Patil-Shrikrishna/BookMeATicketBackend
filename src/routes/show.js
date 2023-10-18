const express = require("express");
const router = express.Router();

const showController = require("../controllers/show");

router.get("/createshow", showController.handleCreateShow);
router.get("/listshow", showController.handleListShow);
router.get("/updateshow", showController.handleUpdateShow);
router.get("/deleteshow", showController.handleDeleteShow);

module.exports = router;
