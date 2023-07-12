"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex("user", "email");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex("user", ["email"], {
      name: "email",
      unique: true,
    });
  },
};
