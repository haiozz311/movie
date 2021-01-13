const express = require("express");
const { createTicket } = require("../services/Ticket.service");
const router = express.Router();
router.post("/createTicket", createTicket);
module.exports = router;
