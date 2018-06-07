import DataType from 'sequelize';
import Model from '../../sequelize';

const Build = Model.define(
  'Build',
  {
    id: {
      type: DataType.INTEGER,
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
      type: DataType.ARRAY,
    },
    item_2_alt: {
      type: DataType.ARRAY,
    },
    item_3_alt: {
      type: DataType.ARRAY,
    },
    item_4_alt: {
      type: DataType.ARRAY,
    },
    item_5_alt: {
      type: DataType.ARRAY,
    },
    item_6_alt: {
      type: DataType.ARRAY,
    },
    game_mode: {
      type: DataType.INTEGER,
    }
  },
  { underscored: true }
);

export default Build;
