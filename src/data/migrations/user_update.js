module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'User',
        'password',
        {
          type: Sequelize.STRING,
        },
      )
    ]
  },
  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('User', 'password')
    ]
  }
}
