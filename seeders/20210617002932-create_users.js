'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      email: 'arin00@naver.com',
      name: 'arin',
      active: true,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      email: 'amenda@naver.com',
      name: 'amenda',
      active: true,
      role: 'manager',
      createdAt: new Date(),
      updatedAt: new Date(),
    },])

    await queryInterface.bulkInsert('bootcamp_lists', [{
      title: 'nodejs',
      personCount: 20,
      price: 49000,
      createdAt: new Date(),
      updatedAt: new Date()
    }])


    const users = await queryInterface.sequelize.query('SELECT id FROM users;');
    const bootcamp = await queryInterface.sequelize.query('SELECT id FROM bootcamp_lists')
    const userRow = users[1];
    const bootcampRow = bootcamp[0];

    await queryInterface.bulkInsert('users_bootcamp', [{
      users_id: userRow[0].id,
      bootcamp_id: bootcampRow[0].id
    }])

    return await queryInterface.bulkInsert('reviews', [{
      users_id: userRow[0].id,
      bootcamp_id: bootcampRow[0].id,
      content: '이해하기 쉬운 강의'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('bootcamp_lists', null, {});
    await queryInterface.bulkDelete('reviews', null, {});
    await queryInterface.bulkDelete('users_bootcamp', null, {});
  }
};
