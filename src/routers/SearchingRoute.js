const Movie = require("../models/index").movies;
const Genre = require("../models/index").genres;
const { Op } = require("sequelize");
const express = require("express");

const { eliminateMovie } = require("../controllers/MovieController.js");

const router = express.Router();

//find all movies where title match the search query or search query match the genre name
//resoruces?search=somequery:D
router.route("/").get((req, res) => {
  Movie.findAll({
    attributes: [
      "id",
      "title",
      "year",
      "coverImage",
      "movieFile",
      "createdAt",
      "updatedAt",
    ],
    where: {
      [Op.or]: [
        {
          //match movies tittle that contains the search string
          title: {
            [Op.like]: "%" + req.query.search + "%",
          },
        },
        {
          //match movies genre that contains the search string
          "$genre.name$": {
            [Op.like]: "%" + req.query.search + "%",
          },
        },
      ],
    },
    //include genres
    include: [
      {
        model: Genre,
        as: "genre",
        attributes: ["name"],
      },
    ],
  }).then((movies) => {
    res.json({ movies: movies });
  });
});

module.exports = router;
