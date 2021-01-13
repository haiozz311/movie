const { CinemaList } = require("../models/Cinema.modal");
const { Theatre } = require("../models/MovieTheatre.modal");
module.exports.createCinema = (req, res, next) => {
  const { tenRap, theatreId } = req.body;
  const newCinema = new CinemaList({
    tenRap,
  });
  Theatre.findById(theatreId)
    .then((theatre) => {
      if (!theatre)
        return Promise.reject({
          status: 404,
          message: "Theatre not found",
        });
      theatre.DanhSachRap.push(newCinema);

      return Promise.all([newCinema.save(), theatre.save()]);
    })
    .then((result) => res.status(200).json(result[0]))
    .catch((err) => res.status(500).json(err));
};

module.exports.getCinema = (req, res, next) => {
  return CinemaList.find()
    .then((cinema) => {
      return res.status(200).json(cinema);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};
