import React from 'react'
import cx from 'classnames'
import s from './Build.scss'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';

class BuildTalentImage extends React.Component {
  render() {
    const { talent } = this.props
    return (
      <span>
        { talent && <img className={cx(s.talent_img, s.talent_border)} src={`/aov/talents/${talent.name.toLowerCase()}.png`} />}
      </span>
    )
  }
}

export default withStyles2(s)(BuildTalentImage);
