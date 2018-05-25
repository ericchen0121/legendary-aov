import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import s from './Aov.css';
import classNames from 'classnames'

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  logo: {
    width: 30,
    height: 30
  },
  tab: {
    minWidth: 95
  }
});


class DraftFilters extends Component {

  render() {
    const {
      classes,
      onTopLevelFilterChange,
      onLowerLevelFilterChange,
      top_level_filter_selected,
      lower_level_filter_selected,
      filters,
      is_mobile,
      dark_mode_active
    } = this.props;

    let top_level_appbar = null
    let lower_level_appbar = null
    let top_level_tabs = Object.keys(filters).map(filter => {
      return <Tab label={ filter } value = { filter }/>
    })

    let lower_level_tabs = filters[top_level_filter_selected].map(filter => {
      if (top_level_filter_selected === 'TEAM') {
        return <Tab icon={ logo(filter)} label={ filter } value = { filter }/>
      }
      else {
          return <Tab label={ filter } value = { filter }/>
      }
    })

    if (is_mobile) {
      top_level_appbar = (
        <AppBar position="static" color="default">
          <Tabs
            value={ top_level_filter_selected }
            onChange= { onTopLevelFilterChange }
            indicatorColor="secondary"
            textColor="secondary"
            scrollable
            scrollButtons="auto"
          >
            { top_level_tabs }
          </Tabs>
        </AppBar>
      )

      lower_level_appbar = (
        <AppBar position="static" color="default">
          <Tabs
            value={ lower_level_filter_selected }
            onChange = { onLowerLevelFilterChange }
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            { lower_level_tabs }
          </Tabs>
        </AppBar>
      )
    } else {

      // DESKTOP
      //
      top_level_appbar = (
        <AppBar position="static" color="default">
          <Tabs
            value={ top_level_filter_selected }
            onChange= { onTopLevelFilterChange }
            indicatorColor="secondary"
            textColor="secondary"
            centered
            scrollButtons="auto"
          >
            { top_level_tabs }
          </Tabs>
        </AppBar>
      )

      lower_level_appbar = (
        <AppBar position="static" color="default">
          <Tabs
            value={ lower_level_filter_selected }
            onChange = { onLowerLevelFilterChange }
            indicatorColor="primary"
            textColor="primary"
            centered
            scrollButtons="auto"
          >
            { lower_level_tabs }
          </Tabs>
        </AppBar>
      )
    }

    let logo = (team) => {
      return <img className={s.logo} src={`https://static.nfl.com/static/site/img/logos/svg/teams/${team}.svg`}/>
    }

    return (
        <div className= {"filter_container"}>
          <div className={s.center}>{ top_level_appbar }</div>
          <div className={s.center}>{ lower_level_appbar }</div>
        </div>
    )
  }
}

export default withStyles(styles)(DraftFilters);
