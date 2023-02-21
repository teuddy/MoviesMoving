const Movie = require("../models/index").movies;
const redisClient = require("../config/redisClient.js");

const redisController = require("../controllers/RedisController.js");

//create sequelize model controller for create a movie
exports.createMovie = (req, res) => {
  //create a movie with the request body
  const movie = {
    title: req.body.title,
    genreId: req.body.genreId,
    year: req.body.year,
    coverImage: req.body.coverImage,
    movieFile: req.body.movieFile,
  };

  //save movie in the database
  Movie.create(movie)
    .then((data) => {
      //invalidate redis cache
      redisController.deleteDataFromRedis("movies");
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Movie.",
      });
    });
};

//create sequelize model controller for get all movies
exports.findAllMovies = async (req, res) => {
  try {
    //check if redis has the data
    const data = await redisController.getDataFromRedis("movies");
    if (data) {
      res.send(data);
    } else {
      //get all movies from the database
      Movie.findAll()
        .then((data) => {
          //set redis cache
          redisController.setDataToRedis("movies", data);
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving movies.",
          });
        });
    }
  } catch (error) {
    console.log(error);
  }
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
