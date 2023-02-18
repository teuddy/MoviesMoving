"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("movies", {
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
      //genre association
      genreId: {
        type: Sequelize.INTEGER,
        references: {
          model: "genres",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
        type: Sequelize.TEXT("long"),
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
    await queryInterface.dropTable("movies");
  },
};
