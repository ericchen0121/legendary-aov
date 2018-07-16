import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';

class BuildArcanaImage extends React.Component {
  render() {
    const { arcana  } = this.props
    return (
      <span>
        { talent && <img className={cx(s.talent_img, s.talent_border)} src={`/aov/arcana/${arcana.tier}/${arcana.color}/${arcana.name.toLowerCase()}.png`} />}
      </span>
    )
  }
}

export default withStyles2(s)(BuildArcanaImage);
