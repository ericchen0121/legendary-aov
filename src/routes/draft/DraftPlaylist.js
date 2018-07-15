import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Aov.css';
import cx from 'classnames';
import Divider from 'material-ui/Divider';

class DraftPlaylist extends Component {
  sort_recent(list) {
    return list.sort((a,b) => {
        return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
    })
  }

  render() {
    const { youtube_list, utilities } = this.props;
    const { dark_mode_active } = utilities;
    const more_playlist_alert = 'SCROLL FOR MORE';

    let list = youtube_list.data;

    // list = this.sort_recent(list)

    const imgs = list.map(item => {
      const url = item.snippet.thumbnails.medium.url;
      const title = item.snippet.title;
      const channel = item.snippet.channelTitle;
      return (
        <div>
          <div
            className={s.item_playlist}
            onClick={() => this.props.actions.selectYoutubeVideo(item)}
          >
            <img className={s.yt_img} src={url} />
            <div
              className={cx(s.item_title, { [s.white_text]: dark_mode_active })}
            >
              {title}
            </div>
            <div
              className={cx(s.item_channel, {
                [s.white_text]: dark_mode_active,
              })}
            >
              {channel}
            </div>
          </div>
          <Divider />
        </div>
      );
    });

    return (
      <div>
        <div className={cx(s.wrapper, s.item_playlist_container)}>{imgs}</div>
        <div className={s.item_playlist_container_more}>
          {more_playlist_alert}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DraftPlaylist);
