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
      unique: {
        args: true,
        msg: 'Email address already in use!',
      },
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
      default: DataType.NOW,
    },
  },
  {
    indexes: [{ fields: ['email'] }],
    underscored: true,
    // classMethods: {
    //   generateHash(password) {
    //
    //     return bcrypt.hash(password, 8).then(res => {
    //       console.log('store hash in pw db field', password, res)
    //       //STORE PW IN DB
    //     })
    //   },
    // },
    instanceMethods: {
      comparePassword(password) {
        return bcrypt.compare(password, this.password).then(res => {
          console.log('comparison is...', res)
        })
      },
    },
  },
);

export default User;
