import DataType from 'sequelize';
import Model from '../../sequelize';

const Build = Model.define(
  'Build',
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
  },
  {
    underscored: true
  }
);

// const build = Build.build({title: 'very important task'})

// Build
//   .build({
//     item_1: 3,
//     item_2: 1,
//     item_3: 4,
//     item_4: 5,
//     item_5: 1,
//     item_6: 1,
//     item_1_alt: [1],
//     item_2_alt: [1],
//     item_3_alt: [1],
//     item_4_alt: [1],
//     item_5_alt: [1],
//     item_6_alt: [1],
//   })
//   .save()
export default Build;
