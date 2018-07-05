import React from 'react'
import cx from 'classnames'
import s from './Player.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Card, { CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import PlayerCardSocial from './PlayerCardSocial'
import TEAM_FOLDERS from './constants'

import SocialCard from './SocialCard'
import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const SOCIAL = ['twitch', 'youtube', 'garena', 'instagram', 'twitter', 'facebook']

const styles = theme => ({
  card: {
    marginRight: 10,
    marginBottom: 35
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 15,
    fontFamily: "'Josefin Sans', sans-serif"
  },
  divider: {
    marginTop: 5,
    marginBottom: 5
  },
  type_container: {
  },
  team_logo: {
    width: 25,
    height: 25,
    borderRadius: 3
  },
  player: {
    width: 65,
    height: 65,
    borderRadius: 3,
    marginBottom: 6
  },
  team: {
    fontSize: 11
  },
  real_name: {
    fontSize: 9
  }
});

class PlayerCard extends React.Component {

  try_require = (path) => {
    try {
     require(`../../../public/${path}`)
     return true
    } catch (err) {
     return false
    }
  }

  get_player_img_path = (player) => {
    return `aov/players/${player}.png`
  }

  render() {
    const { classes, player } = this.props
    let logo, role
    let team_folder = TEAM_FOLDERS.find(t => t.name === player.team.name)['folder']

    // Image Path, or Default if it doesn't exist
    //
    let name = player.name.toLowerCase()
    let img_path = this.get_player_img_path(name)

    if (!this.try_require(img_path)) {
      img_path = this.get_player_img_path('default')
    }

    if (player.role) { role = player.role.toUpperCase() }
    else { role = player.role }

    let player_card = (
      player && (
        <div>
          <div className={cx(s.wrapper, s.text_align_left)}>
            <img className={classes.player} src={img_path} />
            <div className={classes.type_container}>
              <Grid container spacing={12} zeroMinWidth className={classes.container}>
                <Grid item xs={8}>
                  <Typography variant="headline" component="h3" className={classes.title}>
                    <span>{player.name}</span>
                  </Typography>
                  <Typography color="textSecondary">
                    <span className={classes.real_name}>{player.real_name}</span>
                  </Typography>
                  <Typography color="textSecondary">
                    <img className={classes.team_logo} src={`/aov/teams/${team_folder}/logo.png`} />
                    <span className={classes.team}>{player.team.alt_name || player.team.name}</span>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Typography color="textSecondary">
                      <span className={classes.team}>{ role }</span>
                    </Typography>
                  </div>
                  <div>
                    {
                      SOCIAL.map(s => {
                        if (player[s]) {
                          console.log(s, player[s])
                          return (
                            <PlayerCardSocial
                              type = {s}
                              link = {player[s]}
                            />
                          )
                        }
                        return
                      })
                    }
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
    ))

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>

            { player_card }

          </CardContent>
        </Card>
        <SocialCard />
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
