import React from 'react'
import cx from 'classnames'
import { withStyles } from 'material-ui/styles';
import BuildItemImage from './BuildItemImage'
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import ExpansionPanel, {ExpansionPanelDetails, ExpansionPanelSummary} from 'material-ui/ExpansionPanel';
import Input from 'material-ui/Input'
import Typography from 'material-ui/Typography';
import { Icon } from 'react-icons-kit';
import {ic_expand_more} from 'react-icons-kit/md/ic_expand_more'

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


  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes, actions, build } = this.props
    const { expanded } = this.state;

    let panels = ['summary', 'items', 'arcana', 'matchups', 'combos']
    let notes
    if (build.notes) {
      notes = JSON.parse(build.notes)
    } else {
      return <div />
    }

    return (
      <div className={classes.root}>
       { panels.map(p => {

          if(notes[p] !== '') { // show non-empty fields
            console.log(notes[p])
            return (
              <ExpansionPanel expanded={expanded === p} onChange={this.handleChange(p)}>
                <ExpansionPanelSummary expandIcon={<Icon icon={ic_expand_more}/>} >
                  <Typography className={classes.heading}>
                   {p.toUpperCase()}
                 </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.details}>
                    {notes[p]}
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
