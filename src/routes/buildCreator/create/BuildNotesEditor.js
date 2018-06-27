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
  },
  note_saved: {
    color: 'green'
  },
  note_not_saved: {
    color: 'grey'
  },
  save_text_position: {
    marginLeft: 30
  }
})

class BuildNotesEditor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      expanded: null,
      notes: props.build_creator.current_build.notes
    }
  }

  timeout = 0

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
    let text = event.target.value
    notes[name] = text

    this.setState({
      notes
    });

    //save to redux after user stops typing
    // https://stackoverflow.com/questions/42217121/searching-in-react-when-user-stops-typing
    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.actions.addNotes({field: name, text}) // redux save!
    }, 800);
  }

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
         let is_saved = (notes[p] === this.state.notes[p]) && notes[p] !== ''
         let note_class = is_saved ? classes.note_saved : classes.note_not_saved
         let is_saved_text = is_saved ? 'saved' : 'editing'

         return (
           <ExpansionPanel expanded={expanded === p} onChange={this.handleChange(p)}>
             <ExpansionPanelSummary expandIcon={<Icon icon={ic_expand_more}/>} >
               <Typography className={classes.heading}>
                {p.toUpperCase()}
                <span className={cx(note_class, classes.save_text_position)}>{ is_saved_text }</span>
              </Typography>

             </ExpansionPanelSummary>
             <ExpansionPanelDetails>
               <Input
                 fullWidth={true}
                 multiline={true}
                 value={this.state.notes[p]}
                 onChange={this.handleTextChange(p)}
                 className={note_class}
               />
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
  connect(mapStateToProps, mapDispatchToProps)(BuildNotesEditor)
);
