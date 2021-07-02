'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function(){
      queryInterface.addColumn('reviews','users_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: 'set null',
        references: {model: 'users', key: 'id'}
      })
    }).then(function(){
      queryInterface.addColumn('reviews', 'bootcamp_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: 'set null',
        references: {model: 'bootcamp_lists', key: 'id'}
      })
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reviews');
  }
};