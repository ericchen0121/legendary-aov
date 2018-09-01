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
import { ITEMS } from '../Items_v16'
import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BuildItemImage from './BuildItemImage'
import { to_uppercase_first } from '../utilities'

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
    fontSize: 18,
  },
  item_type: {
    marginRight: 15,
    fontSize: 11
  },
  divider: {
    marginTop: 5,
    marginBottom: 5
  },
  type_container: {
    marginLeft: 20
  }
});

class BuildItemCard extends React.Component {
  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }

  render() {
    const { classes, build_creator } = this.props

    let item = ITEMS.find(i => i.id === (build_creator.hovered_item || build_creator.selected_item))

    let item_effects = item && this.sortAlpha(item.effects).map(e => {
      let power = e.power
      let percent, plus
      if (power < 1) {
        power = Math.floor(power * 100)
        percent = '%'
        plus = '+'
      }

      return (
        <div key={ item.name + Math.random()*100 }>
          <span className={s.item_power_type}>{to_uppercase_first(e.type)}:</span> <span className={s.item_effect_power}>{plus}{power}{percent}</span>
        </div>
      )
    })


    let item_passives = (
      <div className={s.passive_container}>
        <div className={s.passive_title}>Passives</div>
        { item && item.passives.map((p, i) => {

          let divider = <Divider className={classes.divider}/>
          if (i === item.passives.length - 1) { divider = null }
          return  (
            <div key={item.name + Math.random()*100}>
              <span className={s.item_passive_title}>{p.name}</span> <span className={s.passive_title}>{ p.unique ? '[ Unique Passive ]' : ''}</span>: <span className={s.item_passive_desc}>{p.description}</span>
              { divider }
            </div>
          )
        })}
      </div>
    )

    let item_card = (
      item && (
        <div>
          <div className={cx(s.wrapper, s.text_align_left)}>
            <BuildItemImage item={item} />
            <div className={classes.type_container}>
              <Typography variant="headline" component="h3" className={classes.title}>
                <span>{item.name}</span>
              </Typography>
              <Typography color="textSecondary">
                <span className={classes.item_type}>Tier {item.tier}</span>
                <span className={classes.item_type}>{item.type}</span>
                <span className={classes.item_type}>{item.cost}</span>
              </Typography>
            </div>
          </div>
          <div className={s.item_effects_container}>
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
