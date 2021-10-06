import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import moment from 'moment/min/moment-with-locales.min';
import LoaderImg from '../../../img/loader.svg';
import styles from './styles';

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const monthsChanged = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const days = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье',
};

const shortDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

const MonthTable = ({classes, scheduleData, bookingData, openPopup, getCalendar, isLoading}) => {
    const [month, setMonth] = useState(0);
    const [schedule, setSchedule] = useState(null);

    const date = new Date(Date());
    const year = date.getFullYear();
    const firstDay = (new Date(year, month, 1).getDay()) || 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysBeforeFirstDay = firstDay - 1 ;
    const totalDaysInCalendar = daysInMonth + daysBeforeFirstDay;
    const weeksRows = new Array(Math.ceil(totalDaysInCalendar / 7) + 1);
    weeksRows.fill(1);

    useEffect(() => {
        setMonth(date.getMonth());
    }, []);

    useEffect(() => {
        console.log(scheduleData);
        const salonId = scheduleData.salon && !_.isEmpty(scheduleData.salon) && Object.keys(scheduleData.salon)[0];
        if (salonId) {
            const data = {...scheduleData, salon: scheduleData.salon[salonId]};
            setSchedule(data);
        }
    }, [scheduleData])

    useEffect(() => {
        // console.log(bookingData);
    }, [bookingData])

    useEffect(() => {
        console.log('month changed');
        // const date = new Date();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const query =  `?dateFrom=${moment(firstDay).format('YYYY-MM-DD')}&dateTo=${moment(lastDay).format('YYYY-MM-DD')}`;
        console.log(query);
        getCalendar(query);
    }, [month]);



    const getDayNumber = (weekIndex, dayIndex) => {
        const day = (weekIndex - 1) * 7 + dayIndex + 1;
        // const daysInPrevMonth = new Date(year, month, 0).getDate();
        // if (day < firstDay) return day + daysInPrevMonth - daysBeforeFirstDay;
        if (day < firstDay) return ;
        // if (day > totalDaysInCalendar) return day - totalDaysInCalendar;
        if (day > totalDaysInCalendar) return ;

        return day - daysBeforeFirstDay;
    }

    const getBackground = (dayIndex, day) => {
        // console.log(schedule)
        if (schedule) {
            const weekDay =  Object.keys(days)[dayIndex];
            const today = new Date();
            if (schedule.vacation.enable) {
                const [yFrom, mFrom, dFrom] = schedule.vacation.from.split('-');
                const [yTo, mTo, dTo] = schedule.vacation.to.split('-');
                const currentDate = new Date(year, month, day);
                if (+(new Date(yFrom, mFrom-1, dFrom)) <= +currentDate && +(new Date(yTo, mTo-1, dTo)) >= +currentDate) {
                    return '#EDEDED'; //grey
                }
            }
            if (_.size(schedule.salon[weekDay])){
                // test case
                if (month < today.getMonth() || (month === today.getMonth() && day < today.getDate())) return '#FFD6D6'; //red
                return '#D6FFDF'; //green
            }
            return '#EDEDED'; //grey
        }
    }

    const getBookings = day => {
        const bookings = [];
        Object.keys(bookingData).forEach(location => {
            const locationBookings = !_.isEmpty(bookingData[location]) && bookingData[location].filter(item => {
                const itemDate = (new Date(item.date));
                return +((new Date(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate()))) == +(new Date(year, month, day))
            });
            if (locationBookings) bookings.push(...locationBookings);
        });

        return bookings;
    }

    const openPopupHandler = (data, dayIndex, day) => {
        const date = `${Object.values(days)[dayIndex]}, ${day}\u00A0${monthsChanged[month]}`;
        openPopup({date, data})
    }

    return (
        <div className={classes.calendar}>
            <div className={classes.calendarHeader}>
                <button className={classes.decreaseWeeks} onClick = {() => setMonth(month - 1)} >
                    <ArrowBackIosIcon />
                </button>
                <span>{months[new Date(year, month + 1, 0).getMonth()]}</span>
                <button className={classes.increaseWeeks} onClick = {() =>  setMonth(month + 1)} >
                    <ArrowForwardIosIcon />
                </button>
            </div>
            <div className={classes.calendarTable}>
                {weeksRows.map((el, weekIndex) => (
                    <div key = {weekIndex + 'row'} className={classes.calendarTableRow}>
                        {!weekIndex ?
                            Object.values(days).map((el, index) => (
                                <div key = {el} className={classes.calendarTableHeader}>
                                    <div  className={classes.calendarTableHeaderCell}>{el.toLowerCase()}</div>
                                    <div className={`${classes.calendarTableHeaderCell} mobile`}>{shortDays[index]}</div>
                                </div>
                            ))
                        :
                            Object.values(days).map((el, dayIndex) => {

                                const day = getDayNumber(weekIndex, dayIndex);
                                const bookings = getBookings(day);
                                return (
                                    <button
                                        key = {dayIndex + 'cell'}
                                        className={`${classes.calendarTableCell} ${day && 'day'}`}
                                        style={{background: day ? getBackground(dayIndex, day) : 'white'}}
                                        onClick={() => day && bookings.length > 0 && openPopupHandler(bookings, dayIndex, day, )}
                                        disabled={isLoading || getBackground(dayIndex, day) === '#EDEDED'}
                                    >
                                        {day && (
                                            <>
                                                <div className={classes.calendarDayNumber}>{day}</div>
                                                {isLoading ? (
                                                    <img src={LoaderImg} />
                                                ) : (
                                                    <>
                                                        <div className={classes.calendarBookings}>
                                                            {bookings.map((item, i) => (
                                                                <div key={`${item.id}-${i}`}>
                                                                    {item.start_time.split(':').slice(0, 2).join(':')} {item.customer_name}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className={`${classes.calendarBookings} mobile`}>
                                                            {bookings.length > 0 && (
                                                                <span className={classes.optionsLabel}>i</span>
                                                            )}
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </button>
                                )
                            })
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

MonthTable.propTypes = {
    classes: PropTypes.object,
    scheduleData: PropTypes.object,
    bookingData: PropTypes.object,
    openPopup: PropTypes.func,
    getCalendar: PropTypes.func,
    isLoading: PropTypes.bool,
};

const MonthTableStyled = withStyles(styles)(MonthTable);
export default memo(MonthTableStyled);
