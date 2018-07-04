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

class PlayerCard extends React.Component {
  sortAlpha = items => {
    return items.sort((a, b) => a.type.localeCompare(b.type))
  }

  render() {
    const { classes, build_creator } = this.props

    let item = ITEMS.find(i => i.id === (build_creator.hovered_item || build_creator.selected_item))

    let team_folder = TEAM_FOLDERS.find(t => t.name === p.team.name)['folder']
    let logo

    return (
      <div>



      </div>
    )

    let item_card = (
      item && (
        <div>
          <div className={cx(s.wrapper, s.text_align_left)}>
            <img className={classes.player} src= {`/aov/players/${p.name}.png`} />
            <div className={classes.type_container}>
              <Typography variant="headline" component="h3" className={classes.title}>
                <span>{p.name}</span>
              </Typography>
              <Typography color="textSecondary">
                <img className={classes.team_logo} src={`/aov/teams/${team_folder}/logo.png`} />
                <span className={classes.team}>{p.team.alt_name}</span>
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
    connect(mapStateToProps, mapDispatchToProps)(PlayerCard)
  )
)
