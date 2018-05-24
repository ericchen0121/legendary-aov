/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

import { TWITTER } from '../../constants'
import { Icon } from 'react-icons-kit'
import {twitter} from 'react-icons-kit/icomoon/twitter'

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <a href={TWITTER} target='_blank'>
          <Icon icon={twitter} style={{'color': 'white'}}/>
        </a>
        <span className={s.spacer}> | </span>
        <Link className={cx(s.link, s.highlight, s.signup)} to="/register">
          Sign up
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
