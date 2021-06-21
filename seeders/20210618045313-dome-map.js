'use strict';

const json = require('../server/map.json');
const map2 = require('../server/database/svgmap_nation_2');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('svgmap',[
      {
        name: 'korea',
        geojson: JSON.stringify(json)
      }
    ])
    await queryInterface.bulkInsert('svgmap',[
      {
        name: 'nation',
        geojson: JSON.stringify(map2)
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
