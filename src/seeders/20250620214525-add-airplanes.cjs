"use strict";

const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "AI001",
          capacity: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "AI002",
          capacity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "AI003",
          capacity: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Airplanes", {
      [Op.or]: [
        {
          modelNumber: "AI001",
        },
        {
          modelNumber: "AI003",
        },
      ],
    });
  },
};
