const express = require("express");
const router = express.Router();

const theaterController = require("../controllers/theater");

router.get("/addtheater", theaterController.handleAddTheater);
router.get("listtheater", theaterController.handleListTheater);
router.get("/deletetheater", theaterController.handleDeleteTheater);
router.get("/updatetheater", theaterController.handleUpdateTheater);
