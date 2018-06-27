import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ExpansionPanel, { ExpansionPanelDetails, ExpansionPanelSummary } from 'material-ui/ExpansionPanel';
import Button from 'material-ui/Button'

import Link from '../../components/Link';
import BuildHeroImage from './create/BuildHeroImage'
import BuildItem from './create/BuildItem'
import CustomBuilds from './CustomBuilds'
import BuildItemCard from './create/BuildItemCard'
import BuildHeroContainer from './create/BuildHeroContainer'
import BuildItemsEffects from './BuildItemsEffects'
import BuildItemsContainer from './BuildItemsContainer'

import { find_talent_by_id, find_item_by_id } from './Items'
import { find_hero_by_id } from '../draft/AovHeroes'
import { to_uppercase_first } from './utilities'

import * as Actions from './create/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RingLoader } from 'react-spinners';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { HERO_BUILDS } from '../../data/gql_queries/builds'

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
  }
})

class BuildViewer extends React.Component {

  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }

  render() {
    const { classes, actions, build_creator } = this.props

    // Re-using component from created build
    let selected_hero_id = build_creator.current_build.hero_id
    let hero = find_hero_by_id(selected_hero_id)

    let title = (
      <div className={s.title}>
        <h2>{`All ${hero.name} Builds`}</h2>
      </div>
    )

    let create_new_button = (
      <Button className={classes.new_build_button}>
        <Link to='/build/create' className={classes.no_underline_link}>Create New Build</Link>
      </Button>
    )
    return (
      <Query
        query={HERO_BUILDS}
        variables={{ hero_id: selected_hero_id }}
      >
        {({ loading, error, data }) => {
          if (error) {
            console.log(error)
            return <div className={classes.grid_container}>ERROR! Sorry!</div>
          }

          if (!data.buildsByHero || data.buildsByHero.length === 0) {
            return (
              <Grid container zeroMinWidth className={classes.grid_container}>
                <Grid item xs={9}>
                  <div className={s.main_container}>
                    {title}
                    <div className={classes.center}>
                      <div className={s.cta}>
                        {create_new_button}
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className={s.fixed}>
                    <BuildHeroContainer
                      cover_image={false}
                    />
                  </div>
                </Grid>
              </Grid>
            )
          }

          if (data.buildsByHero) {
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
                      {create_new_button}
                    </div>
                  </Grid>
                </Grid>
                <Grid container zeroMinWidth className={classes.grid_container}>
                  <Grid item xs={9}>
                    <div className={s.main_container}>
                      { data.buildsByHero.map(b => <BuildItemsContainer build={b} /> ) }
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className={s.fixed}>
                      <BuildHeroContainer
                        cover_image={false}
                      />
                      <BuildItemCard />
                    </div>
                  </Grid>
                </Grid>
              </div>
            )
          } else {
            return (
              <div className={s.loader_container}>
                <RingLoader
                  color={'#123abc'}
                  loading={loading}
                />
              </div>
            )
          }
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
