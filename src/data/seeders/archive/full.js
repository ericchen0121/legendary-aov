'use strict';
let CURRENT_VERSION = 15
let DEFAULT_GAME_MODE = 1
let DEFAULT_USER_ID = 1

import HEROES from '../../routes/draft/AovHeroes'
import USERS from './data/users'
import PLAYERS from './data/players'
import BUILDS from './data/builds'
import GAME_MODES from './data/game_modes'
import VERSIONS from './data/versions'
import TEAMS from  './data/teams'

import bcrypt from 'bcrypt'

module.exports = {
  up : async (queryInterface, Sequelize) => {

    // VERSIONS
    await queryInterface.bulkInsert('Version', VERSIONS, {})
    let version_id
    await queryInterface.sequelize.query(
      `SELECT id from "Version" WHERE version_number=${CURRENT_VERSION} LIMIT 1`
    ).then(res => {version_id = res[0][0].id; console.log('version_id', version_id)})


    await queryInterface.bulkInsert('GameMode', GAME_MODES, {});

    // USERS
    //
    let users_w_hash = USERS.map(u => {
      u.password = bcrypt.hashSync(u.password, 8)
      return u
    })
    await queryInterface.bulkInsert('User', users_w_hash, {});

    // HEROES
    //
    let heroes = HEROES.map(h => {
      return {
        name: h.name,
        version_id: version_id
      }
    })

    await queryInterface.bulkInsert('Hero', heroes, {});

    // USERS
    //
    let legendary_user_id
    await queryInterface.sequelize.query(
      `SELECT id from "User" WHERE username='legendaryaov' LIMIT 1`
    ).then(res => legendary_user_id = res[0][0].id)


    // GAME MODES
    //
    let game_mode_id
    await queryInterface.sequelize.query(
      `SELECT id from "GameMode" WHERE name='5v5' LIMIT 1`
    ).then(res => game_mode_id = res[0][0].id)


    // BUILDS
    //

    let builds_with_user = BUILDS.map(b => {
      b.user_id = legendary_user_id
      b.game_mode_id = game_mode_id
      b.version_id = version_id
      return b
    })

    await queryInterface.bulkInsert('Build', builds_with_user, {})

    // TEAMS
    //
    await queryInterface.bulkInsert('Team', TEAMS, {})

    // PLAYERS
    await queryInterface.bulkInsert('Player', PLAYERS, {})
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Build', BUILDS )
    queryInterface.bulkDelete('GameMode', GAME_MODES, {});
    queryInterface.bulkDelete('Hero', heroes, {});
    queryInterface.bulkDelete('Version', VERSIONS, {});
    queryInterface.bulkDelete('User', USERS, {});
    queryInterface.bulkDelete('Player', PLAYERS, {});
    queryInterface.bulkDelete('Team', TEAMS, {});
  }

};
