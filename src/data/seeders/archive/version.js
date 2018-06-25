'use strict';

let versions = [
  {
    version_number: 1,
    version_date: '2018-04-12',
    server: 'NA'
  },
  {
    version_number: 2,
    version_date: '2018-05-26',
    server: 'NA'
  }
]

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Version', versions, {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Version', versions)
  }
};
