import React from 'react'
import cx from 'classnames'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import s from './landing.scss';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Link from '../../components/Link';

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { LATEST_BUILDS } from '../../data/gql_queries/builds.js'
import HEROES, { find_hero_by_id } from '../draft/AovHeroes'
import { ITEMS, TALENTS, find_talent_by_id, find_item_by_id } from '../buildCreator/Items'
import BuildItem from '../buildCreator/create/BuildItem'
import { BarLoader } from 'react-spinners';
import BuildHeroImage from '../buildCreator/create/BuildHeroImage'

const LEGENDARY_TWITTER = 'legendaryinc100'
const DEFAULT_TWITTER_LIST = 'arena-of-valor'
const DEFAULT_TWITCH = 'arenaofvalor'
const styles = theme => ({
  container: {
    paddingTop: 30,
    marginLeft: 10,
    marginRight: 10
  },
  hero_container: {
    marginLeft: 10,
  },
  build_container: {
    marginLeft: 10,
    marginBottom: 10
  },
  item_container: {
    marginLeft: -15
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
  loader_height: {
    height: 40,
    marginLeft: 80
  },
  loader_container: {
    marginTop: 30
  },
  title_container: {
    textAlign: 'center',
    marginBottom: 15,
  },
  link: {
    marginLeft: 15,
    fontSize: 10,
    color: 'green',
    textDecoration: 'none'
  }
})

class LatestBuildsContainer extends React.Component {
  state = {
    name: null,
    twitter: LEGENDARY_TWITTER,
    twitch: DEFAULT_TWITCH
  }

  render() {
    const { classes, context } = this.props
    let { name, twitter, twitch } = this.state

    return (
      <Query
        query={LATEST_BUILDS}
      >
        {({ loading, error, data }) => {
          if (error) {
            return <BarLoader
              color={'#123abc'}
              loading={true}
            />
          }

          if (loading) {
            let loaders = [0,1,2,3,4].map(l => {
              return (
                <Grid container>
                  <Grid item xs={1}>
                  </Grid>
                  <Grid item xs={10}>
                    <div className={classes.loader_height}>
                      <BarLoader
                        color={'#123abc'}
                        loading={true}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={1}>
                  </Grid>
                </Grid>
              )
            })

            return <div className={classes.loader_container}>{loaders}</div>
          }

          let all_builds = data.latestBuilds.map(b => {
            let items = [b.item_1, b.item_2, b.item_3, b.item_4, b.item_5, b.item_6]
            let hero = find_hero_by_id(b.hero_id)

            // Item List
            let item_list = items.map(i => {
              let item = find_item_by_id(i)
              return (
                  <Grid
                    item
                    xs={2}
                  >
                    <BuildItem
                      item={item}
                      size='xsmall'
                    />
                  </Grid>
              )
            })


            return (
              <Grid container className={classes.build_container}>
                <Grid item xs={2} className={classes.hero_container}>
                  <BuildHeroImage
                    size='xs'
                    border='gold'
                    hero={hero}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Grid container className={classes.item_container}>
                    {item_list}
                  </Grid>
                </Grid>
                <Grid item xs={1}>
                </Grid>
              </Grid>
            )
          })

          return (
            <div>
              <div className={classes.title_container}>
                Latest Builds
                <Link className={classes.link} to="/build">
                  View all
                </Link>
              </div>
              <div>
                {all_builds}
              </div>
            </div>
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
    connect(mapStateToProps, mapDispatchToProps)(LatestBuildsContainer)
  )
)
