/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'
import withStyles2 from 'isomorphic-style-loader/lib/withStyles';
import { withStyles } from 'material-ui/styles';
import s from './Login.css';
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import { ADD_USER, LOGIN_USER } from '../../data/gql_queries/users'
// import Tab from 'material-ui/Tab';
import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import history from '../../history'

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const styles = {
  root: {
    flexGrow: 1,
  },
  transparent: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    '&::before': {
      backgroundColor: 'rgba(255,255,255,0)'
    }
  },
  fully_transparent: {
    '&::before': {
      backgroundColor: 'rgba(255,255,255,0)'
    }
  },
  register: {
    width: 404,
    margin: '50px auto',
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    textAlign: 'center'
  },
  bg: {
    backgroundImage: "url('/aov/covers/yorn.jpg')",
    backgroundRepeat: 'no-repeat',
    height: '100%',
    backgroundPosition: '43% 29%'
  }
};

// https://github.com/ReactTraining/history
const location = history.location

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  handleChange = (event, value) => {
   this.setState({ value });
 };

  switchForm = () => {
    if(this.state.value === 0) {
      this.setState({value: 1})
    } else {
      this.setState({value: 0})
    }
  }
  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    }, () => console.log(this.state))
  }

  handleChangeUsername = (e) => {
    this.setState({username: e.target.value }, () => console.log(this.state))
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleRegisterUser = (data) => {
    let id, email, username
    if (data.addUser) {
      id = data.addUser.id
      email = data.addUser.email
      username = data.addUser.username

      this.props.actions.registerUser({
        id,
        email,
        username
      })

      this._saveUserData(id, email, username, true)

      history.goBack()
    }
  }

  handleLoginUser = (data) => {
    let id, email, username
    if (data.loginUser) {
      id = data.loginUser.id
      email = data.loginUser.email
      username = data.loginUser.username

      this.props.actions.loginUser({
        id,
        email,
        username
      })

      this._saveUserData(id, email, username, true)

      history.goBack()
    }


  }

  _saveUserData = (id, email, username, is_logged_in) => {
    let legendaryaov_user = JSON.stringify({
      id,
      email,
      username,
      is_logged_in
    })

    localStorage.setItem('legendaryaov_user', legendaryaov_user)
  }

  state = {
    value: 0,
    email: null,
    password: null,
    username: null
  }

  render() {
    let { classes } = this.props
    let handleChangeUsername = this.handleChangeUsername.bind(this)
    let handleChangeEmail = this.handleChangeEmail.bind(this)
    let handleChangePassword =this.handleChangePassword.bind(this)
    let handleRegisterUser = this.handleRegisterUser.bind(this)
    let handleLoginUser = this.handleLoginUser.bind(this)
    let switchForm = this.switchForm.bind(this)

    let {email, password, username} = this.state

    let user = {
      email,
      password,
      username
    }

    let fb_login = (
      <div className={s.formGroup}>
        <a className={s.facebook} href="/login/facebook">
          <svg
            className={s.icon}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z" />
          </svg>
          <span>Log in with Facebook</span>
        </a>
      </div>
    )

    let g_login = (
      <div className={s.formGroup}>
        <a className={s.google} href="/login/google">
          <svg
            className={s.icon}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' +
                '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' +
                '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' +
                '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' +
                '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' +
                '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' +
                '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' +
                '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z'
              }
            />
          </svg>
          <span>Log in with Google</span>
        </a>
      </div>
    )

    let twitter_login = (
      <div className={s.formGroup}>
        <a className={s.twitter} href="/login/twitter">
          <svg
            className={s.icon}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                'M30 6.708c-1.105.49-2.756 1.143-4 1.292 1.273-.762 2.54-2.56 ' +
                '3-4-.97.577-2.087 1.355-3.227 1.773L25 5c-1.12-1.197-2.23-2-4-2-3.398 0-6 ' +
                '2.602-6 6 0 .4.047.7.11.956L15 10C9 10 5.034 8.724 2 5c-.53.908-1 1.872-1 ' +
                '3 0 2.136 1.348 3.894 3 5-1.01-.033-2.17-.542-3-1 0 2.98 4.186 6.432 7 7-1 ' +
                '1-4.623.074-5 0 .784 2.447 3.31 3.95 6 4-2.105 1.648-4.647 2.51-7.53 2.51-.5 ' +
                '0-.988-.03-1.47-.084C2.723 27.17 6.523 28 10 28c11.322 0 17-8.867 17-17 ' +
                '0-.268.008-.736 0-1 1.2-.868 2.172-2.058 3-3.292z'
              }
            />
          </svg>
          <span>Log in with Twitter</span>
        </a>
      </div>
    )

    let register = (

      <Mutation
        mutation={ADD_USER}
        variables={{ input: user }}
        onCompleted={handleRegisterUser}
      >
        {(addUser, {loading, error, data}) => {
          let container = (
            <div className={s.root}>
              <div className={s.container}>
                <h1 className={classes.title}>Register</h1>
                <p className={s.lead}>
                </p>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="usernameOrEmail">
                    Create a Username:
                    <input
                      className={s.input}
                      id="username"
                      type="text"
                      name="username"
                      autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                      onChange={handleChangeUsername}
                    />
                  </label>
                </div>
                <strong className={cx(s.lineThrough,classes.fully_transparent)}> AND </strong>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="usernameOrEmail">
                    Email address:
                    <input
                      className={s.input}
                      id="email"
                      type="text"
                      name="email"
                      autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                      onChange={handleChangeEmail}
                    />
                  </label>
                </div>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="password">
                    Create a Password:
                    <input
                      className={s.input}
                      id="password"
                      type="password"
                      name="password"
                      onChange={handleChangePassword}
                    />
                  </label>
                </div>
                <div className={s.formGroup} onClick={handleRegisterUser}>
                  <button className={s.button} onClick={addUser}>
                    Register
                  </button>
                </div>
                {error && <div>Username or Email invalid</div>}
                <strong className={cx(s.lineThrough, classes.fully_transparent)}> </strong>
                <div className={s.switchFormText}>
                  Already Legendary? <span className={s.cta} onClick={switchForm}>Sign In</span>
                </div>
              </div>
            </div>

          )

          return container

        }}
      </Mutation>
    )

    let login = (
      <Mutation
        mutation={LOGIN_USER}
        variables={{ input: user }}
        onCompleted={handleLoginUser}
      >
        {(loginUser, { loading, error, data }) => {
          let container =(
            <div className={s.root}>
              <div className={s.container}>
                <h1 className={classes.title}>Login</h1>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="usernameOrEmail">
                    Username:
                    <input
                      className={s.input}
                      id="username"
                      type="text"
                      name="username"
                      autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                      onChange={handleChangeUsername}
                    />
                  </label>
                </div>
                <strong className={cx(s.lineThrough, classes.fully_transparent)}> OR </strong>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="usernameOrEmail">
                    Email address:
                    <input
                      className={s.input}
                      id="email"
                      type="text"
                      name="email"
                      autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                      onChange={handleChangeEmail}
                    />
                  </label>
                </div>
                <div className={s.formGroup}>
                  <label className={s.label} htmlFor="password">
                    Password:
                    <input
                      className={s.input}
                      id="password"
                      type="password"
                      name="password"
                      onChange={handleChangePassword}
                    />
                  </label>
                </div>
                <div className={s.formGroup} onClick={handleLoginUser}>
                  <button className={s.button} onClick={loginUser}>
                    Log in
                  </button>
                </div>
                {error && <div>Username or Email invalid</div>}
                <strong className={s.lineThrough}> </strong>
                <div className={s.switchFormText}>
                  Not Legendary yet? <span className={s.cta} onClick={switchForm}>Sign Up</span>
                </div>
              </div>
            </div>
          )
          return (
            <div>{container}</div>
          )
        }}
      </Mutation>
    )

    return (
      <div className={classes.bg}>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Register" />
            <Tab label="Login" />
          </Tabs>
        </Paper>
        <Paper className={cx(classes.register, classes.transparent)}>
        { (this.state.value === 0) && register }
        { (this.state.value === 1) && login }
        </Paper>
      </div>
    );
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

export default withStyles2(s)(
  withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Login)
  )
)
