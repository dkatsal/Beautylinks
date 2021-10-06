/**
 *
 * GreetingPopup
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';
import logoImg from '../../img/logo_beta.svg';

function GreetingPopup({ classes, open, handleClose }) {
  return (
    <Dialog onClose={handleClose} open={open} classes={{ root: classes.dialogBox }}>
      <MuiDialogTitle disableTypography className={classes.root}>
        <img src={logoImg} className={classes.popupLogo} alt="Beauty links" />
        <IconButton aria-label="Close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <DialogContent classes={{ root: classes.dialogCont }}>
        <p>Мы рады Вас приветствовать на BeautyLinks.com – платформе по поиску специалистов в beauty-индустрии.</p>
        <p>
          Это наш первый шаг и нам очень нужна Ваша помощь. Мы примем любые выше предложения и нарекания с помощью
          специальной формы на нашем сайте или же написав нам на{' '}
          <Link to="/" className={classes.link}>
            support@beautylinks.com
          </Link>
        </p>
        <p>
          Пожалуйста, будьте терпеливее и мы постараемся сделать наш сайт более удобным и функциональным.
        </p>
        <p>
          <strong>Во время Beta мы не будем брать никакой комиссии, а в конце пути Вас будут ждать подарки.</strong>
        </p>
        <Link to="/contact" className={classes.linkBtn} onClick={handleClose}>
          Перейти на страницу поддержки
        </Link>
      </DialogContent>
    </Dialog>
  );
}

GreetingPopup.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

const GreetingPopupStyled = withStyles(styles)(GreetingPopup);

export default memo(GreetingPopupStyled);
