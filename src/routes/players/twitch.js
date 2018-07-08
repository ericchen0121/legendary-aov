import React from 'react'

// API docs
// https://dev.twitch.tv/docs/embed/video-and-clips/


// Adapted from
// https://jsfiddle.net/tadachi/7jzfnw99/8/
// https://stackoverflow.com/questions/48724108/using-twitch-embedded-video-with-reactjs
//
// Changed from example: it uses a new embed url and the Twitch.Player function
//
const EMBED_URL = 'http://player.twitch.tv/js/embed/v1.js';

class Twitch extends React.Component {
  componentDidMount() {
    let embed;
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      EMBED_URL
    )

    script.addEventListener('load', () => {
      embed = new window.Twitch.Player(this.props.targetID, { ...this.props });
    })

    document.body.appendChild(script);
  }

  render() {
    return (
        <div>
          Twitch {this.props.channel} {this.props.width} {this.props.height}
        <div id={this.props.targetID}></div>
      </div>
    )
  }
}

Twitch.defaultProps = {
  targetID: 'twitch-embed',
  width: '95%',
}

export default Twitch
