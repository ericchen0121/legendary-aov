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
import s from './Footer.css';
import Link from '../Link';

import { MAIN_TITLE, IOS_APP_STORE, ANDROID_APP_STORE, ANDROID_COLOR, APPLE_WHITE } from '../../constants'
import { Icon } from 'react-icons-kit'
import {appleinc} from 'react-icons-kit/icomoon/appleinc'
import {android} from 'react-icons-kit/icomoon/android'

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>{`${MAIN_TITLE}`} ©</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">
            Home
          </Link>
          <Link className={s.link} to="/about">
            About
          </Link>
          <span className={s.spacer}>· </span>
          <a href={IOS_APP_STORE} target='_blank'>
            <Icon icon={appleinc} style={{'color': `${APPLE_WHITE}`}} />
          </a>
          <span className={s.spacer}> · </span>
          <a href={ANDROID_APP_STORE} target='_blank'>
            <Icon icon={android} style={{'color': `${ANDROID_COLOR}`}}/>
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
