import DataType from 'sequelize';
import Model from '../../sequelize';

const CURRENT_VERSION = 1

const Hero = Model.define(
  'Hero',
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataType.STRING(255),
    },
  },
  {
    underscored: true,
  }
);


export default Hero;
