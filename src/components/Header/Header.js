/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  // <div className={s.brand_slash}/> would go after the img. Change it to true px left and right in css, not %-based

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <div className={s.brand_container}>
            <Link className={s.brand} to="/">
              <span className={s.brandTxt}>legend<span className={s.brandTxtAccent}>A</span>ry</span>
            </Link>
            <img className={s.logo} src='/aov/logo/aov-logo-white-small.png' />

          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
