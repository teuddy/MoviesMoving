"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("series", {
      //id
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
    await queryInterface.dropTable("series");
  },
};
