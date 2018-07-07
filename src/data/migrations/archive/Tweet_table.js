module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
        'Tweet',
        {
          twid: {
            type: Sequelize.STRING,
            primaryKey: true,
          },
          active: {
            type: Sequelize.BOOLEAN,
          },
          author: {
            type: Sequelize.STRING,
          },
          avatar: {
            type: Sequelize.STRING,
          },
          body: {
            type: Sequelize.STRING,
          },
          date: {
            type: Sequelize.DATE,
          },
          screenname: {
            type: Sequelize.STRING,
          },
        }
      )
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Tweet')
  }
}
