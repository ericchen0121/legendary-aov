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
  }
})

class PlayersContainer extends React.Component {

  render() {
    const { classes, context } = this.props



    return (
      <Query
        query={ALL_PLAYERS}
      >
        {( { loading, error, data } ) => {
          if (error) {
            console.log(error)
            return <div className={classes.grid_container}>ERROR! Sorry!</div>
          }

          let players, tweets
          if (data.players && data.players.length > 0) {
            players = data.players.map(p => {
              return (
                <Grid item xs={6}>
                  <PlayerCard
                    player={p}
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
                  screen_name='legendaryinc100'
                />
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
