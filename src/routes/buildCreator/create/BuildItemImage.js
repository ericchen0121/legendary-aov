import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';

class BuildItemImage extends React.Component {
  render() {
    const { item } = this.props
    return (
      <span>
        { item && <img className={s.item_img} src={`/aov/items/tier/${item.tier}/${item.folder}/${item.folder}.png`} />}
      </span>
    )
  }
}

export default withStyles2(s)(BuildItemImage);
