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
  },
  flex: {
    display: 'flex'
  }
})
class DraftGrid extends React.Component {
  static propTypes = {
    order_hero: PropTypes.array.isRequired,
  };

  render() {
    const { order_hero, classes } = this.props;

    let list = null
    let list_grid = null
    list = order_hero.map(h => (
      <DraftGridItem
        hero={h}
        {...this.props}
        handleFetchYoutubeVideos={this.props.handleFetchYoutubeVideos}
      />
    ))

    list_grid = (
      <div className={classes.grid_container}>
        <GridList cellHeight={150} className={s.flex} cols={1}>
          {list}
        </GridList>
      </div>
    )

    return list_grid
  }
}


export default withStyles(styles)(DraftGrid);
