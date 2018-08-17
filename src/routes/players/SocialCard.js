import React from 'react'
import cx from 'classnames'
import s from './Player.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Card, { CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

import { Timeline } from 'react-twitter-widgets'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  card: {
    marginRight: 10
  }
});

class SocialCard extends React.Component {
  componentWillMount() {
    // this.props.actions.fetchTweets()
  }

  render() {
    const { classes, screen_name, list_name, type } = this.props

    let feed
    if (type==='list') {
      feed = (
        <Timeline
          dataSource={{
            sourceType: 'list',
            ownerScreenName: screen_name,
            slug: list_name
          }}
        />
      )
    }
    else if (type==='profile') {
      feed = (
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: screen_name
          }}
          options={{
            username: screen_name,
            height: '1600',
          }}
        />
      )
    }

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            {feed}
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
    connect(mapStateToProps, mapDispatchToProps)(SocialCard)
  )
)
