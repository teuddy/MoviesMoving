const Movie = require("../models/index").movies;
const Genre = require("../models/index").genres;
const { Op } = require("sequelize");

//create search controller
exports.searching = (req, res) => {
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
};
