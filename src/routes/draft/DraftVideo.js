import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ReactPlayer from 'react-player';
import s from './Aov.css';
import cx from 'classnames';
import { Icon } from 'react-icons-kit';
import { arrowCircleLeft } from 'react-icons-kit/fa/arrowCircleLeft';
import { arrowCircleUp } from 'react-icons-kit/fa/arrowCircleUp';
import { withBaseIcon } from 'react-icons-kit';
import { iosGameControllerBOutline } from 'react-icons-kit/ionicons/iosGameControllerBOutline';
import { HIGHLIGHT_COLOR } from '../../constants';

const VID_HEIGHT = 430;
const VID_WIDTH = 640;
const VID_RATIO = 1;

const IconContainer = withBaseIcon({
  size: 24,
  style: { color: HIGHLIGHT_COLOR, marginTop: 10 },
});

export const UpArrow = () => <IconContainer icon={arrowCircleUp} />;
export const LeftArrow = () => <IconContainer icon={arrowCircleLeft} />;

class DraftVideo extends React.Component {
  //  examples here: https://github.com/CookPete/react-player/blob/master/src/demo/App.js
  onEnded = () => {
    this.restartVideo();
  };

  restartVideo = () => {
    this.player.seekTo(0);
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const { youtube_list, is_mobile, utilities } = this.props;
    const { dark_mode_active } = utilities;

    let vid = null;

    let HEIGHT = `${VID_HEIGHT * VID_RATIO}px`;
    const WIDTH = '100%';

    if (is_mobile) {
      HEIGHT = 220;
    }

    if (youtube_list.data.length !== 0) {
      const id = youtube_list.selected_video.id.videoId;

      vid = (
        <div className={s.video}>
          <ReactPlayer
            ref={this.ref}
            url={`https://www.youtube.com/watch?v=${id}`}
            width={WIDTH}
            height={HEIGHT}
            playing
            controls
            onEnded={this.onEnded}
          />
        </div>
      );
    } else {
      vid = (
        <div className={s.select_player}>
          <Icon
            icon={iosGameControllerBOutline}
            size={140}
            style={{ color: '#22c1c3' }}
          />
          <div>
            <UpArrow />{' '}
            <span
              className={cx(s.instruction, {
                [s.white_text]: dark_mode_active,
              })}
            >
              FILTER HEROES &
            </span>
          </div>
          <div>
            <LeftArrow />{' '}
            <span
              className={cx(s.instruction, {
                [s.white_text]: dark_mode_active,
              })}
            >
              SELECT, WATCH, & BECOME LEGENDARY{' '}
            </span>
          </div>
          <div>
            <span
              className={cx(s.instruction, {
                [s.white_text]: dark_mode_active,
              })}
            >
              (or CONQUERER, MASTER, DIAMOND, GOLD...)
            </span>
          </div>
        </div>
      );
    }

    return <div className={s.video_player_container}>{vid}</div>;
  }
}

export default DraftVideo;
