const express = require("express");
const {
  createMovie,
  getMovie,
  paginationMovie,
  movieByDate,
  updateMovie,
  deleteMovieById,
  getInforSchedule,
  getMovieInfor,
} = require("../services/Movie.service");
const {
  validateAddMovie,
} = require("../middleware/validation/movie/add-movie.validate");
const {
  validateUpdateMovie,
} = require("../middleware/validation/movie/update-movie.validate");
const router = express.Router();

router.get("/movies", getMovie);
router.get("/movieInfor/:id", getMovieInfor);
router.post("/movies", validateAddMovie, createMovie);
router.get("/moviesPagination", paginationMovie);
router.get("/movieByDate", movieByDate);
router.put("/:id", validateUpdateMovie, updateMovie);
router.delete("/:id", deleteMovieById);
router.get("/getInforSchedule", getInforSchedule);
module.exports = router; //  export default xuat ra ca 1 router
