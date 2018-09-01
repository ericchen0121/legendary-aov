import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import { ITEMS, TALENTS, ITEM_CATEGORIES } from '../Items_v16'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 150,
  },
  active: {
    borderRight: '3px gold solid',
    color: 'gold'
  },
  inactive: {},
  text: {
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: 14,
    color: 'gray'
  }
})

class BuildItemList extends React.Component {

  upper_case_first = (word) => word.charAt(0).toUpperCase() + word.slice(1)

  render() {
    const { classes, actions, build_creator } = this.props

    let list_items = ITEM_CATEGORIES.map(c => {
      let item_class = (c === build_creator.item_filter) ? classes.active : classes.inactive
      return (
        <ListItem key={Math.random()*100} button onClick={() => actions.filterItemCategory(c)} className={item_class}>
          <ListItemText
            primary={c.toUpperCase()} />
        </ListItem>
      )
    })

    return (
      <div className={classes.root}>
        <List component="nav">
          {list_items}
        </List>
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
    connect(mapStateToProps, mapDispatchToProps)(BuildItemList)
)
