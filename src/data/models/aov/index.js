/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../../sequelize';
import Build from './Build';
import GameMode from './GameMode';
import Hero from './Hero';
import Item from './Item';
import Version from './Version';

console.log('AOV INDEX --------')
// Build.belongsTo(Hero) // hero_id on Build
// Build.belongsTo()
// User.hasMany(UserLogin, {
//   foreignKey: 'userId',
//   as: 'logins',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// });
//
// User.hasMany(UserClaim, {
//   foreignKey: 'userId',
//   as: 'claims',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// });
//
// User.hasOne(UserProfile, {
//   foreignKey: 'userId',
//   as: 'profile',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// });

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export {
  Build,
  GameMode,
  Hero,
  Item,
  Version
};
