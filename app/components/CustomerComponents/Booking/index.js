/**
 *
 * Booking
 *
 */

import React, { memo, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import styles from './styles';
import 'moment/min/moment-with-locales';
import BookingClient from '../../BookingClient/Loadable';
import CancelBookingTermsPopup from '../../CancelBookingTermsPopup';

function Booking({ classes, bookings, cancelBooking }) {
  const bookingsFormatted = {
    confirmed: [],
    completed: [],
  };
  const [openCancelTerms, setOpenCancelTerms] = useState(false);


  console.log(bookings)

  _.forEach(
    bookings,
    item => bookingsFormatted[item.booking_status] && bookingsFormatted[item.booking_status].push(item),
  );

  function renderBookingFormatted(label, status) {
    console.log(status)

    return (
      <>
        <p className={classes.subtitle}>{label}</p>
        {status.length ? (
          status.map(booking => (
            <BookingClient
              key={booking.id}
              data={booking}
              type='customer'
              cancelBooking={() => cancelBooking({id: booking.id, data: bookings})}
            />
          ))
        ) : (
          <p className={classes.noData}>Нет данных</p>
        )}
      </>
    );
  }



  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Бронирования</h3>
        <p className={classes.desc}>
          Любые заказы, которые вы сделали на сайте, показаны здесь. Нажмите на бронирование, чтобы открыть его и
          просмотреть полную информацию, включая номер телефона специалиста.
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
        {/* <Link to='#' className={classes.infoLink}>

        </Link> */}
      </div>
      <CancelBookingTermsPopup open={openCancelTerms} handleClose={() => setOpenCancelTerms(false)}/>
    </>
  );
}

Booking.propTypes = {
  classes: PropTypes.object,
  bookings: PropTypes.array,
  cancelBooking: PropTypes.func,
};

const BookingStyled = withStyles(styles)(Booking);

export default memo(BookingStyled);
