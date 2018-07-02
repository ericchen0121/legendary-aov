/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */

import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import { User, UserLogin, UserProfile } from './data/models';
import bcrypt from 'bcrypt'
/**
 * Sign in with UN/PW
 */
passport.use(
  new BasicStrategy(
    function(username, password, cb) {
      User.findOne({ username: username }, function (err, user) {

        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (!user.validPassword(password)) { return cb(null, false); }
        return cb(null, user);
      });
    }
  )
)

export default passport_http;
