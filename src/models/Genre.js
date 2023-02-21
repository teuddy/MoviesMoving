const Sequelize = require("sequelize");
const redisClient = require("../config/redisClient.js");

//create genre model

module.exports = (sequelize, Sequelize) => {
  const Genre = sequelize.define("genres", {
    //id
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    //name
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  //a genre has many movies
  Genre.associate = (models) => {
    Genre.hasMany(models.movies, {
      foreignKey: {
        allowNull: false,
        as: "genreId",
      },
    });

    //a genre has many series
    Genre.hasMany(models.series, {
      foreignKey: {
        allowNull: false,
        as: "genreId",
      },
    });
  };

  //after genre creation, delete genres cache
  Genre.afterCreate(() => {
    redisClient.del("genres");
  });
  return Genre;
};
