const express = require("express");

const {
  findAllMovies,
  createMovie,
  deleteMovie,
} = require("../controllers/MovieController.js");

const router = express.Router();

//create a movie C
router.route("/create").post((req, res) => {
  //call the createMovie function from MovieController
  createMovie(req, res);
});

//get all movies R
router.route("/getall").get((req, res) => {
  //call the findAllMovies function from MovieController
  findAllMovies(req, res);
});

//delete a movie D
router.route("/:id").delete((req, res) => {
  //call the deleteMovie function from MovieController
  deleteMovie(req, res);
});

module.exports = router;
