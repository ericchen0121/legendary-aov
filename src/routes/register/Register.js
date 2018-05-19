/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.css';

import { TWITTER, TWITTER_BLUE } from '../../constants'
import { Icon } from 'react-icons-kit'
import {twitter} from 'react-icons-kit/icomoon/twitter'
import {heart} from 'react-icons-kit/icomoon/heart'

class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>
            Legendary accounts coming soon... let us know how you are using Legendary AOV,
            what features would be useful, and expect more!
          </p>
          <p>
            p.s. <Icon icon={heart} /> the Legendary Team
          </p>
          <p>
            <span className={s.spacer}>
              <a href={TWITTER} target='_blank'>
                <Icon icon={twitter} style={{'color': `${TWITTER_BLUE}`}}/>
              </a>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Register);
