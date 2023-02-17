const Sequelize = require("sequelize");

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
    //movieFile:
    movieFile: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  //a genre has many movies
  Movie.associate = (models) => {
    Movie.belongsTo(models.genres, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Movie;
};
