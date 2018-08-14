import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../draft/Aov.css';
import cx from 'classnames';
import { DEFAULT_IMAGE_URL } from '../draft/DraftConstants';
import GridList, { GridListTile } from 'material-ui/GridList';
import Icon from 'react-icons-kit';
import {heart} from 'react-icons-kit/fa/heart'
import {heartO} from 'react-icons-kit/fa/heartO'

import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import { ADD_USER_HERO } from '../../data/gql_queries/userHeroes'
import gql from "graphql-tag";

class HeroFavoriteGridItem extends React.Component {
  static propTypes = {
    hero: PropTypes.object.isRequired,
  }

  handleItemClick = () => {
    const { hero } = this.props;
    // this.props.actions.selectHero(hero);
  }


  render() {
    const { hero, utilities, user_login } = this.props;
    const { name, nickname, classes, lanes, roles, tier, folder } = hero;
    const { dark_mode_active } = utilities;
    const handleItemClick = this.handleItemClick.bind(this);

    //
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
    if (folder) {
      avatar = (
        <div className={s.avatar_grid_container}>
          <Icon
            icon={heart}
            size={18}
            style={{
              position: 'absolute',
              zIndex: 1,
              top: '20px',
              right: '10px',
              color: 'white',
            }}
          />
          <img
            className={cx(s.avatar_small, s.avatar_grid)}
            src={`/aov/heroes/${folder}/hero.png`}
          />
          <div
            className={cx(s.avatar_text, { [s.white_text]: dark_mode_active })}
          >
            {' '}
            {name.toUpperCase()}
          </div>
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

export default withStyles(s)(HeroFavoriteGridItem)
