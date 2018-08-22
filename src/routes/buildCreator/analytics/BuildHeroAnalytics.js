import React from 'react'
import cx from 'classnames'
import s from './Analytics.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ExpansionPanel, { ExpansionPanelDetails, ExpansionPanelSummary } from 'material-ui/ExpansionPanel';
import Button from 'material-ui/Button'

import Link from '../../../components/Link';
import BuildHeroImage from '../create/BuildHeroImage'
import BuildItem from '../create/BuildItem'
import CustomBuilds from '../CustomBuilds'
import BuildItemCard from '../create/BuildItemCard'
import BuildHeroContainer from '../create/BuildHeroContainer'
import BuildItemsEffects from '../BuildItemsEffects'
import analyze_builds from './processBuilds'
import ItemAnalyticsCard from './ItemAnalyticsCard'

import { find_talent_by_id, find_item_by_id, ITEMS } from '../Items'
import { find_hero_by_id, find_hero_by_name } from '../../draft/AovHeroes'
import { to_uppercase_first } from '../utilities'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RingLoader } from 'react-spinners';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { HERO_BUILDS } from '../../../data/gql_queries/builds'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
  ep: {
    padding: 0,
    width: '100%'
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
  grid_container: {
    minHeight: 800
  },
  center: {
    textAlign: 'center',
  },
  new_build_button: {
    border: '1px solid #00aaff',
  },
  no_underline_link: {
    textDecoration: 'none',
    color: '#00aaff'
  },
  full_height: {
    height: 768
  },
  secondary_text: {
    fontSize: 14,
    color: 'gray'
  },
  bold: {
    fontWeight: 600
  },
  no_style: {
    textDecoration: 'none'
  }
})

class BuildViewer extends React.Component {
  componentDidMount() {
    this.handleRouteParams(); // relies on window width, so using cb
  }

  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }

  handleRouteParams = () => {
    const params = this.props.params

    // Get params from Route
    let { hero } = params
    //
    if (hero) {
      // ie. www.../build/hero/chaugnar
      if (hero) {
        const hero_obj = find_hero_by_name(hero);
        this.props.actions.setAnalyticsHeroId(hero_obj.id);
      } else {
        // redirect to ALL heroes, change url in router...
      }

    }
  };

  render() {
    const { classes, actions, build_analytics } = this.props

    let selected_hero_id = build_analytics.hero_id
    let hero = find_hero_by_id(selected_hero_id)
    let hero_name = hero ? hero.name : ''


    return (
      <Query
        query={HERO_BUILDS}
        variables={{ hero_id: selected_hero_id }}
      >
        {({ loading, error, data }) => {
          if (error) {
            return <div className={cx(classes.grid_container, classes.full_height)}>ERROR! Sorry!</div>
          }

          let analysis = analyze_builds(data.buildsByHero)
          console.log(analysis)
          let type_item_counts = analysis.type_item_counts

          let title = (
            <div className={s.title}>
              <h2>
                {`${hero_name} Build Analytics`}
                <a href={`/build/hero/${hero_name}`} className={classes.no_style}><span className={cx(classes.secondary_text, classes.bold)}> of {analysis.count} Builds</span></a>
              </h2>
            </div>
          )

          if (type_item_counts) {
            return (
              <div>
                <div>
                  {title}
                </div>
                <Grid container zeroMinWidth>
                  <Grid item xs={1} />
                  <Grid item xs={10}>
                    <Grid container zeroMinWidth>
                      <Grid item xs={1} />
                      <Grid item xs={10} >
                      {
                        Object.keys(type_item_counts)
                          .sort((a, b) => a.localeCompare(b)) // sort types alphabetically
                          .map((type, type_index) => {
                            return (
                              <Grid container zeroMinWidth>
                              {
                                Object.keys(type_item_counts[type])
                                  .sort((a, b) => type_item_counts[type][b] - type_item_counts[type][a])
                                  .map((id, item_index) => {
                                    return (
                                      <ItemAnalyticsCard
                                        key={id}
                                        item_id={Number(id)}
                                        total_build_count={analysis.count}
                                        item_count={type_item_counts[type][id]}
                                      />
                                    )
                                })
                              }
                              </Grid>
                            )
                          })
                      }
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={1} />
                </Grid>
              </div>
            )
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
  withStyles2(s)(
    connect(mapStateToProps, mapDispatchToProps)(BuildViewer)
  )
)
