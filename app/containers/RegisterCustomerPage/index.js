/**
 *
 * RegisterCustomerPage
 * 1st page of registration all customers
 */

import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import CustomerRegisterForm from '../../components/CustomerRegisterForm/Loadable';
import makeSelectRegisterCustomerPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class RegisterCustomerPage extends React.PureComponent {
  handleNextStep(userData) {
    const { customerPreRegisterAction } = this.props;
    this.setState({
      redirect: true,
      path: 'register-chose',
    });
    customerPreRegisterAction(userData);
  }

  state = {
    redirect: false,
    path: '',
  };

  componentWillUnmount() {
    this.setState({
      redirect: false,
      path: '',
    });
  }

  render() {
    const { classes, userExists, registerCustomerPage } = this.props;
    const { redirect, path } = this.state;
    console.log('redirect:', redirect, path);
    return (
      <>
        <Helmet>
          <title>Регистрация нового пользователя</title>
          <meta name="description" content="Description of RegisterCustomerPage" />
        </Helmet>
        <section>
          <div className={classes.box}>
            <h3 className={classes.title}>Регистрация нового пользователя</h3>
            <CustomerRegisterForm
              registerCustomerPage={registerCustomerPage}
              userExists={userExists}
              handleNextStep={userData => this.handleNextStep(userData)}
            />
            {redirect ? <Redirect push to={`${path}`} /> : null}
          </div>
        </section>
      </>
    );
  }
}

RegisterCustomerPage.propTypes = {
  classes: PropTypes.object,
  customerPreRegisterAction: PropTypes.func,
  userExists: PropTypes.func,
  registerCustomerPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  registerCustomerPage: makeSelectRegisterCustomerPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    customerPreRegisterAction: bindActionCreators(actions.customerPreRegisterAction, dispatch),
    userExists: bindActionCreators(actions.userExists, dispatch),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'registerCustomerPage', reducer });
const withSaga = injectSaga({ key: 'registerCustomerPage', saga });

const RegisterCustomerPageStyled = withStyles(styles)(RegisterCustomerPage);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterCustomerPageStyled);
