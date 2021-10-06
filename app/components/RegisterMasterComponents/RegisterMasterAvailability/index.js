/**
 *
 * RegisterMasterAvailability
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import _ from 'lodash';
import moment from 'moment';
import styles from './styles';

const types = {
  salon: 1,
  mobile: 2,
};

const days = {
  monday: 'Понедельник',
  tuesday: 'Вторник',
  wednesday: 'Среда',
  thursday: 'Четверг',
  friday: 'Пятница',
  saturday: 'Суббота',
  sunday: 'Воскресенье',
};
const rest = {
  from: '12:00',
  to: '13:00',
};
const schedule = {
  available: {
    from: '09:00',
    to: '19:00',
  },
  break: [rest],
};

const initialState = {
  monday: schedule,
  tuesday: schedule,
  wednesday: schedule,
  thursday: schedule,
  friday: schedule,
  saturday: {},
  sunday: {},
};

function RegisterMasterAvailability({ classes, data, masterSalons, postAvailability }) {
  const [state, setState] = useState({});
  useEffect(() => {
    if (_.size(data)) {
      const values = {};
      const {
        work_location_types: { salon, mobile },
      } = data;
      if (mobile) {
        values[2] = initialState;
      }
      if (salon && _.size(masterSalons)) {
        values[1] = {};
        const masterSalon = masterSalons.salons[0];
        values[1][masterSalon.id] = initialState;
      }
      setState(values);
    }
  }, [data, masterSalons]);

  const locationTypes = { salon: 'Салон', mobile: 'Выезд' };

  const handleCheck = (type, day) => ({ target: { checked } }) => {
    setState(prevState => {
      const object = _.cloneDeep(prevState);
      if (type === 'mobile') {
        const serviceType = _.cloneDeep(object[types[type]]);
        serviceType[day] = checked ? schedule : {};
        object[types[type]] = serviceType;
      } else {
        const serviceType = _.cloneDeep(object[types[type]][masterSalons.salons[0].id]);
        serviceType[day] = checked ? schedule : {};
        object[types[type]][masterSalons.salons[0].id] = serviceType;
      }
      return object;
    });
  };

  const handleTimePick = (time, type, day) => dateTime => {
    const date = moment(dateTime).format('HH:mm');
    setState(prevState => {
      const object = _.cloneDeep(prevState);
      if (type === 'mobile') {
        object[types[type]][day].available[time] = date;
      } else {
        object[types[type]][masterSalons.salons[0].id][day].available[time] = date;
      }
      return object;
    });
  };

  const handleBreakTimePick = (time, type, day, index) => dateTime => {
    const date = moment(dateTime).format('HH:mm');
    setState(prevState => {
      const object = _.cloneDeep(prevState);
      if (type === 'mobile') {
        if (!object[types[type]][day].break) {
          object[types[type]][day].break = [{}];
        }
        object[types[type]][day].break[index][time] = date;
      } else {
        if (!object[types[type]][masterSalons.salons[0].id][day].break) {
          object[types[type]][masterSalons.salons[0].id][day].break = [{}];
        }
        object[types[type]][masterSalons.salons[0].id][day].break[index][time] = date;
      }
      return object;
    });
  };

  const timeToDate = time => {
    if (time && time !== 'Invalid date') {
      const [hours, minutes] = time.split(':');
      return moment()
        .hour(hours)
        .minute(minutes)
        .toDate();
    }
    return time;
  };

  const handleClearBreak = (type, day) => {
    setState(prevState => {
      const object = _.cloneDeep(prevState);
      if (type === 'mobile') {
        const daytime = _.cloneDeep(object[types[type]][day]);
        delete daytime.break;
        object[types[type]][day] = daytime;
      } else {
        const daytime = _.cloneDeep(object[types[type]][masterSalons.salons[0].id][day]);
        delete daytime.break;
        object[types[type]][masterSalons.salons[0].id][day] = daytime;
      }
      return object;
    });
  };

  function renderTimePickers(handlePick, valueFrom, valueTo, deletable, ...params) {
    return (
      <div className={classes.scheduleContainer}>
        <div className={classes.row}>
          C
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              ampm={false}
              margin="normal"
              onChange={handlePick('from', ...params)}
              value={valueFrom}
              className={classes.fromInput}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <span className={classes.divider} />
        <div className={classes.row}>
          До
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              ampm={false}
              margin="normal"
              onChange={handlePick('to', ...params)}
              value={valueTo}
              className={classes.fromInput}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </MuiPickersUtilsProvider>
          {deletable ? (
            <button type="button" className={classes.deleteBtn} onClick={() => handleClearBreak(...params)} />
          ) : null}
        </div>
      </div>
    );
  }

  function isDisabled() {
    let condition = false;
    if (!_.size(state)) {
      condition = true;
    }
    _.forEach(state, (props, workLocationType) => {
      if (workLocationType === 2) {
        // eslint-disable-next-line consistent-return
        _.forEach(props, values => {
          if (_.size(values)) {
            if (!values.available.from || !values.available.to) {
              condition = true;
              return false;
            }
            if (values.break && (!values.break[0].from || !values.break[0].to)) {
              condition = true;
              return false;
            }
          }
        });
      } else if (_.size(masterSalons)) {
        // eslint-disable-next-line consistent-return
        _.forEach(props[masterSalons.salons[0].id], values => {
          if (_.size(values)) {
            if (!values.available.from || !values.available.to) {
              condition = true;
              return false;
            }
            if (_.size(values.break) && (!values.break[0].from || !values.break[0].to)) {
              condition = true;
              return false;
            }
          }
        });
      }
    });
    return condition;
  }

  return (
    <>
      <p className={classes.title}>Ваши рабочие часы</p>
      <p className={classes.desc}>Уточните время и дни, в которое вы готовы работать. Вы сможете изменить это позже.</p>
      {(data &&
        data.work_location_types &&
        _.map(data.work_location_types, (value, type) => {
          let props;
          if (type === 'mobile') {
            props = state[types[type]];
          } else if (type === 'salon' && _.size(state) && state[types[type]]) {
            props = state[types[type]][masterSalons.salons[0].id];
          }
          const key = `${type}-${value}`;
          return value ? (
            <div key={key}>
              <p className={classes.title}>{locationTypes[type]}</p>
              {_.map(props, (values, day) => (
                <div key={day}>
                  <div className={classes.switchContainer}>
                    <span className={classes.switchTitle}>{days[day]}</span>
                    <label>
                      <input
                        className={classes.switchInput}
                        type="checkbox"
                        onChange={handleCheck(type, day)}
                        hidden
                        checked={_.size(values)}
                      />
                      <div className={classes.switchWrap}>
                        <div className={classes.switchBox}>
                          <span className={classes.switchLabel}>On</span>
                          <span className={classes.switchLabel} />
                          <span className={classes.switchLabel}>Off</span>
                        </div>
                      </div>
                    </label>
                  </div>
                  {_.size(values) ? (
                    <>
                      <p className={classes.scheduleTitle}>Работа:</p>
                      {renderTimePickers(
                        handleTimePick,
                        timeToDate(values.available.from),
                        timeToDate(values.available.to),
                        false,
                        type,
                        day,
                      )}
                      <p className={classes.scheduleTitle}>Перерыв:</p>
                      {renderTimePickers(
                        handleBreakTimePick,
                        (values.break && timeToDate(values.break[0].from)) || null,
                        (values.break && timeToDate(values.break[0].to)) || null,
                        true,
                        type,
                        day,
                        0,
                      )}
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null;
        })) ||
        null}
      <div className={classes.btnBox}>
        <Button
          variant="contained"
          className={classes.linkBtn}
          disabled={isDisabled()}
          onClick={() => postAvailability(state)}
        >
          Продолжить
        </Button>
      </div>
    </>
  );
}

RegisterMasterAvailability.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  masterSalons: PropTypes.object,
  postAvailability: PropTypes.func,
};

const RegisterMasterAvailabilityStyled = withStyles(styles)(RegisterMasterAvailability);

export default memo(RegisterMasterAvailabilityStyled);
