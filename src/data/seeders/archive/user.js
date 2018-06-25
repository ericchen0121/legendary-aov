'use strict';

let users = [
  {
    username: 'legendaryaov',
    email: 'eric.chen0121@gmail.com',
    email_confirmed: false,
    password: 123
  }
]
module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', users, {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('User', users )
  }
};
