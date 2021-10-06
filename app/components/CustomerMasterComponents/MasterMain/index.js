/**
 *
 * MasterMain
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import styles from './styles';
import { Link } from "react-router-dom";

function MasterMain({ classes, data, bookings, changeStep }) {
  const reminders = [
    { title: 'Загрузить фото профиля', value: data.avatar },
    { title: 'Загрузить фото в портфолио', value: data.work_images },
    { title: 'Добавить описание о себе', value: data.bio },
    //{ title: 'Настроить свой календарь', value: data.update_calendar },
    //{ title: 'Подключить банковскую карту', value: data.bank_details },
    { title: 'Настроить свой календарь', value: true },
    { title: 'Подключить банковскую карту', value: true },
  ];

  const statistic = [
    { title: 'общее число', value: data.number_of_bookings },
    { title: 'тeкущие', value: 0 },
    { title: 'всего заработано', value: `${data.total_income} грн` },
  ];
  const bookingsFormatted = {
    confirmed: [],
  };

  _.forEach(bookings, item => item.booking_status === 'confirmed' && bookingsFormatted.confirmed.push(item));

  const formatDate = date => {
    moment().locale('ru');
    return (
      <>
        {moment(date).format('D dddd H')}
        <sup>{moment(date).format('mm')}</sup>
      </>
    );
  };

  function renderBookingFormatted(label, status) {
    return (
      <>
        <p className={classes.label}>{label}</p>
        <div className={classes.headingRow}>
          <p>Номер заказа</p>
          <p>Клиент</p>
          <p>Тип услуги</p>
          <p>Расположение</p>
          <p>Время и дата</p>
        </div>
        {status.length ? (
          status.map(booking => (
            <div key={booking.id} className={classes.tableRow}>
              <p><Link className={classes.link} to={`/checkout/${booking.id}`}>{booking.id}</Link></p>
              <p>
                {booking.customer__full_name}
                {booking.customer_phone && <><br />{booking.customer_phone}</>}
                {booking.customer_email && <><br />{booking.customer_email}</>}
              </p>
              <p>{booking.treatments.map(treatment => treatment.name)}</p>
              <p>{booking.location_type === 'salon' ? 'В салоне' : `На дому,<br/>${booking.location.address}`}</p>
              <p>{formatDate(booking.date)}</p>
            </div>
          ))
        ) : (
          <p className={classes.desc}>Сейчас у вас нет заказов</p>
        )}
      </>
    );
  }

  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Основное</h3>
      </div>
      {_.size(data) ? (
        <>
          <div className={classes.container}>
            {_.map(reminders, (reminder, i) => (
              <aside key={`i_${i}`} className={classes.statusBox}>
                <div>{reminder.title}</div>
                <span className={reminder.value ? classes.btnDone : classes.btnClose} />
              </aside>
            ))}
          </div>
          <div className={classes.container}>
            <p className={classes.subtitle}>Заказы</p>
            {_.map(statistic, (item, i) => (
              <aside key={`i_${i}`} className={classes.statisticBox}>
                <p>
                  {item.title}
                  <br />
                  <b>{item.value}</b>
                </p>
              </aside>
            ))}
          </div>
        </>
      ) : null}
      {/* <div className={classes.bookingContainer}>
        {renderBookingFormatted('Текущие бронирования', bookingsFormatted.confirmed)}
      </div> */}
      <div className={classes.container}>
        <Link to='#' className={classes.profileLink} onClick={changeStep}>Посмотреть свой профиль</Link>
      </div>
    </>
  );
}

MasterMain.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  bookings: PropTypes.array,
};

const MasterMainStyled = withStyles(styles)(MasterMain);

export default memo(MasterMainStyled);
