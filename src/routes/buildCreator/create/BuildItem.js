import React from 'react'
import cx from 'classnames'
import { withStyles } from 'material-ui/styles';
import BuildItemImage from './BuildItemImage'
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: {
    flexGrow: 1,
    main_one: {
      order: 2,
      marginRight: 30,
    },
  },
})

class BuildItem extends React.Component {

  render() {
    const { classes, actions, item, size, ...other } = this.props

    return (
      <div className={classes.pointer}>
        <Tooltip title={item.name.toUpperCase()}>
          <Button size="small">
            <BuildItemImage
              item={item}
              size={size}
              {...other}
            />
          </Button>
        </Tooltip>
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

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(BuildItem)
);
