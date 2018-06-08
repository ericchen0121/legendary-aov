import DataType from 'sequelize';
import Model from '../../sequelize';

const Item = Model.define(
  'Item',
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataType.STRING(255),
    },
    type: {
      type: DataType.STRING(255),
    },
    cost: {
      type: DataType.INTEGER,
    },
  },
  {
    underscored: true
  }
);

export default Item;
