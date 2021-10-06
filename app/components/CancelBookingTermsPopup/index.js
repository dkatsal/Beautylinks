/**
 *
 * CancelBookingTermsPopup
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import styles from './styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';

function CancelBookingTermsPopup({ classes, open, handleClose }) {
  return (
    <Dialog onClose={handleClose} open={open} classes={{ root: classes.dialogBox }} maxWidth='md'>
      <MuiDialogTitle disableTypography className={classes.dialogTitle} style={{ width: '100%' }}>
        {/* <p className={classes.title}>Отмена бронирования</p> */}
        <IconButton aria-label="Close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <DialogContent classes={{ root: classes.dialogCont }}>
        <div className={classes.section}>
          <div className={classes.header}>Отмена бронирования:</div>
          <div className={classes.text}>
            <p>
              1) Если вы совершили бронирование услуги <b>более чем за 24 часа</b> – вы имеете право отменить бронирование <b>не позже разницы эквивалентной 24 часам.</b>
            </p>
            <p>
              <i>
                То есть, если вы забронировали услугу 01.01.2020 16:00 на 03.01.2020 16:00, вы сможете отменить бронирование не позже 02.01.2020 16:00.
              </i>
            </p>
            <p>
              2) Если вы совершили бронирование услуги <b>менее чем за 24 часа</b> - вы имеете право отменить бронирование <b>не позже разницы эквивалентной половине от времени до бронирования.</b>
            </p>
            <p>
              <i>
                То есть, если вы забронировали услугу 01.01.2020 08:00 на 01.01.2020 16:00, вы сможете отменить бронирование не позже 01.01.2020 12:00.
              </i>
            </p>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.header}>Перенос бронирования:</div>
          <div className={classes.text}>
            <p>
              1) Если вы совершили бронирование услуги <b>более чем за 24 часа</b> - вы имеете право перенести бронирование <b>не позже, чем за 4 часа до бронирования.</b>
            </p>
            <p>
              <i>
                То есть, если вы забронировали услугу 01.01.2020 16:00 на 03.01.2020 16:00, вы сможете перенести бронирование не позже 03.01.2020 12:00.
              </i>
            </p>
            <p>
              2) Если вы совершили бронирование услуги <b>менее чем за 24 часа</b> - вы имеете право перенести бронирование <b>не позже разницы эквивалентной 20% от времени до бронирования, округляя до 30 минут.</b>
            </p>
            <p>
              <i>
                То есть, если вы забронировали услугу 01.01.2020 08:00 на 01.01.2020 16:00, вы сможете перенести бронирование не позже 01.01.2020 14:00.
              </i>
            </p>
            <p>
              <b>
                Если одна из кнопок не активна - значит свою возможность перенести/отменить бронирование вы уже упустили. Вы имеете право перенести бронирования только 1 раз, в дальнейшем возможности вернуть Вам деньги не будет.
              </b>
            </p>
            <p>
              Мы стараемся сделать наш сервис удобным и справедливым как по отношению к клиентам, так и по отношению к мастерам. Цените свое и чужое время!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

CancelBookingTermsPopup.propTypes = {};

const CancelBookingTermsPopupStyled = withStyles(styles)(CancelBookingTermsPopup);

export default memo(CancelBookingTermsPopupStyled);
