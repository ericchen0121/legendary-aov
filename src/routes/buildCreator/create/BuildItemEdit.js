import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import BuildItem from './BuildItem'

import Button from 'material-ui/Button';
import { Icon } from 'react-icons-kit'
import {ic_add_circle} from 'react-icons-kit/md/ic_add_circle'
import {plus} from 'react-icons-kit/fa/plus'
import {x} from 'react-icons-kit/iconic/x'
import {closeCircled} from 'react-icons-kit/ionicons/closeCircled'

import Tooltip from 'material-ui/Tooltip';

const styles = theme => ({
  root: {
    margin: '0px !important',
    padding: '0px !important'
  },
  empty: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(0,0,0, .1)',
    border: '2px solid gold',
    textAlign: 'center',
    marginTop: 33,
    marginLeft: 12
  },
  fab: {
    margin: theme.spacing.unit * 2,
  },
  delete_icon: {
    borderRadius: 12
  },
  button: {
    width: 26,
    height: 26,
    minHeight: 20,
    backgroundColor: 'gold',
    marginTop: 14,
  },
  remove_button: {
    width: 26,
    height: 26,
    minHeight: 20,
    backgroundColor: 'white',
    position: 'relative',
    top: 19,
    right: '-50%',
    zIndex: 5
  }
})

class BuildItemEdit extends React.Component {
  /*
  Shows an empty square insert container when current build is empty. +
  If no selected item, click on container doesn't do anything.
  If selected item, click on container adds to build.
  If click on filled build item container, it removes it from the current build.

  */
  render() {
    const { classes, actions, item, pos, build_creator } = this.props
    // item is item object for container in current build
    // selected_item is id of currently selected item in the viewer
    // current_build is the entire build
    //

    let item_container, item_container_html, container_action

    // Show item image
    if(item) {
      item_container = (
        <div>
          <Button mini variant="fab" color="secondary" className={classes.remove_button}>
            <Icon
              icon={closeCircled}
              className={classes.delete_icon}
              size={24}
              style={{color: 'red'}}
              onClick={(e) => actions.removeItemFromBuild({pos}) }
            />
          </Button>
          <BuildItem item={item} />
        </div>
      )
    } else { // or show empty edit container
      item_container = (
        <div className={classes.empty}>
          <Tooltip title="INSERT">
            <Button mini variant="fab" color="secondary" className={classes.button}>
              <Icon icon={plus} style={{ color: 'white' }} size={14}/>
            </Button>
          </Tooltip>
        </div>
      )
    }


    // if user selects and item, and the edit container is empty
    // allow click to add item to container
    //
    if (build_creator.selected_item && !item) {
      item_container_html = (
        <div onClick={() => actions.insertItemToBuild({pos, item_id: build_creator.selected_item}) } className={classes.root}>
          { item_container }
        </div>
      )
    } else { // if edit container is populated, just show the item
      item_container_html = (
        <div className={classes.root}>
          { item_container }
        </div>
      )
    }

    return (
      <div>
        {item_container_html}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default withStyles(styles)(BuildItemEdit);