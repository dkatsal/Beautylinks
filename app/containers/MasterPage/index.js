/**
 *
 * MasterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import makeSelectMasterPage from './selectors';
import { Link } from 'react-router-dom';

import styles from './styles';
import MasterPageHeader from '../../components/MasterPageComponents/MasterPageHeader/Loadable';
import MasterPageSidebar from '../../components/MasterPageComponents/MasterPageSidebar/Loadable';
import MasterPageBooking from '../../components/MasterPageComponents/MasterPageBooking/Loadable';
import MasterPageGallery from '../../components/MasterPageComponents/MasterPageGallery/Loadable';
import MasterPageReviews from '../../components/MasterPageComponents/MasterPageReviews/Loadable';
import MasterRelated from '../../components/RelatedMaster/Loadable';

import * as actions from './actions';
import { makeSelectGlobal } from '../App/selectors';
import BookingPopup from '../../components/BookingPopup/Loadable';
import * as practicionerActions from '../MastersSearch/MasterSearchContent/actions';
import makeSelectPractitionerSearch from '../MastersSearch/MasterSearchContent/selectors';
import reducer from './reducer';
import saga from './saga';
import mastersSearchReducer from '../MastersSearch/MasterSearchContent/reducer';
import mastersSearchSaga from '../MastersSearch/MasterSearchContent/saga';
import * as appAction from '../App/actions';
import { CLEAR_BOOKING } from '../App/constants';

// eslint-disable-next-line react/no-redundant-should-component-update
export class MasterPage extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      getMasterInfoById,
      getMasterSubService,
      getRatingAndReview,
      match: {
        params: { id },
      },
      postFavoriteMaster,
      deleteFavoriteMaster,
    } = props;

    this.state = {
      openDialog: false,
      practitionerData: null,
      selectedBookingDate: null,
    };

    getMasterInfoById(id);
    getMasterSubService(id);
    getRatingAndReview(id);

    this.debouncedPostFavorite = _.debounce(postFavoriteMaster, 300);
    this.debouncedDeleteFavorite = _.debounce(deleteFavoriteMaster, 300);
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: CLEAR_BOOKING,
    });
  }

  render() {
    const {
      classes,
      masterPage: { info, subServices, reviewsAndRating },
      global: { favoriteMasters },
      match: {
        params: { id },
      },
    } = this.props;
    const { openDialog } = this.state;

    const payload = { master_id: +id };
    const isChosen = _.some(favoriteMasters.data, payload);

    const handleOpenDialog = subService => {
      console.log(subService);
      // TODO: different location types
      this.setState({
        openDialog: true,
        practitionerData: {
          master_id: +id,
          treatments: [
            {
              treatment_id: subService.id,
              main_service_name: subService.name,
              treatment_price: subService.price,
              additional_services: subService.additional_services,
            },
          ],
        },
      });
      // setOpenDialog(true);
      // setPractitionerData(practitioner);
      const data = {
        id: +id,
        sub_service: subService.id,
        locationtype: 'salon',
        date: moment(new Date()).format('YYYY-MM-DD'),
      };
      console.log(data);
      this.props.getAvailableTime(data);
    };
    const handleDateChange = (date, subService, type, duration) => {
      this.setState({ selectedBookingDate: date.format('YYYY-MM-DD') }, () => {
        this.props.getAvailableTime({
          id: +id,
          sub_service: subService.treatment_id,
          locationtype: type,
          date: this.state.selectedBookingDate,
          duration,
        });
      });
      // console.log(date);
    };
    const handleClose = () => {
      this.setState({ openDialog: false, selectedBookingDate: null, practitionerData: null });
      // setPractitionerData({})
    };
    const handleChangeRadio = (type, subService, date, duration) => {
      const data = {
        id: +id,
        sub_service: subService.treatment_id,
        locationtype: type,
        date: this.state.selectedBookingDate ? this.state.selectedBookingDate : moment(new Date()).format('YYYY-MM-DD'),
        duration,
      };
      console.log(data);
      this.props.getAvailableTime(data);
    };
    const handleSubmitService = data => {
      console.log(data);

      this.props.createBooking(data);
    };

    const handleChangeAddService = (type, subService, duration) => {
      const data = {
        id: +id,
        sub_service: subService.treatment_id,
        locationtype: type,
        date: this.state.selectedBookingDate ? this.state.selectedBookingDate : moment(new Date()).format('YYYY-MM-DD'),
        duration,
      };
      console.log(data);
      this.props.getAvailableTime(data);
    };

    return (
      <>
        {info.loaded && subServices.loaded && reviewsAndRating.loaded && (
          <>
            <Helmet>
              <title>Страница Мастера</title>
              <meta name="description" content="Description of MasterPage" />
            </Helmet>
            <div className={classes.mainBox}>
              <div className={classes.mainContent}>
                <MasterPageHeader
                  data={info.data}
                  isChosen={isChosen}
                  favoriteMasters={favoriteMasters}
                  toggleToFavorite={() =>
                    isChosen ? this.debouncedDeleteFavorite(payload) : this.debouncedPostFavorite(payload)
                  }
                />
                <p className={classes.masterDesc}>{info.data.bio}</p>
                <p className={classes.title}>Забронируйте визит</p>
                <MasterPageBooking data={subServices.data} onSelect={handleOpenDialog} />
              </div>
              <MasterPageSidebar
                schedules={info.data.schedules}
                geoposition={info.data.geoposition}
                phone={info.data.phone}
                certificate_images={info.data.certificate_images}
              />
            </div>
            <MasterPageGallery data={info.data.work_images} />
            <MasterPageReviews
              data={reviewsAndRating.data.reviews}
              reviewsCount={reviewsAndRating.data.master_reviews_count}
            />
            {/* <MasterRelated /> */}
          </>
        )}
        {openDialog ? (
          <BookingPopup
            open={openDialog}
            schedules={info.data.schedules}
            selectedMaster={this.state.practitionerData}
            availableMasterTime={this.props.practicionerSearchStore.availableTime}
            // selectedService={defineSubCategorie(queryParams.treatmentId, serviceCategories.serviceCategories.data)}
            handleClose={handleClose}
            handleChangeType={handleChangeRadio}
            handleDateChange={handleDateChange}
            handleChangeAddService={handleChangeAddService}
            onSubmit={handleSubmitService}
          />
        ) : null}
        {this.props.global.booking.loaded ? (
          <Redirect push to={`/checkout/${this.props.global.booking.data.booking_id}`} />
        ) : null}
      </>
    );
  }
}

MasterPage.propTypes = {
  classes: PropTypes.object,
  masterPage: PropTypes.object,
  global: PropTypes.object,
  match: PropTypes.object,
  practicionerSearchStore: PropTypes.object,
  postFavoriteMaster: PropTypes.func,
  deleteFavoriteMaster: PropTypes.func,
  createBooking: PropTypes.func,
  getAvailableTime: PropTypes.func,
  getMasterInfoById: PropTypes.func,
  getMasterSubService: PropTypes.func,
  getRatingAndReview: PropTypes.func,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  masterPage: makeSelectMasterPage(),
  practicionerSearchStore: makeSelectPractitionerSearch(),
  global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    getMasterInfoById: bindActionCreators(actions.getMasterInfoById, dispatch),
    getMasterSubService: bindActionCreators(actions.getMasterSubService, dispatch),
    getRatingAndReview: bindActionCreators(actions.getMasterReviewsAndReting, dispatch),
    postFavoriteMaster: bindActionCreators(actions.postFavoriteMaster, dispatch),
    deleteFavoriteMaster: bindActionCreators(actions.deleteFavoriteMaster, dispatch),
    getAvailableTime: bindActionCreators(practicionerActions.getMasterAvailableTime, dispatch),
    createBooking: bindActionCreators(appAction.createBooking, dispatch),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
console.log(mastersSearchReducer, mastersSearchSaga);

const withReducer = injectReducer({ key: 'masterPage', reducer });
const withSaga = injectSaga({ key: 'masterPage', saga });
const withPracticionerReducer = injectReducer({ key: 'practitionerSearch', reducer: mastersSearchReducer });
const withPracticionerSaga = injectSaga({ key: 'practitionerSearch', saga: mastersSearchSaga });

const MasterPageStyled = withStyles(styles)(MasterPage);

export default compose(
  withReducer,
  withPracticionerReducer,
  withSaga,
  withPracticionerSaga,
  withConnect,
)(MasterPageStyled);
