'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name : 'jack',
        email: 'jack@naver.com',
        active: true,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : 'stellar',
        email: 'stellar@naver.com',
        active: true,
        role: 'manager',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name : 'peter',
        email: 'peter@naver.com',
        active: true,
        role: 'partner',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])


    await queryInterface.bulkInsert('bootcamp_lists', [
      {
        title : 'codeState',
        personCount: 20,
        price : 89000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title : 'react',
        personCount: 10,
        price : 129000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])

    const users = await queryInterface.sequelize.query(`SELECT id FROM users;`);
    const bootcamp = await queryInterface.sequelize.query(`SELECT id FROM bootcamp_lists`);
    const usersRows = users[1];
    const bootcampRows = bootcamp[0];

    await queryInterface.bulkInsert('users_bootcamp', [
      {
        users_id: usersRows[0].id,
        bootcamp_id: usersRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])

    return await queryInterface.bulkInsert('reviews', [
      {
        users_id: usersRows[0].id,
        bootcamp_id: usersRows[0].id,
        content: '이해하기 쉽다',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
