/**
 *
 * JustBooked
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function JustBooked({ classes, justBooked }) {
  return justBooked && (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <h3 className={classes.title}>Только что забронировали!</h3>
        <div className={classes.box}>
          <div className={classes.specialistBox}>
            <img src={justBooked.master_avatar} alt="Специалист" className={classes.avatarImg} />
            <div className={classes.nameSpecBox}>
              <div className={classes.specContainer}>
                {/* <p style={{ opacity: 0.7 }}>Визажист</p> */}
                <p className={classes.specName}>{justBooked.master_name}</p>
              </div>
              <p className={classes.specAbout}>{justBooked.master_name} принимает заказы с сайта несколько месяцев</p>
            </div>
          </div>
        </div>
        <p className={classes.desc}>
          Этот специалист был недавно забронирован для {justBooked.booked_service} в{' '}
          {justBooked.booking_city}.
        </p>
      </div>
    </div>
  );
}

JustBooked.propTypes = {
  classes: PropTypes.object,
  justBooked: PropTypes.object,
};

const JustBookedStyled = withStyles(styles)(JustBooked);

export default memo(JustBookedStyled);
