const express = require("express");
const {
  getTicketRoom,
  createTicketRoom,
} = require("../services/TicketRoom.service");

const router = express.Router();
router.get("/getTicket", getTicketRoom);
router.post("/getTicket", createTicketRoom);
module.exports = router;
