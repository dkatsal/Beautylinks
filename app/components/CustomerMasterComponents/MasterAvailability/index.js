/**
 *
 * MasterAvailability
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { KeyboardTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import _ from 'lodash';
import moment from 'moment';
import { Button } from '@material-ui/core';
import clsx from  'clsx';
import styles from './styles';

const typesTitles = { salon: 'Салон', mobile: 'Выезд' };

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
const defaultSchedule = {
  available: {
    from: '09:00',
    to: '19:00',
  },
  break: [rest],
};
const initialSchedule = {
  friday: [],
  monday: [],
  sunday: [],
  tuesday: [],
  saturday: [],
  thursday: [],
  wednesday: [],
};

function MasterAvailability({ classes, data, locationData, salonsData, putAvailability }) {
  console.log(data)
  const [state, setState] = useState(null);
  const [vacation, setVacation] = useState({ from: null, to: null, enable: false });

  useEffect(() => {
    const initialData = _.cloneDeep(data);
    initialData.vacation && setVacation(initialData.vacation);
    if (!_.size(data.salon) && (locationData.salon && !locationData.salon.disabled)) {
      initialData.salon = {
        [salonsData.id]: initialSchedule,
      };
    }
    if (locationData.mobile && !locationData.mobile.disabled && !_.size(data.mobile)) {
      initialData.mobile = initialSchedule;
    }
    setState(initialData);

  }, [data]);

  const handleCheck = (type, day, salon) => ({ target: { checked } }) => {
    setState(prevState => {
      const object = _.cloneDeep(prevState);
      if (type === 'mobile') {
        const serviceType = _.cloneDeep(object[type]);
        const defaultType = _.cloneDeep(data[type]);
        const defaultDaySchedule = defaultType && _.size(defaultType[day]) ? defaultType[day] : defaultSchedule;
        serviceType[day] = checked ? defaultDaySchedule : {};
        object[type] = serviceType;
      } else {
        const serviceType = _.cloneDeep(object[type][salon]);
        const defaultType = data[type] && _.cloneDeep(data[type][salon]);
        const defaultDaySchedule = defaultType && _.size(defaultType[day]) ? defaultType[day] : defaultSchedule;
        serviceType[day] = checked ? defaultDaySchedule : {};
        object[type][salon] = serviceType;
      }
      return object;
    });
  };

  const handleTimePick = (time, type, day, salon) => dateTime => {
    const date = moment(dateTime).format('HH:mm');
    setState(prevState => {
      const object = _.cloneDeep(prevState);
      if (type === 'mobile') {
        object[type][day].available[time] = date;
      } else {
        object[type][salon][day].available[time] = date;
      }
      return object;
    });
  };

  const handleBreakTimePick = (time, type, day, salon) => dateTime => {
    const date = moment(dateTime).format('HH:mm');
    setState(prevState => {
      const object = _.cloneDeep(prevState);
      if (type === 'mobile') {
        if (!object[type][day].break) {
          object[type][day].break = [{}];
        }
        object[type][day].break[0][time] = date;
      } else {
        if (!object[type][salon][day].break) {
          object[type][salon][day].break = [{}];
        }
        object[type][salon][day].break[0][time] = date;
      }
      return object;
    });
  };

  const timeToDate = time => {
    // console.log(time)
    if (time && time !== 'Invalid date') {
      const [hours, minutes] = time.split(':');
      return moment()
        .hour(hours)
        .minute(minutes)
        .toDate();
    }
    return time;
  };

  const handleClearBreak = (type, day, salon) => {
    setState(prevState => {
      const object = _.cloneDeep(prevState);
      if (type === 'mobile') {
        const daytime = _.cloneDeep(object[type][day]);
        delete daytime.break;
        object[type][day] = daytime;
      } else {
        const daytime = _.cloneDeep(object[type][salon][day]);
        delete daytime.break;
        object[type][salon][day] = daytime;
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

  function renderSchedule(type, schedule, salon) {
    return (
      <div key={`type_${type}`} className={classes.container}>
        <p className={classes.subtitle}>{typesTitles[type]}</p>
        {_.map(days, (value, day) => {
          const values = schedule[day];
          return (
            <div key={`day_${day}`} className={classes.switchContainer}>
              <div className={classes.switchContent}>
                <span className={classes.switchTitle}>{days[day]}</span>
                <label className={classes.switchLabel}>
                  <input
                    className={classes.switchInput}
                    type="checkbox"
                    onChange={handleCheck(type, day, salon)}
                    hidden
                    checked={_.size(values)}
                  />
                  <div className={classes.switchBox} />
                </label>
                {_.size(values) ? (
                  <>
                    {renderTimePickers(
                      handleTimePick,
                      timeToDate(values.available.from),
                      timeToDate(values.available.to),
                      false,
                      type,
                      day,
                      salon,
                    )}
                    <p className={classes.scheduleTitle}>Перерыв:</p>
                    {renderTimePickers(
                      handleBreakTimePick,
                      (values.break && timeToDate(values.break[0].from)) || null,
                      (values.break && timeToDate(values.break[0].to)) || null,
                      true,
                      type,
                      day,
                      salon,
                    )}
                  </>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function isDisabled() {
    let condition = false;
    // console.log(state)
    // if (!_.size(state)) {
    //   condition = true;
    // }
    _.forEach(state, (props, workLocationType) => {
      if (workLocationType === 'mobile') {
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
      } else if (workLocationType === 'salon') {
        const [salon] = Object.keys(props);
        // eslint-disable-next-line consistent-return
        _.forEach(props[salon], values => {
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
      const today = new Date()
      if (vacation.enable && (
        !vacation.from ||
        !vacation.to ||
        vacation.from === 'Invalid Date' ||
        vacation.to === 'Invalid Date' ||
        (new Date(vacation.from)) > (new Date(vacation.to)) ||
        (new Date(vacation.from)) < new Date(today.getFullYear(), today.getMonth(), today.getDate()) ||
        (new Date(vacation.to)) < new Date(today.getFullYear(), today.getMonth(), today.getDate())
      )) {
        condition = true;
      }
    });
    return condition;
  }

  const handleVacationPick = (date, pos) => {
    setVacation(prevState => {
      const object = _.cloneDeep(prevState);
      object[pos] = date ? moment(date).format('YYYY-MM-DD') : '';
      return object;
    });
  };

  const switchVacationEnable = () => {
    setVacation(prevState => {
      const object = _.cloneDeep(prevState);
      object.enable = !object.enable;
      return object;
    });
  };

  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Рабочие часы</h3>
        <p className={classes.desc}>
          Здесь вы можете контролировать своё время и вносить изменения в свой рабочий график.
        </p>
      </div>
      {_.map(state, (values, type) => {
        if (type === 'mobile') {
          return renderSchedule(type, values);
        } else if (type === 'salon') {
          const [salon, schedule] = Object.entries(values)[0];
          return renderSchedule(type, schedule, salon);
        }
      })}
      <div className={clsx(classes.container, classes.vacation)}>
        <div className={classes.vacationHeader}>
          <p className={classes.subtitle}>Отпуск</p>
          <label className={classes.switchLabel}>
            <input
              className={classes.switchInput}
              type="checkbox"
              onChange={switchVacationEnable}
              hidden
              checked={vacation.enable}
            />
            <div className={classes.switchBox} />
          </label>
        </div>
        <div className={classes.vacationRow}>
          <div className={classes.vacationDatePicker}>
            <span>C</span>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                value={vacation.from}
                placeholder="Выберите дату"
                onChange={date => handleVacationPick(date, 'from')}
                minDate={new Date()}
                maxDate={vacation.to ? new Date(vacation.to) : null}
                format="dd/MM/yyyy"
                disabled={!vacation.enable}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className={classes.vacationDatePicker}>
            <span style={{ whiteSpace: 'nowrap' }}>По</span>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                value={vacation.to}
                placeholder="Выберите дату"
                onChange={date => handleVacationPick(date, 'to')}
                minDate={vacation.from ? new Date(vacation.from) : new Date()}
                format="dd/MM/yyyy"
                disabled={!vacation.enable}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>
      </div>
      <div className={classes.btnBox}>
        <Button
          variant="contained"
          className={classes.linkBtn}
          disabled={isDisabled()}
          onClick={() => {
            console.log(vacation.enable ? {...state, vacation} : {...state, vacation: {...state.vacation, enable: false}})
            putAvailability(vacation.enable ? {...state, vacation} : {...state, vacation: {...state.vacation, enable: false}})
          }}
        >
          Сохранить
        </Button>
      </div>
    </>
  );
}

MasterAvailability.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  locationData: PropTypes.object,
  salonsData: PropTypes.object,
  putAvailability: PropTypes.func,
};

const MasterAvailabilityStyled = withStyles(styles)(MasterAvailability);

export default memo(MasterAvailabilityStyled);
