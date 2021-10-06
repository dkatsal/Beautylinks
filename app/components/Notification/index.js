import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

function Notification({ variant, isOpen, textMsg, handleCloseNotification, classes }) {
  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleCloseNotification}>
      <SnackbarContent className={classNames(classes[variant], classes.content)} message={textMsg} />
    </Snackbar>
  );
}

Notification.propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.any,
  handleCloseNotification: PropTypes.func,
  isOpen: PropTypes.bool,
  textMsg: PropTypes.string,
};

export default withStyles(styles)(Notification);
