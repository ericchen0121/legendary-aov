import React from 'react'
import cx from 'classnames'
import s from './Templatescss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

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
  }
})

class Template extends React.Component {


  render() {
    // const { builds, selected_build } = this.props
    // const { id, items, hero_id, info } = selected_build

    return (
      <Template
        {...this.props}
      />
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
    connect(mapStateToProps, mapDispatchToProps)(Template)
  )
)
