/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { makeSelectGlobal } from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import Header from '../../components/HeaderComponents/Header/Loadable';
import Footer from '../../components/Footer';
import GlobalStyle from '../../global-styles';
import BLStylesTheme from '../../themes/BLStylesTheme';
import routes from '../../router';
import styles from './styles';
import Notification from '../../components/Notification';

function App({
  classes,
  global,
  global: { serviceCategories, notification },
  getServiceCategoriesAction,
  fetchGetUserData,
  closeNotification,
  getFavoriteMasters,
}) {
  const key = 'global';
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !global.user.loaded) {
      fetchGetUserData();
    }
    if (token && !global.favoriteMasters.loaded) {
      getFavoriteMasters();
    }
    if (!serviceCategories.loaded) {
      getServiceCategoriesAction();
    }
  }, [serviceCategories.loaded]);

  return (
    <MuiThemeProvider theme={BLStylesTheme}>
      <Header categories={serviceCategories && serviceCategories} isUserLogged={global.user.loaded} />
      <main className={classes.main}>{routes()}</main>
      <Notification
        isOpen={notification.open}
        textMsg={notification.text}
        handleCloseNotification={closeNotification}
        variant={notification.variant}
      />
      <Footer categories={serviceCategories && serviceCategories} isUserLogged={global.user.loaded} />
      <CookieConsent
        location="bottom"
        buttonText="Принять"
        cookieName="beautylinksCookie"
        style={{ background: '#fff', marginBottom: 0, color: '#000', border: '1px solid silver', fontSize: 14 }}
        buttonStyle={{ backgroundColor: '#00c7c7', color: '#fff', fontSize: 16 }}
        expires={150}
      >
        Этот сайт использует <Link to="/cookies-policy">cookies</Link>. Вы можете изменить настройки cookies в своём
        браузере.
      </CookieConsent>
      <GlobalStyle />
    </MuiThemeProvider>
  );
}

App.propTypes = {
  classes: PropTypes.object,
  global: PropTypes.object,
  serviceCategories: PropTypes.object,
  getServiceCategoriesAction: PropTypes.func,
  fetchGetUserData: PropTypes.func,
  closeNotification: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  global: makeSelectGlobal(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getServiceCategoriesAction: bindActionCreators(actions.getServiceCategories, dispatch),
    fetchGetUserData: bindActionCreators(actions.getUserInfo, dispatch),
    closeNotification: bindActionCreators(actions.closeNotification, dispatch),
    getFavoriteMasters: bindActionCreators(actions.getFavoriteMasters, dispatch),
    dispatch,
  };
}

const AppStyled = withStyles(styles)(App);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AppStyled);
