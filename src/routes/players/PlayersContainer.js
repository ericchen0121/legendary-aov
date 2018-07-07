import React from 'react'
import cx from 'classnames'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import s from './Player.scss';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import PlayerCard from './PlayerCard'
import SocialCard from './SocialCard'
import Twitch from './Twitch'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ALL_PLAYERS } from '../../data/gql_queries/players'

const styles = theme => ({
  container: {
    paddingTop: 30
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

class PlayersContainer extends React.Component {
  state = {
    name: null,
    twitter: null,
    twitch: null
  }

  render() {
    const { classes, context } = this.props
    let { name, twitter, twitch } = this.state

    return (
      <Query
        query={ALL_PLAYERS}
      >
        {( { loading, error, data } ) => {
          console.log(data)

          if (error) {
            return <div className={classes.grid_container}>ERROR! Sorry!</div>
          }

          // Functions
          let select_user = (user) => {
            // if already selected, reset
            if (name === user.name) {
              clear_user()
            }
            // else set user and twitter handle
            else {
              set_user(user)
            }
          }

          let set_user = (user) => {
            this.setState({
              name: user.name,
              twitter: user.twitter,
              twitch: user.twitch
            }, () => console.log(this.state))
          }

          let clear_user = () => {
            this.setState({
              selected_user: null
            })
          }

          // Components
          let players, tweets
          if (data.players && data.players.length > 0) {
            players = data.players.map(p => {
              return (
                <Grid item xs={6} onClick={() => select_user(p)}>
                  <PlayerCard
                    player={p}
                    selected={ p.name === name}
                  />
                </Grid>
              )
            })
          }
          else {
            return <div>Finding AOV Players...</div>
          }

          // INSIDE THE grid 4
          let twitter_feed
          if (twitter) {
            twitter_feed = (
              <SocialCard
                type='profile'
                screen_name={twitter}
              />
            )
          } else {
            twitter_feed = (
              <SocialCard
                type='list'
                screen_name='legendaryinc100'
                list_name='arena-of-valor'
              />
            )
          }

          let twitch_feed
          if (twitch) {
            twitch_feed = (
              <Twitch
                channel={twitch}
              />
            )
          } else {
            twitch_feed = <div />
          }

          return (
            <Grid container spacing={12} zeroMinWidth className={classes.container}>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={3}>
                <Grid container spacing={12}>
                  {players}
                </Grid>
              </Grid>
              <Grid item xs={4}>
                {twitter_feed}
              </Grid>
              <Grid item xs={4}>
                { twitch_feed }
              </Grid>
            </Grid>
          )

        }}
      </Query>
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
    connect(mapStateToProps, mapDispatchToProps)(PlayersContainer)
  )
)
