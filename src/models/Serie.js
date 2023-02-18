const Sequelize = require("sequelize");

//create a Serie model
module.exports = (sequelize, Sequelize) => {
  const Serie = sequelize.define("series", {
    //id
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    //description
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    //coverImage
    coverImage: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    //year
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  // a series has many episodes
  Serie.associate = (models) => {
    Serie.hasMany(models.episodes, {
      foreignKey: {
        allowNull: false,
        as: "serieId",
      },
    });
  };
  // genres has many series
  Serie.associate = (models) => {
    Serie.belongsTo(models.genres, {
      foreignKey: {
        allowNull: false,
        as: "genreId",
      },
    });
  };
  return Serie;
};
