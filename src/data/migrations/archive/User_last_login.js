module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'User',
        'last_login',
        {
          type: Sequelize.DATE,
          default: Sequelize.NOW,
        }
      )
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('User', 'last_login')
  }
}
