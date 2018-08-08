import React from 'react'

import cx from 'classnames'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import s from './FeaturedChannel.scss';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

import { graphql, compose } from 'react-apollo'
import {ID_QUERY} from '../../../../data/gql_queries/builds'

import Slider from 'react-slick'

// .com/build/edit/:build_id
const build_query = graphql(ID_QUERY, {
  skip: (own_props) => !own_props.params.build_id, // skip if build_id param isn't present
  options: (own_props) => ({ variables: { id: own_props.params.build_id } }), // search with build_id param from url
  props: ({ data: { loading, build } }) => ({
    loading,
    build_from_params: build,
    is_editing_page: true
  }), // put build object returned from db into this.props.build
});

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
  }),
  ep: {
    padding: 0
  },
  eps: {
    padding: 0,
  },
  epd: {
    display: 'inline',
    paddingRight: 32,
    marginRight: 32
  },
  divider: {
    margin: '0 33%'
  },
  divider: {
    width: '70%',
    marginTop: 20,
    marginBottom: 10
  },
  container: {
    minHeight: 800
  },
  item_effects_container: {
    textAlign: 'center',
    padding: 15,
    margin: '25px 25px 0px 10px',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
  },
  arcana_edit_link: {
    color: 'blue',
    fontSize: 9,
    cursor: 'pointer'
  },
  sliderDiv: {
    textAlign: 'center'
  },
  slider_img: {
    margin: '0px 10px',
    width: 'auto'
  }
})

const fn = function () {
  /* do your action */
}

class FeaturedChannelContainer extends React.Component {

  render() {
    const { classes, context } = this.props
    const settings = {
      className: cx("center", classes.sliderDiv),
      centerMode: true,
      // infinite: true,
      variableWidth: true,
      initialSlide: 1,
      slidesToShow: 4,
      speed: 400,
      dots: true,
      focusOnSelect: true
    }
    return (
      <div>

        <Grid container spacing={24} zeroMinWidth className={classes.container}>
          <Grid item xs={2}>
            hi
          </Grid>
          <Grid item xs={8}>
            <Slider {...settings}>
              <div className={classes.slider_img}>
                <img src='/aov/heroes/airi/hero.png' />
              </div>
              <div className={classes.slider_img}>
                <img src='/aov/heroes/tulen/hero.png' />
              </div>
              <div className={classes.slider_img}>
                <img src='/aov/heroes/maloch/hero.png' />
              </div>
              <div className={classes.slider_img}>
                <img src='/aov/heroes/lindis/hero.png' />
              </div>
              <div className={classes.slider_img}>
                <img src='/aov/heroes/baldum/hero.png' />
              </div>
            </Slider>
          </Grid>
          <Grid item xs={2}>

          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default compose(
  build_query,
  withStyles2(s),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(FeaturedChannelContainer)
