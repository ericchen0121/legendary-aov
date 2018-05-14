import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import s from './Draft.css';

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
    const { classes, onTopLevelFilterChange, onLowerLevelFilterChange, top_level_filter_selected, lower_level_filter_selected, filters } = this.props;
    // let handleLowerLevel = this.handleLowerLevel.bind(this)

    let top_level_buttons = (
      Object.keys(filters).map((filter) => {
        return (
          <Button
            color="primary"
            className={classes.button}
            onClick={ onTopLevelFilterChange(filter) }
            value={filter}
          >
            { filter }
          </Button>
        )
      })
    )

    // NOTE: BUTTONS - BACKUP BUT NOT CURRENTLY USED
    // let lower_level_buttons = filters[top_level_filter_selected].map(filter => { <Button size="small" color='secondary' className={classes.button}>{ filter }</Button> })


    let logo = (team) => {
      return <img className={s.logo} src={`https://static.nfl.com/static/site/img/logos/svg/teams/${team}.svg`}/>
    }

    let lower_level_appbar = (
      <AppBar position="static" color="default">
        <Tabs
          value={ lower_level_filter_selected }
          onChange = { onLowerLevelFilterChange }
          indicatorColor="primary"
          textColor="primary"
          scrollable
          scrollButtons="auto"
        >
          {
            filters[top_level_filter_selected].map(filter => {
              if (top_level_filter_selected === 'TEAM') {
                return <Tab icon={ logo(filter)} label={ filter } value = { filter }/>
              }
              else {
                  return <Tab label={ filter } value = { filter }/>
              }
            })
          }
        </Tabs>
      </AppBar>
    )

    return (
        <div className="filter_container">
          <div className={s.center}>{ top_level_buttons }</div>
          { lower_level_appbar }
        </div>
    )
  }
}

export default withStyles(styles)(DraftFilters);
