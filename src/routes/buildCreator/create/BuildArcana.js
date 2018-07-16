import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import BuildArcanaImage from './BuildArcanaImage'
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

class BuildArcana extends React.Component {

  render() {
    const { arcana, highlighted, classes, actions } = this.props

    // actions.insertArcanaToBuild(arcana.id)} -- NEED TO CHANGE HOW THIS FUNCTIONS... WANT to insert entire arcana array everytime there is a change
    return (
      <div onClick={() => actions.insertArcanaToBuild(arcana.id)}>
        <div className={cx(classes.pointer, highlighted ? s.full_opacity : s.low_opacity)}>
          <Tooltip title={arcana.name.toUpperCase()}>
            <Button mini variant='fab'>
              <BuildArcanaImage arcana={arcana} />
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
  connect(mapStateToProps, mapDispatchToProps)(BuildArcana)
);
