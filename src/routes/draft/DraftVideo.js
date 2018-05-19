import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ReactPlayer from 'react-player';
import s from './Aov.css'
import { Icon } from 'react-icons-kit'
import {arrowCircleLeft} from 'react-icons-kit/fa/arrowCircleLeft'
import {arrowCircleUp} from 'react-icons-kit/fa/arrowCircleUp'
import { withBaseIcon } from 'react-icons-kit'

const VID_HEIGHT = 430
const VID_WIDTH = 640
const VID_RATIO = .85

const IconContainer =
    withBaseIcon({ size: 24, style: {color: 'lightgray', marginTop: 10}})

export const UpArrow = () => <IconContainer icon={arrowCircleUp}/>
export const LeftArrow = () => <IconContainer icon={arrowCircleLeft}/>

class DraftVideo extends React.Component {

  render() {
    const { youtube_list } = this.props;

    let vid = null;
    if (youtube_list.data.length !== 0) {
      const id = youtube_list.selected_video.id.videoId;
      const HEIGHT = `${VID_HEIGHT * VID_RATIO}px`
      // const WIDTH = `${VID_WIDTH * VID_RATIO}px`
      const WIDTH = '95%'
      vid = (
        <div className={s.video}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width={WIDTH}
            height={HEIGHT}
            playing
            controls={true}
            />
        </div>
      );
    }
    else {
      vid = (
        <div className={s.select_player}>
          <div><UpArrow /> <span className={s.instruction}>filter heros and</span></div>
          <div><LeftArrow /> <span className={s.instruction}>select a hero to watch videos</span></div>
        </div>
      )
    }

    return <div className="video_player_container">{vid}</div>
  }
}

export default DraftVideo;
