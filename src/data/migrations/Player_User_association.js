import {User} from '../models/index'

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


  // associations can be defined here
  Player.associate = function (models) {
    User.hasOne(Player, {
      foreignKey: 'user_id',
      as: 'player',
      onUpdate: 'cascade',
      onDelete: 'cascade',
    })

  };
  return Player;
};
