const Serie = require("../models/index.js").series;

const redisController = require("../controllers/RedisController.js");

//create a serie in the db

exports.createSerie = async (req, res) => {
  //delete from cache
  await redisController.deleteDataFromRedis("series");
  //create serie
  Serie.create({
    genreId: req.body.genreId,
    title: req.body.title,
    year: req.body.year,
    coverImage: req.body.coverImage,
    description: req.body.description,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Serie.",
      });
    });
};
//get all series and include the genres
exports.getAllSeries = async (req, res) => {
  try {
    //get it from cache
    const data = await redisController.getDataFromRedis("series");
    if (data) {
      return res.send(data);
    } else {
      Serie.findAll(
        {
          attributes: ["id", "title", "description", "coverImage", "year"],
          include: ["genre"],
        },
        { order: [["id", "DESC"]] }
      )
        .then((data) => {
          //set it to cache
          redisController.setDataToRedis("series", data);
          res.send(data);
        })
        .catch((err) =>
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving series.",
          })
        );
    }
  } catch (error) {}
};
