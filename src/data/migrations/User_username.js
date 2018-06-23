module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'User',
        'username',
        {
          type: DataType.STRING(255),
          unique: true,
          validate: {
            is: /^[a-z0-9\_\-]+$/i,
          }
        }
      )
    ]
  },
  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('User', 'username')
    ]
  }
}
