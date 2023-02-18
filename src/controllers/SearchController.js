const Movie = require("../models/index").movies;
const Genre = require("../models/index").genres;
const Serie = require("../models/index").series;
const { Op } = require("sequelize");

//create search controller
exports.searching = (req, res) => {
  Promise.all([
    // Search for movies
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
            //match movies title that contains the search string
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
    }),

    // Search for series
    Serie.findAll({
      attributes: [
        "id",
        "title",
        "year",
        "coverImage",
        "coverImage",
        "createdAt",
        "updatedAt",
      ],
      where: {
        [Op.or]: [
          {
            //match series title that contains the search string
            title: {
              [Op.like]: "%" + req.query.search + "%",
            },
          },
          {
            //match series genre that contains the search string
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
    }),
  ])
    .then(([movies, series]) => {
      res.json({ series: series, movies: movies });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
