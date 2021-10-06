/**
 *
 * ProtectedSearchRow
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
import queryString from 'query-string';

class ProtectedSearchRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryParams: queryString.parse(props.location.search),
      redirect: false,
    };
  }

  render() {
    const { classes, global, component: Component, dispatch, ...rest } = this.props;
    const {queryParams:{treatmentId,lat,lon,date,from,to,locationtype,serviceType, addr}} = this.state;
    return (
      <React.Fragment>
        <Route
          {...rest}
          render={props =>
            // eslint-disable-next-line no-nested-ternary
            treatmentId && lat && lon && date && from && to && locationtype && serviceType && addr ? (
              <React.Fragment>
                <Component {...rest} />
              </React.Fragment>
            ) : (
              <Redirect
                to={{
                  pathname: '/category-search',
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

ProtectedSearchRow.propTypes = {
  classes: PropTypes.object,
  global: PropTypes.object,
  dispatch: PropTypes.func,
  component: PropTypes.func,
};

const ProtectedSearchRowStyled = withStyles(styles)(ProtectedSearchRow);

export default connect(
  () =>
    createStructuredSelector({
      global: makeSelectGlobal(),
    }),
  dispatch => ({
    changeThemeAction: bindActionCreators(actions.changeThemeAction, dispatch),
    dispatch,
  }),
)(ProtectedSearchRowStyled);
