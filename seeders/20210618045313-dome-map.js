'use strict';

const json = require('../server/database/map.json');
const map2 = require('../server/database/svgmap_nation.json');

const seoul = require('../server/database/svgmap_seoul.json');
const busan = require('../server/database/svgmap_Busan.json');
const ulsan = require('../server/database/svgmap_Ulsan.json');
const chungCheongBuk = require('../server/database/svgmap_ChungCheongBuk.json');
const chungCheongNam = require('../server/database/svgmap_ChungCheongNam.json');
const gyeonggi = require('../server/database/svgmap_Gyeonggi.json');
const incheon = require('../server/database/svgmap_Incheon.json');
const Sejong = require('../server/database/svgmap_Sejong.json');
const daegu = require('../server/database/svgmap_Daegu.json');
const gangwon = require('../server/database/svgmap_Gangwon.json');
const daejeon = require('../server/database/svgmap_Daejeon.json');
const gwangju = require('../server/database/svgmap_Gwangju.json');
const Jeollabuk = require('../server/database/svgmap_Jeollabuk.json');
const Jeollanam = require('../server/database/svgmap_Jeollanam.json');
const Jeju = require('../server/database/svgmap_Jeju.json');
const gyeongsangbuk = require('../server/database/svgmap_Gyeongsangbuk.json');
const gyeongsangnam = require('../server/database/svgmap_Gyeongsangnam.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('svgmap', [{
      name: 'korea',
      geojson: JSON.stringify(json)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'nation',
      geojson: JSON.stringify(map2)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Seoul',
      geojson: JSON.stringify(seoul)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Busan',
      geojson: JSON.stringify(busan)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Ulsan',
      geojson: JSON.stringify(ulsan)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Daegu',
      geojson: JSON.stringify(daegu)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Chungcheongbuk-do',
      geojson: JSON.stringify(chungCheongBuk)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Chungcheongnam-do',
      geojson: JSON.stringify(chungCheongNam)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Sejong-si',
      geojson: JSON.stringify(Sejong)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Daejeon',
      geojson: JSON.stringify(daejeon)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Jeju-do',
      geojson: JSON.stringify(Jeju)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Gyeonggi-do',
      geojson: JSON.stringify(gyeonggi)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Incheon',
      geojson: JSON.stringify(incheon)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Gwangju',
      geojson: JSON.stringify(gwangju)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Gangwon-do',
      geojson: JSON.stringify(gangwon)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Jeollabuk-do',
      geojson: JSON.stringify(Jeollabuk)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Jeollanam-do',
      geojson: JSON.stringify(Jeollanam)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Gyeongsangbuk-do',
      geojson: JSON.stringify(gyeongsangbuk)
    }])
    await queryInterface.bulkInsert('svgmap', [{
      name: 'Gyeongsangnam-do',
      geojson: JSON.stringify(gyeongsangnam)
    }])
  },

  down: async (queryInterface, Sequelize) => {

  }
};