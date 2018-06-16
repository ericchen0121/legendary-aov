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

import { Icon } from 'react-icons-kit'
import {ic_send} from 'react-icons-kit/md/ic_send'
import {ic_save} from 'react-icons-kit/md/ic_save'

import { ITEMS, TALENTS } from '../Items'
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
        user_id
        item_1
        item_2
        item_3
        item_4
        item_5
        item_6
        hero_id
        game_mode_id
        item_1_alt
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
    marginTop: 20,
    marginLeft: '83.5%',
    right: 0,
    position: 'relative'
  }
})

class BuildCreator extends React.Component {

  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }


  get_item = (id) => {
    return ITEMS.find(i => i.id === id)
  }

  render() {
    const { classes, build_creator } = this.props
    const { current_build } = build_creator

    let build = {
      hero_id: 11, // placeholder
      game_mode_id: 1, // placeholder
      user_id: 1, // placeholder
      talent_id: 5, // placeholder
      item_1: current_build[1],
      item_2: current_build[2],
      item_3: current_build[3],
      item_4: current_build[4],
      item_5: current_build[5],
      item_6: current_build[6],
    }

    console.log(build)

    // TODO: make this a map function

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
                            item={this.get_item(current_build[i])}
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
