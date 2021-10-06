/**
 *
 * ResetPassword
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import makeSelectResetPassword from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ResetPassword extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: queryString.parseUrl(props.location.search).query.email,
      token: props.match.params.resetToken,
      password_confirmation: '',
      password: '',
    };
  }

  render() {
    const {
      classes,
      resetPass,
      resetPassword: { loaded },
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>ResetPassword</title>
          <meta name="description" content="Description of ResetPassword" />
        </Helmet>
        <div className={classes.box}>
          <TextField
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
            name="password"
            className={classes.input}
            fullWidth
            label="Новый пароль *"
          />
          <TextField
            onChange={e => {
              this.setState({ password_confirmation: e.target.value });
            }}
            name="password_confirmation"
            className={classes.input}
            fullWidth
            label="Повторить пароль *"
          />
          <div className={classes.btnBox}>
            <button onClick={() => resetPass(this.state)} type="button" className={classes.linkBtn}>
              Сохранить
            </button>
          </div>
          {loaded ? <Redirect push to="/login" /> : null}
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
  classes: PropTypes.object,
  resetPassword: PropTypes.object,
  resetPass: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  resetPassword: makeSelectResetPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    resetPass: bindActionCreators(actions.resetPasswordAction, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'resetPassword', reducer });
const withSaga = injectSaga({ key: 'resetPassword', saga });

const ResetPasswordStyled = withStyles(styles)(ResetPassword);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ResetPasswordStyled);
