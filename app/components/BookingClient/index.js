/**
 *
 * BookingClient
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import _ from 'lodash';
import specialistImg from '../../images/avatar.jpg';
import styles from './styles';
import BookingDetailsPopup from '../BookingDetailsPopup';

function BookingClient({ classes, data, type, review, cancelBooking, openCancelTerms }) {
  const [bookingData, setBookingData] = useState({});
  const [isOpenDetailsPopup, setIsOpenDetailsPopup] = useState(false);

  useEffect(() => {
    if (!_.isEmpty(data)) {
      const newData = {
        img: type === 'master' ? data.customer_avatar || specialistImg : data.master_avatar || specialistImg,
        imgDesc: type === 'master' ? 'customer image' : 'master image',
        name: type === 'master' ? data.customer__full_name : data.master_name,
        subService: type === 'master' ? data.sub_service.name : data.treatments[0].name,
        locationType: data.location_type === 'salon' ? 'В салоне' : `На дому`,
        address: (data.location && data.location.address) || '',
        date: review ? formatDate(`${data.date} ${data.start_time}`) : formatDate(data.date),
        id: data.id,
        status: data.booking_status,
        type: type,
        phone: type === 'master' ? data.customer_phone : data.master_phone,
        location: data.location,
        master_id: data.master_id,
      };
      setBookingData(newData);
    }
  }, [data]);

  const formatDate = date => {
    moment().locale('ru');
    return <>{moment(date).format('DD.MM.YYYY HH:mm')}</>;
  };

  const isCancelDisabled = () => {
    return false;
  };

  if (_.isEmpty(data)) return null;

  return (
    <>
      <div className={classes.booking}>
        <div className={classes.master}>
          <img src={bookingData.img} className={classes.picture} alt={bookingData.imgDesc} />
          <p className={classes.name}>{bookingData.name}</p>
        </div>
        <div className={classes.content}>
          <div className={classes.text}>
            <p className={classes.treatment}>{bookingData.subService}</p>
            <p className={classes.place}>
              {bookingData.locationType}
              <br />
              {bookingData.address}
            </p>
          </div>
          <div className={classes.date}>{bookingData.date}</div>
          <div className={classes.order}>№{bookingData.id}</div>
        </div>
        <span className={classes.optionsLabel} onClick={() => setIsOpenDetailsPopup(true)}>
          i
        </span>
        <div className={classes.options}>
          <div className={classes.linkBox}>
            <Button className={classes.detailsBtn} onClick={() => setIsOpenDetailsPopup(true)}>
              Подробнее
            </Button>
            {bookingData.status === 'confirmed' && (
              <>
                <Button color="primary" className={classes.rescheduleBtn} disabled={true}>
                  Перенести
                </Button>
                <Button
                  color="secondary"
                  className={classes.cancelBtn}
                  onClick={cancelBooking}
                  disabled={isCancelDisabled()}
                >
                  Отменить
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      {!_.isEmpty(bookingData) && (
        <BookingDetailsPopup
          open={isOpenDetailsPopup}
          handleClose={() => setIsOpenDetailsPopup(false)}
          openCancelTerms={() => openCancelTerms()}
          data={bookingData}
          cancelBooking={() => cancelBooking()}
        />
      )}
    </>
  );
}

BookingClient.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  review: PropTypes.bool,
  type: PropTypes.string,
  cancelBooking: PropTypes.func,
  openCancelTerms: PropTypes.func,
};

const MasterBookingStyled = withStyles(styles)(BookingClient);

export default memo(MasterBookingStyled);
