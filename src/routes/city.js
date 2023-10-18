const express = require("express");
const router = express.Router();
const cityController = require("../controllers/city");

router.get("/", cityController.listCities);

module.exports = router;
