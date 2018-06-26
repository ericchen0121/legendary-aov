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
})

class BuildItem extends React.Component {
  state = {
    expanded: null,
    panel1_text: '',
    panel2_text: '',
    panel3_text: '',
    panel4_text: '',
    panel5_text: ''
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, actions, ...other } = this.props
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<Icon icon={ic_expand_more}/>} >
            <Typography className={classes.heading}>Summary</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Input
              fullWidth={true}
              multiline={true}
              value={this.state.panel1_text}
              onChange={this.handleTextChange('panel1_text')}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<Icon icon={ic_expand_more}/>} >
            <Typography className={classes.heading}>Items</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Input
              fullWidth={true}
              multiline={true}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<Icon icon={ic_expand_more}/>} >
            <Typography className={classes.heading}>Matchups</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Input
              fullWidth={true}
              multiline={true}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<Icon icon={ic_expand_more}/>} >
            <Typography className={classes.heading}>Arcana</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Input
              fullWidth={true}
              multiline={true}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<Icon icon={ic_expand_more}/>} >
            <Typography className={classes.heading}>Combos</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Input
              fullWidth={true}
              multiline={true}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
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
