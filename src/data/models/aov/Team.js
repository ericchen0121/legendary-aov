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
    country: {
      type: DataType.STRING,
    },
    region: {
      type: DataType.STRING,
    }
  },
  {
    underscored: true
  }
);

export default Team;
