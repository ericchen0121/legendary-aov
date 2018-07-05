import sequelize from '../../sequelize';
import Tweet from './Tweet';

function sync(...args) {
  return sequelize.sync({
    ...args,
    logging: console.log
  });
}

export default { sync };
export {
  Tweet
};
