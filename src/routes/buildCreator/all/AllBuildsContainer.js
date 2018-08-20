
import React from 'react'
import cx from 'classnames'
import s from './AllBuilds.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ALL_BUILDS } from '../../../data/gql_queries/builds'
import HEROES, { find_hero_by_id } from '../../draft/AovHeroes'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
})

class AllBuildsContainer extends React.Component {

  render() {
    const { classes, actions } = this.props

    return (
      <Query
        query={ALL_BUILDS}
      >
        {({ loading, error, data }) => {
          if (error) {
            return <div className={cx(classes.grid_container, classes.full_height)}>ERROR! Sorry!</div>
          }

          // http://www.olioapps.com/blog/map-reduce/
          // return { hero_id: # of builds, ...}

          if (data.builds) {
            let counts = data.builds.reduce(
              (totals, h) => ({ ...totals, [h.hero_id]: (totals[h.hero_id] || 0 ) + 1 }),
              {}
            )

            return (
              <div>
                {
                  HEROES.map(h => {
                    return <div>{find_hero_by_id(h.id).name} - {counts[h.id] || 0} builds </div>
                  })
                }
              </div>
            )
          }
          else return <div />
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

export default withStyles(styles)(
  withStyles2(s)(
    connect(mapStateToProps, mapDispatchToProps)(AllBuildsContainer)
  )
)
