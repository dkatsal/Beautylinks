/**
 *
 * PractitionerSearchByTime
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import styles from './styles';

function PractitionerSearchByTime({ classes, defaultTime, onTimeChange }) {
  const [value, setValue] =
    React.useState(defaultTime.from && defaultTime.to ?
      [Math.round(parseInt(defaultTime.from)* 4.166666667),Math.round(parseInt(defaultTime.to)* 4.166666667)]
      : [0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);

  };
  return (
    <>
      <Slider
        value={value}
        onChange={handleChange}
        onChangeCommitted={(event, value) => onTimeChange({from: `${Math.round(value[0] / 4.166666667)}:00`, to: `${Math.round(value[1] / 4.166666667)}:00`})}
        classes={{
          root: classes.root,
          track: classes.track,
          thumb: classes.thumb,
          valueLabel: classes.valueLabel,
        }}
      />
      <p className={classes.dscr}>
        {Math.round(value[0] / 4.166666667)}:00 - {Math.round(value[1] / 4.166666667)}:00
      </p>
    </>
  );
}

PractitionerSearchByTime.propTypes = {
  classes: PropTypes.object,
};

const PractitionerSearchByTimeStyled = withStyles(styles)(PractitionerSearchByTime);

export default memo(PractitionerSearchByTimeStyled);
