import React from 'react'
import cx from 'classnames'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import s from './hero.scss';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import HeroFavoriteGrid from './HeroFavoriteGrid'
import {HEROES_ALPHA} from '../draft/AovHeroes';
import Snackbar from 'material-ui/Snackbar';

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  login_button: {
    fontStyle: 'bold',
    color: 'gold',
    marginLeft: 15,
    border: '1px solid gold',
    padding: 5,
    cursor: 'pointer'
  },
  login_link: {
    textDecoration: 'none',
    color: 'gold'
  },
  snackbar: {
    marginTop: 25,
    width: 100
  }
})

class HeroViewer extends React.Component {
  state = {
    snackbar_open: false
  }

  render() {
    const { classes, context, user_login } = this.props
    let list_grid = (
      <HeroFavoriteGrid
        heroes={HEROES_ALPHA}
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
        <Snackbar
          className={classes.snackbar}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={!user_login.is_logged_in}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={(
            <div>
              <span id="message-id"><span className={classes.login_button}><a href="/login" className={classes.login_link}>Login</a></span> to save Hero Favorites</span>
            </div>
          )}
        />
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
