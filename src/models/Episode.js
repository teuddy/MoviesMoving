const Sequelize = require("sequelize");

//create episode model
module.exports = (sequelize, Sequelize) => {
  const Episode = sequelize.define("episodes", {
    //id
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    //name
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    //sipnosis
    sipnosis: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    //url
    url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    //season number
    seasonNumber: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    //episode number
    episodeNumber: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  // an episode belongs to a series
  Episode.associate = (models) => {
    Episode.belongsTo(models.series, {
      foreignKey: {
        allowNull: false,
        as: "seriesId",
      },
    });
  };
  return Episode;
};
