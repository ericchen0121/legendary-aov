import React from 'react'
import cx from 'classnames'
import s from './Analytics.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Card, { CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { ITEMS, find_item_by_id } from '../Items'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BuildItem from '../create/BuildItem'
import { to_uppercase_first } from '../utilities'

const styles = theme => ({
  card: {
    maxWidth: '90%',
    marginLeft: 10,
    marginBottom: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  item_type: {
    marginRight: 15,
    fontSize: 11
  },
  divider: {
    marginTop: 5,
    marginBottom: 5
  },
  secondary_text: {
    fontSize: 12,
    color: 'gray'
  },
  percentage: {
    fontSize: 16,
    fontWeight: 600
  },
  bold: {
    fontWeight: 600
  }
});

class ItemAnalyticsCard extends React.Component {

  render() {
    const { classes, item_id, item_count, total_build_count } = this.props

    let item = find_item_by_id(item_id)

    let item_card = (
      item && (
        <div>
          <div className={cx(s.wrapper, s.text_align_left)}>
            <BuildItem item={item} size='small' tooltip_placement='top'/>
            <div>
              <div className={classes.percentage}>{ ((item_count/total_build_count)*100).toFixed(0)}%</div>
              <div className={classes.secondary_text}><span className={classes.bold}>{ item_count }</span>/<span className={classes.bold}>{total_build_count}</span> builds</div>
            </div>
          </div>

        </div>
    ))

    // <Typography className={classes.title} color="textSecondary">
    // </Typography>
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            { item_card }
          </CardContent>
        </Card>
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
  withStyles2(s)(
    connect(mapStateToProps, mapDispatchToProps)(ItemAnalyticsCard)
  )
)
