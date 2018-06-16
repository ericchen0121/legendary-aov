import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';

class BuildHeroImage extends React.Component {
  render() {
    const { hero, size, border } = this.props

    let img_class = s.hero_img_small
    if (size === 'xs') {
      img_class = s.hero_img_xs
    }

    let border_class = s.border_none
    if (border === 'gold') {
      border_class =s.border_gold
    }

    return (
      <span>
        { hero && <img className={cx(img_class, border_class)} src={`/aov/heroes/${hero.folder}/hero.png`} />}
      </span>
    )
  }
}

export default withStyles2(s)(BuildHeroImage);
