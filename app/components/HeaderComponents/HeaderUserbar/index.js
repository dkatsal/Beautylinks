/**
 *
 * HeaderUserbar
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';
import commentIcon from '../../../img/icons/comment.svg';

function HeaderUserbar({ classes }) {
  return (
    <>
      <div className={classes.userBar}>
        <Link to="/login" className={classes.loginLink}>
          Войти
        </Link>
        <Link to="/register" className={classes.btnLink}>
          Регистрация
        </Link>
      </div>
      <Link to="/contact" className={classes.commentBtn}>
        <img src={commentIcon} alt="Write to us" style={{ marginTop: 2 }} />
      </Link>
    </>
  );
}

HeaderUserbar.propTypes = {
  classes: PropTypes.object,
};

const HeaderUserbarStyled = withStyles(styles)(HeaderUserbar);

export default memo(HeaderUserbarStyled);
