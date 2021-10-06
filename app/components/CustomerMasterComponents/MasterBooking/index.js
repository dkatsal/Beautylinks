/**
 *
 * MasterBooking
 *
 */

import React, { memo, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import _ from 'lodash';
import styles from './styles';
import BookingClient from '../../BookingClient/Loadable';
import CancelBookingTermsPopup from '../../CancelBookingTermsPopup';

function MasterBooking({ classes, data, cancelBooking }) {
  const bookingsFormatted = {
    confirmed: [],
    completed: [],
  };
  const [openCancelTerms, setOpenCancelTerms] = useState(false);

  console.log(data);

  data.forEach(item => bookingsFormatted[item.booking_status] && bookingsFormatted[item.booking_status].push(item));

  function renderBookingFormatted(label, status) {
    return (
      <>
        <p className={classes.subtitle}>{label}</p>
        {status.length ? (
          status.map(booking => (
            <BookingClient key={booking.id} data={booking} type='master' cancelBooking={() => cancelBooking({id: booking.id, data})} openCancelTerms={() => setOpenCancelTerms(true)}/>
          ))
        ) : (
          <p className={classes.noData}>Нет данных</p>
        )}
      </>
    );
  }

  console.log(bookingsFormatted);

  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Бронирования</h3>
        <p className={classes.desc}>
          Это ваш список забронированных заказов.
          <br />
          Здесь также отображаются ваши предыдущие заказы.
        </p>
      </div>
      <div className={classes.container}>
        {renderBookingFormatted('Текущие бронирования', bookingsFormatted.confirmed)}
        {renderBookingFormatted('Предыдущие бронирования', bookingsFormatted.completed)}
      </div>
      <div className={classes.container}>
        <button className={classes.infoLink} onClick={() => setOpenCancelTerms(true)}>
          <span>i</span>
          Условия отмены/переноса бронирования
        </button>
      </div>
      <CancelBookingTermsPopup open={openCancelTerms} handleClose={() => setOpenCancelTerms(false)}/>
    </>
  );
}

MasterBooking.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array,
};

const MasterBookingStyled = withStyles(styles)(MasterBooking);

export default memo(MasterBookingStyled);
