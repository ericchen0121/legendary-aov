import React from 'react'

import cx from 'classnames'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import s from './Build.scss';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

import BuildCreator from './BuildCreator';
import BuildItemCard from './BuildItemCard';
import BuildItemList from './BuildItemList'
import BuildItemViewer from './BuildItemViewer'
import BuildHeroContainer from './BuildHeroContainer'
import BuildItemEffects from '../BuildItemsEffects'

import { graphql, compose } from 'react-apollo'
import {ID_QUERY} from '../../../data/gql_queries/builds'

// .com/build/edit/:build_id
const build_query = graphql(ID_QUERY, {
  skip: (own_props) => !own_props.params.build_id, // skip if build_id param isn't present
  options: (own_props) => ({ variables: { id: own_props.params.build_id } }), // search with build_id param from url
  props: ({ data: { loading, build } }) => ({
    loading,
    build_from_params: build,
  }), // put build object returned from db into this.props.build
});

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


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

class BuildCreatorContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      is_initial_edit_build_set: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.build_from_params && !this.state.is_initial_edit_build_set) { //conditionally set edit build
      this.setState({ is_initial_edit_build_set: true }) // flip flag so it doesn't loop the call to set_edit_build
      this.set_edit_build()
      return true // update component
    }

    return false // else don't update component if build but already set
  }

  set_edit_build = () => {
    this.props.actions.setEditBuild(this.props.build_from_params)
  }

  render() {
    const { classes, context, build_creator } = this.props
    console.log(this.props)
    // NEEDED FOR BUILDITEMEFFECTS
    // NOTE: CAN PROBABLY MOVE THE items prop from here and just use the redux store for BuilditemEffects
    let items = [
      build_creator.current_build[1],
      build_creator.current_build[2],
      build_creator.current_build[3],
      build_creator.current_build[4],
      build_creator.current_build[5],
      build_creator.current_build[6],
    ]

    return (
      <Grid container spacing={24} zeroMinWidth className={classes.container}>
        <Grid item xs={2}>
          <BuildHeroContainer cover_image={true} />
          <Divider className={classes.divider}/>
          <BuildItemList />
        </Grid>
        <Grid item xs={7}>
          <BuildCreator />
          <BuildItemViewer />
        </Grid>
        <Grid item xs={3}>
          <div className={cx(classes.item_effects_container)}>
            <div className={s.combined_effects_title}>{'All Build Effects'.toUpperCase()}</div>
            <BuildItemEffects items={items} style={'bold'}/>
          </div>
          <BuildItemCard />
        </Grid>
      </Grid>
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

export default compose(
  build_query,
  withStyles2(s),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(BuildCreatorContainer)
