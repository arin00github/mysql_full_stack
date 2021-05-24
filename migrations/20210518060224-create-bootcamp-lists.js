'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bootcamp_lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      personCount: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
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
      queryInterface.addColumn('users_bootcamp','bootcamp_id', {
        type: Sequelize.INTEGER,
        allowNull:true,
        references: {
          model: 'bootcamp_lists',
          key: 'id'
        }
      })
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bootcamp_lists');
  }
};