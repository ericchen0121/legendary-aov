import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';

class BuildHeroImage extends React.Component {
  render() {
    const { hero } = this.props
    return (
      <span>
        { hero && <img className={s.hero_img_small} src={`/aov/heroes/${hero.folder}/hero.png`} />}
      </span>
    )
  }
}

export default withStyles2(s)(BuildHeroImage);
