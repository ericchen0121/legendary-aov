/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../../sequelize';
import Version from './Version';
import GameMode from './GameMode';
import User from '../User';
import Hero from './Hero';
import Build from './Build';
import Item from './Item';

// Item
Version.hasMany(Item, {
  foreignKey: 'version_id',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

// Hero
Hero.belongsTo(Version)

// Build
Build.belongsTo(Hero) // ie. Build will get hero_id
GameMode.hasOne(Build) // Build gets game_mode_id
User.hasMany(Build, {
  foreignKey: 'user_id',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

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
