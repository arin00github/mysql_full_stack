'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('svgmap', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      geojson: {
        type: Sequelize.TEXT('long'),
        get: function (){
          return JSON.parse(this.getDataValue('value'));
        },
        set: function(value){
          this.setDataValue('value', JSON.stringify(value))
        }
      }
    },{
      timestamp: false, underscored: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('svgmap');
  }
};