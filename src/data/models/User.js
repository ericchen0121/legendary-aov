/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';
import bcrypt from 'bcrypt'

// bcrypt methods
//
// bcrypt: {
// genSaltSync: [Function: genSaltSync],
// genSalt: [Function: genSalt],
// hashSync: [Function: hashSync],
// hash: [Function: hash],
// compareSync: [Function: compareSync],
// compare: [Function: compare],
// getRounds: [Function: getRounds] }
// }


const User = Model.define(
  'User',
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataType.STRING(255),
      unique: true,
    },
    email: {
      type: DataType.STRING(255),
      validate: {
        isEmail: true
      },
      unique: true,
    },
    email_confirmed: {
      type: DataType.BOOLEAN,
      defaultValue: false,
    },
    password: {
      type: DataType.STRING,
    },
    last_login: {
      type: DataType.DATE,
      defaultValue: DataType.NOW,
    },
  },
  {
    indexes: [{ fields: ['email', 'username'] }],
    underscored: true,
    hooks: {
      beforeCreate: (user, options) => {
        // save pw hash instead of pw string
        user.password = bcrypt.hashSync(user.password, 8)
      }
    }
  },
);

export function compare_password(string_pw, hash_pw) {
  return bcrypt.compareSync(string_pw, hash_pw)
}

export default User;
