/**
 *
 * Reset
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
import { Redirect } from 'react-router-dom';
import makeSelectReset from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Reset extends React.PureComponent {
  state = {
    email: '',
  };

  isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const {
      classes,
      resetEmail,
      reset: { loaded },
    } = this.props;
    const { email } = this.state;

    return (
      <div>
        <Helmet>
          <title>Восстановить</title>
          <meta name="description" content="Description of Reset" />
        </Helmet>
        <div className={classes.box}>
          <h3 className={classes.title}>Восстановить пароль</h3>
          <TextField
            onChange={({ target: { value } }) => this.setState({ email: value })}
            name="email"
            value={email}
            className={classes.input}
            fullWidth
            label="Ваш e-mail  *"
          />
          <div className={classes.btnBox}>
            <button
              onClick={() => resetEmail(email)}
              disabled={!this.isValidEmail(email)}
              type="button"
              className={classes.linkBtn}
            >
              Отправить запрос
            </button>
          </div>
          {loaded ? <Redirect push to="/login" /> : null}
        </div>
      </div>
    );
  }
}

Reset.propTypes = {
  classes: PropTypes.object,
  reset: PropTypes.object,
  resetEmail: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  reset: makeSelectReset(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    resetEmail: bindActionCreators(actions.resetPasswordEmailAction, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'reset', reducer });
const withSaga = injectSaga({ key: 'reset', saga });

const ResetStyled = withStyles(styles)(Reset);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ResetStyled);
