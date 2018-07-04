'use strict';

import PLAYERS from './data/players'
import TEAMS from  './data/teams'

module.exports = {
  up : async (queryInterface, Sequelize) => {
    // TEAMS, PLAYERS
    //
    let teams = TEAMS
    await queryInterface.bulkInsert('Team', TEAMS, {})

    // PLAYERS
    await queryInterface.bulkInsert('Player', PLAYERS, {})
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Team', TEAMS, {});
    queryInterface.bulkDelete('Player', PLAYERS, {});
  }

};
