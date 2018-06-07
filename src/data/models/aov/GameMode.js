import DataType from 'sequelize';
import Model from '../../sequelize';

const GameMode = Model.define(
  'GameMode',
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

export default GameMode;
