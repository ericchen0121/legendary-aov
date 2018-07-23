import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';

class BuildItemImage extends React.Component {
  render() {
    const { item, size, selected } = this.props

    let size_class
    if (size === 'xsmall') {
      size_class = s.item_xsmall
    }
    else if (size === 'small') {
      size_class = s.item_small
    }
    else if (size === 'medium') {
      size_class = s.item_medium
    }
    else if (size === 'large') {
      size_class = s.item_large
    }
    else {
      size_class = s.item_medium
    }

    let selected_class
    if(selected) {
      selected_class = s.item_img_selected
    }

    return (
      <span>
        { item &&
          <img
            className={cx(s.item_img, size_class, selected_class)}
            src={`/aov/items/tier/${item.tier}/${item.folder}/${item.folder}.png`}
          />
        }
      </span>
    )
  }
}

export default withStyles2(s)(BuildItemImage);
