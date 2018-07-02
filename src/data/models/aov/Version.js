import DataType from 'sequelize';
import Model from '../../sequelize';

const Version = Model.define(
  'Version',
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    version_number: {
      type: DataType.INTEGER,
    },
    version_date: {
      type: DataType.DATEONLY,
    },
    server: {
      type: DataType.STRING,
      defaultValue: 'NA'
    },
  },
  {
    underscored: true
  }
);

// Version
//   .build({
//     version_number: '1',
//     version_date: '2018-05-25',
//   })
//   .save()
export default Version;
