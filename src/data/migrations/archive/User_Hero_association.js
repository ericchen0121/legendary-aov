module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
        'UserHero',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
          },
          user_id: Sequelize.INTEGER,
          hero_id: Sequelize.INTEGER,
          type: Sequelize.STRING,
        }
      )
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('UserHero')
  }
}
