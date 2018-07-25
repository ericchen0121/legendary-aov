import React from 'react'
import cx from 'classnames'
import s from './Player.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

import { Icon } from 'react-icons-kit'
import {twitch} from 'react-icons-kit/fa/twitch'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay'
import {twitter} from 'react-icons-kit/fa/twitter'
import {facebook} from 'react-icons-kit/fa/facebook'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {instagram} from 'react-icons-kit/fa/instagram'

const styles = theme => ({
  twitch_live: {
    color: 'red',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: -1,
    marginLeft: 5,
    position: 'absolute'
  }
});

class PlayerCard extends React.Component {

  create_icon = (icon_img) => {
    return <Icon icon={icon_img} />
  }

  render() {
    const { classes, type, link, is_twitch_live } = this.props

    let icon, social_link
    if (type === 'twitter') {
      social_link = `http://www.twitter.com/${link}`
      icon = this.create_icon(twitter)
    }
    else if (type === 'youtube') {
      social_link = `http://www.youtube.com/channel/${link}`
      icon = this.create_icon(youtubePlay)
    }
    else if (type === 'twitch') {
      social_link = `http://www.twitch.com/${link}`
      icon = this.create_icon(twitch)
    }
    else if (type === 'facebook') {
      social_link = `http://www.facebook.com/${link}`
      icon = this.create_icon(facebook)
    }
    else if (type === 'garena') {
      social_link = `http://www.garena.live/${link}`
    }
    else if (type === 'instagram') {
      social_link = `http://www.instagram.com/${link}`
      icon = this.create_icon(instagram)
    }

    return <span>
      <a href={social_link} target="_blank">{icon}</a>
      { type === 'twitch' && is_twitch_live && <span className={classes.twitch_live}>LIVE</span>}
    </span>
  }
}

export default withStyles(styles)(
  withStyles2(s)(PlayerCard)
)
