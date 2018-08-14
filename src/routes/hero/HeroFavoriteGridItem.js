import React from 'react';
import PropTypes from 'prop-types';
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import s from '../draft/Aov.css';
import { withStyles } from 'material-ui/styles';
import cx from 'classnames';
import { DEFAULT_IMAGE_URL } from '../draft/DraftConstants';
import GridList, { GridListTile } from 'material-ui/GridList';
import Icon from 'react-icons-kit';
import {heart} from 'react-icons-kit/fa/heart'
import {heartO} from 'react-icons-kit/fa/heartO'
import {star} from 'react-icons-kit/fa/star'
import {starO} from 'react-icons-kit/fa/starO'

import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import { ADD_USER_HERO } from '../../data/gql_queries/userHeroes'
import gql from "graphql-tag";

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


let styles = {}

class HeroFavoriteGridItem extends React.Component {
  static propTypes = {
    hero: PropTypes.object.isRequired,
  }

  handleItemClick = () => {
    this.props.actions.selectLocalFavoritedHeroes(this.props.hero.id)
  }


  render() {
    const { hero, utilities, user_login, favorite, heroes_page } = this.props; // heroes from redux
    const { name, nickname, classes, lanes, roles, tier, folder } = hero;

    const handleItemClick = this.handleItemClick.bind(this);

    let new_user_hero_input = {
      user_id: user_login.id || 1,
      hero_id: hero.id,
      type: 'favorite'
    }

    const info_mapping = info_list =>
      info_list.map((info_item, i) => {
        let separator = null;
        if (i !== info_list.length - 1) {
          separator = '|';
        }
        return (
          <span className={s.info_small}>
            {' '}
            {info_item} {separator}{' '}
          </span>
        )
      })

    let avatar = null;
    let favorited_hero = favorite || heroes_page.local_favorited_heroes.findIndex(h => h === hero.id) > -1
    let favorite_color = favorited_hero ? 'gold' : 'black'
    let favorite_opacity = favorited_hero ? s.full_opacity : s.low_opacity

    if (folder) {
      avatar = (
        <div className={s.avatar_grid_container} onClick={handleItemClick}>
          { !favorited_hero &&
            <Icon
              icon={starO}
              size={18}
              style={{
                position: 'absolute',
                zIndex: 1,
                top: '20px',
                right: '10px',
                color: favorite_color,
              }}
            />
          }
          <img
            className={cx(s.avatar_small, s.avatar_grid, favorite_opacity)}
            src={`/aov/heroes/${folder}/hero.png`}
          />
          <div
            className={cx(s.avatar_text)}
          >
            {' '}
            {name.toUpperCase()}
          </div>
          { favorited_hero &&
            <div className={cx(s.avatar_sub_text)}>
              FAVORITE
            </div>
          }
        </div>
      );
    } else {
      avatar = (
        <div className={s.avatar_grid_container}>
          <img
            className={cx(s.avatar_small, s.avatar_grid)}
            src={DEFAULT_IMAGE_URL}
          />
        </div>
      )
    }

    let nickname_container = null;
    if (nickname) {
      nickname_container = (
        <span className={s.nickname}>{`/ The ${nickname}`}</span>
      )
    }

    const name_container = (
      <span className={s.flex_container} >
        <div>
          <span className={s.name}>{name}</span> {nickname_container}
        </div>
        <div>
          <span className={s.info_title}>Tier:</span>{' '}
          <span className={s.info}>{tier.toUpperCase()}</span>
        </div>
        <div>
          <span className={s.info_title}>Classes:</span>
          {info_mapping(classes)}
        </div>
        <div>
          <span className={s.info_title}>Lanes:</span>
          {info_mapping(lanes)}
        </div>
        <div>
          <span className={s.info_title}>Roles:</span>
          {info_mapping(roles)}
        </div>
      </span>
    )

    return (
      <Mutation
        mutation={ ADD_USER_HERO }
        variables={ {input: new_user_hero_input } }
      >
        {(query_name, {data}) => {

          return <GridListTile key={name} onClick={query_name}>
            <div className={s.cursor_pointer}>{avatar}</div>
          </GridListTile>
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
    connect(mapStateToProps, mapDispatchToProps)(HeroFavoriteGridItem)
  )
)
