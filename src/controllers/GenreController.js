const Genre = require("../models/index").genres;
const redisClient = require("../config/redisClient.js");

//next code will be problematic if there's a single genre in redis
//but there's more in the db, that will happen beacause i insert data though the dashboard

//create sequelize model controller for create a genre
exports.createGenre = (req, res) => {
  //validate request if it comes with a name
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //create a genre with the request body
  const genre = {
    name: req.body.name,
  };

  //save genre in the database
  Genre.create(genre)
    .then((data) => {
      //push this genre into the redis client and get the data from there.
      redisClient.get("genres").then((data) => {
        if (data) {
          //if redis has the list genres, parse it and push the new genre
          let genres = JSON.parse(data);
          genres.push(genre);
          //persist genres inside redis
          redisClient.set("genres", JSON.stringify(genres));
        }
      });

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Genre.",
      });
    });
};

exports.findAllGenres = (req, res) => {
  res.send(req.originalUrl);
  // //check if redis has the list genres
  // redisClient
  //   .get("genres")
  //   .then((data) => {
  //     if (data) {
  //       res.send(JSON.parse(data));
  //     } else {
  //       //if redis does not have the list genres, get it from the database
  //       Genre.findAll({ benchmark: true, logging: console.log }).then(
  //         (data) => {
  //           //persist genres inside redis
  //           redisClient.set("genres", JSON.stringify(data));
  //           res.send(data);
  //         }
  //       );
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).send({
  //       message: err.message || "Some error occurred while retrieving genres.",
  //     });
  //   });
};
