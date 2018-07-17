module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
        'Arcana',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
          },
          name: Sequelize.STRING,
          tier: Sequelize.INTEGER,
        }
      )
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Arcana')
  }
}
