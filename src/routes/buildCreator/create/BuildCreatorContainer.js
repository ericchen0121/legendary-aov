import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import BuildCreator from './BuildCreator';
import BuildItemCard from './BuildItemCard';
import BuildItemViewerList from './BuildItemViewerList'
import BuildItemViewer from './BuildItemViewer'
import BuildHeroContainer from './BuildHeroContainer'
import { ITEMS, TALENTS } from '../Items'
import HEROES from '../../draft/AovHeroes'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
  ep: {
    padding: 0
  },
  eps: {
    padding: 0,
  },
  epd: {
    display: 'inline',
    paddingRight: 32,
    marginRight: 32
  },
  divider: {
    margin: '0 33%'
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    width: '70%',
    marginTop: 20,
    marginBottom: 10
  }
})

class BuildCreatorContainer extends React.Component {

  render() {
    const { classes } = this.props

    return (
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <BuildHeroContainer/>
          <Divider className={classes.divider}/>
          <BuildItemViewerList />
        </Grid>
        <Grid item xs={7}>
          <BuildCreator />
          <BuildItemViewer />
        </Grid>
        <Grid item xs={3}>
          <BuildItemCard />
        </Grid>
      </Grid>
    )
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

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(BuildCreatorContainer)
)