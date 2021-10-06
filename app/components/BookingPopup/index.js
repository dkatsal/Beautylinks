/**
 *
 * BookingPopup
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// import FormControl from '@material-ui/core/FormControl';
import moment from 'moment';
import Radio from '@material-ui/core/Radio';
// import { Redirect } from 'react-router-dom';
import AddressSearch from '../AddressSearch/Loadable';
import CalendarComponent from '../CalendarComponent';
import appointmentImage from '../../img/icons/appointment.svg';
import styles from './styles';

const mock = [
  { name: 'add1', price: '1', duration: '3' },
  { name: 'add2', price: '2', duration: '5' },
  { name: 'add3', price: '3', duration: '8' },
];

function BookingPopup({
  classes,
  open,
  selectedDate,
  selectedMaster,
  // selectedService,
  availableMasterTime,
  handleClose,
  handleChangeType,
  onSubmit,
  staticDate,
  handleDateChange,
  schedules,
  handleChangeAddService,
}) {
  const [availableTime, setAvailableTime] = useState({});
  const [selectedTime, setSelectedTime] = useState(null);
  const [radio, setRadio] = useState('salon');
  const [addressObj, setAddr] = useState(null);
  const [bookingDate, setBookingDate] = useState(selectedDate || moment(new Date()).format('YYYY-MM-DD'));
  const [subServices, setSubServices] = useState(null);
  const [selectedAddServices, setSelectedAddServices] = useState({});

  console.log(selectedMaster, subServices);
  console.log(availableMasterTime);
  console.log(selectedAddServices);

  useEffect(() => {
    if (selectedMaster.treatments.length > 0) {
      setSubServices(selectedMaster.treatments[0]);
    }
  }, [selectedMaster]);

  useEffect(() => {
    if (availableMasterTime.loaded) {
      setAvailableTime(splitTime(availableMasterTime.data));
    }
  }, [availableMasterTime.loaded]);

  function splitTime(time) {
    const morning = {
      name: 'утро',
      data: [],
    };
    const day = {
      name: 'день',
      data: [],
    };
    const evening = {
      name: 'вечер',
      data: [],
    };

    // eslint-disable-next-line no-unused-expressions
    time &&
      time.forEach(item => {
        const splitedTime = item.split(':');
        switch (true) {
          case splitedTime[0] >= 12 && splitedTime[0] < 18:
            day.data.push(item);
            break;
          case splitedTime[0] >= 18:
            evening.data.push(item);
            break;
          default:
            morning.data.push(item);
            break;
        }
      });
    return { morning, day, evening };
  }

  const handleSubmit = () => {
    const data = {
      master_id: selectedMaster.master_id,
      services_ids: [subServices.treatment_id],
      total_amount: getTotalPrice(),
      date: bookingDate,
      start_time: selectedTime,
      location_type: radio,
      additional_services: selectedAddServices,
    };
    if (radio === 'mobile') {
      data.address = addressObj;
    }
    onSubmit(data);
    handleClose();
  };
  const handleChange = event => {
    setRadio(event.target.value);
    handleChangeType(event.target.value, subServices, selectedDate, getAddDuration(selectedAddServices));
  };
  const validationAccept = () => {
    if (radio === 'mobile' && (addressObj === null || selectedTime === null)) {
      return true;
    }
    if (radio === 'salon' && selectedTime === null) {
      return true;
    }
    return false;
  };

  const selectAddService = (index, addService) => {
    setSelectedAddServices(prev => {
      let newObj = Object.assign({}, prev);
      if (newObj[index]) {
        delete newObj[index];
      } else {
        newObj = {
          ...prev,
          [index]: addService,
        };
      }
      handleChangeAddService(radio, subServices, getAddDuration(newObj));
      return newObj;
    });
  };

  const getAddDuration = data => {
    const duration = Object.values(data).length
      ? Object.values(data)
          .map(item => item.duration)
          .reduce((a, b) => +a + +b)
      : 0;
    console.log(duration);
    return duration;
  };

  const getTotalPrice = () => {
    const add = Object.values(selectedAddServices);
    if (add.length) {
      return (+subServices.treatment_price + +add.map(item => item.price).reduce((a, b) => +a + +b)).toFixed(2);
    }
    return subServices.treatment_price;
  };

  // console.log(radio === 'mobile' ? schedules[radio] : schedules[radio][selectedMaster.master_id]);
  console.log(subServices);

  return (
    <Dialog onClose={handleClose} open={open} classes={{ root: classes.dialogBox }}>
      <MuiDialogTitle disableTypography className={classes.root} style={{ width: '100%' }}>
        <p className={classes.title}>Выберите дату и время</p>
        <IconButton aria-label="Close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <DialogContent classes={{ root: classes.dialogCont }}>
        <CalendarComponent
          schedule={radio === 'mobile' ? schedules[radio] : schedules[radio][Object.keys(schedules[radio])]}
          vacation={schedules.vacation}
          startDay={selectedDate}
          fixed={staticDate}
          onDateChange={date => {
            setBookingDate(date.format('YYYY-MM-DD'));
            handleDateChange(date, subServices, radio, getAddDuration(selectedAddServices));
          }}
        />
        <RadioGroup value={radio} className={classes.radioGroup} onChange={handleChange}>
          <FormControlLabel
            value="salon"
            control={<Radio classes={{ root: classes.root, checked: classes.checked }} />}
            label="Салон"
          />
          <FormControlLabel
            value="mobile"
            control={<Radio classes={{ root: classes.root, checked: classes.checked }} />}
            label="На выезде"
          />
        </RadioGroup>
        {radio === 'mobile' && (
          <AddressSearch
            handleSelect={selectedOption => {
              setAddr({
                city: selectedOption.address.city,
                postcode: selectedOption.address.postcode,
                address: selectedOption.display_name,
                country_id: 'UA',
                country_name: 'Ukraine',
                location: { lat: selectedOption.lat, lng: selectedOption.lon },
              });
            }}
          />
        )}
        {subServices && subServices.additional_services && subServices.additional_services.length > 0 && (
          <div className={classes.addServices}>
            <p className={classes.addServicesTitle}>Дополнительные услуги:</p>
            {subServices.additional_services.map((item, index) => (
              <div className={classes.addServicesContent} key={item.id}>
                <Checkbox
                  checked={!!selectedAddServices[index]}
                  onChange={() => selectAddService(index, item)}
                  style={{ color: '#00C6C6' }}
                />
                <span className={classes.addServicesName}>{item.name}</span>
                <span className={classes.addServicesTime}>{item.duration} м.</span>
                <span className={classes.addServicesPrice}>{item.price} грн.</span>
              </div>
            ))}
          </div>
        )}
        <div className={classes.dateBox}>
          {Object.keys(availableTime).map(item => (
            <div className={classes.dateColumn} key={availableTime[item].name}>
              <p className={classes.dateTitle}>{availableTime[item].name}</p>
              {availableTime[item].data.length === 0 ? (
                <>
                  <p className={classes.timeReservedImg}>
                    <img src={appointmentImage} alt="зарезервировано" />
                  </p>
                  <p className={classes.timeReserved}>забронировано</p>
                </>
              ) : (
                availableTime[item].data.map((elem, key) => (
                  <Button
                    // eslint-disable-next-line react/no-array-index-key
                    key={`button_${key}`}
                    className={selectedTime === elem ? classes.timeItemCurrent : classes.timeItem}
                    onClick={() => setSelectedTime(elem)}
                  >
                    {elem}
                  </Button>
                ))
              )}
            </div>
          ))}
        </div>
        {subServices && (
          <div className={classes.servicesBox}>
            <div className={classes.servicesItem}>
              <p className={classes.servicesRow}>
                <span className={classes.servicesTitle}>{subServices.main_service_name}</span>
                <span className={classes.servicesPrice}>{getTotalPrice()} грн.</span>
              </p>
              <p className={classes.servicesRow}>
                <span className={classes.servicesPractitioner}>{selectedMaster.full_name}</span>
                <span className={classes.servicesTime}>{selectedTime}</span>
              </p>
            </div>
          </div>
        )}
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogBottom }}>
        <Button className={classes.btn} onClick={handleSubmit} disabled={validationAccept()}>
          Подтвердить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

BookingPopup.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  availableMasterTime: PropTypes.object,
  selectedMaster: PropTypes.object,
  schedules: PropTypes.object,
  handleChangeType: PropTypes.func,
  handleDateChange: PropTypes.func,
  onSubmit: PropTypes.func,
  staticDate: PropTypes.bool,
  selectedDate: PropTypes.string,
  handleChangeAddService: PropTypes.func,
};

const BookingPopupStyled = withStyles(styles)(BookingPopup);

export default memo(BookingPopupStyled);
