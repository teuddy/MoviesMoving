const express = require("express");

const {
  findAllGenres,
  createGenre,
} = require("../controllers/GenreController.js");

const router = express.Router();

// //GENRES
// //create a genre C
router.route("/create").post((req, res) => {
  //call the createGenre function from GenreController
  createGenre(req, res);
});
//get all genres R
router.route("/getall").get((req, res) => {
  //call the findAllGenres function from GenreController
  findAllGenres(req, res);
});

module.exports = router;
