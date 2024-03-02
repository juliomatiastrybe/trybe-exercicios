// src/seeders/[timestamp]-employees.js

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert(
'employees',
      [
        {
          id: 1,
          first_name: 'Marcos',
          last_name: 'Zuck',
          age: 49,
        },
        {
          id: 2,
          first_name: 'Fred',
          last_name: 'Mercúrio',
          age: 19,
        },
        {
          id: 3,
          first_name: 'Ayrton',
          last_name: 'Keno',
          age: 51,
        },
        {
          id: 4,
          first_name: 'Robin',
          last_name: 'Mathias',
          age: 63,
        },
        { 
          id: 5,
          first_name: 'Antonio', 
          last_name: 'Augusto', 
          age: 18 
        }
    ],
      {},
    ),

  down: async (queryInterface, _Sequelize) => queryInterface.bulkDelete('employees', null, {}),
};