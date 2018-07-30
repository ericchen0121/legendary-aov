import React from 'react'
import cx from 'classnames'
import { withStyles } from 'material-ui/styles';

import BuildArcana from './BuildArcana'
import BuildItemImage from './BuildItemImage'
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input'
import Typography from 'material-ui/Typography';
import { Icon } from 'react-icons-kit';
import {ic_expand_more} from 'react-icons-kit/md/ic_expand_more'

// UTILS
import ARCANA, { CLASS_ARCANA, find_arcana_by_id } from '../AovArcana'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: {
    marginBottom: 40
  },
  heading: {
    fontFamily: "'Josefin Sans', sans-serif"
  },
  note_saved: {
    color: 'green'
  },
  note_not_saved: {
    color: 'grey'
  },
  save_text_position: {
    marginLeft: 30
  },
  spacer: {
    marginRight: 10
  },
  container: {
    display: 'flex',
    flexFlow: 'row-wrap',
    textAlign: 'center',
    marginBottom: 20
  }
})

class BuildArcanaEditor extends React.Component {

  sortAlpha = items => {
    return items.sort((a, b) => a.name.localeCompare(b.name))
  }

  render() {
    const { classes, actions, build_creator, ...other } = this.props

    let arcana_list = build_creator.current_build.arcana // list of arcana ids

    // filter(a=> a.active)

    let arcana_html = (arcana_set) => {
      return arcana_set.map(a => {
        return (
          <span className={classes.spacer}>
            <BuildArcana
              key={a.id}
              arcana={a}
              highlighted={arcana_list.indexOf(a.id) > -1}
              is_editing={true}
            />
          </span>
        )
      })
    }

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          { arcana_html(this.sortAlpha(ARCANA.filter(a => a.color === 'red'))) }
        </div>
        <div className={classes.container}>
          { arcana_html(this.sortAlpha(ARCANA.filter(a => a.color === 'green'))) }
        </div>
        <div className={classes.container}>
          { arcana_html(this.sortAlpha(ARCANA.filter(a => a.color === 'purple'))) }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(BuildArcanaEditor)
);
