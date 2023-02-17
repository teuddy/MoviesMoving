const Movie = require("../models/index").movies;

//create sequelize model controller for create a movie
exports.createMovie = (req, res) => {
  //validate request if it comes with title,genre,year,coverImage and movieFile
  if (
    !req.body.title ||
    !req.body.genre_id ||
    !req.body.year ||
    !req.body.coverImage ||
    !req.body.movieFile
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //create a movie with the request body
  const movie = {
    title: req.body.title,
    genreId: req.body.genre_id,
    year: req.body.year,
    coverImage: req.body.coverImage,
    movieFile: req.body.movieFile,
  };

  //save movie in the database
  Movie.create(movie)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Movie.",
      });
    });
};

//create sequelize model controller for get all movies
exports.findAllMovies = (req, res) => {
  Movie.findAll({ benchmark: true, logging: console.log })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    });
};

//delete a movie by it's id
exports.deleteMovie = (req, res) => {
  const id = req.params.id;

  Movie.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Movie was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Movie with id=" + id,
      });
    });
};
