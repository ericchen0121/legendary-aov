import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Draft.css';
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
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  };

  handleItemClick = () => {
    const { player } = this.props
    this.props.actions.selectDraftPlayer(player)
    this.props.handleFetchYoutubeVideos(player.PLAYER, player.POS)
  }

  createQuery = (name, position) => {
    return `${name}+${position}+draft+nfl+highlights`
  }

  render() {
    const { player } = this.props;
    const name = player.PLAYER
    const position = player.POS
    const nfl_img_id = player.NFL_IMG_ID
    const team  = player.TEAM
    const draft_rk = player.DRAFT_RK
    const draft_rd = player.DRAFT_RD
    const draft_rd_pos = player.DRAFT_RD_POS
    const school = player.SCHOOL
    const year = player.YEAR
    const height = player.HT
    const weight = player.WT
    const query = this.createQuery(name, position)
    const handleItemClick = this.handleItemClick.bind(this)

    const yt = `https://www.youtube.com/results?search_query=${query}`;
    const link = (
      <a href={yt} target="_blank">
        <Icon icon={socialYoutubeOutline} />
      </a>
    );


    let avatar = null
    if (nfl_img_id) {
      avatar = <img className={s.avatar} src={`${NFL_IMG_COMPOSER}${NFL_IMG}/${nfl_img_id}.png${NFL_PARAMS}`} />
    } else {
      avatar = <img className={s.avatar} src='https://sportsfly.cbsistatic.com/bundles/sportsmediacss/images/player/headshot-default.png' />
    }

    let logo_src = `${NFL_LOGO}/${team}.svg`
    let logo = <div className={s.logo} />
    if (team) {
      logo = (
        <span className={s.logo}>
          <img src={logo_src} />
        </span>
      )
    }

    let draft_round_display = (
      <span className={s.flex_container, s.spacer}>
        <div className={s.draft_rd}>{ draft_rd }</div>
      </span>
    )

    let draft_position_overall = <div />
    if (draft_rd !== 1) {
      draft_position_overall = <span>[{draft_rk}]</span>
    }

    let draft_position_display = (
      <span className={s.flex_container, s.spacer_small}>
        <div className={s.draft_round_pos}>{ draft_rd_pos }</div>
        <div className={s.draft_position_overall}>{ draft_position_overall }</div>
      </span>
    )

    let team_position_display = (
      <span className={s.flex_container}>
        <div>{ logo }</div>
        <div className={s.sub_info_larger}>{ position }</div>
      </span>
    )

    let name_college_display = (
      <span className={s.flex_container}>
        <div className={s.name}>{ name }</div>
        <div className={s.sub_info}>{ school } / <i>{ year }</i> / { height } / { weight } lbs</div>
      </span>
    )

    return (
      <ListItem
        key={name}
        onClick={ handleItemClick }
      >
         { draft_round_display } { draft_position_display }{ team_position_display } {avatar} { name_college_display }
      </ListItem>
    );
  }
}

export default withStyles(s)(DraftListItem);
