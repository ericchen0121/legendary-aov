module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define(
    'Player',
    {
      id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      game_name: {
        type: DataType.STRING,
      },
      real_name: {
        type: DataType.STRING,
      },
      team: {
        type: DataType.STRING,
      },
    },
    {
      underscored: true
    }
  )

  return Player;
};
