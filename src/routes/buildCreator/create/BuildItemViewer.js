import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import BuildItem from './BuildItem'
import { ITEMS, TALENTS } from '../Items'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const styles = theme => ({
  pointer: {
    cursor: 'pointer'
  }
})

class BuildItemViewer extends React.Component {

  render() {
    const { classes, actions, build_creator, ...other } = this.props
    const { item_filter } = build_creator

    const {selected_item} = build_creator

    let filter_items = (item_filter, tier) => {
      return ITEMS.filter(i => {
          return (i.type === item_filter) && (i.tier === tier)
        })
    }

    let filter_items_list = (list) => {
      return list.map(i => {
        return (
          <Grid item xs={2} key={i.id}>
            <div
              onClick={() => actions.selectItem(i.id)}
              onMouseOver={() => actions.hoverItem(i.id)}
              onMouseOut={() => actions.clearHoverItem(i.id)}
            >
              <BuildItem
                key={i.id}
                item={i}
                selected={selected_item === i.id}
                {...other}
              />
            </div>
          </Grid>
        )
      })
    }
    let tier_3_items = filter_items(item_filter, 3)
    let tier_2_items = filter_items(item_filter, 2)
    let tier_1_items = filter_items(item_filter, 1)

    return (
      <div>
        <div>
          { tier_3_items.length > 0 &&
            <div>
              <h3>Tier 3</h3>
              <Divider />
            </div>
          }
          <Grid container spacing={24}>
            { filter_items_list(tier_3_items) }
          </Grid>
        </div>
        <div>
          { tier_2_items.length > 0 &&
            <div>
              <h3>Tier 2</h3>
              <Divider />
            </div>
          }
          <Grid container spacing={24}>
            { filter_items_list(tier_2_items) }
          </Grid>
        </div>
        {tier_1_items.length > 0 &&
          <div>
            <div>
              <h3>Tier 1</h3>
              <Divider />
            </div>
            <Grid container spacing={24}>
              { filter_items_list(tier_1_items) }
            </Grid>
          </div>
      }
      </div>
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
    connect(mapStateToProps, mapDispatchToProps)(BuildItemViewer)
)
