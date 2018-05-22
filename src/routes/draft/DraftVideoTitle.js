import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
// import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import s from './Aov.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { DEFAULT_IMAGE_URL } from './DraftConstants'
import { Icon } from 'react-icons-kit';
import { socialYoutubeOutline } from 'react-icons-kit/ionicons/socialYoutubeOutline';

class DraftVideoTitle extends React.Component {

  render() {
    const { youtube_list } = this.props
    const hero = youtube_list.selected_hero
    const selected_video = youtube_list.selected_video

    let name, nickname, classes, lanes, roles, tier, folder;
    name = nickname = classes = lanes = roles = tier = folder = null;

    if (hero) {
      ({name, nickname, classes, lanes, roles, tier, folder } = hero)
    }

    let avatar = null
    if (folder) {
      avatar = (
        <div className={s.avatar_container}>
          <img className={classNames(s.avatar_small, s.avatar_small_title)} src={`/aov/heroes/${folder}/hero.png`} />
        </div>
      )
    } else {
      avatar = (
        <div className={s.avatar_container}>
          <img className={classNames(s.avatar_small, s.avatar_small_title)} src={DEFAULT_IMAGE_URL} />
        </div>
      )
    }

    let title = null
    let channel = null;
    let channel_id = null;

    if (selected_video) {
      title = selected_video.snippet.title
      channel = selected_video.snippet.channelTitle
      channel_id = selected_video.snippet.channelId;

      return (
        <div className={s.flex_container_row}>
          <div className={classNames(s.video_player_title_container, s.flex_container_row)}>
            { avatar }
          </div>
          <div className={classNames(s.item_playlist, s.margin_top_title)}>
            <div className={s.item_title}>{title}</div>
            <div className={classNames(s.flex_container_row)}>
              <a
                className={s.channel_link}
                href={`https://www.youtube.com/channel/${channel_id}`}
                target="blank"
              >
                <span className={classNames(s.item_channel)}>{channel}</span>
                <Icon
                  style={{ color: '#E62117' }}
                  className={s.item_yt_icon}
                  icon={socialYoutubeOutline}
                  size={12}
                />
              </a>
            </div>
          </div>
        </div>
      )
    }

    else {
      return null
    }
  }
}

export default withStyles(s)(DraftVideoTitle);
