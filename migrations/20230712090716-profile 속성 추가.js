'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn("profile", "name");
    await queryInterface.addColumn("profile", "nick",{
      type : Sequelize.STRING(100),
      allowNull : true,
    });
    await queryInterface.addColumn("profile", "age",{
      type : Sequelize.INTEGER,
       allowNull : true
    });
    
    await queryInterface.addColumn("profile","location",{
      type : Sequelize.STRING,
      allowNull : true,
    });
    await queryInterface.addColumn("profile", "info", {
        type : Sequelize.STRING,
        allowNull : true
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
