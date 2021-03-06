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
import cx from 'classnames';
import s from './Aov.css';
import Reckoner from '../../resources/fonts/Reckoner.ttf';

import ChannelHeader from './ChannelHeader';
import DraftListItem from './DraftListItem';
import DraftGrid from './DraftGrid';
import DraftVideo from './DraftVideo';
import DraftVideoTitle from './DraftVideoTitle';
import DraftVideoSearch from './DraftVideoSearch';
import DraftPlaylist from './DraftPlaylist';
import DraftFilters from './DraftFilters';
import HEROES from './AovHeroes';
import {
  HERO_FILTERS,
  DEFAULT_TOP_LEVEL_FILTER,
  VIDEO_SEARCH_TERMS,
  DEFAULT_VIDEO_SEARCH_TERM,
  AOV_CHANNELS,
} from './DraftConstants';
import { AOV_GOLD, MOBILE_MAX_WINDOW_WIDTH } from '../../constants';

import List from 'material-ui/List';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Switch from 'material-ui/Switch';

import { Icon } from 'react-icons-kit';
import { ic_sort_by_alpha } from 'react-icons-kit/md/ic_sort_by_alpha';
import { sortAlphabetically } from 'react-icons-kit/typicons/sortAlphabetically';
import { grid } from 'react-icons-kit/feather/grid';
import { ic_view_list } from 'react-icons-kit/md/ic_view_list';
import { ic_chevron_right } from 'react-icons-kit/md/ic_chevron_right';
import { ic_chevron_left } from 'react-icons-kit/md/ic_chevron_left';
import {ic_filter_list} from 'react-icons-kit/md/ic_filter_list'

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
  grid_container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  dark_mode: {
    background: '#303030',
    color: 'white',
  },
  textFieldMobile: {
    width: 100,
  },
  toggle_switch: {
    // width: 200
  },
  autoplay_text: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: '.07px'
  },
  autoplay_align: {
    textAlign: 'right'
  },
  upnext_text: {
    fontSize: 12,
    fontWeight: 600,
    marginLeft: 10,
  },
  center_align: {
    alignItems: 'center'
  },
  filter_text: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 13,
    color: 'gray',
    letterSpacing: '.07px',
    fontWeight: 'bold'
  },
  video_search_container: {
    marginBottom: 20
  }
});

class Draft extends React.Component {
  state = {
    selected_hero: {
      name: null,
      active: false,
    },
    is_autoplaying: this.props.youtube_list.autoplay,
    hero_filter_toggle: false,
    hero_filter_alphabetical: true,
    hero_filter_list_view: false,
    is_hero_filter_grid_view_expanded: false,
    top_level_filter_selected: DEFAULT_TOP_LEVEL_FILTER,
    lower_level_filter_selected: HERO_FILTERS[DEFAULT_TOP_LEVEL_FILTER][0],
    video_search_term: VIDEO_SEARCH_TERMS[0],
    video_search_term_default: DEFAULT_VIDEO_SEARCH_TERM,
    window_width: null,
    channel: null,
    is_params_set: false
  };

  // HERO_FILTERS FUNCTIONS
  onTopLevelFilterChange = (e, filter) => {
    this.setState({
      top_level_filter_selected: filter,
      lower_level_filter_selected: HERO_FILTERS[filter][0], // select the first lower level filter
    })
  }

  handleChange = name => event => {
    this.props.actions.toggleAutoplay()
    this.setState({ [name]: event.target.checked });
  }

  onLowerLevelFilterChange = (e, filter) => {
    this.setState({
      lower_level_filter_selected: filter, // select the first lower level filter
    });
  };

  onFilterAlphabeticalChange = e => {
    this.setState({
      hero_filter_alphabetical: !this.state.hero_filter_alphabetical,
    });
  };

  onFilterGridListViewChange = e => {
    this.setState({
      hero_filter_list_view: !this.state.hero_filter_list_view,
    });
  };

  onFilterToggleChange = e => {
    this.setState({
      hero_filter_toggle: !this.state.hero_filter_toggle
    })
  }

  onFilterExpand = e => {
    this.setState({
      is_hero_filter_grid_view_expanded: !this.state
        .is_hero_filter_grid_view_expanded,
    });
  };

  // hero is ARRAY of hero objects
  // returns filtered array of hero objects based on top and lower level filters
  filterResults = heroes => {
    const {
      top_level_filter_selected,
      lower_level_filter_selected,
    } = this.state;
    let key = null;
    if (top_level_filter_selected === 'CLASS') {
      key = 'classes';
    } else if (top_level_filter_selected === 'ROLE') {
      key = 'roles';
    } else if (top_level_filter_selected === 'TIER') {
      key = 'tier';
    } else if (top_level_filter_selected === 'LANE') {
      key = 'lanes';
    }

    let filtered_heroes = null;
    if (lower_level_filter_selected === 'all') {
      filtered_heroes = heroes
    } else if (top_level_filter_selected === 'TIER'){
      filtered_heroes = heroes.filter(hero =>
        hero[key] == lower_level_filter_selected
      )
    } else {
      filtered_heroes = heroes.filter(hero =>
        hero[key].includes(lower_level_filter_selected) // use includes because of array of values
      )
    }

    return filtered_heroes;
  };

  sortResultsAlpha = heroes => {
    heroes = heroes.sort((a, b) => a.name.localeCompare(b.name));
    return heroes;
  };

  sortResultsTier = heroes => {
    heroes = heroes.sort((a, b) => a.tier_index - b.tier_index);
    return heroes;
  };

  sortResultsTierAlpha = heroes => {
    heroes = heroes.sort(
      (a, b) => a.tier_index - b.tier_index || a.name.localeCompare(b.name),
    );
    return heroes;
  };

  // VIDEO SEARCH FUNCTIONS
  onVideoSearchTermChange = video_search_term => {
    this.setState({ video_search_term }, () => {
      this.handleFetchYoutubeVideos(this.state.selected_hero.name);
    });
  };

  // handling the click on the hero list item
  // it also fires off the request to fetch YT videos
  handleFetchYoutubeVideos = name => {
    this.props.actions.fetchYoutubeList(this.createQuery(name));
  };

  uiSelectHero = name => {
    this.collapse_expanded_view(this.state.selected_hero.name, name);
    this.setState({
      selected_hero: {
        name,
        active: true,
      },
    });
    this.handleFetchYoutubeVideos(this.createQuery(name));
  };

  handleVideoSearch = video_search_term => {
    this.setState(
      {
        video_search_term,
        is_hero_filter_grid_view_expanded: false,
      },
      () => {
        const hero = ''; // just search default search term without any hero (ie. hero = '')
        this.handleFetchYoutubeVideos(hero);
      },
    );
  };

  // collapses expanded grid if new hero is selected
  collapse_expanded_view = (prev_selection, new_selection) => {
    if (
      this.state.is_hero_filter_grid_view_expanded &&
      prev_selection &&
      prev_selection !== new_selection
    ) {
      this.setState({
        is_hero_filter_grid_view_expanded: false,
      })
    }
  };

  createQuery = hero_name =>
    `${ hero_name }+${ this.state.video_search_term_default }+${ this.state.video_search_term }`;

  getHeroObject = hero_name =>
    HEROES.filter(
      hero_obj =>
        hero_obj.alt_names.findIndex(
          alt_name => alt_name.toLowerCase() === hero_name.toLowerCase(),
        ) > -1,
    )[0] // get first object that matches the filter ;)

  handleRouteParams = () => {
    const params = this.props.params;
    this.setState({ is_params_set: true})

    // Get params from Route
    const { hero, video_search_term, channel_id } = params;

    if ( hero || video_search_term || channel_id) {
      // ie. www.../video/hero/chaugnar
      if (hero) {
        const hero_obj = this.getHeroObject(hero);
        this.uiSelectHero(hero_obj.name);
        this.props.actions.selectHero(hero_obj);
      } else {
        // redirect to ALL heroes, change url in router...
      }

      // ie. www.../video/abrownbag
      if (video_search_term) {
        this.handleVideoSearch(video_search_term);
      }

      if (channel_id) {
        const channel = AOV_CHANNELS.filter(c => c.channel_id == channel_id)[0];
        if (channel) {
          this.setState({ channel })
          this.handleVideoSearch(channel.channel_id)
        }
      }
    } else {
      this.handleVideoSearch('')
    }
  };

  resetChannel = () => {
    this.setState({ channel: null, is_params_set: true})
  }

  handleRouteQuery = () => {
    const props = this.props;
  }

  isWindowMobile = (w) => { return w <= MOBILE_MAX_WINDOW_WIDTH }

  componentDidMount() {
    // PS... for resize event handler: https://stackoverflow.com/questions/40580424/react-isomorphic-rendering-handle-window-resize-event

    this.setState({ window_width: window.innerWidth },
      () => {
        this.handleRouteParams(); // relies on window width, so using cb
        this.handleRouteQuery();
      }
    );
  }

  componentDidUpdate() {
    // UPDATE CHANNEL AND VIDEO LIST WHEN ROUTE PARAMS CHANGE (ie. Click on Channel from Video page or vice versa, and component is already mounted)
    let channel_id = this.props.params.channel_id
    let channel = AOV_CHANNELS.filter(c => c.channel_id == channel_id)[0]
    if(!channel_id && this.state.channel) {
      this.setState({ channel: null})
      this.handleVideoSearch('')
    }
    else if(channel && (channel != this.state.channel)){
      this.setState({channel})
      this.handleVideoSearch(channel_id)
    }
  }

  render() {
    const { classes, utilities, params } = this.props;

    const {
      window_width,
      top_level_filter_selected,
      lower_level_filter_selected,
      video_search_term,
      selected_hero,
      hero_filter_alphabetical,
      hero_filter_list_view,
      is_hero_filter_grid_view_expanded,
      channel,
      is_params_set
    } = this.state;

    const { dark_mode_active } = utilities;
    const isMobile = this.isWindowMobile(window_width);

    // VIEW SELECTION
    //
    let order_hero = null;
    let alpha_filter_info = null;
    // let list_filter_active = hero_filter_alphabetical
    let hero_filter_alphabetical_color = 'gray';

    if (hero_filter_alphabetical) {
      order_hero = this.sortResultsAlpha(this.filterResults(HEROES));
      alpha_filter_info = 'alpha order';
      hero_filter_alphabetical_color = AOV_GOLD;
    } else {
      order_hero = this.sortResultsTierAlpha(this.filterResults(HEROES));
      alpha_filter_info = 'tier order';
    }

    let view_info = null;
    let filter_list_grid_icon = (
      <Icon
        icon={grid}
        size={20}
        style={{ color: 'gray', cursor: 'pointer' }}
      />
    );
    if (hero_filter_list_view) {
      filter_list_grid_icon = (
        <Icon
          icon={ic_view_list}
          size={20}
          style={{ color: 'gray', cursor: 'pointer' }}
        />
      );
      view_info = 'list view';
    } else {
      view_info = 'grid view';
    }

    let filters_on_icon = (
      <Icon
        icon={ic_filter_list}
        size={20}
        style={{ color: 'gray', cursor: 'pointer' }}
      />
    )
    // VIEWS - LIST OR GRID
    //
    let list = null;
    let list_grid = null;
    let hero_view_grid_cols = null;
    let hero_view_video_cols = null;
    let hero_view_video_list_cols = null;
    if (hero_filter_list_view) {
      list = order_hero.map(h => (
        <DraftListItem
          hero={h}
          {...this.props}
          handleFetchYoutubeVideos={this.uiSelectHero}
        />
      ));
      list_grid = <List>{list}</List>;
      hero_view_grid_cols = 3;
      hero_view_video_cols = 7;
    } else {
      list_grid = (
        <DraftGrid
          is_mobile={isMobile}
          order_hero={order_hero}
          handleFetchYoutubeVideos={this.uiSelectHero}
          {...this.props}
        />
      );
      hero_view_grid_cols = 12;
      hero_view_video_cols = false;
    }

    // GRID EXPAND
    //
    let expand_grid_arrow = null;
    if (!isMobile) {
      if (!hero_filter_list_view) {
        if (is_hero_filter_grid_view_expanded) {
          expand_grid_arrow = (
            <span onClick={this.onFilterExpand}>
              <Icon
                icon={ic_chevron_left}
                size={18}
                style={{ cursor: 'pointer' }}
              />
            </span>
          );
        } else {
          expand_grid_arrow = (
            <span onClick={this.onFilterExpand}>
              <Icon
                icon={ic_chevron_right}
                size={18}
                style={{ cursor: 'pointer' }}
              />
            </span>
          );
        }
      }
    }

    // SET LAYOUT
    //
    if (selected_hero.active) {
      hero_view_grid_cols = 3;
      hero_view_video_cols = 7;
      hero_view_video_list_cols = 2;
    } else if (hero_filter_list_view) {
      hero_view_grid_cols = 3;
      hero_view_video_cols = 7;
      hero_view_video_list_cols = 2;
    } else {
      hero_view_grid_cols = 12;
      hero_view_video_cols = false;
      hero_view_video_list_cols = false;
    }

    if (is_hero_filter_grid_view_expanded) {
      hero_view_grid_cols = 12;
      hero_view_video_cols = 7;
      hero_view_video_list_cols = 3;
    } else {
      hero_view_grid_cols = 3;
      hero_view_video_cols = 7;
      hero_view_video_list_cols = 2;
    }

    // VIDEO SEARCH FILTER
    // NOTE: for if you want to change placement of video search/dropdown (into header bar)
    const video_search = (
      <DraftVideoSearch
        onVideoSearchTermChange={this.onVideoSearchTermChange}
        is_mobile={isMobile}
        className={classes.textFieldMobile}
        {...this.props}
      />
    );

    return (
      <div
        className={cx(classes.root, s.root_container, {
          [classes.dark_mode]: dark_mode_active,
        })}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            className={cx(s.main_one, {
              [classes.dark_mode]: dark_mode_active,
            })}
          >
            { this.state.hero_filter_toggle && <DraftFilters
              is_mobile={isMobile}
              dark_mode_active={dark_mode_active}
              filters={HERO_FILTERS}
              onTopLevelFilterChange={this.onTopLevelFilterChange}
              onLowerLevelFilterChange={this.onLowerLevelFilterChange}
              top_level_filter_selected={top_level_filter_selected}
              lower_level_filter_selected={lower_level_filter_selected}
            />
            }
            <div
              className={cx(s.list_filter_container, {
                [classes.dark_mode]: dark_mode_active,
              })}
            >
              <span
                className={cx(
                  s.list_filter,
                  { [s.list_filter_active]: hero_filter_alphabetical },
                  s.cursor_pointer,
                )}
                onClick={this.onFilterAlphabeticalChange}
              >
                <Icon
                  icon={sortAlphabetically}
                  size={20}
                  style={{
                    color: hero_filter_alphabetical_color,
                    cursor: 'pointer',
                  }}
                />
              </span>
              <span className={s.list_filter_info}>{alpha_filter_info}</span>
              <span
                className={cx(s.list_filter_view, s.cursor_pointer)}
                onClick={this.onFilterGridListViewChange}
              >
                {filter_list_grid_icon}
              </span>
              <span className={s.list_filter_info}>{view_info}</span>
              <span
                className={cx(s.list_filter_view, s.cursor_pointer)}
                onClick={this.onFilterToggleChange}
              >
                {filters_on_icon}
              </span>
              <span className={s.list_filter_info}>filter</span>
              <span className={s.list_filter_arrow}>{expand_grid_arrow}</span>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={hero_view_grid_cols}
            lg={hero_view_grid_cols}
            zeroMinWidth
            className={cx({ [classes.dark_mode]: dark_mode_active })}
          >
            {list_grid}
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={hero_view_video_cols}
            lg={hero_view_video_cols}
            zeroMinWidth
            className={cx({ [classes.dark_mode]: dark_mode_active })}
          >
            <div className={s.channel_header_container}>
              <ChannelHeader channel={channel} />
            </div>
            <div className={s.draft_video_container}>
              <DraftVideo
                video_search_term={video_search_term}
                is_mobile={isMobile}
                {...this.props}
              />
              <DraftVideoTitle {...this.props} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={hero_view_video_list_cols}
            lg={hero_view_video_list_cols}
            zeroMinWidth
            className={cx({ [classes.dark_mode]: dark_mode_active })}
          >
            <div className={classes.filter_text}>
              SEARCH
            </div>
            <div className={classes.video_search_container}>
              {video_search}
            </div>
            <div className={cx(classes.grid_container, classes.center_align)}>
              <span className={cx(classes.root, classes.upnext_text)}>Up next</span>
              <span className={cx(classes.root, classes.autoplay_align)}>
                <span className={classes.autoplay_text}>AUTOPLAY</span>
                <span>
                  <Switch
                    checked={this.state.is_autoplaying}
                    onChange={this.handleChange('is_autoplaying')}
                    value="is_autoplaying"
                    className={classes.toggle_switch}
                  />
                </span>
              </span>
            </div>
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

export default withStyles2(s)(
  withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Draft)),
);
