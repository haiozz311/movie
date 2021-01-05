const validator = require("validator");
const _ = require("lodash");
const { ScheduleList } = require("../../../models/Schedule.modal");

module.exports.validateCreateSchedule = async (req, res, next) => {
  const maPhim = req.body.maPhim;
  const ngayChieuGioChieu = req.body.ngayChieuGioChieu;
  const maRap = req.body.maRap;
  const giaVe = req.body.giaVe;

  const error = {};

  if (!maPhim) {
    error.maPhim = "maPhim is require";
  }

  if (!ngayChieuGioChieu) {
    error.ngayChieuGioChieu = "ngayChieuGioChieu is required";
  }

  if (!maRap) {
    error.maRap = "maRap is require";
  }
  if (!giaVe) {
    error.giaVe = "giaVe is require";
  }

  if (Object.keys(error).length > 0) {
    return res.status(400).json(error);
  }

  return next();
};
