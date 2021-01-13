const { Schema } = require("mongoose");
const { SystemCenima } = require("../models/SystemCinema.modal");
const { Theatre } = require("../models/MovieTheatre.modal");

module.exports.createSystemCinema = (req, res, next) => {
  const { maHeThongRap, tenHeThongRap, biDanh, logo } = req.body;
  return SystemCenima.create({
    maHeThongRap,
    tenHeThongRap,
    biDanh,
    logo,
  })
    .then((SystemCenima) => {
      console.log(SystemCenima);
      return res.status(200).json(SystemCenima);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports.getSystemCinema = (req, res, next) => {
  const maHeThongRap = req.query.maHeThongRap;
  console.log("maHeThongRap", maHeThongRap);
  if (maHeThongRap) {
    return SystemCenima.find({ maHeThongRap })
      .select({
        maHeThongRap: 1,
        danhSachPhim: 1,
        biDanh: 1,
        tenHeThongRap: 1,
        logo: 1,
      })
      .populate({
        path: "listCumRap",
        populate: {
          path: "danhSachPhim",
          populate: {
            path: "lstLichChieuTheoPhim",
          },
        },
      })
      .then((schedules) => {
        return res.status(200).json(schedules);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  } else {
    return SystemCenima.find()
      .select({ maHeThongRap: 1, tenHeThongRap: 1, biDanh: 1, logo: 1 })
      .populate({
        path: "listCumRap",
        populate: {
          path: "danhSachPhim",
          populate: {
            path: "lstLichChieuTheoPhim",
            // populate: {
            //   path: "maRap",
            // },
          },
        },
      })
      .then((schedules) => {
        return res.status(200).json(schedules);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }
};
