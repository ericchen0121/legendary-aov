import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

import { Icon } from 'react-icons-kit'
import {bar_chart_1} from 'react-icons-kit/ikons/bar_chart_1'

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
import BuildViewerContainer from './BuildViewerContainer'
import BuildSingleSkeleton from './BuildSingleSkeleton'

import { find_talent_by_id, find_item_by_id } from './Items_v16'
import { find_hero_by_id, find_hero_by_name } from '../draft/AovHeroes'
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
  },
  full_height: {
    height: 768
  },
  secondary_size: {
    marginLeft: 10,
    fontSize: 13,
  },
  no_style: {
    textDecoration: 'none',
    color: 'rgb(0,0,0, .8)'
  },
  new_cta: {
    color: 'red',
    fontSize: 9,
    borderRadius: 2,
    padding: 3,
    border: '1px solid red'
  },
  icon: {
    margin: '0 8px',
    position: 'relative',
    top: 3
  }
})

class BuildViewer extends React.Component {
  componentDidMount() {
    this.handleRouteParams(); // relies on window width, so using cb
    this.handleRouteQuery();
  }

  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }

  handleRouteParams = () => {
    const params = this.props.params

    // Get params from Route
    let { build_id, hero, user_id } = params
    //
    if ( build_id || hero || user_id) {
      // ie. www.../build/hero/chaugnar
      if (hero) {
        const hero_obj = find_hero_by_name(hero);
        this.props.actions.setHeroId(hero_obj.id);
      } else {
        // redirect to ALL heroes, change url in router...
      }

      // ie. www.../video/abrownbag
      if (build_id) {

      }

      if (user_id) {

      }
    }
  };

  handleRouteQuery = () => {
    const props = this.props;
  }

  render() {
    const { classes, actions, build_creator } = this.props

    // Re-using component from created build
    let selected_hero_id = build_creator.current_build.hero_id
    let hero = find_hero_by_id(selected_hero_id)

    let title = (
      <div className={s.title}>
        <h2>
          {`All ${hero.name} Builds`}
          <span className={cx(classes.secondary_size, classes.gray)}>
            <a className={classes.no_style} href={`/build/analytics/${find_hero_by_id(selected_hero_id).name.toLowerCase()}`}>
              View Build Analytics
              <span className={classes.icon}>
                <Icon icon={bar_chart_1} size={16} style={{color: '#00aaff', marginTop: 5}}/>
              </span>
              <span className={classes.new_cta}>NEW!</span>
            </a>
          </span>
        </h2>
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
            return <div className={cx(classes.grid_container, classes.full_height)}>ERROR! Sorry!</div>
          }

          let sorted_builds
          if (data.buildsByHero && data.buildsByHero.length > 0) {
            sorted_builds = [...data.buildsByHero]
            sorted_builds.sort((a,b)=> (parseInt(b.version.version_number) - parseInt(a.version.version_number) )) // sort by latest version (using parseint since version comes as a string)
          }

          return (
            <div>
              <Grid container zeroMinWidth>
                <Grid item xs={10}>
                  <div>
                    <span>{title}</span>
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
                    {
                      (data.buildsByHero && data.buildsByHero.length > 0) ?
                      sorted_builds.map(b => <BuildViewerContainer build={b} /> ) :
                      Array(7).fill().map((e,i)=>i+1).map(i => <BuildSingleSkeleton />)
                    }
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className={s.fixed}>
                    <BuildHeroContainer
                      cover_image={true}
                    />
                    { data.buildsByHero ? <BuildItemCard /> : <div /> }
                  </div>
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
