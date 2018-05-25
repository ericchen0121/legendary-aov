import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Aov.css';
import cx from 'classnames'
import Divider from 'material-ui/Divider';

class DraftPlaylist extends Component {

  render() {
    const { youtube_list, utilities } = this.props;
    const { dark_mode_active } = utilities
    const more_playlist_alert = 'SCROLL FOR MORE'

    let list = youtube_list.data
    let imgs = list.map((item) => {
      let url = item.snippet.thumbnails.medium.url
      let title = item.snippet.title
      let channel = item.snippet.channelTitle
      return (
        <div>
          <div className={s.item_playlist} onClick={() => this.props.actions.selectYoutubeVideo(item)}>
            <img className={s.yt_img} src={url} />
            <div className={cx(s.item_title, {[s.white_text]: dark_mode_active } )}>{title}</div>
            <div className={cx(s.item_channel, {[s.white_text]: dark_mode_active } )}>{channel}</div>
          </div>
          <Divider />
        </div>
      )
    })

    return (
        <div>
          <div className={cx(s.wrapper, s.item_playlist_container)}>
            {imgs}
          </div>
          <div className={s.item_playlist_container_more}>{more_playlist_alert}</div>
        </div>
    )
  }
}

export default withStyles(s)(DraftPlaylist);
