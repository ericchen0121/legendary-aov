import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ExpansionPanel, { ExpansionPanelDetails, ExpansionPanelSummary } from 'material-ui/ExpansionPanel';
import Button from 'material-ui/Button'

import BuildHeroImage from './create/BuildHeroImage'
import BuildItem from './create/BuildItem'
import CustomBuilds from './CustomBuilds'
import BuildItemCard from './create/BuildItemCard'
import BuildHeroContainer from './create/BuildHeroContainer'

import { ITEMS, TALENTS, find_talent_by_id, find_item_by_id } from './Items'
import HEROES, { find_hero_by_id } from '../draft/AovHeroes'
import { to_uppercase_first } from './utilities'

import * as Actions from './create/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RingLoader } from 'react-spinners';

import { Query } from "react-apollo";
import gql from "graphql-tag";

let builds_query = gql`
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

let hero_builds_query = gql`
  query buildsByHero($hero_id: Int!){
    buildsByHero(hero_id: $hero_id ) {
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
  grid_container: {
    minHeight: 800
  },
  center: {
    textAlign: 'center',
  },
  new_build_button: {
    border: '1px solid #00aaff',
  },
  no_underline_link: {
    textDecoration: 'none',
    color: '#00aaff'
  }
})

class BuildViewer extends React.Component {

  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }

  render() {
    const { classes, actions, build_creator } = this.props

    // Re-using component from created build
    let selected_hero_id = build_creator.current_build.hero_id
    let hero = find_hero_by_id(selected_hero_id)

    let title = (
      <div className={s.title}>
        <h2>{`All ${hero.name} Builds`}</h2>
      </div>
    )

    let create_new_button = (
      <Button className={classes.new_build_button}>
        <a href='/build/create' className={classes.no_underline_link}>Create New Build</a>
      </Button>
    )
    return (
      <Query
        query={hero_builds_query}
        variables={{ hero_id: selected_hero_id }}
      >
        {({ loading, error, data }) => {
          if (error) {
            return <div>ERROR! Sorry!</div>
          }

          if (!data.buildsByHero || data.buildsByHero.length === 0) {
            return (
              <Grid container zeroMinWidth className={classes.grid_container}>
                <Grid item xs={9}>
                  <div className={s.main_container}>
                    {title}
                    <div className={classes.center}>
                      <div className={s.cta}>
                        {create_new_button}
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className={s.fixed}>
                    <BuildHeroContainer
                      cover_image={false}
                    />
                  </div>
                </Grid>
              </Grid>
            )
          }

          if (data.buildsByHero) {
            let all_builds = data.buildsByHero.map(b => {
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

              let item_details = items.map(i => {
                let item = find_item_by_id(i) // i is the item id

                let effects = item.effects.map((e, i) => {
                  let power = e.power
                  let percent, plus
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
              for (let id of items) {
                let item = find_item_by_id(id)
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
                    <span className={s.item_effect_type}>{to_uppercase_first(e.type)}</span>: <span className={s.item_effect_power}>{plus}{power}{percent}</span>
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

              // Removed all item descriptions from build in ExpansionPanel
              // <div className={cx(s.wrapper, s.ep_spacer)}>
              //   {item_details}
              // </div>
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
                          { b.name }
                        </span>
                        <span className={s.talent_container}>
                          <span className={s.talent_sub_container}>
                            {talent_html}
                          </span>
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
                            {all_effects_html}
                          </div>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </Grid>
                  </Grid>
                </div>
              )
            })

            return (
              <div>
                <Grid container zeroMinWidth>
                  <Grid item xs={10}>
                    <div>
                      {title}
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <div className={s.cta}>
                      {create_new_button}
                    </div>
                  </Grid>
                </Grid>
                <Grid container zeroMinWidth className={classes.grid_container}>
                  <Grid item xs={9}>
                    <div className={s.main_container}>
                      { all_builds }
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className={s.fixed}>
                      <BuildHeroContainer
                        cover_image={false}
                      />
                      <BuildItemCard />
                    </div>
                  </Grid>
                </Grid>
              </div>
            )
          } else {
            return (
              <div className={s.loader_container}>
                <RingLoader
                  color={'#123abc'}
                  loading={loading}
                />
              </div>
            )
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

export default withStyles(styles)(
  withStyles2(s)(
    connect(mapStateToProps, mapDispatchToProps)(BuildViewer)
  )
)
