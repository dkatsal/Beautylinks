/**
 *
 * CancelReservation
 *
 */

import React, { memo, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function CancelReservation({ classes }) {

  return (
    <div className={classes.contactForm}>

    </div>
  );
}

CancelReservation.propTypes = {
  classes: PropTypes.object,
};

const CancelReservationStyled = withStyles(styles)(CancelReservation);

export default memo(CancelReservationStyled);
