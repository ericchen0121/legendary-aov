import React from 'react'
import cx from 'classnames'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import s from './Player.scss';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ALL_PLAYERS } from '../../data/gql_queries/players'


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
  divider: {
    width: '70%',
    marginTop: 20,
    marginBottom: 10
  },
  container: {
    minHeight: 800
  },
  item_effects_container: {
    textAlign: 'center',
    padding: 15,
    margin: '25px 25px 0px 10px',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
  },
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

          let players
          if (data.players && data.players.length > 0) {
            players = data.players.map(p => {
              return <div>{p.name} {p.team.name}</div>
            })
          }
          else {
            return <div>Finding AOV Players...</div>
          }

          return (
            <Grid container spacing={24} zeroMinWidth className={classes.container}>
              <Grid item xs={2}>

              </Grid>
              <Grid item xs={7}>
                {players}
              </Grid>
              <Grid item xs={3}>

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
