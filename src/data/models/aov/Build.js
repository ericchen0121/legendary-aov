import DataType from 'sequelize';
import Model from '../../sequelize';

let CURRENT_VERSION = 2
let DEFAULT_GAME_MODE = 1
let DEFAULT_USER_ID = 1


const Build = Model.define(
  'Build',
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataType.STRING,
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
      defaultValue: []
    },
    item_2_alt: {
      type: DataType.ARRAY(DataType.INTEGER),
      defaultValue: []
    },
    item_3_alt: {
      type: DataType.ARRAY(DataType.INTEGER),
      defaultValue: []
    },
    item_4_alt: {
      type: DataType.ARRAY(DataType.INTEGER),
      defaultValue: []
    },
    item_5_alt: {
      type: DataType.ARRAY(DataType.INTEGER),
      defaultValue: []
    },
    item_6_alt: {
      type: DataType.ARRAY(DataType.INTEGER),
      defaultValue: []
    },
    talent_id: {
      type: DataType.INTEGER
    },
    hero_id: {
      type: DataType.INTEGER
    },
    game_mode_id: {
      type: DataType.INTEGER,
      defaultValue: DEFAULT_GAME_MODE
    },
    user_id: {
      type: DataType.INTEGER,
      defaultValue: DEFAULT_USER_ID
    },
    version_id: {
      type: DataType.INTEGER,
      defaultValue: CURRENT_VERSION
    },
    notes: {
      type: DataType.JSONB
    },
  },
  {
    underscored: true
  }
);

export default Build;
