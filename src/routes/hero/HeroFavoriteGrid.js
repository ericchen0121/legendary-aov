import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from '../draft/Aov.css';
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import HeroFavoriteGridItem from './HeroFavoriteGridItem';

import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { USER_HEROES_BY_USER } from '../../data/gql_queries/userHeroes'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const styles = theme => ({
  root: {
    flexGrow: 1,
    main_one: {
      order: 2,
      marginRight: 30,
    },
  },
  grid_container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginLeft: 10,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    marginLeft: 1,
  },
  gridListLeft: {
    marginLeft: 20,
  },
  dark_mode: {
    backgroundColor: 'black',
  },
})

class HeroFavoriteGrid extends React.Component {
  static propTypes = {
    heroes: PropTypes.array.isRequired,
  };

  render() {
    const { heroes, classes, is_mobile, utilities, user_login } = this.props;

    return (
      <Query
        query={USER_HEROES_BY_USER}
        variables={{ user_id: user_login.is_logged_in ? user_login.id : 0 }} //NOTE: PLACEHOLDER
      >
        {({ loading, error, data }) => {

          if (data) {
            let list = heroes.map(h => {

              let user_heroes = data.userHeroes || []
              return <HeroFavoriteGridItem
                hero={h}
                favorite={ user_heroes.findIndex(uh => uh.hero_id === h.id) > -1 ? true : false}
                {...this.props}
              />
            })

            let list_grid = (
              <div className={cx(classes.grid_container)}>
                <GridList cellHeight={150} cols={1}>
                  {list}
                </GridList>
              </div>
            )

            return list_grid
          }

          return <div />

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
  connect(mapStateToProps, mapDispatchToProps)(HeroFavoriteGrid)
)
