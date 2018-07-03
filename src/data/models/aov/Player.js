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
    name: {
      type: DataType.STRING,
      allowNull: false
    },
    real_name: {
      type: DataType.STRING
    },
    role: {
      type: DataType.STRING,
    },
    twitter: {
      type: DataType.STRING,
    },
    facebook: {
      type: DataType.STRING,
    },
    youtube: {
      type: DataType.STRING,
    },
    instagram: {
      type: DataType.STRING,
    },
    twitch: {
      type: DataType.STRING,
    },
    email: {
      type: DataType.STRING,
    },
    discord: {
      type: DataType.STRING,
    },
    garena: {
      type: DataType.STRING,
    }
  },
  {
    underscored: true
  }
);

export default Player;
