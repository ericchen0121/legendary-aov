import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import BuildArcanaImage from './BuildArcanaImage'
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import { find_arcana_by_id } from '../AovArcana'
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
    none: {},
  },
  container: {
    width: 60
  },
  name: {
    fontSize: 9,
    textAlign: 'center'
  },
})

class BuildArcana extends React.Component {

  render() {
    const { arcana, highlighted, classes, actions, isEditing } = this.props

    if (arcana) {
      return (
        <div
          onClick={() => actions.insertArcanaToBuild(arcana.id)}
          className={classes.container}
        >
          <div className={cx(isEditing ? classes.pointer : classes.none, highlighted ? s.full_opacity : s.low_opacity)}>
            <Tooltip placement="top" title={arcana.types.join(', ').toUpperCase()}>
              <Button mini variant='fab'>
                <BuildArcanaImage arcana={arcana} />
              </Button>
            </Tooltip>
          </div>
          <div>
            <span className={classes.name}>{ arcana.name.toUpperCase() }</span>
          </div>
        </div>
      )
    }
    else { return <div />}
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
