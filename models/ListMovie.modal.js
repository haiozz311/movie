const mongoose = require("mongoose");
const MovieSchema = mongoose.Schema({
  lstLichChieuTheoPhim: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ScheduleList",
    },
  ],
  heThongRapChieu: [
    { type: mongoose.Schema.Types.ObjectId, ref: "SystemCenima" },
  ],
  tenPhim: { type: String, required: true },
  biDanh: { type: String, required: true },
  trailer: { type: String, required: true },
  hinhAnh: { type: String, required: true },
  moTa: { type: String, required: true },
  ngayKhoiChieu: { type: Date },
  danhGia: { type: Number, required: true },
  ngayChieu: { type: Date },
  gioChieu: { type: Date },
});

// console.log("StationSchema",StationSchema);

const Movie = mongoose.model("Movie", MovieSchema, "Movie");
module.exports = {
  MovieSchema,
  Movie,
};
