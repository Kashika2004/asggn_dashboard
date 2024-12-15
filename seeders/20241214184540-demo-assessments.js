'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'assessments',
      [
        {
          title: 'JavaScript Basics',
          status: 'Completed',
          score: 85,
          date_assigned: new Date('2024-12-05'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'React Advanced',
          status: 'Completed',
          score: 45,
          date_assigned: new Date('2024-12-15'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'CSS Fundamentals',
          status: 'Not Started',
          score: 60,
          date_assigned: new Date('2024-12-20'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'NodeJs Fundamentals',
          status: 'In progress',
          score: 20,
          date_assigned: new Date('2024-12-25'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'ExpressJs',
          status: 'Not Started',
          score: 30,
          date_assigned: new Date('2024-12-28'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assessments', null, {});
  },
};

