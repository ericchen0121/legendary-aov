module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'Build',
        'notes',
        {
          type: Sequelize.JSONB
        }
      )
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Build', 'notes')
  }
}
