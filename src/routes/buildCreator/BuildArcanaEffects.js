import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';

import BuildArcanaCountsContainer from './create/BuildArcanaCountsContainer'
import ARCANA, { find_arcana_by_id, ARCANA_PERCENTAGE_TYPES, get_all_arcana_effects, get_avg_arcana_counts} from './AovArcana'
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
  },
  image_container: {
    display: 'flex',
    flexFlow: 'row wrap',
    textAlign: 'center',
    marginBottom: 20
  }
})

class BuildArcanaEffects extends React.Component {

  sortAlpha = arcana => {
    return arcana.sort((a, b) => a.type.localeCompare(b.type))
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

      let all_effects_counts = get_all_arcana_effects(current_arcana)

      let all_effects_inner_html = this.sortAlpha(all_effects_counts).map((e, i) => {
        let total_power = e.power //
        let percent = '%'
        let plus = '+'

        let divider = <Divider className={classes.divider}/>
        if (i === all_effects_counts.length - 1) { divider = null }

        return (
          <div>
            <div key={(e.type + i)}>
              <span className={type_class}>{to_uppercase_first(e.type)}</span>: <span className={s.item_effect_power}>{plus}{total_power.toFixed(1)}{ (ARCANA_PERCENTAGE_TYPES.indexOf(e.type) > -1) && percent}</span>
              { divider }
            </div>
          </div>
        )
      })
      //

      let all_arcana_counts_html = get_avg_arcana_counts(current_arcana).map(a => {
        return <BuildArcanaCountsContainer arcana={a} />
      })

      return (
        <div>
          <div className={classes.image_container}>
            {all_arcana_counts_html}
          </div>
          <div>
            { all_effects_inner_html }
          </div>
        </div>
      )
    }

    return <div />
  }
}

export default withStyles(styles)(
  withStyles2(s)(BuildArcanaEffects)
)
