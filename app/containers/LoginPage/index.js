/**
 *
 * LoginPage
 *
 */

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import * as actions from './actions';
import { makeSelectGlobal } from '../App/selectors';
import ReCaptcha from '../../components/ReCaptcha';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.PureComponent {
  componentWillMount() {
    const {
      global: { user },
    } = this.props;
    const roles = localStorage.getItem('role');

    if (user.loaded || roles) {
      if (roles.includes('customer')) {
        this.setState({
          redirect: true,
          path: 'customer',
        });
      }
      if (roles.includes('master')) {
        this.setState({
          redirect: true,
          path: 'master',
        });
      }
    }
  }

  // eslint-disable-next-line no-unused-vars
  componentWillReceiveProps(nextProps, nextContext) {
    const {
      global: { user },
    } = this.props;

    const roles = localStorage.getItem('role');

    if (user.loaded || roles) {
      if (roles.includes('customer')) {
        this.setState({
          redirect: true,
          path: 'customer',
        });
      }
      if (roles.includes('master')) {
        this.setState({
          redirect: true,
          path: 'customer-master',
        });
      }
    }
  }

  handleChange = (name, value) => this.setState({ [name]: value });

  isFilled = () => {
    const host = window.document.location.hostname;
    const { email, password, captchaResponse = false } = this.state;
    return _.trim(password) && _.trim(email) && this.isValidEmail(email) && (host === 'localhost' || captchaResponse);
  };

  handleSubmit = () => {
    const { fetchLoginUser } = this.props;
    if (this.isFilled()) {
      fetchLoginUser(this.state);
    }
  };

  handleKeyPress = event => {
    if (event.keyCode === 13) {
      this.handleSubmit();
    }
  };

  isValidEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  state = {
    password: '',
    email: '',
    redirect: false,
  };

  render() {
    const { classes } = this.props;
    const { redirect, path } = this.state;

    return (
      <>
        <Helmet>
          <title>Войти</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <div className={classes.box}>
          <h3 className={classes.title}>Войти</h3>
          <TextField
            name="email"
            className={classes.input}
            fullWidth
            label="Ваш e-mail *"
            onKeyDown={this.handleKeyPress}
            onChange={e => this.handleChange(e.target.name, e.target.value)}
          />
          <TextField
            name="password"
            type="password"
            className={classes.input}
            fullWidth
            label="Введите пароль *"
            onKeyDown={this.handleKeyPress}
            onChange={e => this.handleChange(e.target.name, e.target.value)}
          />
          <ReCaptcha
            id="recaptcha"
            apiKey="6LfL88AUAAAAAJpEpYxe05nCnW6gyUNMSnJ1XJfa"
            onChange={() => { this.setState({ captchaResponse: true }); }}

          />
          <br />
          <div className={classes.btnBox}>
            <button type="button" onClick={this.handleSubmit} className={classes.linkBtn} disabled={!this.isFilled()}>
              Войти
            </button>
            <p className={classes.descText}>
              Забыли пароль? <Link to="/reset">Восстановить</Link>
            </p>
          </div>
        </div>
        {redirect ? <Redirect push to={`${path}`} /> : null}
      </>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
  fetchLoginUser: PropTypes.func,
  global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
  global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchLoginUser: bindActionCreators(actions.loginAction, dispatch),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

const LoginPageStyled = withStyles(styles)(LoginPage);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPageStyled);
