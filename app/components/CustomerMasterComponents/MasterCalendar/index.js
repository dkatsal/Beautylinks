/**
 *
 * MasterCalendar
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment/min/moment-with-locales.min';
import styles from './styles';
import Calendar from './calendar';
import CalendarPopup from './calendarPopup';

moment.locale('ru');
const locationTypeTitles = {
  salon: 'Салон',
  mobile: 'На выезде',
};

function MasterCalendar({
  classes,
  availability,
  bookingCalendar,
  getCalendar,
  isLoading,
}) {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  console.log(availability)

  console.log(bookingCalendar)

  const openPopup = data => {
    setIsOpenPopup(true);
    setSelectedDay(data);
  }

  // console.log(calendars)
  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Календарь</h3>
        <p className={classes.desc}>
          Это ваш календарь. В нём вы можете видеть и планировать свои заказы.
        </p>
      </div>

      <Calendar
        scheduleData={availability}
        bookingData={bookingCalendar}
        openPopup={openPopup}
        getCalendar={getCalendar}
        isLoading={isLoading}
      />

      <div className={classes.details}>
        <div className={classes.dayOff}>
          <p>выходной</p>
        </div>
        <div className={classes.free}>
          <p>запись открыта</p>
        </div>
        <div className={classes.booked}>
          <p>запись закрыта</p>
        </div>
        <div className={classes.expired}>
          <p>срок истёк</p>
        </div>
      </div>
      {selectedDay && (
        <CalendarPopup open={isOpenPopup} data={selectedDay} handleClose={() => setIsOpenPopup(false)}/>
      )}
    </>
  );
}

MasterCalendar.propTypes = {
  classes: PropTypes.object,
  availability: PropTypes.object,
  bookingCalendar: PropTypes.object,
  numberOfDays: PropTypes.number,
  getCalendar: PropTypes.func,
  isLoading: PropTypes.bool,
};

const MasterCalendarStyled = withStyles(styles)(MasterCalendar);

export default memo(MasterCalendarStyled);
