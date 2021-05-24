'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement:true,
        type: Sequelize.INTEGER,
        primaryKey: true, //기본 키인지 아닌지 설정
      },
      name: {
        unique:true,
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      role: {
        type: Sequelize.ENUM,
        values : ['user', 'partner', 'manager']
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
      queryInterface.createTable('users_bootcamp', {
        id: {
          allowNull: false,
          autoIncrement:true,
          type: Sequelize.INTEGER,
          primaryKey: true, //기본 키인지 아닌지 설정
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
    }).then(function(){
      queryInterface.addColumn('users_bootcamp', 'users_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete:'CASCADE',
        references:{model:'users', key:'id'}
        
      })
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};