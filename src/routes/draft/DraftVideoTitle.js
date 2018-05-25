import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import s from './Aov.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { DEFAULT_IMAGE_URL } from './DraftConstants';
import { Icon } from 'react-icons-kit';
import { socialYoutubeOutline } from 'react-icons-kit/ionicons/socialYoutubeOutline';

class DraftVideoTitle extends React.Component {
  render() {
    const { youtube_list, utilities } = this.props;
    const { dark_mode_active } = utilities;
    const hero = youtube_list.selected_hero;
    const selected_video = youtube_list.selected_video;

    let name, nickname, classes, lanes, roles, tier, folder;
    name = nickname = classes = lanes = roles = tier = folder = null;

    if (hero) {
      ({ name, nickname, classes, lanes, roles, tier, folder } = hero);
    }

    let avatar = null;
    if (folder) {
      avatar = (
        <div className={s.avatar_container}>
          <img
            className={cx(s.avatar_small, s.avatar_small_title)}
            src={`/aov/heroes/${folder}/hero.png`}
          />
        </div>
      );
    } else {
      avatar = (
        <div className={s.avatar_container}>
          <img
            className={cx(s.avatar_small, s.avatar_small_title)}
            src={DEFAULT_IMAGE_URL}
          />
        </div>
      );
    }

    let title = null;
    let channel = null;
    let channel_id = null;

    if (selected_video) {
      title = selected_video.snippet.title;
      channel = selected_video.snippet.channelTitle;
      channel_id = selected_video.snippet.channelId;

      return (
        <div className={s.flex_container_row}>
          <div
            className={cx(s.video_player_title_container, s.flex_container_row)}
          >
            {avatar}
          </div>
          <div className={cx(s.item_playlist, s.margin_top_title)}>
            <div
              className={cx(s.item_title, { [s.white_text]: dark_mode_active })}
            >
              {title}
            </div>
            <div className={cx(s.flex_container_row)}>
              <a
                className={s.channel_link}
                href={`https://www.youtube.com/channel/${channel_id}`}
                target="blank"
              >
                <span
                  className={cx(s.item_channel, {
                    [s.white_text]: dark_mode_active,
                  })}
                >
                  {channel}
                </span>
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
      );
    }

    return null;
  }
}

export default withStyles(s)(DraftVideoTitle);
