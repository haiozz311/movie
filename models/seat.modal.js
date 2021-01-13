const mongoose = require("mongoose");
const SeatSchema = mongoose.Schema({
  tenGhe: { type: String, require: true },
  loaiGhe: { type: String, required: true },
  soThuTu: { type: Number, required: true },
  daDat: { type: Boolean, default: false },
  taiKhoan: { type: String, require: true },
  heThongId: { type: String, require: true },
});

const Seat = mongoose.model("Seat", SeatSchema, "Seat");
module.exports = {
  SeatSchema,
  Seat,
};
