import React, { Component } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import s from './Aov.css';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import { VIDEO_SEARCH_TERMS } from './DraftConstants'


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
});

class DraftVideoSearch extends Component {

  state = {
    player: '',
    search_term: VIDEO_SEARCH_TERMS[0],
  };

  handleChange = key => event => {
    this.setState({ [key]: event.target.value });
    this.props.onVideoSearchTermChange(event.target.value) // send to parent component
  };

  render() {
    const { classes, player, youtube_list, onVideoSearchTermChange } = this.props;

    let selected_player = null
    if (youtube_list.selected_player) {
      selected_player = youtube_list.selected_player.PLAYER
    }

    return (
      <div className={classNames(classes.root, s.video_search_container)}>
        <TextField
            select
            label={selected_player}
            className={classNames(classes.margin, classes.textField)}
            value={this.state.search_term}
            onChange={this.handleChange('search_term')}
            InputProps={{
              startAdornment: <InputAdornment position="start">youtube</InputAdornment>,
            }}
          >
          {VIDEO_SEARCH_TERMS.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    )
  }
}

export default withStyles2(s)(withStyles(styles)(DraftVideoSearch));
