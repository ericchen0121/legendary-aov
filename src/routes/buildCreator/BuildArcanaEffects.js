import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';

import ARCANA, { find_arcana_by_id, ARCANA_PERCENTAGE_TYPES } from './AovArcana'
import { to_uppercase_first } from './utilities'

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
  new_build_button: {
    border: '1px solid #00aaff',
  },
  no_underline_link: {
    textDecoration: 'none',
    color: '#00aaff'
  },
  bold: {
    fontWeight: 'bold'
  }
})

class BuildArcanaEffects extends React.Component {

  sortAlpha = arcana => {
    return arcana.sort((a, b) => a.type.localeCompare(b.type))
  }

  get_arcana_count_by_key = (list, key) => { // returns { 'value': 1, 'value2': 2, 'value3': 2}
    return list.reduce((prev, curr) => {
      let count = prev.get(curr.color) || 0
      prev.set(curr.color, count + 1)
      return prev
    }, new Map())
  }



  render() {
    const { classes, arcana, style} = this.props

    let type_class
    if (style === 'bold') {
      type_class = cx(s.item_effect_type, classes.bold)
    } else {
      type_class = s.item_effect_type
    }
    let current_arcana = arcana.filter(a => a != null)

    if ( current_arcana.length > 0 ) {
      // ---------------------- TOTAL EFFECTS PER BUILD ---------------------
      //
      // Gather all effects from all arcana in the build

      let all_effects = []
      let all_arcana = []
      for (let id of current_arcana) {
        let arcana = find_arcana_by_id(id)
        all_arcana.push(arcana)
      }

      // Calculate the total effects power of each arcana, given an assumption of AVG count over 10 arcana

      let color_counts = this.get_arcana_count_by_key(all_arcana, 'color')
      let get_count = (color) => color_counts.get(color)


      for (let a of all_arcana) {
        // 1. Calculates the avg number of a given color of arcana based on color
        let avg_arcana_count_for_build = 10/get_count(a.color)

        // 2. Multiples this count with the power
        a.effects.map((e,i) => {
          a.effects[i]['total_effect'] = avg_arcana_count_for_build * e.power
        })

        all_effects.push(...a.effects)
      }

      // Create a map of all unique effects, and the combined power
      // Create Map, and reduce https://stackoverflow.com/questions/19233283/sum-javascript-object-propertya-values-with-same-object-propertyb-in-array-of-ob
      let all_effects_map = all_effects.reduce((prev, curr) => {
        let count = prev.get(curr.type) || 0;
        prev.set(curr.type, curr.total_effect + count) // averages arcana count over number of colored arcana
        return prev;
      }, new Map());

      // then, map your counts object back to an array
      let all_effects_counts = [...all_effects_map].map(([type, power]) => {
        return {type, power}
      })

      let all_effects_inner_html = this.sortAlpha(all_effects_counts).map((e, i) => {
        let total_power = e.power //
        let percent = '%'
        let plus = '+'

        let divider = <Divider className={classes.divider}/>
        if (i === all_effects_counts.length - 1) { divider = null }

        return (
          <div key={(e.type + i)}>
            <span className={type_class}>{to_uppercase_first(e.type)}</span>: <span className={s.item_effect_power}>{plus}{total_power.toFixed(1)}{ (ARCANA_PERCENTAGE_TYPES.indexOf(e.type) > -1) && percent}</span>
            { divider }
          </div>
        )
      })

      return all_effects_inner_html
    }

    return <div />
  }
}

export default withStyles(styles)(
  withStyles2(s)(BuildArcanaEffects)
)
