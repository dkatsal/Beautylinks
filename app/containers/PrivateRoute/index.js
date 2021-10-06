/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import * as actions from '../App/actions';
import styles from './styles';
import AppPreloader from '../../components/AppPreloader/index';
import { makeSelectGlobal } from '../App/selectors';

class PrivateRoute extends React.PureComponent {
  render() {
    const { classes, global, component: Component, dispatch, ...rest } = this.props;
    return (
      <React.Fragment>
        <Route
          {...rest}
          render={props =>
            // eslint-disable-next-line no-nested-ternary
            global.user.loading ? (
              <AppPreloader size="big" type="outside" />
            ) : global.user.loaded ? (
              <React.Fragment>
                <Component {...rest} />
              </React.Fragment>
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.location },
                }}
              />
            )
          }
        />
      </React.Fragment>
    );
  }
}

PrivateRoute.propTypes = {
  classes: PropTypes.object,
  global: PropTypes.object,
  dispatch: PropTypes.func,
  component: PropTypes.func,
};

const PrivateRouteStyled = withStyles(styles)(PrivateRoute);

export default connect(
  () =>
    createStructuredSelector({
      global: makeSelectGlobal(),
    }),
  dispatch => ({
    changeThemeAction: bindActionCreators(actions.changeThemeAction, dispatch),
    dispatch,
  }),
)(PrivateRouteStyled);
