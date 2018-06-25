'use strict';
let CURRENT_VERSION = 2
let DEFAULT_GAME_MODE = 1
let DEFAULT_USER_ID = 1
import HEROES from '../../routes/draft/AovHeroes'

let heroes = HEROES.map(h => {
  return {
    name: h.name
  }
})

let users = [
  {
    username: 'legendaryaov',
    email: 'eric.chen0121@gmail.com',
    email_confirmed: false,
    password: 123
  }
]

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

let builds =[
  {
    name: "Balanced Magic",
    item_1: 14,
    item_2: 33,
    item_3: 15,
    item_4: 13,
    item_5: 41,
    item_6: 24,
    talent_id: 9,
    hero_id: 1,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "abrownbag Jungle",
    item_1: 37,
    item_2: 35,
    item_3: 43,
    item_4: 13,
    item_5: 15,
    item_6: 44,
    talent_id: 3,
    hero_id: 1,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "Tanky Magic",
    item_1: 33,
    item_2: 15,
    item_3: 41,
    item_4: 42,
    item_5: 14,
    item_6: 13,
    talent_id: 9,
    hero_id: 1,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "Durable Assassin",
    item_1: 15,
    item_2: 14,
    item_3: 33,
    item_4: 16,
    item_5: 13,
    item_6: 19,
    talent_id: 9,
    hero_id: 25,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "Straight Down Mid",
    item_1: 14,
    item_2: 33,
    item_3: 19,
    item_4: 13,
    item_5: 15,
    item_6: 21,
    talent_id: 9,
    hero_id: 25,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "Zelph's Lil",
    item_1: 14,
    item_2: 33,
    item_3: 12,
    item_4: 15,
    item_5: 42,
    item_6: 13,
    talent_id: 9,
    hero_id: 25,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "ALG Rest",
    item_1: 32,
    item_2: 24,
    item_3: 17,
    item_4: 26,
    item_5: 47,
    item_6: 50,
    talent_id: 9,
    hero_id: 4,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "SMG Genji",
    item_1: 34,
    item_2: 48,
    item_3: 25,
    item_4: 17,
    item_5: 27,
    item_6: 18,
    talent_id: 9,
    hero_id: 4,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "SMG CK",
    item_1: 33,
    item_2: 24,
    item_3: 17,
    item_4: 47,
    item_5: 25,
    item_6: 48,
    talent_id: 9,
    hero_id: 4,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "Tanky boi",
    item_1: 38,
    item_2: 33,
    item_3: 15,
    item_4: 43,
    item_5: 41,
    item_6: 25,
    talent_id: 3,
    hero_id: 1,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "Slow OP",
    item_1: 28,
    item_2: 34,
    item_3: 17,
    item_4: 13,
    item_5: 44,
    item_6: 21,
    talent_id: 9,
    hero_id: 31,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "Jungle",
    item_1: 39,
    item_2: 32,
    item_3: 3,
    item_4: 42,
    item_5: 6,
    item_6: 1,
    talent_id: 3,
    hero_id: 62,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "ZANE Nova Jungle",
    item_1: 38,
    item_2: 32,
    item_3: 11,
    item_4: 30,
    item_5: 42,
    item_6: 26,
    talent_id: 3,
    hero_id: 22,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "ZANE Jungle",
    item_1: 38,
    item_2: 33,
    item_3: 1,
    item_4: 30,
    item_5: 42,
    item_6: 26,
    talent_id: 3,
    hero_id: 63,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "ZANE Jungle",
    item_1: 39,
    item_2: 33,
    item_3: 1,
    item_4: 30,
    item_5: 4,
    item_6: 26,
    talent_id: 3,
    hero_id: 43,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "ZANE Jungle",
    item_1: 38,
    item_2: 36,
    item_3: 11,
    item_4: 3,
    item_5: 6,
    item_6: 45,
    talent_id: 3,
    hero_id: 56,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: ".__ Jungle",
    item_1: 40,
    item_2: 33,
    item_3: 3,
    item_4: 11,
    item_5: 45,
    item_6: 29,
    talent_id: 3,
    hero_id: 33,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: ".__ Jungler",
    item_1: 51,
    item_2: 11,
    item_3: 6,
    item_4: 4,
    item_5: 8,
    item_6: 3,
    talent_id: 3,
    hero_id: 52,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: ".__ DeathMatch",
    item_1: 12,
    item_2: 35,
    item_3: 13,
    item_4: 15,
    item_5: 44,
    item_6: 17,
    talent_id: 1,
    hero_id: 42,
    game_mode_id: 1,
    user_id: 1,
    version_id: 1
  },
  {
    name: "Tulen Balanced Magic",
    item_1: 4,
    item_2: 5,
    item_3: 6,
    item_4: 7,
    item_5: 8,
    item_6: 4,
    talent_id: 1,
    hero_id: 1,
    game_mode_id: 2,
    user_id: 1,
    version_id: 1
  }
]

let game_modes = [
  {
    name: '5v5'
  },
  {
    name: 'Death Match'
  }
]



module.exports = {
  up : async (queryInterface, Sequelize) => {
    let legendary_user_id
    let game_mode_id
    await queryInterface.sequelize.query(
      `SELECT id from "User" WHERE username='legendaryaov' LIMIT 1`
    ).then(res => legendary_user_id = res[0][0].id)


    await queryInterface.sequelize.query(
      `SELECT id from "GameMode" WHERE name='5v5' LIMIT 1`
    ).then(res => game_mode_id = res[0][0].id)

    let builds_with_user = builds.map(b => {
      b.user_id = legendary_user_id
      b.game_mode_id = game_mode_id
      b.version_id = CURRENT_VERSION
      return b
    })


    await queryInterface.bulkInsert('Build', builds_with_user, {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Build', builds )
  }

};
