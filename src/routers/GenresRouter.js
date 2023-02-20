const express = require("express");

//middlewares
const cacheMiddleware = require("../middleware/cacheMiddleware.js");

const {
  findAllGenres,
  createGenre,
} = require("../controllers/GenreController.js");

const router = express.Router();

//use cacheMiddleware for all routes
router.use(cacheMiddleware);

// //GENRES
// //create a genre C
router.route("/create").post((req, res) => {
  //call the createGenre function from GenreController
  createGenre(req, res);
});
//get all genres R
//add  a middleware to check if the data is in the redis cache
router.route("/getall").get((req, res) => {
  //call the findAllGenres function from GenreController
  res.send("hey");
  // findAllGenres(req, res);
});

module.exports = router;
