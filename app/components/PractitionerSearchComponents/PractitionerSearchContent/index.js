/**
 *
 * PractitionerSearchContent
 *
 */

import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import practitionerAvatar from '../../../images/practitioner.png';
import BookingPopup from '../../BookingPopup/Loadable';
import styles from './styles';
import AppPreloader from '../../AppPreloader';
import emptyAvatr from '../../../images/empty_avatar.jpg';
import makeSelectPractitionerSearch from '../../../containers/MastersSearch/MasterSearchContent/selectors';
import { makeSelectGlobal } from '../../../containers/App/selectors';
import * as actions from '../../../containers/MastersSearch/MasterSearchContent/actions';
import * as appAction from '../../../containers/App/actions';
import reducer from '../../../containers/MastersSearch/MasterSearchContent/reducer';
import saga from '../../../containers/MastersSearch/MasterSearchContent/saga';
import { CLEAR_BOOKING } from '../../../containers/App/constants';

// TODO: refactor as container
function PractitionerSearchContent({
  classes,
  data,
  queryParams,
  getAvailableTime,
  practicionerSearchStore,
  createBooking,
  global,
  dispatch,
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const [practitionerData, setPractitionerData] = useState({});
  useEffect(
    () => () => {
      if (global.booking.loaded) {
        console.log('dispatch');
        dispatch({
          type: CLEAR_BOOKING,
        });
      }
    },
    [global.booking.loaded],
  );

  const handleOpenDialog = practitioner => {
    console.log(practitioner);
    // TODO: different location types
    setOpenDialog(true);
    setPractitionerData(practitioner);
    getAvailableTime({
      id: practitioner.master_id,
      sub_service: queryParams.treatmentId,
      locationtype: 'salon',
      date: queryParams.date,
    });
  };
  const handleClose = () => {
    setOpenDialog(false);
    setPractitionerData({});
  };
  const handleChangeRadio = (type, subservice, date, duration) => {
    console.log(type);
    getAvailableTime({
      id: practitionerData.master_id,
      sub_service: queryParams.treatmentId,
      locationtype: type,
      date: queryParams.date,
      duration,
    });
  };
  const renderStars = rating => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<i key={`i_${i}`} className={i < rating ? classes.star : classes.baseStar} />);
    }
    return stars;
  };

  const handleSubmitService = data => {
    createBooking(data);
  };

  function timeDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours ? `${hours}ч. ` : ''}${minutes ? `${minutes}м. ` : ''}`;
  }

  const handleChangeAddService = (type, subServices, duration) => {
    getAvailableTime({
      id: practitionerData.master_id,
      sub_service: queryParams.treatmentId,
      locationtype: type,
      date: queryParams.date,
      duration,
    });
  };

  console.log(data);

  return (
    <div className={classes.wrap}>
      {/*<div className={classes.head}>some filters come in future</div>*/}
      <label htmlFor="filterTriger" className={classes.filterInput}>
        <i className={classes.filterIcon} /> <span style={{ fontSize: 20 }}>Фильтр</span>
      </label>
      {_.size(data.data)
        ? _.map(data.data, (masters, index) => (
            <div key={index} className={classes.container}>
              <div className={classes.avatarBox}>
                <img src={masters.avatar ? masters.avatar : emptyAvatr} alt="Практикующий" />
              </div>
              <div className={classes.main}>
                <div className={classes.mainHead}>
                  <span className={classes.practitionerName}>{masters.full_name}</span>
                  <div>
                    <i className={classes.awardIcon} />
                    {/* <span className={classes.dateValue}>{moment(moment(new Date()).diff(new Date(masters.recently_joined))).format('YYYY MM')}</span> */}
                  </div>
                  <span className={classes.sumValue}>{+masters.treatments[0].treatment_price} ₴</span>
                </div>
                <div className={classes.mainContent}>
                  <p className={classes.practitionerDscr}>{masters.bio}</p>
                  <div className={classes.practTimeBox}>
                    <span className={classes.practTime}>{`${timeDuration(
                      masters.treatments[0].treatment_duration,
                    )} ${masters.treatments[0].treatment_name.toLowerCase()}`}</span>
                    <div className={classes.practListWrap}>
                      <ul>
                        <li
                          className={
                            masters.work_location_types.mobile
                              ? `${classes.practItemActive} ${classes.practItem}`
                              : classes.practItem
                          }
                        >
                          Мобильный
                        </li>
                        <li
                          className={
                            masters.work_location_types.salon
                              ? `${classes.practItemActive} ${classes.practItem}`
                              : classes.practItem
                          }
                        >
                          Салон
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={classes.mainFooter}>
                  {/* <div style={{ whiteSpace: 'nowrap' }}>{renderStars(masters.master_rating)}</div> */}
                  <div style={{ whiteSpace: 'nowrap' }} />
                  <div>
                    <Link to={`/master/${masters.master_id}`} className={classes.profileLink}>
                      Смотреть профиль
                    </Link>
                    <Button
                      variant="outlined"
                      className={classes.btn}
                      color="secondary"
                      onClick={() => handleOpenDialog(masters)}
                    >
                      Выбрать
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        : 'Извините, но мастеров по вашему запросу не найдено. Попытайтесь изменить критерии поиска'}
      {data.loading ? <AppPreloader /> : null}
      {openDialog ? (
        <BookingPopup
          staticDate
          open={openDialog}
          selectedDate={queryParams.date}
          selectedMaster={practitionerData}
          availableMasterTime={practicionerSearchStore.availableTime}
          // selectedService={defineSubCategorie(queryParams.treatmentId, serviceCategories.serviceCategories.data)}
          handleClose={handleClose}
          handleChangeType={handleChangeRadio}
          onSubmit={handleSubmitService}
          schedules={{ salon: {}, mobile: {} }}
          handleChangeAddService={handleChangeAddService}
        />
      ) : null}
      {global.booking.loaded ? <Redirect push to={`/checkout/${global.booking.data.booking_id}`} /> : null}
    </div>
  );
}

PractitionerSearchContent.propTypes = {
  classes: PropTypes.object,
  global: PropTypes.object,
  queryParams: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  practicionerSearchStore: makeSelectPractitionerSearch(),
  global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAvailableTime: bindActionCreators(actions.getMasterAvailableTime, dispatch),
    createBooking: bindActionCreators(appAction.createBooking, dispatch),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'practitionerSearch', reducer });
const withSaga = injectSaga({ key: 'practitionerSearch', saga });

const PractitionerSearchContentStyled = withStyles(styles)(PractitionerSearchContent);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PractitionerSearchContentStyled);
