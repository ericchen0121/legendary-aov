/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import s from './Draft.css';

import DraftListItem from './DraftListItem';
import DraftVideo from './DraftVideo';
import DraftVideoTitle from './DraftVideoTitle';
import DraftVideoSearch from './DraftVideoSearch';
import DraftPlaylist from './DraftPlaylist';
import DraftFilters from './DraftFilters';
import PLAYERS from './DraftPlayers';
import { FILTERS, DEFAULT_TOP_LEVEL_FILTER, VIDEO_SEARCH_TERMS } from './DraftConstants'
import List from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

class Draft extends React.Component {
  state = {
    selected_player: {
      name: null,
      position: null
    },
    top_level_filter_selected: DEFAULT_TOP_LEVEL_FILTER,
    lower_level_filter_selected: FILTERS[DEFAULT_TOP_LEVEL_FILTER][0],
    video_search_term: VIDEO_SEARCH_TERMS[0]
  }

  //FILTERS FUNCTIONS
  onTopLevelFilterChange = (filter) => () => {
    this.setState({
      top_level_filter_selected: filter,
      lower_level_filter_selected: FILTERS[filter][0] // select the first lower level filter
    })
  }

  onLowerLevelFilterChange = (e, filter) => {
    this.setState({
      lower_level_filter_selected: filter // select the first lower level filter
    })
  }

  // players is ARRAY of player objects
  // returns filtered array of player objects based on top and lower level filters
  filterResults = (players) => {
    let {top_level_filter_selected, lower_level_filter_selected} = this.state
    let key = null
    if(top_level_filter_selected === 'ROUND') {
      key = 'DRAFT_RD'
    } else if (top_level_filter_selected === 'TEAM') {
      key = 'TEAM'
    } else if (top_level_filter_selected === 'POSITION') {
      key = 'POS'
    }

    let filtered_players = players.filter(player => {
      return player[key] === lower_level_filter_selected
    })

    return filtered_players
  }

  sortResults = (players) => {
    return players.sort((a,b) => a.DRAFT_RK - b.DRAFT_RK)
  }

  removeUndrafted = (players) => {
    return players.filter(player => {
      return player['DRAFT_RD'] !== 0
    })
  }

  //VIDEO SEARCH FUNCTIONS
  onVideoSearchTermChange = (video_search_term) => {
    this.setState({video_search_term}, () => {
      console.log('youtube searching: ', this.state.video_search_term)
      this.handleFetchYoutubeVideos(this.state.selected_player.name, this.state.selected_player.position)
    })
  }

  // handling the click on the player list item
  // it also fires off the request to fetch YT videos
  handleFetchYoutubeVideos = (name, position) => {
    this.setState({ selected_player: { name, position} })
    this.props.actions.fetchYoutubeList(this.createQuery(name, position))
  }

  createQuery = (name, position) => {
    return `${name}+${position}+${this.state.video_search_term}`
  }

  render() {
    const { classes } = this.props;
    const { top_level_filter_selected, lower_level_filter_selected, video_search_term, selected_player  } = this.state
    let order_players = this.sortResults(this.filterResults(this.removeUndrafted(PLAYERS.players)))

    const list = order_players.map(p => (
      <DraftListItem
        player={p}
        name={p.PLAYER}
        position={p.POS}
        nfl_img_id={p.NFL_IMG_ID}
        team={p.TEAM}
        draft_rk={p.DRAFT_RK}
        {...this.props}
        handleFetchYoutubeVideos={this.handleFetchYoutubeVideos}
      />
    ))

    let video_search = null
    if (selected_player.name) {
      video_search = (
        <DraftVideoSearch
          onVideoSearchTermChange={this.onVideoSearchTermChange}
          {...this.props}
        />
      )
    }
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <DraftFilters
              filters = {FILTERS}
              onTopLevelFilterChange={this.onTopLevelFilterChange}
              onLowerLevelFilterChange={this.onLowerLevelFilterChange}
              top_level_filter_selected={top_level_filter_selected}
              lower_level_filter_selected= {lower_level_filter_selected}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={3} lg={3}>
            <List>{list}</List>
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={7}>
            <DraftVideoTitle {...this.props} />
            <DraftVideo
              video_search_term={video_search_term}
              {...this.props}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            { video_search }
            <DraftPlaylist {...this.props} />
          </Grid>
        </Grid>
      </div>
    );
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

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Draft),
);
