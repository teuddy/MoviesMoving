const express = require("express");
//route
const route = require("./routers/index.js");

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

//main router
app.use("/v1", route);

//SERIES

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
