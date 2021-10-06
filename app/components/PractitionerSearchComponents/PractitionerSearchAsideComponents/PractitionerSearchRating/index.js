/**
 *
 * PractitionerSearchRating
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './styles';

function PractitionerSearchRating({ classes, onChangeRating }) {
  const [state, setState] = React.useState({});
  const handleChange = name => event => {
    onChangeRating( event.target.value );
    setState({ ...state, [name]: event.target.checked });
  };
  const stars = ['5', '4', '3', '2', '1'];
  return (
    <div className={classes.wrap}>
      {_.map(stars, (startItem, index) => (
        <FormControlLabel
          key={index}
          className={classes.ratingItem}
          control={
            <Checkbox
              classes={{ root: classes.root, checked: classes.checked }}
              checked={!!state[`start_${index}`]}
              onChange={handleChange(`start_${index}`)}
              value={`${index}`}
            />
          }
          label={_.map(stars, (starItem, ind) => (
            <i key={`i_${ind}`} className={classes.star} />
          ))}
        />
      ))}
    </div>
  );
}

PractitionerSearchRating.propTypes = {
  classes: PropTypes.object,
};

const PractitionerSearchRatingStyled = withStyles(styles)(PractitionerSearchRating);

export default memo(PractitionerSearchRatingStyled);
