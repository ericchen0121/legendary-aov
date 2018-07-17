import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import BuildItemImage from './BuildItemImage'
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import ExpansionPanel, {ExpansionPanelDetails, ExpansionPanelSummary} from 'material-ui/ExpansionPanel';
import Input from 'material-ui/Input'
import ReactPlayer from 'react-player';
import { find_arcana_by_id } from '../AovArcana'
import BuildArcana from './BuildArcana'

import Typography from 'material-ui/Typography';
import { Icon } from 'react-icons-kit';
import {ic_expand_more} from 'react-icons-kit/md/ic_expand_more'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row'
  },
  spacing: {
    marginRight: 10
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

  remove_underscore = (string) => string.replace(/_/g, ' ')

  render() {

    const { classes, actions, build } = this.props

    let arcana_list = build.arcana

    let arcana_html
    if (arcana_list) {
      arcana_html = (
        <div className={classes.horizontal}>
          {
            arcana_list.map(a => {
              let arcana = find_arcana_by_id(a)
              return (
                <div
                  key={arcana.id}
                  className={cx(s.item, s.item_container, classes.spacing)}
                >
                  <div>
                    <span
                      onMouseOver={() => actions.selectArcana(arcana.id)}
                    >
                      <BuildArcana
                        arcana={arcana}
                        size='small'
                        isEditing={false}
                        highlighted={true}
                      />
                    </span>
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    }

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

          //  if notes[p] is not empty, set title/content
          if (p === 'video_url' && notes[p]) {
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

          else if (p === 'url' && notes[p]) {
            title = 'Website'
            content = <a href={notes[p]} target='_blank'>{notes[p]}</a>
          }
          else if (p === 'arcana' && (notes[p] || arcana_html)) {
            title = 'Arcana'
            content = notes[p]
          }
          else if(notes[p] !== '') { // show non-empty fields
            title = p
            content = notes[p]
          }

          // if not empty, title and content will be defined, then show it
          //
          if(title) {
            return (
              <ExpansionPanel expanded={expanded === p} onChange={this.handleChange(p)}>
                <ExpansionPanelSummary expandIcon={<Icon icon={ic_expand_more}/>} >
                  <Typography className={classes.heading}>
                   {
                     <div>
                       <span>{this.remove_underscore(title).toUpperCase()}</span>
                       <span>{ p === 'arcana' && arcana_html }</span>
                     </div>
                  }
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

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}


export default withStyles(styles)(
  withStyles2(s)(
    connect(mapStateToProps, mapDispatchToProps)(BuildNotesViewer)
  )
)
