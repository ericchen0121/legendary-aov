import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import BuildTalentImage from './BuildTalentImage'
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

class BuildTalent extends React.Component {

  render() {
    const { talent, highlighted, classes, actions } = this.props
    
    return (
      <div onClick={() => actions.insertTalentToBuild(talent.id)}>
        <div className={cx(classes.pointer, highlighted ? s.full_opacity : s.low_opacity)}>
          <Tooltip title={talent.name.toUpperCase()}>
            <Button mini variant='fab'>
              <BuildTalentImage talent={talent} />
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
  connect(mapStateToProps, mapDispatchToProps)(BuildTalent)
);
