const Genre = require("../models/index").genres;

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
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Genre.",
      });
    });
};

exports.findAllGenres = (req, res) => {
  Genre.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving genres.",
      });
    });
};
