import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import s from './Aov.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class ChannelHeader extends React.Component {
  render() {
    const { channel } = this.props;

    let channel_html = null;
    if (channel) {
      channel_html = (
        <div className={s.flex_container_row}>
          <div className={s.channel_container}>
            <img
              className={s.channel_avatar}
              src={`/aov/channel/${channel.channel_id}/avatar.png`}
            />
          </div>
        </div>
      );
    }

    return channel_html;
  }
}

export default withStyles(s)(ChannelHeader);
