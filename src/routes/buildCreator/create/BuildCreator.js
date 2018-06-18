import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button'
import ExpansionPanel, {ExpansionPanelDetails, ExpansionPanelSummary} from 'material-ui/ExpansionPanel';
import BuildItemEdit from './BuildItemEdit'
import BuildItem from './BuildItem'
import BuildTalent from './BuildTalent'
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';

import { Icon } from 'react-icons-kit'
import {ic_send} from 'react-icons-kit/md/ic_send'
import {ic_save} from 'react-icons-kit/md/ic_save'

import { ITEMS, TALENTS, find_talent_by_id, find_item_by_id } from '../Items'
import HEROES from '../../draft/AovHeroes'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const ADD_BUILD = gql`
  mutation addBuild($input: BuildInputType!) {
    addBuild(input: $input) {
        id
        name
        user_id
        item_1
        item_2
        item_3
        item_4
        item_5
        item_6
        talent_id
        hero_id
        game_mode_id
    }
  }`


const EDIT_COLOR = '#00bfff'
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
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
  save_button: {
    border: '1px solid #00bfff',
    color: 'gray',
    top: -40,
    marginLeft: '83.5%',
    right: 0,
    position: 'relative'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
})

class BuildCreator extends React.Component {
  state = {
    name: this.props.build_creator.current_build.name
  }

  handleChange = name => {
    this.setState({ name });
  };

  name_build = (e) => {
    this.props.actions.nameBuild(e.target.value)
    this.handleChange(e.target.value)
  }

  render() {
    const { classes, build_creator } = this.props
    const { current_build } = build_creator

    console.log(current_build)
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
      user_id: current_build.user_id,
      version_id: current_build.version_id,
      item_1_alt: current_build.item_1_alt,
      item_2_alt: current_build.item_2_alt,
      item_3_alt: current_build.item_3_alt,
      item_4_alt: current_build.item_4_alt,
      item_5_alt: current_build.item_5_alt,
      item_6_alt: current_build.item_6_alt,
      talent_alt: current_build.talent_alt,
    }

    let build_name = (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Build Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.name_build}
          margin="normal"
        />
      </form>
    )

    let talents = TALENTS.filter(t=> t.active).map(t => {
      return (
        <span className={s.talent_spacer}>
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

    return (
      <Mutation mutation={ADD_BUILD} variables={ {input: build} }>
        {(addBuild, {data}) => {
          let item_editor = (
            <div>
              <Grid container spacing={24}>
                {
                  [1,2,3,4,5,6].map(i => {
                    return (
                      <Grid item xs={2}>
                        <div className={classes.pointer}>
                          <BuildItemEdit
                            key={`item_{i}_${current_build[i]}` || `item_{i}`}
                            item={find_item_by_id(current_build[i])}
                            pos={i}
                            {...this.props}
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

          return (
            <div>
              { item_editor }
              { build_name }
              { talent_selector }
              <Button
                variant="outlined"
                color="primary"
                className={classes.save_button}
                onClick={addBuild}>
                SAVE
                <Icon style={{color: EDIT_COLOR}} icon={ic_save} size={19} className={classes.save}/>
              </Button>
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

export default withStyles2(s)(
  withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(BuildCreator)
  )
)
