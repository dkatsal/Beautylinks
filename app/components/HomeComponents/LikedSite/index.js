/**
 *
 * LikedSite
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';

function LikedSite({ classes }) {
  return (
    <div className={classes.wrap}>
      <h3 className={classes.title}>Понравился сайт?</h3>
      <div className={classes.btnBox}>
        <Link to="/category-search" className={classes.btnLink}>
          Найти местного специалиста
        </Link>
      </div>
    </div>
  );
}

LikedSite.propTypes = {
  classes: PropTypes.object,
};

const LikedSiteStyled = withStyles(styles)(LikedSite);

export default memo(LikedSiteStyled);
