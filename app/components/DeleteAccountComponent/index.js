/**
 *
 * DeleteAccountComponent
 *
 */

import React, { memo, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styles from './styles';

function DeleteAccountComponent({ classes, handleDeleteUser }) {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <p className={classes.subtitle}>Удалить аккаунт</p>
      <button type="submit" className={classes.linkBtn} onClick={handleClickOpen}>
        Удалить аккаунт
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Внимание!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы уверены что хотите удалить свой аккаунт?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Нет
          </Button>
          <Button onClick={() => handleDeleteUser()} color="primary" autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DeleteAccountComponent.propTypes = {
  handleDeleteUser: PropTypes.func,
};

const DeleteAccountComponentStyled = withStyles(styles)(DeleteAccountComponent);

export default memo(DeleteAccountComponentStyled);
