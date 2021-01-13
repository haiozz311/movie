const mongoose = require("mongoose");
const ListScheduleSchema = mongoose.Schema({
  //movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  ngayChieuGioChieu: { type: Date, required: true },
  maRap: { type: mongoose.Schema.Types.ObjectId, ref: "CinemaList" },
  giaVe: { type: Number, required: true },
  thoiLuong: { type: Date },
  thongTinRap: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SystemCenima",
  },
});

const ScheduleList = mongoose.model(
  "ScheduleList",
  ListScheduleSchema,
  "ScheduleList"
);
module.exports = {
  ListScheduleSchema,
  ScheduleList,
};
