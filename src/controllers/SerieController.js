const Serie = require("../models/index.js").series;

//create a serie in the db

exports.createSerie = (req, res) => {
  //check if in the body comes title,description,coverImage and year
  const { title, description, coverImage, year, genreId } = req.body;

  if (!title || !description || !coverImage || !year || !genreId) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  Serie.findOne({ where: { title } })
    .then((serie) => {
      if (serie) {
        return res.status(400).send({ message: "Serie already exists!" });
      }

      Serie.create({ title, description, coverImage, year, genreId })
        .then((data) => res.send(data))
        .catch((err) =>
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Serie.",
          })
        );
    })
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "Some error occurred while searching for the Serie.",
      })
    );
};
//get all series and include the genres
exports.getAllSeries = (req, res) => {
  Serie.findAll(
    {
      attributes: ["id", "title", "description", "coverImage", "year"],
      include: ["genre"],
    },
    { order: [["id", "DESC"]] }
  )
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving series.",
      })
    );
};
