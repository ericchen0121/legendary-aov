/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../sequelize';
import User from './User';
import UserLogin from './UserLogin';
import UserProfile from './UserProfile';
import { Hero, Build, Item, GameMode, Version, Player, Team } from './aov'
import { Tweet } from './social'

User.hasMany(UserLogin, {
  foreignKey: 'user_id',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.hasOne(UserProfile, {
  foreignKey: 'user_id',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

function sync(...args) {
  return sequelize.sync({
    // alter: true,
    ...args
  });
}

export default { sync };
export { User, UserLogin, UserProfile, Hero, Build, Item, GameMode, Version, Player, Team, Tweet }
