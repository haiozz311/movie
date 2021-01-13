const express = require("express");
const { createCinema, getCinema } = require("../services/Cinema.service");
const router = express.Router();

router.get("/getCinema", getCinema);
router.post("/cinema", createCinema);
module.exports = router;
