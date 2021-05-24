'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('users', [
     {
       name : 'stellar',
       email: 'stellar@gmail.com',
       active: true,
       role:'user',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])

   await queryInterface.bulkInsert('users', [
    {
      name : 'noah',
      email: 'noah@gmail.com',
      active: true,
      role:'manager',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  await queryInterface.bulkInsert('users', [
    {
      name : 'jack',
      email: 'jack@gmail.com',
      active: true,
      role:'partner',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])

   await queryInterface.bulkInsert('bootcamp_lists', [
      {
        title: 'mysql-database',
        personCount: 20,
        price: 59000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
   ])
   await queryInterface.bulkInsert('bootcamp_lists', [
    {
      title: 'typescript',
      personCount: 15,
      price: 49000,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
 ])


   const users = await queryInterface.sequelize.query('SELECT id FROM users');
   const bootcamp = await queryInterface.sequelize.query('SELECT id FROM bootcamp_lists')
   const usersRows = users[0];
   console.log("usersRows",usersRows);
   const bootcampRows = bootcamp[0];

   await queryInterface.bulkInsert('users_bootcamp', [
     {
       users_id: usersRows[0].id,
       bootcamp_id: bootcampRows[1].id,
       createdAt: new Date(),
       updatedAt: new Date(),
     }
   ])

   return await queryInterface.bulkInsert('reviews', [
     {
       users_id: usersRows[0].id,
       bootcamp_id: bootcampRows[0].id,
       content: "데이터베이스에 관해 초보도 쉽게 알 수 있었습니다",
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
     await queryInterface.bulkDelete('users', null, {});
     await queryInterface.bulkDelete('bootcamp_lists', null, {});
     await queryInterface.bulkDelete('users_bootcamp', null, {});
     await queryInterface.bulkDelete('reviews', null, {});
  }
};
