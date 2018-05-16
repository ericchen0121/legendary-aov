import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
// import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import s from './Aov.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { DEFAULT_IMAGE_URL } from './DraftConstants'

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
      avatar = <div className={s.avatar_container}><img className={s.avatar_small} src={`/aov/heroes/${folder}/hero.png`} /></div>
    } else {
      avatar = <div className={s.avatar_container}><img className={s.avatar_small} src={DEFAULT_IMAGE_URL} /></div>
    }

    let title = null
    let channel = null;

    if (selected_video) {
      title = selected_video.snippet.title
      channel = selected_video.snippet.channelTitle

      return (
        <div className={s.flex_container_row}>
          <div className={classnames(s.video_player_title_container, s.flex_container_row)}>
            { avatar }
          </div>
          <div className={classnames(s.item_playlist, s.margin_top_title)}>
            <div className={s.item_title}>{title}</div>
            <div className={s.item_channel}>{channel}</div>
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
