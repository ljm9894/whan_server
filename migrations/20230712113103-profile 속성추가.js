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
<<<<<<< HEAD:migrations/20230712113103-profile 속성추가.js
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
=======
    await queryInterface.addColumn("user", "refreshtoken", {
      type: Sequelize.STRING(100),
      allowNull: true,
    });
>>>>>>> jinsoo1004:migrations/20230712075844-refreshToken추가.js
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
