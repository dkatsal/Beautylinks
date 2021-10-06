/**
 *
 * CustomerSet
 *
 */

import React, { memo, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import styles from './styles';
import DeleteAccountComponent from '../../DeleteAccountComponent';

function CustomerSet({ classes, handleSave, handleChangeActive, handleDeleteUser, user }) {
  const [active, changeActive] = useState(user.data.active);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [newEmail, setNewEmail] = useState('');
  // const [open, setOpen] = useState(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Настройки</h3>
        <p className={classes.desc}>Изменить настройки своего профиля вы можете здесь.</p>
      </div>
      <div className={classes.container}>
        <p className={classes.subtitle}>Статус профиля</p>
        <FormControl className={classes.formControl}>
          <Select
            value={active}
            onChange={e => {
              handleChangeActive({
                active: e.target.value,
              });
              changeActive(e.target.value);

            }}
            displayEmpty
            input={<FilledInput name="active" id="filled-age-simple" />}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left"
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left"
              },
              getContentAnchorEl: null
            }}
          >
            <MenuItem value>Активный</MenuItem>
            <MenuItem value={false}>Неактивный</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.container}>
        <p className={classes.subtitle}>Политика конфиденциальности</p>
        <p className={classes.desc}>
          Ваша политика конфиденциальности стандартная.
          <Link target="_blank" to="/policy" className={classes.link}>
            Подробнее
          </Link>
        </p>
      </div>
      <div className={classes.container}>
        <p className={classes.subtitle}>Изменить пароль</p>
        <div className={classes.formInput}>
          <input
            type="text"
            onChange={e => setPassword(e.target.value)}
            className={classes.input}
            name="password"
            placeholder="Введите старый пароль"
          />
        </div>
        <div className={classes.formInput}>
          <input
            type="text"
            onChange={e => setNewPassword(e.target.value)}
            className={classes.input}
            name="newPassword"
            placeholder="Введите новый пароль"
          />
          <input
            type="text"
            onChange={e => setNewPasswordConfirm(e.target.value)}
            className={classes.input}
            name="newPasswordConfirm"
            placeholder="Подтвердите пароль"
          />
        </div>
      </div>
      <div className={classes.container}>
        <p className={classes.subtitle}>Изменить e-mail</p>
        <div className={classes.formInput}>
          <input
            type="text"
            className={classes.input}
            value={user.data.email}
            name="email"
            placeholder="email@gmail.com"
            readOnly
          />
          <input
            type="text"
            onChange={e => setNewEmail(e.target.value)}
            className={classes.input}
            name="newEmail"
            placeholder="Введите новый адрес"
          />
        </div>
        <button
          type="submit"
          className={classes.linkBtn}
          onClick={() =>
            handleSave({
              old_password: password,
              password: newPassword,
              password_confirmation: newPasswordConfirm,
              email: newEmail,
            })
          }
        >
          Сохранить
        </button>
      </div>
      <div className={classes.container}>
        <p className={classes.subtitle}>Банковские данные</p>
        <div className={classes.payment}>
          <p className={classes.paymentMessage}>На данный момент мы работаем только с LiqPay.</p>
          <Link to='#' className={classes.paymentLink}>Как настроить свой аккаунт LiqPay?</Link>
        </div>
        <div className={classes.formInput}>
          <input
            type="text"
            style={{
              marginRight: 25,
            }}
            className={classes.input}
            placeholder="LiqPay аккаунт"
          />
          <p className={classes.paymentText}>Привязать другую карту</p>
        </div>
        <div className={classes.btnBox}>
          <Button
            variant="contained"
            className={classes.linkBtn}
            onClick={() => saveLiqPay({ liqpay_account: liqPayAccount })}
          >
            Сохранить
          </Button>
        </div>
      </div>
      <DeleteAccountComponent handleDeleteUser={() => handleDeleteUser()}/>
      {/* <div className={classes.container}>
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
      </div> */}
    </>
  );
}

CustomerSet.propTypes = {
  classes: PropTypes.object,
  handleSave: PropTypes.func,
  handleChangeActive: PropTypes.func,
  handleDeleteUser: PropTypes.func,
  user: PropTypes.object,
};

const CustomerSetStyled = withStyles(styles)(CustomerSet);

export default memo(CustomerSetStyled);
