/**
 *
 * PractitionerSearchCare
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import _ from 'lodash';
import styles from './styles';

function PractitionerSearchCare({ classes }) {
  const [state, setState] = React.useState({});
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const careMok = ['Ароматерапия (20)', 'Спортивный массаж (15)', 'Тайский (29)', 'Шведский (1)', 'Одесский (17)'];
  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <span className={classes.formControlTitle}>Массаж обычный</span>
      <FormGroup className={classes.group}>
        {_.map(careMok, (care, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                classes={{ root: classes.root, checked: classes.checked }}
                checked={!!state[`care_${index}`]}
                onChange={handleChange(`care_${index}`)}
                value={`care_${index}`}
              />
            }
            label={care}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}

PractitionerSearchCare.propTypes = {
  classes: PropTypes.object,
};

const PractitionerSearchCareStyled = withStyles(styles)(PractitionerSearchCare);

export default memo(PractitionerSearchCareStyled);
