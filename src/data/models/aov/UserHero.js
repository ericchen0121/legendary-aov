import DataType from 'sequelize';
import Model from '../../sequelize';

const UserHero = Model.define(
  'UserHero',
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataType.INTEGER,
    },
    hero_id: {
      type: DataType.INTEGER,
    },
    type: {
      type: DataType.STRING,
    },
  },
  {
    underscored: true
  }
);

export default UserHero;
