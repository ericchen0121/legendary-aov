import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import BuildArcanaImage from './BuildArcanaImage'
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import { find_arcana_by_id, get_avg_arcana_counts } from '../AovArcana'
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
    marginTop: 10,
    flex: '1 1 60px'
  },
  name: {
    fontSize: 9,
    textAlign: 'center'
  },
  red: {
    color: 'red'
  },
  vertical_spacing: {
    marginTop: -10
  }
})

class BuildArcanaCountsContainer extends React.Component {

  render() {
    const { arcana, classes, actions } = this.props

    if (arcana) {
      let count = Number.isInteger(arcana.avg_count) ? arcana.avg_count : arcana.avg_count.toFixed(1)
      return (
        <div className={classes.container} >
          <div className={s.full_opacity}>
            <BuildArcanaImage arcana={arcana} />
          </div>
          <div>
            <span className={classes.name}>{ arcana.name.toUpperCase() }</span>
          </div>
          <div className={classes.vertical_spacing}>
            <span className={cx(classes.name, classes.red)}> x { count }</span>
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
  connect(mapStateToProps, mapDispatchToProps)(BuildArcanaCountsContainer)
);
