const Sequelize = require("sequelize");

const redisClient = require("../config/redisClient.js");

//create movie model

module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movies", {
    //id
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    //title
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    //year
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    //coverImage:
    coverImage: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    //movieFile should be large string
    movieFile: {
      //type should be long text
      type: Sequelize.TEXT("long"),
      allowNull: false,
    },
  });
  //a genre has many movies
  Movie.associate = (models) => {
    Movie.belongsTo(models.genres, {
      foreignKey: {
        allowNull: false,
        as: "genreId",
      },
    });
  };

  Movie.afterCreate((movie) => {
    redisClient.del("movies");
  });

  return Movie;
};
