const Movie = require("../../models/index").movies;
const redisController = require("../redis/RedisController.js");

const saveRecord = require("../saveRecord");
const deleteRecord = require("../deleteRecord");
const getRecords = require("../getRecords");

//create sequelize model controller for create a movie
exports.createMovie = async (req, res) => {
  await redisController.deleteDataFromRedis("movies");
  saveRecord(Movie, req.body, res);
};

//create sequelize model controller for get all movies
exports.findAllMovies = async (req, res) => {
  const cacheData = await redisController.getDataFromRedis("movies");
  if (!cacheData) {
    const dbData = await getRecords(
      Movie,
      {
        order: [["id", "ASC"]],
      },
      res
    );
    await redisController.setDataToRedis("movies", dbData);
    res.send(dbData);
  } else {
    res.send(cacheData);
  }
};

//delete a movie by it's id
exports.deleteMovie = async (req, res) => {
  await redisController.deleteDataFromRedis("movies");
  const id = req.params.id;
  deleteRecord(Movie, id, res)
    ? res.send({ message: "Movie was deleted successfully!" })
    : res.send({ message: "Movie was not Found. was not deleted!" });
};
