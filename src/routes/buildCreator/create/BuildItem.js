import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
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
    const { item, classes, actions } = this.props
    return (
      <div onClick={() => actions.selectItem(item.id)}>
        <div className={classes.pointer}>
          <Tooltip title={item.name.toUpperCase()}>
            <Button size="small">
              <BuildItemImage item={item} />
            </Button>
          </Tooltip>
        </div>
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
