/**
 *
 * CustomerPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import CustomerProfile from 'containers/CustomerProfile';
import makeSelectCustomerPage from './selectors';
import { makeSelectGlobal } from '../App/selectors';
import CustomerSidebar from '../../components/CustomerComponents/CustomerSidebar';
import Awards from '../../components/CustomerComponents/CustomerAwards';
import Booking from '../../components/CustomerComponents/Booking';
import CustomerSet from '../../components/CustomerComponents/CustomerSet';
import Favorite from '../../components/CustomerComponents/Favorite';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class CustomerPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      btnTabIndex: 1,
    };

    const { deleteFavorite, putCancelBooking } = this.props;
    this.debouncedDeleteFavorite = _.debounce(deleteFavorite, 300);
    this.debouncedPutCancelBooking = _.debounce(putCancelBooking, 300);
  }

  componentWillMount() {
    const {
      customerPage: { bookings },
      getUserBookings,
    } = this.props;

    if (!bookings.loaded) {
      getUserBookings();
    }
  }

  state = {
    btnTabIndex: 3,
  };

  handleChangeBtnTabIndex = val => this.setState({ btnTabIndex: val + 1 });

  renderTab = step => {
    const {
      global: { user, favoriteMasters },
      customerPage: { bookings },
      handleSaveEmailPassw,
      handleChangeActive,
      handleDeleteUser,
    } = this.props;
    switch (step) {
      case 1:
        return <Booking bookings={bookings.data} cancelBooking={this.debouncedPutCancelBooking} />;
      case 2:
        return (
          <CustomerSet
            handleSave={handleSaveEmailPassw}
            handleChangeActive={handleChangeActive}
            handleDeleteUser={handleDeleteUser}
            user={user}
          />
        );
      case 3:
        return favoriteMasters.loaded ? (
          <Favorite favoriteMasters={favoriteMasters} deleteFavorite={this.debouncedDeleteFavorite} />
        ) : null;
      case 4:
        return <CustomerProfile />;
      default:
        // console.log(bookings.data && bookings.data.filter(item => item.booking_status === 'completed'))
        return (
          <Awards
            achievements={user.data.achievements}
            bookings={bookings.data && bookings.data.filter(item => item.booking_status === 'completed')}
          />
        );
    }
  };

  render() {
    const {
      classes,
      global: { user },
      dispatch,
    } = this.props;
    const { btnTabIndex } = this.state;
    return (
      <>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Description of CustomerPage" />
        </Helmet>
        <div className={classes.wrap}>
          <div className={classes.container}>
            <CustomerSidebar
              btnTabIndex={btnTabIndex - 1}
              handleChangeBtnTabIndex={this.handleChangeBtnTabIndex}
              user={user.data}
              dispatch={dispatch}
            />
            <div className={classes.content}>{this.renderTab(btnTabIndex)}</div>
          </div>
        </div>
      </>
    );
  }
}

CustomerPage.propTypes = {
  classes: PropTypes.object,
  global: PropTypes.object,
  bookings: PropTypes.object,
  favoriteMasters: PropTypes.object,
  customerPage: PropTypes.object,
  handleSaveEmailPassw: PropTypes.func,
  handleChangeActive: PropTypes.func,
  handleDeleteUser: PropTypes.func,
  getUserBookings: PropTypes.func,
  deleteFavorite: PropTypes.func,
  putCancelBooking: PropTypes.func,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  customerPage: makeSelectCustomerPage(),
  global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSaveEmailPassw: bindActionCreators(actions.saveEmailPasswordAction, dispatch),
    handleChangeActive: bindActionCreators(actions.changeActiveStatusAction, dispatch),
    handleDeleteUser: bindActionCreators(actions.deleteUserAction, dispatch),
    getUserBookings: bindActionCreators(actions.getUserBookingsAction, dispatch),
    getFavoriteMasters: bindActionCreators(actions.getUserFavoriteMastersAction, dispatch),
    deleteFavorite: bindActionCreators(actions.deleteFavoriteAction, dispatch),
    putCancelBooking: bindActionCreators(actions.putCancelBooking, dispatch),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'customerPage', reducer });
const withSaga = injectSaga({ key: 'customerPage', saga });

const CustomerPageStyled = withStyles(styles)(CustomerPage);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CustomerPageStyled);
