'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      email: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM,
        values: ['manager', 'user', 'partner']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    { timestamp: true, underscored: false }
    ).then(function(){
      queryInterface.createTable('users_bootcamp', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        users_id:{
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: 'cascade',
          onUpdate: 'cascade',
          references:{model: 'users',key: 'id'}
        }
      },{
        timestamp: true, underscored: false
      })}
    )},
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};