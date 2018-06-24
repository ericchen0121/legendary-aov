'use strict';

let game_modes = [
  {
    name: '5v5'
  },
  {
    name: 'Death Match'
  },
]
module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('GameMode', game_modes, {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('GameMode', game_modes )
  }
};
