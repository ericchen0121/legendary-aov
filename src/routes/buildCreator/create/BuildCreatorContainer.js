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
import { ITEMS, TALENTS } from '../Items'
import HEROES from '../../draft/AovHeroes'

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

  render() {
    const { classes, context, build_creator } = this.props

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
            <BuildItemEffects items={items} />
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

export default withStyles2(s)(
  withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(BuildCreatorContainer)
  )
)
