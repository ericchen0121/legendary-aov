import DataType from 'sequelize';
import Model from '../../sequelize';

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
    created_at: {
      type: DataType.DATE,
      defaultValue: DataType.NOW,
    },
    updated_at: {
      type: DataType.DATE,
      defaultValue: DataType.NOW,
    }
  },
  {
    underscored: true,
  }
);


export default Hero;
