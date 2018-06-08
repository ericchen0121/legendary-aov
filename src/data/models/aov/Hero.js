import DataType from 'sequelize';
import Model from '../../sequelize';

const Hero = Model.define(
  'Hero',
  {
    id: {
      type: DataType.INTEGER,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    name: {
      type: DataType.STRING(255),
    },
  },
  {
    underscored: true,
    tableName: 'heroes',
    freezeTableName: true
  }
);


export default Hero;
