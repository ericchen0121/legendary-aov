import React from 'react'
import cx from 'classnames'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import s from './landing.scss';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import PlayerCard from '../players/PlayerCard'
import SocialCard from '../players/SocialCard'
import Twitch from '../players/Twitch'
import LatestBuildsContainer from './LatestBuilds'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Query } from "react-apollo";
import gql from "graphql-tag";
// import { ALL_PLAYERS } from '../../data/gql_queries/players'

const LEGENDARY_TWITTER = 'legendaryinc100'
const DEFAULT_TWITTER_LIST = 'arena-of-valor'
const DEFAULT_TWITCH = 'arenaofvalor'
const styles = theme => ({
  container: {
    paddingTop: 30,
    marginBottom: 30
  },
  root: theme.mixins.gutters({
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: theme.spacing.unit * 2,
  }),
  team_logo: {
    width: 25,
    height: 25,
    borderRadius: 3
  },
  player: {
    width: 55,
    height: 55,
    borderRadius: 3
  },
  team: {
    fontSize: 11
  },
  spacing: {
    marginRight:5
  }
})

class LandingContainer extends React.Component {
  state = {
    twitter: LEGENDARY_TWITTER,
    twitch: DEFAULT_TWITCH
  }

  render() {
    const { classes, context } = this.props
    let { twitter, twitch } = this.state

    let twitch_feed = null
    if (twitch) {
      twitch_feed = (
        <Twitch
          channel={twitch}
        />
      )
    } else {
      twitch_feed = <div />
    }

    // INSIDE THE grid 4
    let twitter_feed
    // if twitter handle, window twitter is initialized
    if (twitter) {
      if (twitter != LEGENDARY_TWITTER) {
        twitter_feed = (
          <SocialCard
            type='profile'
            screen_name={twitter}
          />
        )
      }
    }

    let legendary_twitter_list = (
      <SocialCard
        type='list'
        screen_name={LEGENDARY_TWITTER}
        list_name={DEFAULT_TWITTER_LIST}
      />
    )


    return (
      <Grid container spacing={12} zeroMinWidth className={classes.container}>
        <Grid item xs={3}>
          <Grid container spacing={12}>
            <LatestBuildsContainer />
          </Grid>
        </Grid>
        { twitch &&
          <Grid item xs={6}>
            { twitch_feed }
          </Grid>
        }
        { twitter === LEGENDARY_TWITTER &&
          <Grid item xs={3}>
            { legendary_twitter_list }
          </Grid>
        }

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
    connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
  )
)
