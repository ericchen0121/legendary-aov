import DataType from 'sequelize';
import Model from '../../sequelize';

const Tweet = Model.define(
  'Tweet',
  {
    twid: {
      type: DataType.STRING,
      primaryKey: true,
    },
    active: {
      type: DataType.BOOLEAN
    },
    author: {
      type: DataType.STRING
    },
    avatar: {
      type: DataType.STRING
    },
    body: {
      type: DataType.STRING
    },
    date: {
      type: DataType.DATE
    },
    screenname: {
      type: DataType.STRING
    },
  },
  {
    underscored: true
  }
);

export default Tweet;
