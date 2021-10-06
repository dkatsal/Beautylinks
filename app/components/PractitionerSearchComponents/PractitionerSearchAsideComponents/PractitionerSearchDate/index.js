/**
 *
 * PractitionerSearchDate
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import styles from './styles';

function PractitionerSearchDate({ onDayChanged, defaultDate }) {
  const [day, setValue] = React.useState(new Date(defaultDate) || new Date());
  const handleSelect = (newDay, { selected }) => {
    setValue(selected ? undefined : newDay);
    onDayChanged(newDay);
  };
  // http://react-day-picker.js.org/
  return (
    <DayPicker
      selectedDays={day}
      onDayClick={handleSelect}
      disabledDays={[
        {
          before: new Date(),
        },
      ]}
    />
  );
}

PractitionerSearchDate.propTypes = {
  onDayChanged: PropTypes.func,
  defaultDate: PropTypes.string,
};

const PractitionerSearchDateStyled = withStyles(styles)(PractitionerSearchDate);

export default memo(PractitionerSearchDateStyled);
