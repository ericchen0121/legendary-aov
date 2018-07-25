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

const LEGENDARY_TWITTER = 'legendaryinc100'
const DEFAULT_TWITTER_LIST = 'arena-of-valor'
const DEFAULT_TWITCH = 'arenaofvalor'
const styles = theme => ({
  container: {
    paddingTop: 30,
    marginLeft: 10,
    marginRight: 10
  },
  twitch_container: {
    marginLeft: 10
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
  },
  twitter_list_container: {
    marginLeft: -20
  }
})

class PlayersContainer extends React.Component {
  state = {
    name: null,
    twitter: LEGENDARY_TWITTER,
    twitch: DEFAULT_TWITCH,
    checked_live_twitch: false
  }

  render() {
    const { classes, context, players } = this.props
    let { name, twitter, twitch } = this.state

    return (
      <Query
        query={ALL_PLAYERS}
      >
        {( { loading, error, data } ) => {

          if (error) {
            return <div className={classes.grid_container}>ERROR! Sorry! {error}</div>
          }

          // Functions
          let select_user = (user) => {
            // if already selected, reset
            if (name === user.name) {
              clear_user()
            }
            // else set user and twitter handle
            else {
              clear_and_set_user(user)
            }
          }

          let clear_and_set_user = (user) => {
            this.setState({
              name: null,
              twitter: LEGENDARY_TWITTER,
              twitch: null
            }, () => {
              this.setState({
                name: user.name,
                twitter: user.twitter,
                twitch: user.twitch ? user.twitch : DEFAULT_TWITCH
              })
            })
          }

          let set_user = (user) => {
            let twitch = user.twitch ? user.twitch : DEFAULT_TWITCH
            this.setState({
              name: user.name,
              twitter: user.twitter,
              twitch
            })
          }

          let clear_user = () => {
            this.setState({
              name: null,
              twitter: LEGENDARY_TWITTER,
              twitch: null
            })
          }

          let check_twitch_status_of_users = (users) => {
            if (!this.state.checked_live_twitch) {
              this.props.actions.checkLiveTwitchStatus(users) // puts live user logins in redux store
              this.setState({ checked_live_twitch: true})
            }
          }

          // Components
          let players_html, tweets
          if (data.players && data.players.length > 0) {
            check_twitch_status_of_users(
              data.players
                .filter(p => p.twitch)
                .map(p => p.twitch) // get players with a twitch user id)
            )

            players_html = data.players.map(p => {
              return (
                <Grid item xs={6} onClick={() => select_user(p)}>
                  <PlayerCard
                    player={p}
                    selected={ p.name === name }
                    is_twitch_live={ players.live_twitch_users.indexOf(p.twitch) > -1 } // if player's twitch name is in list, then true
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
          // if twitter handle, window twitter is initialized
          if (twitter && window.twttr && window.twttr.init) {
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

          let legendary_twitter_profile = (
            <SocialCard
              type='profile'
              screen_name={LEGENDARY_TWITTER}
            />
          )

          let twitch_feed = <div />
          if (twitch) {
            twitch_feed = (
              <Twitch
                channel={this.state.twitch}
              />
            )
          }

          return (
            <Grid container spacing={12} zeroMinWidth className={classes.container}>
              <Grid item xs={3}>
                <Grid container spacing={12}>
                  { players_html }
                </Grid>
              </Grid>
              { twitch &&
                <Grid item xs={6} className={classes.twitch_container}>
                  <Twitch
                    channel={this.state.twitch}
                  />
                </Grid>
              }
              { twitter !== LEGENDARY_TWITTER &&
                <Grid item xs={3} className={classes.twitter_list_container}>
                  { twitter_feed }
                </Grid>
              }
              { twitter === LEGENDARY_TWITTER &&
                <Grid item xs={3} className={classes.twitter_list_container}>
                  { legendary_twitter_list }
                </Grid>
              }
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
