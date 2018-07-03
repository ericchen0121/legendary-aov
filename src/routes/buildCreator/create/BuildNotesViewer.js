import React from 'react'
import cx from 'classnames'
import { withStyles } from 'material-ui/styles';
import BuildItemImage from './BuildItemImage'
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import ExpansionPanel, {ExpansionPanelDetails, ExpansionPanelSummary} from 'material-ui/ExpansionPanel';
import Input from 'material-ui/Input'
import ReactPlayer from 'react-player';

import Typography from 'material-ui/Typography';
import { Icon } from 'react-icons-kit';
import {ic_expand_more} from 'react-icons-kit/md/ic_expand_more'

let WIDTH = 450
let HEIGHT = 300
const styles = theme => ({
  root: {
    flexGrow: 1,
    main_one: {
      order: 2,
      marginRight: 30,
    },
  },
  heading: {
    fontFamily: "'Josefin Sans', sans-serif"
  },
  save_text_position: {
    marginLeft: 30
  },
  details: {
    fontSize: 11
  }
})

class BuildNotesViewer extends React.Component {

  state = {
    expanded: null,
  }
  componentWillMount() {

  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  remove_underscore = (string) => string.replace(/_/g, ' ')

  render() {

    const { classes, actions, build } = this.props
    const { expanded } = this.state

    let panels = ['summary', 'items', 'arcana', 'matchups', 'combos', 'video_url', 'url']

    let notes
    if (build.notes) {
      notes = JSON.parse(build.notes)
    } else {
      return <div />
    }



    return (
      <div className={classes.root}>
       { panels.map(p => {
          let content, title

          if (p === 'video_url') {
            title = 'Video'
            content = (
              <ReactPlayer
                ref={this.ref}
                url={notes[p]}
                width={WIDTH}
                height={HEIGHT}
                controls
              />
            )
          }
          else if (p === 'url') {
            title = 'Website'
            content = <a href={notes[p]} target='_blank'>{notes[p]}</a>
          }
          else if(notes[p] !== '') { // show non-empty fields
            title = p
            content = notes[p]
          }

          if(notes[p] !== '') {
            return (
              <ExpansionPanel expanded={expanded === p} onChange={this.handleChange(p)}>
                <ExpansionPanelSummary expandIcon={<Icon icon={ic_expand_more}/>} >
                  <Typography className={classes.heading}>
                   { this.remove_underscore(title).toUpperCase() }
                 </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.details}>
                    {content}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )
          }
       })}
      </div>
    )
  }
}

export default withStyles(styles)(BuildNotesViewer)
