const mongoose = require("mongoose");
const { ListCinemaSchema } = require("./Cinema.modal");
const TheatreSchema = mongoose.Schema({
  danhSachPhim: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  tenCumRap: { type: String, required: true },
  DiaChi: { type: String, required: true },
  maHeThongRap: { type: String, required: true },
  DanhSachRap: [{ type: mongoose.Schema.Types.ObjectId, ref: "CinemaList" }],
  lichChieuPhim: [
    { type: mongoose.Schema.Types.ObjectId, ref: "ScheduleList" },
  ],
  hinhAnh: { type: String, required: true },
});

const Theatre = mongoose.model("Theatre", TheatreSchema, "Theatre");
module.exports = {
  TheatreSchema,
  Theatre,
};
