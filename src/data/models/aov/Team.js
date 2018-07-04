import DataType from 'sequelize';
import Model from '../../sequelize';

const Team = Model.define(
  'Team',
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
    alt_name: {
      type: DataType.STRING,
    },
    url: {
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
    },
    country: {
      type: DataType.STRING,
    },
    region: {
      type: DataType.STRING,
    },
    server: {
      type: DataType.STRING,
    }
  },
  {
    underscored: true
  }
);

export default Team;
