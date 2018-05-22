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
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import s from './Aov.css';

import DraftListItem from './DraftListItem';
import DraftGridItem from './DraftGridItem';
import DraftVideo from './DraftVideo';
import DraftVideoTitle from './DraftVideoTitle';
import DraftVideoSearch from './DraftVideoSearch';
import DraftPlaylist from './DraftPlaylist';
import DraftFilters from './DraftFilters';
import HEROES from './AovHeroes';
import { HERO_FILTERS, DEFAULT_TOP_LEVEL_FILTER, VIDEO_SEARCH_TERMS } from './DraftConstants'
import { AOV_GOLD } from '../../constants'

import List from 'material-ui/List';
import Grid from 'material-ui/Grid';
import GridList, {GridListTile } from 'material-ui/GridList';

import { Icon } from 'react-icons-kit'
import {ic_sort_by_alpha} from 'react-icons-kit/md/ic_sort_by_alpha'
import {sortAlphabetically} from 'react-icons-kit/typicons/sortAlphabetically'
import {grid} from 'react-icons-kit/feather/grid'
import {ic_view_list} from 'react-icons-kit/md/ic_view_list'
import {ic_chevron_right} from 'react-icons-kit/md/ic_chevron_right'
import {ic_chevron_left} from 'react-icons-kit/md/ic_chevron_left'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: {
    flexGrow: 1,
    main_one: {
      order: 2,
      marginRight: 30
    }
  },
  grid_container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
})

class Draft extends React.Component {
  state = {
    selected_hero: {
      name: null,
      active: false
    },
    hero_filter_alphabetical: false,
    hero_filter_list_view: false,
    is_hero_filter_grid_view_expanded: false,
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

  onFilterAlphabeticalChange = (e) => {
    this.setState({
      hero_filter_alphabetical: !this.state.hero_filter_alphabetical
    })
  }

  onFilterGridListViewChange = (e) => {
    this.setState({
      hero_filter_list_view: !this.state.hero_filter_list_view
    })
  }

  onFilterExpand = (e) => {
    this.setState({
      is_hero_filter_grid_view_expanded: !this.state.is_hero_filter_grid_view_expanded
    })
  }

  // hero is ARRAY of hero objects
  // returns filtered array of hero objects based on top and lower level filters
  filterResults = (heroes) => {
    let {top_level_filter_selected, lower_level_filter_selected} = this.state
    let key = null
    if(top_level_filter_selected === 'CLASS') {
      key = 'classes'
    } else if (top_level_filter_selected === 'ROLE') {
      key = 'roles'
    } else if (top_level_filter_selected === 'TIER') {
      key = 'tier'
    } else if (top_level_filter_selected === 'LANE') {
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

  sortResultsAlpha = (heroes) => {
    heroes = heroes.sort((a,b) => a.name.localeCompare(b.name))
    return heroes
  }

  sortResultsTier = (heroes) => {
    heroes = heroes.sort((a,b) => a.tier_index - b.tier_index)
    return heroes
  }

  sortResultsTierAlpha = (heroes) => {
    heroes = heroes.sort((a,b) => { return a.tier_index - b.tier_index || a.name.localeCompare(b.name)})
    return heroes
  }

  //VIDEO SEARCH FUNCTIONS
  onVideoSearchTermChange = (video_search_term) => {
    this.setState({video_search_term}, () => {
      this.handleFetchYoutubeVideos(this.state.selected_hero.name, this.state.selected_hero.position)
    })
  }

  // handling the click on the hero list item
  // it also fires off the request to fetch YT videos
  handleFetchYoutubeVideos = (name) => {
    this.collapse_expanded_view(this.state.selected_hero.name, name)
    this.setState({
      selected_hero: {
        name,
        active: true
      }
    })
    this.props.actions.fetchYoutubeList(this.createQuery(name))
  }

  collapse_expanded_view = (prev_selection, new_selection) => {
    if (this.state.is_hero_filter_grid_view_expanded && prev_selection && (prev_selection !== new_selection)) {
      this.setState({
        is_hero_filter_grid_view_expanded: false
      })
    }
  }

  createQuery = (name) => {
    return `${name}+${this.state.video_search_term_default}+${this.state.video_search_term}`
  }

  render() {
    const { classes } = this.props;
    const {
      top_level_filter_selected,
      lower_level_filter_selected,
      video_search_term,
      selected_hero,
      hero_filter_alphabetical,
      hero_filter_list_view,
      is_hero_filter_grid_view_expanded
    } = this.state

    let order_hero = null
    let alpha_filter_info = null
    // let list_filter_active = hero_filter_alphabetical
    let hero_filter_alphabetical_color = 'gray'

    if (hero_filter_alphabetical) {
      order_hero = this.sortResultsAlpha(this.filterResults(HEROES))
      alpha_filter_info = 'ordered alphabetically'
      hero_filter_alphabetical_color = AOV_GOLD
    } else {
      order_hero = this.sortResultsTierAlpha(this.filterResults(HEROES))
      alpha_filter_info = 'ordered by tier'
    }

    let view_info = null
    let filter_list_grid_icon = <Icon icon={grid} size={20} style={{color: 'gray', cursor: 'pointer'}}/>
    if (hero_filter_list_view) {
      filter_list_grid_icon = <Icon icon={ic_view_list} size={20} style={{color: 'gray', cursor: 'pointer'}}/>
      view_info = 'list view'
    } else {
      view_info = 'grid view'
    }

    let list = null
    let list_grid = null
    let hero_view_grid_cols = null
    let hero_view_video_cols = null
    let hero_view_video_list_cols = null
    if (hero_filter_list_view) {
      list = order_hero.map(h => (
        <DraftListItem
          hero={h}
          {...this.props}
          handleFetchYoutubeVideos={this.handleFetchYoutubeVideos}
        />
      ))
      list_grid = <List>{ list }</List>
      hero_view_grid_cols = 3
      hero_view_video_cols = 7

    } else {
      list = order_hero.map(h => (
        <DraftGridItem
          hero={h}
          {...this.props}
          handleFetchYoutubeVideos={this.handleFetchYoutubeVideos}
        />
      ))
      list_grid = (
        <div className={classes.grid_container}>
          <GridList cellHeight={150} className={classes.gridList} cols={1}>
            {list}
          </GridList>
        </div>
      )
      hero_view_grid_cols = 12
      hero_view_video_cols = 0
    }

    let expand_grid_arrow = null
    if (selected_hero.active && !hero_filter_list_view) {
      if (is_hero_filter_grid_view_expanded) {
        expand_grid_arrow = (
          <span onClick={this.onFilterExpand}>
            <Icon icon={ic_chevron_left} size={18} style={{cursor: 'pointer'}}/>
          </span>
        )
      } else {
        expand_grid_arrow =  (
          <span onClick={this.onFilterExpand}>
            <Icon icon={ic_chevron_right} size={18} style={{cursor: 'pointer'}}/>
          </span>
        )
      }
    }


    if (selected_hero.active) {
      hero_view_grid_cols = 3
      hero_view_video_cols = 7
      hero_view_video_list_cols = 2
    } else if (hero_filter_list_view) {
      hero_view_grid_cols = 3
      hero_view_video_cols = 7
      hero_view_video_list_cols = 2
    } else {
      hero_view_grid_cols = 12
      hero_view_video_cols = 0
      hero_view_video_list_cols = 0
    }

    if (is_hero_filter_grid_view_expanded) {
      hero_view_grid_cols = 12
      hero_view_video_cols = 7
      hero_view_video_list_cols = 3
    }

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
      <div classNames={classes.root, s.root_container}>
        <Grid container>
          <Grid item xs={12} md={12} classNames={s.main_one}>
            <DraftFilters
              filters = {HERO_FILTERS}
              onTopLevelFilterChange={this.onTopLevelFilterChange}
              onLowerLevelFilterChange={this.onLowerLevelFilterChange}
              top_level_filter_selected={top_level_filter_selected}
              lower_level_filter_selected= {lower_level_filter_selected}
            />
            <div className={s.list_filter_container}>
              <span
                className={ classNames(s.list_filter, {[s.list_filter_active]: hero_filter_alphabetical}, s.cursor_pointer ) }
                onClick={ this.onFilterAlphabeticalChange }
              >
                <Icon icon={sortAlphabetically} size={20} style={{color: hero_filter_alphabetical_color, cursor: 'pointer'}}/>
              </span>
              <span className={s.list_filter_info}>
                { alpha_filter_info }
              </span>
              <span
                className={ classNames(s.list_filter_view, s.cursor_pointer) }
                onClick={ this.onFilterGridListViewChange }
              >
                { filter_list_grid_icon }
              </span>
              <span className={s.list_filter_info}>
                { view_info }
              </span>
              <span className={s.list_filter_arrow}>
                { expand_grid_arrow }
              </span>
            </div>
          </Grid>
          <Grid item xs={12} sm={5} md={hero_view_grid_cols} lg={hero_view_grid_cols} zeroMinWidth classNames={s.main_two}>
            { list_grid }
          </Grid>
          <Grid item xs={12} sm={7} md={hero_view_video_cols} lg={hero_view_video_cols} zeroMinWidth classNames={s.main_three}>
            <div className={s.draft_video_container}>
              <DraftVideo
                video_search_term={video_search_term}
                {...this.props}
              />
              <DraftVideoTitle {...this.props} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={hero_view_video_list_cols} lg={hero_view_video_list_cols} zeroMinWidth classNames={s.main_four}>
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

export default withStyles2(s)(withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Draft),
));
