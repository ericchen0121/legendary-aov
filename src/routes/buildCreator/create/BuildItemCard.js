import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Card, { CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { ITEMS } from '../Items'
import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BuildItemImage from './BuildItemImage'

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: '90%',
    marginLeft: 10,
    marginTop: 35
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  item_type: {
    marginLeft: 15,
    fontSize: 11
  }
});

class BuildItemCard extends React.Component {
  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }

  render() {
    const { classes, build_creator } = this.props

    let item = ITEMS.find(i => i.id === build_creator.selected_item)

    let item_effects = item && this.sortAlpha(item.effects).map(e => {
      let power = e.power
      let percent, plus
      if (power < 1) {
        power = Math.floor(power * 100)
        percent = '%'
        plus = '+'
      }

      return (
        <div key={item.name}>
          {e.type}: {plus}{power}{percent}
        </div>
      )
    })


    let item_passives = (
      <div className={s.item_passive_container}>
        <div className={s.passive_title}>Passive</div>
        { item && item.passives.map((p, i) => {

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
    )

    let item_card = (
      item && (
        <div>
          <div>
            <BuildItemImage item={item} />
            <span>{item.name}</span>
            <span className={classes.item_type}>Tier {item.tier}</span>
            <span className={classes.item_type}>{item.type}</span>
          </div>
          <div>
            <span className={classes.item_type}>{item.cost}</span>
          </div>
          <div>
            { item_effects }
          </div>
          <div>
            { item_passives }
          </div>
        </div>
    ))

    // <Typography className={classes.title} color="textSecondary">
    // </Typography>
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>

            { item_card }

          </CardContent>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default withStyles(styles)(
  withStyles2(s)(
    connect(mapStateToProps, mapDispatchToProps)(BuildItemCard)
  )
)
