'use strict';

const json = require('../server/map.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('svgmap',[
      {
        name: 'korea',
        geojson: JSON.stringify(json)
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
