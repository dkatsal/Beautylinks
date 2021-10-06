/**
 *
 * BookingDetailsPopup
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import styles from './styles';
import HMap from '../HEREComponents/HMap';

function BookingDetailsPopup({ classes, open, handleClose, data, openCancelTerms, cancelBooking }) {
  const getDisplayDate = () => data.date;

  console.log(data);

  return (
    <Dialog onClose={handleClose} open={open} classes={{ root: classes.dialogBox }}>
      <MuiDialogTitle disableTypography className={classes.root} style={{ width: '100%' }}>
        <p className={classes.title}>Детали вашего заказа</p>
        <IconButton aria-label="Close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <DialogContent className={classes.dialogCont}>
        <div className={classes.bookingDesc}>
          <p className={classes.item}>
            <span className={classes.label}>Услуга:</span>
            <span className={classes.desc}>{data.subService}</span>
          </p>
          <p className={classes.item}>
            <span className={classes.label}>Когда:</span>
            <span className={classes.desc}>{getDisplayDate()}</span>
          </p>
          <p className={classes.item}>
            <span className={classes.label}>Где:</span>
            <span className={classes.desc}>г.Харьков, ул. Пушкинская, 69</span>
          </p>
          <p className={classes.item}>
            <span className={classes.label}>{data.type === 'master' ? 'Ваш заказчик:' : 'Ваш мастер:'}</span>
            <span className={classes.desc}>{data.name}</span>
            {data.type !== 'master' && (
              <Link to={`/master/${data.master_id}`} className={classes.link}>
                Профиль мастера
              </Link>
            )}
          </p>
          <p className={classes.item}>
            <span className={classes.label}>Телефон:</span>
            <span className={classes.desc}>{data.phone}</span>
          </p>
          <p className={classes.item}>
            <span className={classes.label}>Номер заказа:</span>
            <span className={classes.label}>{data.id}</span>
          </p>
        </div>
        {/* <div className={classes.mapBox} /> */}

        <div className={classes.mapBox}>
          {data && data.location && (
            <HMap
              markers={[
                {
                  letter: 'C',
                  locationType: 'Salon',
                  points: { lat: data.location.home_location.lat, lng: data.location.home_location.lng },
                },
              ]}
              initialZoom="15"
            />
          )}
        </div>
      </DialogContent>
      {data.status === 'confirmed' && (
        <DialogActions classes={{ root: classes.dialogBottom }}>
          <Button className={classes.btnCancel} disabled={false} onClick={cancelBooking}>
            Отменить
          </Button>
          <Button className={classes.btn} disabled>
            Перенести
          </Button>
          <button type="button" className={classes.linkBottom} onClick={() => openCancelTerms()}>
            <span className={classes.linkIcon}>i</span>
            Условия отмены/переноса бронирования
          </button>
        </DialogActions>
      )}
    </Dialog>
  );
}

BookingDetailsPopup.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  openCancelTerms: PropTypes.func,
  cancelBooking: PropTypes.func,
};

const BookingDetailsPopupStyled = withStyles(styles)(BookingDetailsPopup);

export default memo(BookingDetailsPopupStyled);
