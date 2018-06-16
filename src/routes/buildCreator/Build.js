import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ExpansionPanel, {ExpansionPanelDetails, ExpansionPanelSummary} from 'material-ui/ExpansionPanel';
import BuildHeroImage from './create/BuildHeroImage'

import { ITEMS, TALENTS, find_talent_by_id } from './Items'
import HEROES, { find_hero_by_id } from '../draft/AovHeroes'
import CustomBuilds from './CustomBuilds'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
let query = gql`
  {
    builds {
      id
      name
      item_1
      item_2
      item_3
      item_4
      item_5
      item_6
      talent_id
      hero_id
    }
  }
`

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
  }
})

class BuildViewer extends React.Component {

  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }

  render() {
    const { classes } = this.props

    return (
      <Query
        query={query}
      >
        {({ loading, error, data }) => {
          if (data.builds) {
            let all_builds = data.builds.map(b => {
              let items = [b.item_1, b.item_2, b.item_3, b.item_4, b.item_5, b.item_6]
              let hero = find_hero_by_id(b.hero_id)

              // Item List
              let item_list = items.map(i => {
                let item = ITEMS.find(item => item.id === i)
                return (
                  <div key={i.id} className={cx(s.item, s.item_container)}>
                    <div>
                      <span><img className={s.item_img} src={`/aov/items/tier/${item.tier}/${item.folder}/${item.folder}.png`} /></span>
                    </div>
                    <div className={s.item_name}>
                      {item.name.toUpperCase()}
                    </div>
                  </div>
                )
              })

              let item_details = items.map(i => {
                let item = ITEMS.find(item => item.id === i)

                let effects = item.effects.map((e, i) => {
                  let power = e.power
                  let percent = null
                  let plus = null
                  // if power is really Percentages
                  if (power < 1) {
                    power = Math.floor(power * 100)
                    percent = '%'
                    plus = '+'
                  }

                  let divider = <Divider className={classes.divider}/>
                  if (i === item.effects.length - 1) { divider = null }

                  return (
                    <div key={(i.folder + e.type)}>
                      <span className={s.item_effect_type}>{e.type}</span>: <span className={s.item_effect_power}>{plus}{power}{percent}</span>
                      { divider }
                    </div>
                  )
                })

                return (
                  <div className={cx(s.item, s.item_container, s.font)}>
                    <div className={s.item_effects_container}>
                      {effects}
                    </div>
                    <div className={s.item_passive_container}>
                      <div className={s.passive_title}>Passive</div>
                      { item.passives.map((p, i) => {

                        let divider = <Divider />
                        if (i === item.passives.length - 1) { divider = null }
                        return  (
                          <div>
                            <span className={s.item_effect_type}>{p.name}</span>: <span className={s.item_effect_power}>{p.description}</span>
                            { divider }
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })

              // ---------------------- TOTAL EFFECTS PER BUILD ---------------------
              //
              // Gather all effects from all items in the build
              let all_effects = []
              for (let item_id of items) {
                let item = ITEMS.find(item => item.id === item_id)
                all_effects.push(...item.effects)
              }

              // Create a map of all unique effects, and the combined power
              // Create Map, and reduce https://stackoverflow.com/questions/19233283/sum-javascript-object-propertya-values-with-same-object-propertyb-in-array-of-ob
              let all_effects_counts_map = all_effects.reduce((prev, curr) => {
                let count = prev.get(curr.type) || 0;
                prev.set(curr.type, curr.power + count)
                return prev;
              }, new Map());

              // then, map your counts object back to an array
              let all_effects_counts = [...all_effects_counts_map].map(([type, power]) => {
                return {type, power}
              })

              let all_effects_inner_html = this.sortAlpha(all_effects_counts).map((e, i) => {
                let power = e.power
                let percent, plus
                // if power is really Percentages
                if (power < 1) {
                  power = Math.floor(power * 100)
                  percent = '%'
                  plus = '+'
                }

                let divider = <Divider className={classes.divider}/>
                if (i === all_effects_counts.length - 1) { divider = null }

                return (
                  <div key={(e.type + i)}>
                    <span className={s.item_effect_type}>{e.type}</span>: <span className={s.item_effect_power}>{plus}{power}{percent}</span>
                    { divider }
                  </div>
                )
              })

              let all_effects_html = (
                <div className={cx(s.item, s.item_container, s.font)}>
                  <div className={s.total_effects_title}>Full Build Totals</div>
                  {all_effects_inner_html}
                </div>
              )

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
              // <h4>{b.info.description} for {hero.name}</h4> {talent_html}
              return (
                <div key={b.id} className={s.build_container}>

                  <BuildHeroImage
                    hero={hero}
                    size='xs'
                    border='gold'
                  />
                  { b.name }
                  {talent_html}
                  <ExpansionPanel className={classes.ep}>
                    <ExpansionPanelSummary className={classes.eps}>
                      <div className={s.wrapper}>
                        {item_list}
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.epd}>
                      <div className={cx(s.wrapper, s.ep_spacer)}>
                        {item_details}
                      </div>
                      <div className={cx(s.wrapper, s.top_margin_spacer)}>
                        {all_effects_html}
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              )
            })

            return (
              <div className={s.main_container}>
                <h2>All Custom Builds</h2>
                { all_builds }
              </div>
            )
          } else {
            return <div>Loading</div>
          }
        }}
      </Query>
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
    connect(mapStateToProps, mapDispatchToProps)(BuildViewer)
  )
)
