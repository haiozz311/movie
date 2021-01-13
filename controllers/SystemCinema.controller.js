const express = require("express");
const {
  createSystemCinema,
  getSystemCinema,
} = require("../services/SystemCinema.service");
const router = express.Router();
router.get("/getSystemCinema", getSystemCinema);
router.post("/systemCinema", createSystemCinema);
module.exports = router;
