import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';

import { find_item_by_id } from './Items'
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
  }
})

class BuildItemsEffects extends React.Component {

  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }

  render() {
    const { classes, items } = this.props

    let current_items = items.filter(i => i != null)

    if ( current_items.length > 0 ) {
      // ---------------------- TOTAL EFFECTS PER BUILD ---------------------
      //
      // Gather all effects from all items in the build

      let all_effects = []
      for (let id of current_items) {
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
        if (power < 2) {
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

      return all_effects_inner_html
    }

    return <div />
  }
}

export default withStyles(styles)(
  withStyles2(s)(BuildItemsEffects)
)
