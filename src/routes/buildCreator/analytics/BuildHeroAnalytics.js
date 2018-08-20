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

import { find_talent_by_id, find_item_by_id } from '../Items'
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
    let title = (
      <div className={s.title}>
        <h2>{`${hero_name} Build Analytics`}</h2>
      </div>
    )

    return (
      <Query
        query={HERO_BUILDS}
        variables={{ hero_id: selected_hero_id }}
      >
        {({ loading, error, data }) => {
          if (error) {
            return <div className={cx(classes.grid_container, classes.full_height)}>ERROR! Sorry!</div>
          }
          
          console.log('data',data.buildsByHero)

          console.log('analyzed builds', analyze_builds(data.buildsByHero))

          return (
            <div>
              <Grid container zeroMinWidth>
                <Grid item xs={10}>
                  <div>
                    {title}
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div className={s.cta}>
                  </div>
                </Grid>
              </Grid>
              <Grid container zeroMinWidth className={classes.grid_container}>
                <Grid item xs={9}>

                </Grid>
                <Grid item xs={3}>
                </Grid>
              </Grid>
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

export default withStyles(styles)(
  withStyles2(s)(
    connect(mapStateToProps, mapDispatchToProps)(BuildViewer)
  )
)
