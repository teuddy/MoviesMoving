"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("episodes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      //serieid
      serieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "series",
          key: "id",
        },
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("episodes");
  },
};
