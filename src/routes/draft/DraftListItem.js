import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Aov.css';
import { NFL_IMG_COMPOSER, NFL_IMG, NFL_PARAMS, NFL_LOGO } from './DraftConstants'
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Icon from 'react-icons-kit';
import { socialYoutubeOutline } from 'react-icons-kit/ionicons/socialYoutubeOutline';

class DraftListItem extends React.Component {
  static propTypes = {
    hero: PropTypes.object.isRequired,
  };

  handleItemClick = () => {
    const { player } = this.props
    this.props.actions.selectDraftPlayer(player)
    this.props.handleFetchYoutubeVideos(player.PLAYER, player.POS)
  }

  createQuery = (name) => {
    return `${name}}+aov+arena+of+valor`
  }

  render() {
    const { hero } = this.props;
    const { name, nickname, classes, lanes, roles, tier, folder } = hero

    const query = this.createQuery(name)
    const handleItemClick = this.handleItemClick.bind(this)

    const yt = `https://www.youtube.com/results?search_query=${query}`;
    const link = (
      <a href={yt} target="_blank">
        <Icon icon={socialYoutubeOutline} />
      </a>
    );


    let avatar = null
    if (folder) {
      avatar = <div className={s.avatar_container}><img className={s.avatar} src={`/aov/heroes/${folder}/hero.png`} /></div>
    } else {
      avatar = <div className={s.avatar_container}><img className={s.avatar} src='https://sportsfly.cbsistatic.com/bundles/sportsmediacss/images/player/headshot-default.png' /></div>
    }

    // let logo = <div className={s.logo} />
    // if (team) {
    //   logo = (
    //     <span className={s.logo}>
    //       <img src={logo_src} />
    //     </span>
    //   )
    // }

    // let draft_round_display = (
    //   <span className={s.flex_container, s.spacer}>
    //     <div className={s.draft_rd}>{ draft_rd }</div>
    //   </span>
    // )
    //
    // let draft_position_overall = <div />
    // if (draft_rd !== 1) {
    //   draft_position_overall = <span>[{draft_rk}]</span>
    // }
    //
    // let draft_position_display = (
    //   <span className={s.flex_container, s.spacer_small}>
    //     <div className={s.draft_round_pos}>{ draft_rd_pos }</div>
    //     <div className={s.draft_position_overall}>{ draft_position_overall }</div>
    //   </span>
    // )

    // let team_position_display = (
    //   <span className={s.flex_container}>
    //     <div>{ logo }</div>
    //     <div className={s.sub_info_larger}>{ position }</div>
    //   </span>
    // )

    let name_container = (
      <span className={s.flex_container}>
        <div className={s.name}>{ name }</div>
      </span>
    )

    return (
      <ListItem
        key={name}
        onClick={ handleItemClick }
      >
        {avatar} { name_container }
      </ListItem>
    );
  }
}

export default withStyles(s)(DraftListItem);
