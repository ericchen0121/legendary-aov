import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import ExpansionPanel, { ExpansionPanelDetails, ExpansionPanelSummary } from 'material-ui/ExpansionPanel';

import BuildHeroImage from './create/BuildHeroImage'
import BuildItem from './create/BuildItem'
import CustomBuilds from './CustomBuilds'
import BuildItemCard from './create/BuildItemCard'
import BuildHeroContainer from './create/BuildHeroContainer'
import BuildItemsEffects from './BuildItemsEffects'
import BuildNotesViewer from './create/BuildNotesViewer'

import { Icon } from 'react-icons-kit'
import {ic_expand_more} from 'react-icons-kit/md/ic_expand_more'
import {ic_expand_less} from 'react-icons-kit/md/ic_expand_less'

import { find_talent_by_id, find_item_by_id } from './Items'
import { find_hero_by_id } from '../draft/AovHeroes'
import { to_uppercase_first } from './utilities'

import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { DELETE_BUILD } from '../../data/gql_queries/builds'

import * as Actions from './create/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
  gray: {
    backgroundColor: 'rgba(0,0,0,.004)'
  },
  ep: {
    padding: 0,
    width: '100%'
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
  center: {
    textAlign: 'center',
  },
  marginBot: {
    marginBottom: 40
  },
  video_label: {
    fontSize: 8,
    border: '1px solid red',
    borderRadius: 2,
    padding: '2px 3px 1px 3px',
    width: 27,
    marginTop: 3
  },
  edit_link: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  link_style: {
    fontSize: 10,
    textDecoration: 'none'
  },
  info_label_container: {
    flexGrow: 1,
    margin: '13px 20px 0 0',
    fontSize: 9,
    textAlign: 'right',
    color: 'gray'
  },
  spacer: {
    marginTop: 10
  },
  expand_button: {
    position: 'absolute',
    right: 20,
    top: 55,
  },
  delete: {
    marginTop: 10,
    color: 'red'
  },
  build_name_container: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '48%',
    overflow: 'hidden'
  },
  margin_bot_text: {
    marginBottom: 4
  }
})

class BuildViewerContainer extends React.Component {
  state = {
    is_hovered: false,
    is_expanded: false
  }

  toggle_hoverstate = () => {
    this.setState({
      is_hovered: !this.state.is_hovered
    })
  }

  set_expanded_state = (is_expanded) => {
    this.setState({
      is_expanded
    })
  }

  render() {
    const { classes, actions, build, is_editing } = this.props
    const { is_hovered, is_expanded } = this.state
    let b = build

    let video_url = b.notes ? JSON.parse(build.notes).video_url : null
    let toggle_hoverstate = this.toggle_hoverstate.bind(this)
    let set_expanded_state = this.set_expanded_state.bind(this)
    // Generate a container for each Build
    let items = [b.item_1, b.item_2, b.item_3, b.item_4, b.item_5, b.item_6]

    if (items.includes(null)) {
      return
    }

    let hero = find_hero_by_id(b.hero_id)

    // Item List
    let item_list = items.map(i => {
      let item = find_item_by_id(i)
      return (
        <div
          key={i.id}
          className={cx(s.item, s.item_container)}
        >
          <div>
            <span
              onMouseOver={() => actions.selectItem(item.id)}
            >
              <BuildItem
                item={item}
                size='small'
              />
            </span>
          </div>
        </div>
      )
    })

    let talent = find_talent_by_id(b.talent_id)
    let talent_html = (
          <span className={cx()}>
            <div>
              <span><img className={s.talent_img} src={`/aov/talents/${talent.folder}.png`} /></span>
            </div>
            <div className={s.talent_name}>
              {talent.name.toUpperCase()}
            </div>
          </span>
        )

    // For Each Build Container
    //
    return (
      <div key={b.id} className={s.build_container} >
        <Grid container onMouseEnter={toggle_hoverstate} onMouseLeave={toggle_hoverstate}>
          <Grid item xs={3}>
            <div className={s.wrapper}>
              <BuildHeroImage
                hero={hero}
                size='xs'
                border='gold'
              />
              <span className={cx(s.build_name_container, classes.build_name_container)}>
                <div>
                  <span>{ b.name } </span>
                </div>
                <div>
                  <span>{talent_html}</span>
                </div>
              </span>
              <div className={cx(classes.info_label_container, s.item)}>
                <span>{ b.user.username || b.user.id || ''}</span>
                <div className={classes.margin_bot_text}>Patch { b.version.version_number | '' }</div>
                { video_url && <span className={classes.video_label}>VIDEO</span>}
              </div>
            </div>
          </Grid>
          <Grid item xs={9}>
            <ExpansionPanel className={cx(classes.ep, classes.gray)} onChange={(e, expanded) => set_expanded_state(expanded)}>
              <ExpansionPanelSummary className={classes.eps}>
                <div className={s.wrapper}>
                  {item_list}
                  { is_editing && (
                    <span className={classes.edit_link}>
                      <a className={classes.link_style} href={`/build/edit/${b.id}`} >EDIT</a>
                      <div className={classes.link_style}>
                        <Mutation
                          mutation={DELETE_BUILD}
                          variables={ {id: b.id} }
                        >
                          {(query_name, {data}) => {

                            return <div className={classes.delete} onClick={query_name}>DELETE</div>
                          }}
                        </Mutation>
                      </div>
                    </span>
                  )}
                  { is_hovered && (
                    <span className={classes.expand_button}>
                      { !is_expanded && <Icon icon={ic_expand_more} size={32} style={{color: '#00aaff'}}/>}
                      { is_expanded && <Icon icon={ic_expand_less} size={32} style={{color: '#00aaff'}}/>}
                    </span>
                  )}
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.epd}>
                <div className={cx(s.wrapper, s.top_margin_spacer)}>
                  <div className={cx(s.item, s.item_container, s.font)}>
                    <div className={s.total_effects_title}>Full Build Totals</div>
                    <BuildItemsEffects
                      items={items}
                      style={'bold'}
                    />
                    <div className={classes.marginBot}/>
                    <BuildNotesViewer
                      build={b}
                    />
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
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
    connect(mapStateToProps, mapDispatchToProps)(BuildViewerContainer)
  )
)
