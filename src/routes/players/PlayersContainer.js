import React from 'react'
import cx from 'classnames'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import s from './Player.scss';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import PlayerCard from './PlayerCard'
import SocialCard from './SocialCard'

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
    selected_user: null,
    selected_twitter: null
  }

  render() {
    const { classes, context, } = this.props
    let { selected_user, selected_twitter } = this.state

    return (
      <Query
        query={ALL_PLAYERS}
      >
        {( { loading, error, data } ) => {
          if (error) {
            return <div className={classes.grid_container}>ERROR! Sorry!</div>
          }

          let select_user = (user) => {
            // reset on click twice
            console.log(user, selected_user )
            if (selected_user === user) {
              console.log('true its equal')
              this.setState({
                selected_user: null,
                selected_twitter: null
              }, () => {console.log(this.state)})
            }
            else {
              // set user and twitter handle
              let twitter_name = data.players.find(p => p.name === user).twitter
              this.setState({
                selected_user: user,
                selected_twitter: twitter_name
              })
            }
          }

          let players, tweets
          if (data.players && data.players.length > 0) {
            players = data.players.map(p => {
              return (
                <Grid item xs={6} onClick={() => select_user(p.name)}>
                  <PlayerCard
                    player={p}
                    selected={p.name === selected_user}
                  />
                </Grid>
              )
            })
          }
          else {
            return <div>Finding AOV Players...</div>
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
                <SocialCard
                  type='list'
                  screen_name='legendaryinc100'
                  list_name='arena-of-valor'
                />
              </Grid>
              <Grid item xs={4}>
                {
                  this.state.selected_twitter &&
                  <SocialCard
                    type='profile'
                    screen_name={this.state.selected_twitter}
                  />
                }
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
