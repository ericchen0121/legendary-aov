import React from 'react'
import cx from 'classnames'
import s from '../Build.scss'
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
import BuildViewerContainer from '../BuildViewerContainer'

import { find_talent_by_id, find_item_by_id } from '../Items'
import { find_hero_by_id, find_hero_by_name } from '../../draft/AovHeroes'
import { to_uppercase_first } from '../utilities'

import * as Actions from '../create/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RingLoader } from 'react-spinners';

import { Query } from "react-apollo";
import { MY_BUILDS } from '../../../data/gql_queries/builds'

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

class MyBuildViewer extends React.Component {
  componentDidMount() {
    this.handleRouteParams(); // relies on window width, so using cb
  }

  handleRouteParams = () => {
    const params = this.props.params
    console.log('params', params)
    // Get params from Route
    let { hero, user_id } = params
    //
    if ( hero || user_id) {
      // ie. www.../build/hero/chaugnar
      if (hero) {
        const hero_obj = find_hero_by_name(hero);
        this.props.actions.setHeroId(hero_obj.id);
      } else {
        // redirect to ALL heroes, change url in router...
      }

      if (user_id) {

      }
    }
  };

  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }

  filter_builds_by_hero_id = (builds, hero_id) => {
    if (hero_id) {
      return builds.filter(b => b.hero_id === hero_id)
    }
    else {
      return builds
    }
  }

  render() {
    const { classes, actions, build_creator, user_login } = this.props
    let user_id = user_login.id
    let filter_builds_by_hero_id = this.filter_builds_by_hero_id.bind(this)

    // Re-using component from created build
    let selected_hero_id = build_creator.current_build.hero_id
    let hero = find_hero_by_id(selected_hero_id)

    let hero_title
    if(!selected_hero_id) {
      hero_title = "All Heroes"
    } else {
      hero_title = hero.name
    }

    let title = (
      <div className={s.title}>
        <h2>{`My Builds: ${hero_title}`}</h2>
      </div>
    )

    let create_new_button = (
      <Button className={classes.new_build_button}>
        <Link to='/build/create' className={classes.no_underline_link}>Create New Build</Link>
      </Button>
    )
    return (
      <Query
        query={MY_BUILDS}
        variables={{ user_id }}
      >
        {({ loading, error, data }) => {
          if (error) {
            console.log(error)
            return <div>ERROR! Sorry!</div>
          }

          if (!data.myBuilds || filter_builds_by_hero_id(data.myBuilds, selected_hero_id).length === 0) {
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

          if (data.myBuilds) {
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
                      { filter_builds_by_hero_id(data.myBuilds, selected_hero_id).map(b => <BuildViewerContainer build={b} is_editing={true}/> ) }
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
    connect(mapStateToProps, mapDispatchToProps)(MyBuildViewer)
  )
)
