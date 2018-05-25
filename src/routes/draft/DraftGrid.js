import React from 'react';
import PropTypes from 'prop-types';
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import s from './Aov.css';
import classNames from 'classnames'
import DraftGridItem from './DraftGridItem'
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';


const styles = theme => ({
  root: {
    flexGrow: 1,
    main_one: {
      order: 2,
      marginRight: 30
    }
  },
  grid_container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginLeft: 10,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    marginLeft: 1,
  },
})
class DraftGrid extends React.Component {
  static propTypes = {
    order_hero: PropTypes.array.isRequired,
  };

  render() {
    const { order_hero, classes, is_mobile } = this.props;

    let list = null
    let list_grid = null

    list = order_hero.map(h => (
      <DraftGridItem
        hero={h}
        {...this.props}
        handleFetchYoutubeVideos={this.props.handleFetchYoutubeVideos}
      />
    ))

    if (is_mobile) {
      list_grid = (
        <div className={classes.grid_container}>
          <GridList className={classes.gridList} cellHeight={150} cols={1}>
            { list }
          </GridList>
        </div>
      )

    } else {
      list_grid = (
        <div className={classes.grid_container}>
          <GridList cellHeight={150} cols={1}>
            { list }
          </GridList>
        </div>
      )
    }


    return list_grid
  }
}


export default withStyles(styles)(DraftGrid);
