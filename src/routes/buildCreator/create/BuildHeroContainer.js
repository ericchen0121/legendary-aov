import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import IconButton from 'material-ui/IconButton';
import { InputLabel } from 'material-ui/Input'
import { find_hero_by_id } from '../../draft/AovHeroes'
import BuildHeroImage from './BuildHeroImage'
import { DEFAULT_IMAGE_URL } from '../../draft/DraftConstants';

import {edit} from 'react-icons-kit/entypo/edit'
import { Icon } from 'react-icons-kit'
import HEROES from '../../draft/AovHeroes'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const SELECT_TEXT = 'SELECT HERO'
const EDIT_COLOR = '#00bfff'
const DEFAULT_HERO_ID = 11
const styles = theme => ({
  root: {
    marginTop: 30
  },
  pointer: {
    pointer: 'cursor'
  },
  select_item: {
    margin: 8,
    border: '1px solid #DCDCDC',
    borderRadius: 3
  },
  name: {
    fontSize: 13,
    fontFamily: "'Josefin Sans', sans-serif",
    marginLeft: 8
  },
  select_item_small: {
    fontSize: 14,
    fontFamily: "'Josefin Sans', sans-serif",
  },
  formControl: {
    minWidth: '60%',
    marginLeft: 15,
    marginTop: 8
  },
  edit_icon: {
    marginLeft: 10,
    minWidth:20,
    width: 30,
    height: 30
  }
})


class BuildHeroContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      is_editing_hero: false,
      hero_id: props.build_creator.current_build.hero_id || DEFAULT_HERO_ID
    }
    this.set_edit_hero = this.set_edit_hero.bind(this)
  }

  set_edit_hero = () => {
    this.setState({is_editing_hero: !this.state.is_editing_hero})
  }

  handleChange = id => {
    this.setState({ hero_id: id });
  };

  update_build_with_hero = (e) => {
    this.props.actions.setHeroId(e.target.value)
    this.handleChange('hero_id')
    this.set_edit_hero()
  }

  render() {
    const {item, classes, actions, build_creator } = this.props
    const hero_id = build_creator.current_build.hero_id || this.state.hero_id
    let hero = find_hero_by_id(hero_id)

    return (
      <div className={classes.root}>
        <div className={classes.pointer}>
          <span>
            <img
              className={s.avatar}
              src={hero && `/aov/heroes/${hero.folder}/hero.png` || DEFAULT_IMAGE_URL}
              onClick={this.set_edit_hero}
            />
          </span>
          <span onClick={this.set_edit_hero}>
            <Tooltip title={SELECT_TEXT}>
              <IconButton className={classes.edit_icon} aria-label="Delete">
                <Icon icon={edit} style={{color: EDIT_COLOR}} size={20}/>
              </IconButton>
            </Tooltip>
          </span>
        </div>
        { this.state.is_editing_hero && (
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.select_item_small}>{SELECT_TEXT}</InputLabel>
              <Select
                value={this.state.hero_id}
                className={classes.select_item_small}
                onChange={this.update_build_with_hero}
                defaultValue={0}
              >
                  <MenuItem value={0} className={classes.select_item_small}>{SELECT_TEXT}</MenuItem>
                {
                  HEROES.map(h => {
                    return (
                      <MenuItem value={h.id} className={classes.select_item}>
                        <BuildHeroImage hero={find_hero_by_id(h.id)} />
                        <span className={classes.name}>{h.name.toUpperCase()}</span>
                      </MenuItem>
                  )
                  })
                }
              </Select>
            </FormControl>
          </div>
      )  }
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
  connect(mapStateToProps, mapDispatchToProps)(BuildHeroContainer)
);
