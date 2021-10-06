/**
 *
 * CalendarComponent
 *
 */

import React, { memo, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import moment from 'moment/min/moment-with-locales.min';
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import "moment/locale/ru";
import _ from 'lodash';

/**
 * Property:
 * startDay: moment object, as default curent day & locale ru
 * **/
export  class CalendarComponent extends Component {
    static propTypes = {
      startDay: PropTypes.string,
      fixed: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
          dayMin1: props.startDay ? moment(props.startDay).locale('ru').add(-1, 'day') : moment().locale('ru').add(-1, 'day'),
          dayMin2: props.startDay ? moment(props.startDay).locale('ru').add(-2, 'day') : moment().locale('ru').add(-2, 'day'),
          dayMin3: props.startDay ? moment(props.startDay).locale('ru').add(-3,'day') : moment().locale('ru').add(-3, 'day'),
          startDay: props.startDay ? moment(props.startDay).locale('ru') : moment().locale('ru'),
          dayPlus1: props.startDay ? moment(props.startDay).locale('ru').add(1,'day') : moment().locale('ru').add(1, 'day'),
          dayPlus2: props.startDay ? moment(props.startDay).locale('ru').add(2,'day') : moment().locale('ru').add(2, 'day'),
          dayPlus3: props.startDay ? moment(props.startDay).locale('ru').add(3,'day') : moment().locale('ru').add(3, 'day'),
          fixed: props.fixed || false,
          openDatePicker: false,
        };
        moment.locale("ru"); // it is required to select default locale manually
    }

    changeDate = (date) =>{
      // console.log(date);
      this.setState(
        {
          dayMin1: moment(date).add(-1,'day'),
          dayMin2: moment(date).add(-2,'day'),
          dayMin3: moment(date).add(-3,'day'),
          startDay: date,
          dayPlus1: moment(date).add(1,'day'),
          dayPlus2: moment(date).add(2,'day'),
          dayPlus3: moment(date).add(3,'day'),
        },()=>{
          this.props.onDateChange(date);
        });
    };

    disableDates = (date) => {
      const newDate = new Date(date);
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      let isDisabled = false;
      // console.log(newDate)
      if (this.props.vacation && this.props.vacation.enable){
        const [yFrom, mFrom, dFrom] = this.props.vacation.from.split('-');
        const [yTo, mTo, dTo] = this.props.vacation.to.split('-');
        isDisabled = +(new Date(yFrom, mFrom-1, dFrom)) <= +newDate && +(new Date(yTo, mTo-1, dTo)) >= +newDate;
      }
      return isDisabled || _.isEmpty(this.props.schedule[days[newDate.getDay()]]);
    };

    render() {
      console.log(this.props.vacation)
      const { classes } = this.props;
      const { startDay, dayPlus1, dayPlus2, dayPlus3, dayMin3, dayMin2, dayMin1, openDatePicker, fixed } = this.state;

      return (<>
        <p className={classes.date}>{startDay.format('MMMM YYYY')}</p>
        <div onClick={() => !fixed ? this.setState({ openDatePicker: true }) : null}>
          <p className={classes.dayRow}>
            <span className={classes.dayItem}>{dayMin3.format('dd').toUpperCase()}</span>
            <span className={classes.dayItem}>{dayMin2.format('dd').toUpperCase()}</span>
            <span className={classes.dayItem}>{dayMin1.format('dd').toUpperCase()}</span>
            <span className={classes.dayItem}>{startDay.format('dd').toUpperCase()}</span>
            <span className={classes.dayItem}>{dayPlus1.format('dd').toUpperCase()}</span>
            <span className={classes.dayItem}>{dayPlus2.format('dd').toUpperCase()}</span>
            <span className={classes.dayItem}>{dayPlus3.format('dd').toUpperCase()}</span>
          </p>
          <p className={classes.dayRow}>
            <span className={classes.dateItem}>{dayMin3.format('D')}</span>
            <span className={classes.dateItem}>{dayMin2.format('D')}</span>
            <span className={classes.dateItem}>{dayMin1.format('D')}</span>
            <span className={classes.dateItemCurrent}>{startDay.format('D')}</span>
            <span className={classes.dateItem}>{dayPlus1.format('D')}</span>
            <span className={classes.dateItem}>{dayPlus2.format('D')}</span>
            <span className={classes.dateItem}>{dayPlus3.format('D')}</span>
          </p>
        </div>
          <div style={{ display: 'none' }}>
            <MuiPickersUtilsProvider utils={MomentUtils} locale={'ru'} libInstance={moment}>
              <KeyboardDatePicker
                open={openDatePicker}
                onChange={this.changeDate}
                value={startDay}
                disablePast
                cancelLabel={"Отмена"}
                onClose={()=>{
                  this.setState({openDatePicker: false});
                }}
                shouldDisableDate={this.disableDates}
              />
            </MuiPickersUtilsProvider>
          </div>
          </>)
    }
}


const CalendarComponentStyled = withStyles(styles)(CalendarComponent);

export default memo(CalendarComponentStyled);
