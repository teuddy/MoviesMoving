const express = require("express");

const validate = require("../validators/validate.js");

const Schema = require("../validators/Schemas.js");

const {
  findAllMovies,
  createMovie,
  deleteMovie,
} = require("../controllers/MovieController.js");

const router = express.Router();

router.route("/create").post(
  (req, res, next) => validate(req, res, next, Schema.createMovieSchema),
  (req, res) => createMovie(req, res)
);

//get all movies R
router.route("/getall").get((req, res) => findAllMovies(req, res));

//delete a movie D
router.route("/:id").delete((req, res) => deleteMovie(req, res));

module.exports = router;
