module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
        'Player',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          game_name: Sequelize.STRING,
          real_name: Sequelize.STRING,
          team: Sequelize.STRING
        }
      )
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Player')
  }
}
