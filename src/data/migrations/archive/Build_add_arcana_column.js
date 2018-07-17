module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'Build',
        'arcana',
        {
          type: Sequelize.ARRAY(Sequelize.INTEGER),
        }
      )
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Build',
      'arcana'
    );
  }
}
