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
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-z0-9\_\-]+$/i,
      }
    },
    email: {
      type: DataType.STRING(255),
      validate: {
        isEmail: true
      },
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
      type: Datatype.STRING,
    },
    last_login: {
      type: DataType.DATE,
      default: sequelize.NOW,
    },
  },
  {
    indexes: [{ fields: ['email'] }],
    underscored: true,
    classMethods: {
      generateHash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
      },
    },
    instanceMethods: {
      comparePassword(password) {
        return bcrypt.compareSync(password, this.password);
      },
    },
  },
);

export default User;
