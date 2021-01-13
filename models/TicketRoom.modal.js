const mongoose = require("mongoose");
const { SeatSchema } = require("../models/seat.modal");
const TicketRoomSchema = mongoose.Schema({
  thongTinPhim: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  //danhSachGhe: [{ type: mongoose.Schema.Types.ObjectId, ref: "Seat" }],
  danhSachGhe: [SeatSchema],
});

const TicketRoom = mongoose.model("TicketRoom", TicketRoomSchema, "TicketRoom");
module.exports = {
  TicketRoomSchema,
  TicketRoom,
};
