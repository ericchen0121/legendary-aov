'use strict';
import HEROES from '../routes/draft/AovHeroes'

let heroes = HEROES.map(h => {
  return {
    name: h.name,
    version_id: 1
})
module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Hero', [{
      first_name : 'John',
      last_name : 'Doe',
      bio : 'I am a new user to this application',
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'johnDoe@test.com'
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', [{
      first_name :'John'
    }])
  }
};
