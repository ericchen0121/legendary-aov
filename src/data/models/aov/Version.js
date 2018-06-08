import DataType from 'sequelize';
import Model from '../../sequelize';

const Version = Model.define(
  'Version',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    version_number: {
      type: DataType.STRING(255),
    },

    version_date: {
      type: DataType.DATEONLY,
    },
    server: {
      type: DataType.STRING,
    },
  },
  {
    underscored: true,
    tableName: 'version',
    freezeTableName: true
 }
);

export default Version;
