import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ReactPlayer from 'react-player';
import s from './Aov.css'
import { Icon } from 'react-icons-kit'
import {arrowCircleLeft} from 'react-icons-kit/fa/arrowCircleLeft'
import {arrowCircleUp} from 'react-icons-kit/fa/arrowCircleUp'
import { withBaseIcon } from 'react-icons-kit'
import {iosGameControllerBOutline} from 'react-icons-kit/ionicons/iosGameControllerBOutline'

const VID_HEIGHT = 430
const VID_WIDTH = 640
const VID_RATIO = 1

const IconContainer =
    withBaseIcon({ size: 24, style: {color: 'lightgray', marginTop: 10}})

export const UpArrow = () => <IconContainer icon={arrowCircleUp}/>
export const LeftArrow = () => <IconContainer icon={arrowCircleLeft}/>

class DraftVideo extends React.Component {
  //  examples here: https://github.com/CookPete/react-player/blob/master/src/demo/App.js
  onEnded = () => {
    console.log('replaying video')
    this.player.seekTo(0)
  }

  ref = player => {
    this.player = player
  }

  render() {
    const { youtube_list, is_mobile } = this.props;

    let vid = null;

    let HEIGHT = `${VID_HEIGHT * VID_RATIO}px`
    let WIDTH = '95%'

    if (is_mobile) {
      HEIGHT = 220
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
            controls={true}
            onEnded={this.onEnded}
            />
        </div>
      )
    }
    else {
      vid = (
        <div className={s.select_player}>
          <Icon icon={iosGameControllerBOutline} size={140} style={{'color': 'green'}} />
          <div><UpArrow /> <span className={s.instruction}>filter heroes and</span></div>
          <div><LeftArrow /> <span className={s.instruction}>select a hero to watch videos</span></div>
        </div>
      )
    }

    return <div className="video_player_container">{vid}</div>
  }
}

export default DraftVideo;
