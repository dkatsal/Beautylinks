/**
 *
 * CustomerMasterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import _ from 'lodash';
import makeSelectCustomerMasterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import {
  MasterSidebar,
  MasterMain,
  MasterCalendar,
  MasterBooking,
  MasterServices,
  MasterAvailability,
  MasterProfile,
  MasterLocation,
  MasterSettings,
  MasterInvite,
} from '../../components/CustomerMasterComponents';
import { makeSelectGlobal } from '../App/selectors';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class CustomerMasterPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      btnTabIndex: 0,
    };
    const {
      postMasterService,
      deleteMasterService,
      putMasterService,
      putMasterAvailability,
      putMasterLocationTypes,
      deleteMasterImage,
      postMasterImages,
      postMasterAvatar,
      deleteMasterCertImage,
      postMasterCertImages,
      putUserProfile,
      putMasterProfile,
      putUserStatus,
      postInvites,
      getBookingCalendar,
      putCancelBooking,
      deleteMasterAction,
    } = this.props.actions;

    this.debouncedPostMasterService = _.debounce(postMasterService, 300);
    this.debouncedDeleteMasterService = _.debounce(deleteMasterService, 300);
    this.debouncedPutMasterService = _.debounce(putMasterService, 300);
    this.debouncedPutMasterAvailability = _.debounce(putMasterAvailability, 300);
    this.debouncedPutMasterLocationTypes = _.debounce(putMasterLocationTypes, 300);
    this.debouncedDeleteMasterImage = _.debounce(deleteMasterImage, 300);
    this.debouncedPostMasterImages = _.debounce(postMasterImages, 300);
    this.debouncedDeleteMasterCertImage = _.debounce(deleteMasterCertImage, 300);
    this.debouncedPostMasterCertImages = _.debounce(postMasterCertImages, 300);
    this.debouncedPostMasterAvatar = _.debounce(postMasterAvatar, 300);
    this.debouncedPutUserProfile = _.debounce(putUserProfile, 300);
    this.debouncedPutMasterProfile = _.debounce(putMasterProfile, 300);
    this.debouncedPutUserStatus = _.debounce(putUserStatus, 300);
    this.debouncedPostInvites = _.debounce(postInvites, 300);
    this.debouncedGetBookingCalendar = _.debounce(getBookingCalendar, 300);
    this.debouncedPutCancelBooking = _.debounce(putCancelBooking, 300);
    this.debouncedDeleteMasterAction = _.debounce(deleteMasterAction, 300);
  }

  componentDidMount() {
    const { getMasterProfile } = this.props.actions;
    getMasterProfile();
  }

  handleChangeBtnTabIndex = val => this.setState({ btnTabIndex: val });

  renderTab(step) {
    const {
      global: {
        serviceCategories,
        user: { data },
      },
      customerMasterPage: {
        masterServices,
        availability,
        masterStatistic,
        masterBooking,
        masterBookingCalendar,
        masterLocation,
        masterImages,
        masterCertImages,
        putUserProfile,
        profile,
        masterSalons,
      },
    } = this.props;
    const userData = _.pick(data, ['id', 'first_name', 'last_name', 'gender', 'birthday', 'phone']);
    const settingsData = _.pick(data, ['active', 'email']);

    switch (step) {
      case 1:
        return (
          <MasterCalendar
            availability={availability.data}
            bookingCalendar={masterBookingCalendar.data}
            getCalendar={this.debouncedGetBookingCalendar}
            isLoading={masterBookingCalendar.loading}
          />
        );
      case 2:
        return <MasterBooking data={masterBooking.data} cancelBooking={this.debouncedPutCancelBooking} />;
      case 3:
        return (
          <MasterServices
            masterServices={masterServices && masterServices.data}
            services={serviceCategories && serviceCategories.data}
            postService={this.debouncedPostMasterService}
            putService={this.debouncedPutMasterService}
            deleteService={this.debouncedDeleteMasterService}
          />
        );
      case 4:
        return (
          <MasterAvailability
            data={availability.data}
            locationData={masterLocation.data}
            salonsData={masterSalons.data.salons[0]}
            putAvailability={this.debouncedPutMasterAvailability}
          />
        );
      case 5:
        return _.size(masterLocation.data) ? (
          <MasterLocation data={masterLocation.data} putLocationTypes={this.debouncedPutMasterLocationTypes} />
        ) : (
          <></>
        );
      case 6:
        return (
          <MasterProfile
            userData={userData}
            avatar={data.avatar}
            portfolioImages={masterImages.data}
            certImages={masterCertImages.data}
            masterBio={(profile.data && profile.data.bio) || ''}
            profileId={(profile.data && profile.data.id) || ''}
            postAvatar={this.debouncedPostMasterAvatar}
            deleteImage={this.debouncedDeleteMasterImage}
            postImages={this.debouncedPostMasterImages}
            deleteCertImage={this.debouncedDeleteMasterCertImage}
            postCertImages={this.debouncedPostMasterCertImages}
            putUserProfile={this.debouncedPutUserProfile}
            putMasterProfile={this.debouncedPutMasterProfile}
          />
        );
      case 7:
        return (
          <MasterSettings
            settingsData={settingsData}
            putUserStatus={this.debouncedPutUserStatus}
            putUserProfile={this.debouncedPutUserProfile}
            putUserData={putUserProfile}
            profile={profile.data}
            saveLiqPay={this.props.actions.putLiqPay}
            handleDeleteMaster={this.debouncedDeleteMasterAction}
          />
        );
      case 8:
        return <MasterInvite postInvites={this.debouncedPostInvites} />;
      default:
        return (
          <MasterMain
            data={masterStatistic.data}
            bookings={masterBooking.data}
            changeStep={() => this.setState({ btnTabIndex: 6 })}
          />
        );
    }
  }

  render() {
    const {
      classes,
      dispatch,
      global: { user },
      customerMasterPage: { masterReviews },
    } = this.props;
    const { btnTabIndex } = this.state;
    return (
      <>
        <Helmet>
          <title>CustomerMasterPage</title>
          <meta name="description" content="Description of CustomerMasterPage" />
        </Helmet>
        <div className={classes.wrap}>
          <div className={classes.container}>
            <MasterSidebar
              data={masterReviews.data}
              dispatch={dispatch}
              btnTabIndex={btnTabIndex}
              handleChangeBtnTabIndex={this.handleChangeBtnTabIndex}
              user={user.data}
            />
            <div className={classes.content}>{this.renderTab(btnTabIndex)}</div>
          </div>
        </div>
      </>
    );
  }
}

CustomerMasterPage.propTypes = {
  classes: PropTypes.object,
  global: PropTypes.object,
  customerMasterPage: PropTypes.object,
  actions: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  customerMasterPage: makeSelectCustomerMasterPage(),
  global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'customerMasterPage', reducer });
const withSaga = injectSaga({ key: 'customerMasterPage', saga });

const CustomerMasterPageStyled = withStyles(styles)(CustomerMasterPage);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CustomerMasterPageStyled);
