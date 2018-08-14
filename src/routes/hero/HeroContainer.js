import React from 'react'
import cx from 'classnames'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import s from './hero.scss';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import HeroFavoriteGrid from './HeroFavoriteGrid'
import {HEROES_ALPHA} from '../draft/AovHeroes';

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
})

class HeroViewer extends React.Component {

  render() {
    const { classes, context } = this.props
    let list_grid = (
      <HeroFavoriteGrid
        order_hero={HEROES_ALPHA}
        {...this.props}
      />
    )
    let hero_view_grid_cols = 12;
    let hero_view_video_cols = false;

    return (
      <Grid container spacing={12} zeroMinWidth className={classes.container}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          {list_grid}
        </Grid>
        <Grid item xs={1} />
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

export default withStyles2(s)(
  withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(HeroViewer)
  )
)
