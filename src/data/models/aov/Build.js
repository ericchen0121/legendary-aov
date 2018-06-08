import DataType from 'sequelize';
import Model from '../../sequelize';

const Build = Model.define(
  'Build',
  {
    id: {
      type: DataType.INTEGER,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },
    hero_id: {
      type: DataType.INTEGER,
    },
    user_id: {
      type: DataType.INTEGER
    },
    item_1: {
      type: DataType.INTEGER,
    },
    item_2: {
      type: DataType.INTEGER,
    },
    item_3: {
      type: DataType.INTEGER,
    },
    item_4: {
      type: DataType.INTEGER,
    },
    item_5: {
      type: DataType.INTEGER,
    },
    item_6: {
      type: DataType.INTEGER,
    },
    item_1_alt: {
      type: DataType.ARRAY(DataType.INTEGER),
    },
    item_2_alt: {
      type: DataType.ARRAY(DataType.INTEGER),
    },
    item_3_alt: {
      type: DataType.ARRAY(DataType.INTEGER),
    },
    item_4_alt: {
      type: DataType.ARRAY(DataType.INTEGER),
    },
    item_5_alt: {
      type: DataType.ARRAY(DataType.INTEGER),
    },
    item_6_alt: {
      type: DataType.ARRAY(DataType.INTEGER),
    },
    game_mode_id: {
      type: DataType.INTEGER,
    }
  },
  {
    underscored: true,
    tableName: 'builds',
    freezeTableName: true
  }
);

export default Build;
