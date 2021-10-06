/**
 *
 * MasterPageSchedule
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './styles';
import moment from 'moment';

function MasterPageSchedule({ classes, schedule }) {
  const salonId = !_.isEmpty(schedule) && Object.keys(schedule.salon)[0];
  const days = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье',
  };
  console.log(schedule);
  return (
    <>
      { schedule && schedule.salon ?
          <div className={classes.sidebarBox}>
            <p className={classes.scheduleTitle}>
              <i className={classes.scheduleIcon} /> Время работы салона
            </p>
            {Object.keys(days).map(key => (
              schedule.salon[salonId][key].length !== 0 && (
                <div key={`salon-${key}`} className={classes.dayRow}>
                  <p className={classes.dayTitle}>{days[key]}</p>
                  <p className={classes.dayTime}>
                    <span>
                      {schedule.salon[salonId].monday.available.from.split(':')[0]}
                      <sup>{schedule.salon[salonId].monday.available.from.split(':')[1]}</sup>
                    </span>
                    <span className={classes.timeSeparator} />
                    <span>
                        {schedule.salon[salonId].monday.available.to.split(':')[0]}
                      <sup>{schedule.salon[salonId].monday.available.to.split(':')[1]}</sup>
                      </span>
                  </p>
                </div>
              )
            ))}
          </div>
        : null
      }
      { schedule && schedule.mobile ?
        <div className={classes.sidebarBox}>
          <p className={classes.scheduleTitle}>
            <i className={classes.scheduleIcon} /> Время работы мастера
          </p>
          {Object.keys(days).map(key => (
            schedule.mobile[key].length !== 0 && (
              <div key={`mobile-${key}`} className={classes.dayRow}>
                <p className={classes.dayTitle}>{days[key]}</p>
                <p className={classes.dayTime}>
                  <span>
                    {schedule.salon[salonId].monday.available.from.split(':')[0]}
                    <sup>{schedule.salon[salonId].monday.available.from.split(':')[1]}</sup>
                  </span>
                  <span className={classes.timeSeparator} />
                  <span>
                      {schedule.salon[salonId].monday.available.to.split(':')[0]}
                    <sup>{schedule.salon[salonId].monday.available.to.split(':')[1]}</sup>
                    </span>
                </p>
              </div>
            )
          ))}
        </div>
        : null
      }
      {schedule && schedule.vacation && schedule.vacation.enable &&  (
        <div className={classes.sidebarBox}>
          <p className={classes.scheduleTitle}>
            <i className={classes.scheduleIcon} /> Время отпуска мастера
          </p>
          <div className={classes.dayRow}>
            <span className={classes.dayTitle}>С {moment(schedule.vacation.from).format('DD.MM.YYYY')}</span>
            <span className={classes.dayTitle}>По {moment(schedule.vacation.to).format('DD.MM.YYYY')}</span>
          </div>
        </div>
      )}
    </>
  );
}

MasterPageSchedule.propTypes = {
  classes: PropTypes.object,
};

const MasterPageScheduleStyled = withStyles(styles)(MasterPageSchedule);

export default memo(MasterPageScheduleStyled);
