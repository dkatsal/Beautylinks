/**
 *
 * RegisterMainPage
 * 2st page of registration all customers (Chose status master or client)
 */

import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// eslint-disable-next-line import/no-duplicates
import makeSelectRegisterMainPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import masterImg from '../../images/register-master.png';
import clientImg from '../../images/register-client.png';
import makeSelectRegisterCustomerPage from "../RegisterCustomerPage/selectors";
import { makeSelectGlobal } from "../App/selectors";

/* eslint-disable react/prefer-stateless-function */
export class RegisterMainPage extends React.PureComponent {
  componentWillMount() {
    const {
      global: { user },
      registerCustomerPage: { data },
    } = this.props;

    const roles = localStorage.getItem('role');

    if (user.loaded || roles) {
      if (roles.includes('customer')) {
        this.setState({
          redirect: true,
          path: 'customer',
        });
      }
    }

    if (!data) {
      this.setState({
        redirect: true,
        path: 'register',
      });
    }
  }

  state = {
    redirect: false,
    path: '',
  };

  render() {
    const { classes } = this.props;
    const { redirect, path } = this.state;
    return (
      <div>
        <Helmet>
          <title>RegisterMainPage</title>
          <meta name="description" content="Description of RegisterMainPage" />
        </Helmet>
        <section className={classes.mainBox}>
          <p className={classes.title}>Почти готово!</p>
          <p className={classes.desc}>Не забудьте подтвердить свой e-mail.</p>
          <div className={classes.container}>
            <aside className={classes.registerBox}>
              <div className={classes.registerImg}>
                <img src={masterImg} alt="Мастер" />
              </div>
              <Link to="/register-master" className={classes.linkBtn}>
                Начать как мастер
              </Link>
            </aside>
            <aside className={classes.registerBox}>
              <div className={classes.registerImg}>
                <img src={clientImg} alt="Клиент" />
              </div>
              <Link to="/register-client" className={classes.linkBtn}>
                Начать как клиент
              </Link>
              {redirect ? <Redirect push to={`${path}`} /> : null}
            </aside>
          </div>
        </section>
      </div>
    );
  }
}

RegisterMainPage.propTypes = {
  global: PropTypes.object,
  classes: PropTypes.object,
  registerCustomerPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  global: makeSelectGlobal(),
  registerMainPage: makeSelectRegisterMainPage(),
  registerCustomerPage: makeSelectRegisterCustomerPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'registerMainPage', reducer });
const withSaga = injectSaga({ key: 'registerMainPage', saga });

const RegisterMainPageStyled = withStyles(styles)(RegisterMainPage);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterMainPageStyled);
