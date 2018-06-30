import DataType from 'sequelize';
import Model from '../../sequelize';

const Player = Model.define(
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
);

export default Player;
