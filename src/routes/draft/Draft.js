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
import s from './Aov.css';

import DraftListItem from './DraftListItem';
import DraftVideo from './DraftVideo';
import DraftVideoTitle from './DraftVideoTitle';
import DraftVideoSearch from './DraftVideoSearch';
import DraftPlaylist from './DraftPlaylist';
import DraftFilters from './DraftFilters';
import HEROES from './AovHeroes';
import { HERO_FILTERS, DEFAULT_TOP_LEVEL_FILTER, VIDEO_SEARCH_TERMS } from './DraftConstants'
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
    selected_hero: {
      name: null,
    },
    top_level_filter_selected: DEFAULT_TOP_LEVEL_FILTER,
    lower_level_filter_selected: HERO_FILTERS[DEFAULT_TOP_LEVEL_FILTER][0],
    video_search_term: VIDEO_SEARCH_TERMS[0],
    video_search_term_default: 'arena of valor'
  }

  //HERO_FILTERS FUNCTIONS
  onTopLevelFilterChange = (filter) => () => {
    this.setState({
      top_level_filter_selected: filter,
      lower_level_filter_selected: HERO_FILTERS[filter][0] // select the first lower level filter
    })
  }

  onLowerLevelFilterChange = (e, filter) => {
    this.setState({
      lower_level_filter_selected: filter // select the first lower level filter
    })
  }

  // hero is ARRAY of hero objects
  // returns filtered array of hero objects based on top and lower level filters
  filterResults = (heroes) => {
    let {top_level_filter_selected, lower_level_filter_selected} = this.state
    console.log('state', this.state)
    let key = null
    if(top_level_filter_selected === 'CLASSES') {
      key = 'classes'
    } else if (top_level_filter_selected === 'ROLES') {
      key = 'roles'
    } else if (top_level_filter_selected === 'TIER') {
      key = 'tier'
    } else if (top_level_filter_selected === 'LANES') {
      key = 'lanes'
    }

    let filtered_heroes = null
    if (lower_level_filter_selected === 'all') {
      filtered_heroes  = heroes
    } else {
      filtered_heroes = heroes.filter(hero => {
        return hero[key].includes(lower_level_filter_selected)
      })
    }

    return filtered_heroes
  }

  sortResults = (hero) => {
    hero = hero.sort((a,b) => a.name.localeCompare(b.name))
    return hero
  }

  //VIDEO SEARCH FUNCTIONS
  onVideoSearchTermChange = (video_search_term) => {
    this.setState({video_search_term}, () => {
      console.log('youtube searching: ', this.state.video_search_term)
      this.handleFetchYoutubeVideos(this.state.selected_hero.name, this.state.selected_hero.position)
    })
  }

  // handling the click on the hero list item
  // it also fires off the request to fetch YT videos
  handleFetchYoutubeVideos = (name) => {
    this.setState({ selected_hero: { name } })
    this.props.actions.fetchYoutubeList(this.createQuery(name))
  }

  createQuery = (name) => {
    return `${name}+${this.state.video_search_term_default}+${this.state.video_search_term}`
  }

  render() {
    const { classes } = this.props;
    const { top_level_filter_selected, lower_level_filter_selected, video_search_term, selected_hero  } = this.state
    let order_hero = this.sortResults(this.filterResults(HEROES))
    const list = order_hero.map(h => (
      <DraftListItem
        hero={h}
        {...this.props}
        handleFetchYoutubeVideos={this.handleFetchYoutubeVideos}
      />
    ))
    let video_search = null
    if (selected_hero.name) {
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
              filters = {HERO_FILTERS}
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
            <div className={s.draft_video_container}>
              <DraftVideo
                video_search_term={video_search_term}
                {...this.props}
              />
              <DraftVideoTitle {...this.props} />
            </div>
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
