/**
 *
 * MasterPageBooking
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './styles';

function MasterPageBooking({ classes, data, onSelect }) {
  function timeDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours ? `${hours} ч. ` : ''}${minutes ? `${minutes} м. ` : ''}`;
  }

  return (
    <>
      <div className={classes.contentBox}>
        <p className={classes.boxTitle}>Услуги</p>
        {_.map(data.sub_services, (item, index) => (
          <div key={index} className={classes.servicesRow}>
            {/* {console.log(item)} */}
            <span className={classes.serviceLabel}>{item.name}</span>
            <span className={classes.serviceTime}>{timeDuration(item.duration)}</span>
            <span className={classes.servicePrice}>{item.price}</span>
            <button
              type="button"
              className={classes.linkBtn}
              onClick={() => {
                onSelect(item);
              }}
            >
              Забронировать
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

MasterPageBooking.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  onSelect: PropTypes.func,
};

const MasterPageBookingStyled = withStyles(styles)(MasterPageBooking);

export default memo(MasterPageBookingStyled);
