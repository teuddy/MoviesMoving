const Sequelize = require("sequelize");

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
  };
  return Genre;
};
