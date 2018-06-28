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
import DarkMode from '../Utilities/DarkMode.js';

import { TWITTER } from '../../constants';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/icomoon/twitter';

import * as Actions from '../../routes/login/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Navigation extends React.Component {
    constructor(props) {
      super(props)
      if (typeof(localStorage) !== 'undefined'){
        this._retrieveUserData()
      }
    }

    _retrieveUserData = () => {
      let legendaryaov_user = JSON.parse(localStorage.getItem('legendaryaov_user'))
      this.props.actions.loginUser(legendaryaov_user)
    }

  render() {
    let { user_login } = this.props
    console.log( user_login )
    return (
      <div className={s.root} role="navigation">
        <Link className={cx(s.link)} to="/video">
          Videos
        </Link>
        <Link className={cx(s.link)} to="/build">
          Builds
        </Link>
        { user_login.is_logged_in &&
          (<Link className={cx(s.link)} to="/build/me">
            My Builds
          </Link>)
        }
        <Link className={cx(s.link)} to="/build/create">
          Create Build
        </Link>
        <span className={s.spacer}> | </span>
        { !user_login.is_logged_in ?
          (<Link className={cx(s.link, s.highlight, s.signup)} to="/login">
            Login/Register
          </Link>) :
          (<span className={cx(s.username, s.highlight)}>
            {user_login.username}
          </span>)
        }
        <a href={TWITTER} target="_blank">
          <Icon icon={twitter} style={{ color: 'white' }} />
        </a>
        <span className={s.spacer}> | </span>
        <DarkMode />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default withStyles(s)(
    connect(mapStateToProps, mapDispatchToProps)(Navigation)
)
