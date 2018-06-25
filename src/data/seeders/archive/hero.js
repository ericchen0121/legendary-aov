'use strict';
import HEROES from '../../routes/draft/AovHeroes'
let CURRENT_VERSION = 2

let heroes = HEROES.map(h => {
  return {
    name: h.name,
    version_id: CURRENT_VERSION
  }
})

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Hero', heroes, {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Hero', heroes)
  }
};
