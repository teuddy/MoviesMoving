const Genre = require("../models/index").genres;
const redisClient = require("../config/redisClient.js");
const Joi = require("joi");

const redisController = require("./redisController");

exports.createGenre = (req, res) => {
  const { name } = req.body;
  //get it from cache
  redisController.deleteDataFromRedis("genres");
  Genre.create({ name })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Genre.",
      });
    });
};

exports.findAllGenres = async (req, res) => {
  //check if redis has the list of genres
  const data = await redisController.getDataFromRedis("genres");
  if (data) {
    res.send(data);
  } else {
    //get it from db
    Genre.findAll({ benchmark: true, logging: console.log }).then((data) => {
      //persist genres inside redis
      redisClient.set("genres", JSON.stringify(data));
      res.send(data);
    });
  }
};
