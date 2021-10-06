/**
 *
 * PractitionerSearchServiceLocation
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styles from './styles';

function PractitionerSearchServiceLocation({ classes, onChangeLocation, defaultLocation }) {
  const [value, setValue] = React.useState(defaultLocation || 'idm');
  function handleChange(event) {
    setValue(event.target.value);
    onChangeLocation(event.target.value);
  }
  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <RadioGroup name="serviceLocation" className={classes.group} value={value} onChange={handleChange}>
        <FormControlLabel
          value="salon"
          control={<Radio classes={{ root: classes.root, checked: classes.checked }} />}
          label="В салоне"
        />
        <FormControlLabel
          value="mobile"
          control={<Radio classes={{ root: classes.root, checked: classes.checked }} />}
          label="На дому"
        />
        <FormControlLabel
          value="idm"
          control={<Radio classes={{ root: classes.root, checked: classes.checked }} />}
          label="Не имеет значения"
        />
      </RadioGroup>
    </FormControl>
  );
}

PractitionerSearchServiceLocation.propTypes = {
  classes: PropTypes.object,
  onChangeLocation: PropTypes.func,
  defaultLocation: PropTypes.string,
};

const PractitionerSearchServiceLocationStyled = withStyles(styles)(PractitionerSearchServiceLocation);

export default memo(PractitionerSearchServiceLocationStyled);
