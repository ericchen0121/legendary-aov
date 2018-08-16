import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
  ep: {
    padding: 0
  },
  eps: {
    padding: 0,
  },
  epd: {
    display: 'inline',
    paddingRight: 32,
    marginRight: 32
  },
  divider: {
    margin: '0 33%'
  },
  skeleton_item: {
    backgroundColor: 'hsl(0,0%,90%)',
    borderRadius: 2,
  },
  talent_skeleton: {
    width: 30,
    height: 30,
    borderRadius: '50%'
  },
  build_container_skeleton: {
    width: '80%',
    height: 68,
    margin: 10
  },
  build_container: {
    display: 'flex',
  },
  flex_grow: {
    flexGrow: 1
  },
  hero_container: {
    width: '15%',
    height: 68,
    margin: 10
  }
})

class BuildSingleSkelton extends React.Component {

  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.build_container}>
        <div className={cx(classes.hero_container, classes.skeleton_item, classes.flex_grow)} />
        <div className={cx(classes.skeleton_item, classes.ep, classes.build_container_skeleton)} />
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

export default withStyles2(s)(
  withStyles(styles)(BuildSingleSkelton)
)
