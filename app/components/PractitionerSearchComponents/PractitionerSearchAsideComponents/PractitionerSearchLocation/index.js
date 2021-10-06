/**
 *
 * PractitionerSearchLocation
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import _ from 'lodash';
import styles from './styles';

function PractitionerSearchLocation({ classes }) {
  const [value, setValue] = React.useState({});
  function handleChange(event) {
    setValue(event.target.value);
  }
  const citiesMok = [
    'Киев (230)',
    'Днепр (145)',
    'Одесса (129)',
    'Львов (28)',
    'Запорожье (17)',
    'Полтава (5)',
    'Сумы (1)',
    'Тернополь (3)',
  ];
  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <span className={classes.formControlTitle}>Харьков</span>
      <RadioGroup name="serviceLocation" className={classes.group} value={value} onChange={handleChange}>
        {_.map(citiesMok, (city, index) => (
          <FormControlLabel
            key={index}
            value={`city_${index}`}
            control={<Radio classes={{ root: classes.root, checked: classes.checked }} />}
            label={city}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

PractitionerSearchLocation.propTypes = {
  classes: PropTypes.object,
};

const PractitionerSearchLocationStyled = withStyles(styles)(PractitionerSearchLocation);

export default memo(PractitionerSearchLocationStyled);
