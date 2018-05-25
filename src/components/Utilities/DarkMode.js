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
import s from './DarkMode.css';
import { Icon } from 'react-icons-kit';

import {ic_lightbulb_outline} from 'react-icons-kit/md/ic_lightbulb_outline'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DarkMode extends React.Component {

  render() {
    const { utilities } = this.props
    const { dark_mode_active } = utilities

    let icon_color = '#303030'
    if (dark_mode_active) { icon_color = 'white' }

    return (
      <span
        onClick={this.props.actions.toggleDarkMode}
        style={{'color': icon_color }}
      >
        <Icon icon={ic_lightbulb_outline} size={16} />
      </span>
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
  connect(mapStateToProps, mapDispatchToProps)(DarkMode)
)
