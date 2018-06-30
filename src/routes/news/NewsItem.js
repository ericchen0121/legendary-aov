import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './News.scss';
import Markdown from 'react-markdown'

class NewsItem extends React.Component {
  static propTypes = {
    input: PropTypes.string.isRequired,
  };

  render() {
    let { input } = this.props
    return (
      <Markdown source={input} />
    )
  }
}

export default withStyles(s)(NewsItem);
