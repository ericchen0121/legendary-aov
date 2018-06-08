import DataType from 'sequelize';
import Model from '../../sequelize';

const Item = Model.define(
  'Item',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

     name: {
      type: DataType.STRING(255),
    },
  },
  {
    underscored: true,
    tableName: 'items',
    freezeTableName: true
  }
);

export default Item;
