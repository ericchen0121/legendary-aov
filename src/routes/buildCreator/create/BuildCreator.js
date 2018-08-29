import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

// MATERIAL UI
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button'
import ExpansionPanel, { ExpansionPanelDetails, ExpansionPanelSummary } from 'material-ui/ExpansionPanel';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import green from 'material-ui/colors/green';

// Components
import BuildItemEdit from './BuildItemEdit'
import BuildItem from './BuildItem'
import BuildTalent from './BuildTalent'
import BuildNotesEditor from './BuildNotesEditor'
import BuildArcanaEditor from './BuildArcanaEditor'
import { ADD_BUILD, EDIT_BUILD } from '../../../data/gql_queries/builds'

// ICONS
import { Icon } from 'react-icons-kit'
import { ic_send } from 'react-icons-kit/md/ic_send'
import { ic_save } from 'react-icons-kit/md/ic_save'
import { plus } from 'react-icons-kit/fa/plus'

// UTILS
import { ITEMS, TALENTS, find_talent_by_id, find_item_by_id } from '../Items'
import HEROES from '../../draft/AovHeroes'

// LIBS
import history from '../../../history'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

// CONSTANTS
const EDIT_COLOR = '#00bfff'
const CONTINUE_EDIT_COLOR = 'rgba(0,0,0,.2)'

// REDUX
import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
  item_editor_container: {
    marginBottom: 5
  },
  snackbar: {
    backgroundColor: green,
    marginTop: 35
  },
  ep: {
    padding: 0
  },
  eps: {
    padding: 0,
  },
  epd: {
    display: 'inline',
    paddingRight: 32,
    marginRight: 32
  },
  divider: {
    margin: '0 33%'
  },
  save: {
    marginLeft: 7
  },
  save_button_position: {
    top: -58,
    marginLeft: '83.5%',
    right: 0,
    position: 'relative'
  },
  save_button: {
    border: '1px solid #00bfff',
    color: '#00aaff',
  },
  save_button_inactive: {
    border: '1px solid rgba(0,0,0, .2)',
    color: 'rgba(0,0,0, .2)',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  create_new: {
    fontStyle: 'bold',
    color: 'gold',
    marginLeft: 15,
    border: '1px solid gold',
    padding: 5,
    cursor: 'pointer'
  },
  add_notes_button: {
    marginRight: 7
  },
  add_notes_button_container: {
    position: 'relative',
    left: '57%',
    marginTop: -60
  },
  hide_text: {
    marginLeft: 15,
    fontSize: 10,
    color: '#0074c2'
  },
  add_arcana_button_container: {
    position: 'relative',
    left: '57%',
    marginTop: -85
  },
  add_arcana_button: {
    marginRight: 7
  },
  no_link_decoration: {
    textDecoration: 'none',
    color: 'gold',
  }
})

class BuildCreator extends React.Component {
  state = {
    name: this.props.build_creator.current_build.name,
    is_saved: false,
    open: false
  }

  handleChange = name => {
    this.setState({ name });
  };

  handleOpen = () => {
    this.setState({ open: true })
  }

  name_build = (e) => {
    this.props.actions.nameBuild(e.target.value)
    this.handleChange(e.target.value)
  }

  handleNotesOpen = () => {
    this.props.actions.toggleAddNotesOpen()
  }

  handleArcanaOpen = () => {
    this.props.actions.toggleAddArcanaOpen()
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = () => {
    this.setState({ is_saved: true })
  }

  handleSaveAndOpen = () => {
    this.handleSave()
    this.handleOpen()
  }

  resetBuild = () => {
    this.setState({ is_saved: false }, () => setTimeout(this.handleClose, 1500))
    this.props.actions.resetBuild()
  }

  resetSaveStatus = () => {
    this.setState({ is_saved: false }, () => this.handleClose() ) // allows user to continue editing and save again
  }

  render() {
    const { classes, build_creator, user_login, is_editing, ...other } = this.props
    const { current_build, is_notes_open, is_arcana_open } = build_creator
    const { is_saved, open } = this.state

    let handleSave = this.handleSave.bind(this)
    let handleOpen = this.handleOpen.bind(this)
    let handleSaveAndOpen = this.handleSaveAndOpen.bind(this)
    let resetBuild = this.resetBuild.bind(this)
    let handleNotesOpen = this.handleNotesOpen.bind(this)
    let handleArcanaOpen = this.handleArcanaOpen.bind(this)
    let resetSaveStatus = this.resetSaveStatus.bind(this)

    let user_id = user_login.id || current_build.user_id
    let build = {
      name: current_build.name,
      item_1: current_build[1],
      item_2: current_build[2],
      item_3: current_build[3],
      item_4: current_build[4],
      item_5: current_build[5],
      item_6: current_build[6],
      talent_id: current_build.talent_id,
      hero_id: current_build.hero_id,
      game_mode_id: current_build.game_mode_id,
      user_id: user_id,
      version_id: current_build.version_id,
      item_1_alt: current_build.item_1_alt,
      item_2_alt: current_build.item_2_alt,
      item_3_alt: current_build.item_3_alt,
      item_4_alt: current_build.item_4_alt,
      item_5_alt: current_build.item_5_alt,
      item_6_alt: current_build.item_6_alt,
      talent_alt: current_build.talent_alt,
      notes: JSON.stringify(current_build.notes),
      arcana: current_build.arcana || []
    }

    let mutation_query
    if (is_editing) {
      mutation_query = EDIT_BUILD
      build['id'] = current_build.id // add id to the build object (from db), if editing
     }
    else {
      mutation_query = ADD_BUILD

      // // clear build
      // this.props.actions.resetBuild()
    }

    let build_name = (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Build Name"
          className={classes.textField}
          value={current_build.name}
          onChange={this.name_build}
          margin="normal"
        />
      </form>
    )

    let talents = TALENTS.filter(t=> t.active).map(t => {
      return (
        <span className={s.talent_spacer} key={t.id}>
          <BuildTalent
            key={t.id}
            talent={t}
            highlighted={(t.id === current_build.talent_id)}
          />
        </span>
      )
    })

    let talent_selector = (
      <div>
        <div className={cx(s.wrapper)}>
          { talents }
        </div>
      </div>
    )

    let add_notes_button = (
      <div onClick={handleNotesOpen}>
        <Button
          variant="flat"
          color="primary"
          className={classes.add_notes_button_container}
        >
        <Icon
          style={{color: CONTINUE_EDIT_COLOR}}
          icon={plus}
          size={14}
          className={classes.add_notes_button}
          style={{color: 'green'}}
        />
          ADD NOTES
          {is_notes_open && <span className={classes.hide_text}>HIDE</span>}
        </Button>
      </div>
    )

    let add_arcana_button = (
      <div onClick={handleArcanaOpen}>
        <Button
          variant="flat"
          color="primary"
          className={classes.add_arcana_button_container}
        >
        <Icon
          style={{color: CONTINUE_EDIT_COLOR}}
          icon={plus}
          size={14}
          className={classes.add_arcana_button}
          style={{color: 'green'}}
        />
          ARCANA
          {is_arcana_open && <span className={classes.hide_text}>HIDE</span>}
        </Button>
      </div>
    )

    return (
        <Mutation
          mutation={ mutation_query }
          variables={ {input: build} }
        >
          {(query_name, {data}) => {


            let item_editor = (
              <div className={classes.item_editor_container}>
                <Grid container spacing={24} >
                  {
                    [1,2,3,4,5,6].map(i => {
                      return (
                        <Grid item xs={2} key={i+Math.random()*100}>
                          <div className={classes.pointer}>
                            <BuildItemEdit
                              key={`item_{i}_${current_build[i]}` || `item_{i}`}
                              item={find_item_by_id(current_build[i])}
                              pos={i}
                              className={classes.no_margin}
                            />
                          </div>
                        </Grid>
                      )
                    })
                  }
                </Grid>
              </div>
            )

            let save_button, button_action, color, button_class, alert_text
            let button_text = 'SAVE'
            let is_build_complete = !Object.values(build).includes(null)

            // Different states for creating a build: incomplete, complete, complete and already saved
            // Different states for editing a build: same (no need to save), and save
            if (is_editing && is_saved) {
              alert_text = (
                <span>
                  <span>Edit Saved!</span>
                  <span className={classes.create_new} onClick={resetSaveStatus}>Continue Editing</span>
                  <span className={classes.create_new} onClick={history.goBack}>Close</span>
                </span>
              )
              save_button = (
                <div onClick={handleOpen}>
                  <Button
                    variant="flat"
                    color="primary"
                    className={cx(classes.save_button_inactive, classes.save_button_position)}
                  >
                    EDITING...
                    <Icon
                      style={{color: CONTINUE_EDIT_COLOR}}
                      icon={ic_save}
                      size={19}
                      className={classes.save}
                    />
                  </Button>
                </div>
              )
            }
            else if (is_saved) {
              alert_text = (
                <span>
                  <span>Saved</span>
                  <span className={classes.create_new} onClick={resetBuild}>Create New</span>
                  { user_login.is_logged_in && data && <span className={classes.create_new}><a className={classes.no_link_decoration} href={`/build/edit/${data.addBuild.id}`}>Continue Editing</a></span> }
                </span>
              )

              save_button = (
                <div onClick={handleOpen}>
                  <Button
                    variant="flat"
                    color="primary"
                    className={cx(classes.save_button_inactive, classes.save_button_position)}
                  >
                    SAVED!
                    <Icon
                      style={{color: CONTINUE_EDIT_COLOR}}
                      icon={ic_save}
                      size={19}
                      className={classes.save}
                    />
                  </Button>
                </div>
              )
            }
            else if (!is_build_complete) {
              alert_text = 'Add items to build to save'
              save_button = (
                <div onClick={handleOpen}>
                  <Button
                    variant="flat"
                    color="primary"
                    className={cx(classes.save_button_inactive, classes.save_button_position)}
                  >
                    SAVE
                    <Icon
                      style={{color: CONTINUE_EDIT_COLOR}}
                      icon={ic_save}
                      size={19}
                      className={classes.save}
                    />
                  </Button>
                </div>
              )
            }
            else if (is_build_complete) {
              alert_text = 'Click Save'
              save_button = (
                <div onClick={handleSaveAndOpen}>
                  <Button
                    variant="flat"
                    color="primary"
                    className={cx(classes.save_button, classes.save_button_position)}
                    onClick={query_name}
                  >
                    SAVE
                    <Icon
                      style={{color: EDIT_COLOR}}
                      icon={ic_save}
                      size={19}
                      className={classes.save}
                    />
                  </Button>
                </div>
              )
            }

            return (
              <div>
                { item_editor }
                { build_name }
                { talent_selector }
                { add_arcana_button }
                { add_notes_button }
                { save_button }
                { is_notes_open && <BuildNotesEditor />}
                { is_arcana_open && <BuildArcanaEditor />}
                <Snackbar
                  className={classes.snackbar}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={(
                    <div>
                      <span id="message-id">{alert_text}</span>
                    </div>
                  )}
                />
              </div>
            )
          }}
        </Mutation>
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
  connect(mapStateToProps, mapDispatchToProps)(BuildCreator)
)
