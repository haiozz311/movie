const mongoose = require("mongoose");
const TicketSchema = mongoose.Schema({
  danhSachGhe: [{ type: mongoose.Schema.Types.ObjectId, ref: "seat" }],
  giaVe: { type: Number, required: true },
  ngayDate: { type: Date, required: true },
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "movie" },
  thoiLuongPhim: { type: Number, require: true },
  heThongId : { type: mongoose.Schema.Types.ObjectId, ref: "SystemCenima" },
});

const Ticket = mongoose.model("Ticket", TicketSchema, "Ticket");
module.exports = {
  TicketSchema,
  Ticket,
};
