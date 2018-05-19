import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Aov.css';
import { DEFAULT_IMAGE_URL } from './DraftConstants'
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
    const { hero } = this.props
    this.props.actions.selectHero(hero)
    this.props.handleFetchYoutubeVideos(hero.name)
  }

  createQuery = (name) => {
    return `${name}+aov+arena+of+valor`
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

    let info_mapping = (info_list) => {
        return info_list.map((info_item, i) => {
          let separator = null
          if (i !== (info_list.length - 1))  {
            separator = '|'
          }
          return <span className={s.info_small}> {info_item} {separator} </span>
        })
      }

    let avatar = null
    if (folder) {
      avatar = <div className={s.avatar_container}><img className={s.avatar} src={`/aov/heroes/${folder}/hero.png`} /></div>
    } else {
      avatar = <div className={s.avatar_container}><img className={s.avatar} src={DEFAULT_IMAGE_URL} /></div>
    }

    let nickname_container = null
    if (nickname) { nickname_container = (<span className={s.nickname}>{`/ The ${ nickname }`}</span>)}

    let name_container = (
      <span className={s.flex_container}>
        <div ><span className={s.name}>{ name }</span>  { nickname_container }</div>
        <div><span className={s.info_title}>Tier:</span> <span className={s.info}>{tier.toUpperCase()}</span></div>
        <div><span className={s.info_title}>Classes:</span>
          { info_mapping(classes) }
        </div>
        <div><span className={s.info_title}>Lanes:</span>
          { info_mapping(lanes) }
        </div>
        <div><span className={s.info_title}>Roles:</span>
          { info_mapping(roles) }
        </div>
      </span>
    )

    return (
      <ListItem
        key={name}
        onClick={ handleItemClick }
        className={s.hero_item_container}
      >
        {avatar} { name_container }
      </ListItem>
    );
  }
}

export default withStyles(s)(DraftListItem);
