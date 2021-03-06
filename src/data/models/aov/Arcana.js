import DataType from 'sequelize';
import Model from '../../sequelize';

const Arcana = Model.define(
  'Arcana',
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataType.STRING,
    },
    tier: {
      type: DataType.INTEGER,
    },
  },
  {
    underscored: true
  }
);

export default Arcana;
