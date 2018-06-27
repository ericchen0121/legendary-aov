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

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
  }
})

class BuildItem extends React.Component {
  state = {
    expanded: null,
    notes: {
      summary: '',
      items: '',
      matchups: '',
      arcana: '',
      combos: ''
    }
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  // TLDR: storing text in state for faster UI updates in the text field.
  // Storing to redux with Save button, so UI doesn't have to make roundtrip to Redux to (slowly) update UI
  handleTextChange = name => event => {
    // https://forum.freecodecamp.org/t/reactjs-using-setstate-to-update-a-single-property-on-an-object/146772/4
    let notes = Object.assign({}, this.state.notes);
    notes[name] = event.target.value
    this.setState({
      notes
    });
  };

  saveTextChange = (field, text) => event => {
    this.props.actions.addNotes({field, text})
  }

  render() {
    const { classes, actions, build_creator, ...other } = this.props
    const { expanded } = this.state;

    let panels = ['summary', 'items', 'arcana', 'matchups', 'combos']
    let notes = build_creator.current_build.notes
    return (
      <div className={classes.root}>
       { panels.map(p => {
         return (
           <ExpansionPanel expanded={expanded === p} onChange={this.handleChange(p)}>
             <ExpansionPanelSummary expandIcon={<Icon icon={ic_expand_more}/>} >
               <Typography className={classes.heading}>{p.toUpperCase()}</Typography>
             </ExpansionPanelSummary>
             <ExpansionPanelDetails>
               <Input
                 fullWidth={true}
                 multiline={true}
                 value={this.state.notes[p]}
                 onChange={this.handleTextChange(p)}
               />
               <Button
                 variant="flat"
                 color="primary"
                 onClick={this.saveTextChange(p, this.state.notes[p])}
               >SAVE</Button>
             </ExpansionPanelDetails>
           </ExpansionPanel>
         )
       })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(BuildItem)
);
