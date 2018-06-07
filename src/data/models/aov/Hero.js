import DataType from 'sequelize';
import Model from '../../sequelize';

const Hero = Model.define(
  'Hero',
  {
    id: {
      type: DataType.INTEGER,
    },

    name: {
      type: DataType.STRING(255),
    },
  },
  { underscored: true }
);

// id: {
//   type: DataType.UUID,
//   defaultValue: DataType.UUIDV1,
//   primaryKey: true,
// },
export default Hero;
