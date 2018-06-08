import DataType from 'sequelize';
import Model from '../../sequelize';

const GameMode = Model.define(
  'GameMode',
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
    tableName: 'game_modes',
    freezeTableName: true
  }
);

export default GameMode;
