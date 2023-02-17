const express = require("express");

const {
  createMovie,
  findAllMovies,
  deleteMovie,
} = require("./controllers/MovieController.js");

const {
  createGenre,
  findAllGenres,
} = require("./controllers/GenreController.js");

const app = express();

//use json body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//GENRES
//create a genre C
app.post("/genres", (req, res) => {
  //call the createGenre function from GenreController
  createGenre(req, res);
  // res.send("hello");
});
//get all genres R
app.get("/genres", (req, res) => {
  //call the findAllGenres function from GenreController
  findAllGenres(req, res);
});

//MOVIES

//create a movie C
app.post("/movies", (req, res) => {
  //call the createMovie function from MovieController
  createMovie(req, res);
});
//get all movies R
app.get("/movies", (req, res) => {
  //call the findAllMovies function from MovieController
  findAllMovies(req, res);
});

//delete a movie D
app.delete("/movies/:id", (req, res) => {
  //call the deleteMovie function from MovieController
  deleteMovie(req, res);
});

//SERIES

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
