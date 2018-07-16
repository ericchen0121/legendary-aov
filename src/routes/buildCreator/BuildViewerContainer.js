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

import { find_talent_by_id, find_item_by_id } from './Items'
import { find_hero_by_id } from '../draft/AovHeroes'
import { find_arcana_by_id } from './AovArcana'
import { to_uppercase_first } from './utilities'

import * as Actions from './create/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
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
    padding: '4px 3px 1px 3px',
    width: 27
  }
})

class BuildViewerContainer extends React.Component {

  render() {
    const { classes, actions, build } = this.props
    let b = build

    let video_url = b.notes ? JSON.parse(build.notes).video_url : null

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

    // let arcana_list = build.arcana.map(a => {
    //   let arcana = find_arcana_by_id(a)
    //   return (
    //     <div
    //       key={i.id}
    //       className={cx(s.item, s.item_container)}
    //     >
    //       <div>
    //         <span
    //           onMouseOver={() => actions.selectArcana(a.id)}
    //         >
    //           <BuildArcana
    //             arcana={a}
    //             size='small'
    //           />
    //         </span>
    //       </div>
    //     </div>
    //   )
    // })


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
      <div key={b.id} className={s.build_container}>
        <Grid container>
          <Grid item xs={3}>
            <div className={s.wrapper}>
              <BuildHeroImage
                hero={hero}
                size='xs'
                border='gold'
              />
              <span className={s.build_name_container}>
                <div>
                  <span>{ b.name } </span>
                  { video_url && <span className={classes.video_label}>VIDEO</span>}
                </div>
                <div>
                  <span>{talent_html}</span>
                </div>
              </span>
            </div>
          </Grid>
          <Grid item xs={9}>
            <ExpansionPanel className={classes.ep}>
              <ExpansionPanelSummary className={classes.eps}>
                <div className={s.wrapper}>
                  {item_list}
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
