const { ScheduleList } = require("../models/Schedule.modal");
const { Movie } = require("../models/ListMovie.modal");
module.exports.createSchedule = (req, res, next) => {
  const { movieId, ngayChieuGioChieu, maRap, giaVe } = req.body;
  const newSchedule = new ScheduleList({
    ngayChieuGioChieu,
    maRap,
    giaVe,
  });
  Movie.findById(movieId)
    .then((movie) => {
      if (!movie)
        return Promise.reject({ status: 404, message: "Movie not found" });
      movie.lstLichChieuTheoPhim.push(newSchedule);

      return Promise.all([newSchedule.save(), movie.save()]);
    })
    .then((result) => {
      console.log(result);
      return res.status(200).json(result[0]);
    })
    .catch((err) => res.status(500).json(err));
};

module.exports.getSchedule = (req, res, next) => {
  return ScheduleList.find()
    .then((scheduleList) => {
      return res.status(200).json(scheduleList);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};
