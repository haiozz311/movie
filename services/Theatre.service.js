const { Schema } = require("mongoose");
const { Theatre } = require("../models/MovieTheatre.modal");
const { SystemCenima } = require("../models/SystemCinema.modal");
const { CinemaList } = require("../models/Cinema.modal");
// const TheatreCodeArray = [
//   "Rạp 1",
//   "Rạp 2",
//   "Rạp 3",
//   "Rạp 4",
//   "Rạp 5",
//   "Rạp 6",
//   "Rạp 7",
//   "Rạp 8",
//   "Rạp 9",
//   "Rạp 10",
// ];

module.exports.createTheatre = (req, res, next) => {
  const { systemCinemaId, maHeThongRap, tenCumRap, DiaChi, hinhAnh } = req.body;
  // const DanhSachRap = TheatreCodeArray.map((tenRap) => {
  //   return new CinemaList({ tenRap });
  // });
  const newTheatre = new Theatre({
    maHeThongRap: maHeThongRap,
    tenCumRap: tenCumRap,
    DiaChi: DiaChi,
    // DanhSachRap: DanhSachRap,
    hinhAnh: hinhAnh,
  });
  SystemCenima.findById(systemCinemaId)
    .then((systemCinema) => {
      if (!systemCinema)
        return Promise.reject({
          status: 404,
          message: "systemCinemaId not found",
        });
      systemCinema.listCumRap.push(newTheatre);

      return Promise.all([newTheatre.save(), systemCinema.save()]);
    })
    .then((result) => res.status(200).json(result[0]))
    .catch((err) => res.status(500).json(err));
};

module.exports.getTheatre = (req, res, next) => {
  const maHeThongRap = req.query.maHeThongRap;
  console.log("maHeThongRap", maHeThongRap);
  Theatre.find({ maHeThongRap })
    .select({
      maHeThongRap: 1,
      tenCumRap: 1,
      DiaChi: 1,
      DanhSachRap: 1,
      danhSachPhim: 1,
      hinhAnh: 1,
    })
    .then((theatre) => {
      if (!theatre) {
        return Promise.reject({
          status: 404,
          messsage: "theatre not found",
        });
      }
      return res.status(200).json(theatre);
    })
    .catch((err) => {
      if (!err.status) return res.status(500).json(err);
      return res.status(err.status).json({ message: err.message });
    });
};
