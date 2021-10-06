/**
 *
 * MasterSettings
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import styles from './styles';
import DeleteAccountComponent from '../../DeleteAccountComponent';
const initialState = {
  email: '',
  password: '',
  old_password: '',
  password_confirmation: '',
  showPassword: false,
  showOldPassword: false,
  showRepeatPassword: false,
};
function MasterSettings({
  classes,
  settingsData,
  putUserStatus,
  putUserProfile,
  putUserData,
  saveLiqPay,
  profile,
  handleDeleteMaster,
}) {
  const [liqPayAccount, setLiqPay] = useState(profile && profile.liqpay_account);
  const [state, setState] = useState(initialState);
  const { loaded, errors } = putUserData;
  useEffect(() => {
    if (loaded) {
      setState(initialState);
    }
  }, [loaded, profile]);

  useEffect(() => {
    if (profile) setLiqPay(profile.liqpay_account);
  }, [profile]);

  const renderPassInput = (showName, valueName, placeholder) => (
    <Input
      style={{
        height: 50,
      }}
      name={valueName}
      error={!!errors[valueName]}
      disableUnderline={!errors[valueName]}
      className={classes.input}
      placeholder={placeholder}
      type={state[showName] ? 'text' : 'password'}
      value={state[valueName]}
      onChange={({ target: { name, value } }) =>
        setState(prevState => ({
          ...prevState,
          [name]: value,
        }))
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="Toggle password visibility"
            onClick={() =>
              setState(prevState => ({
                ...prevState,
                [showName]: !prevState[showName],
              }))
            }
          >
            {state[showName] ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
    />
  );

  const isValidEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const getPayload = () => {
    const payload = {};
    // eslint-disable-next-line camelcase
    const { email, password, old_password, password_confirmation } = state;
    if (_.trim(email) && isValidEmail(email) && email !== settingsData.email) {
      payload.email = email;
    }
    if (
      _.trim(old_password) &&
      _.trim(password) &&
      _.trim(password_confirmation) &&
      _.trim(password) === _.trim(password_confirmation)
    ) {
      // eslint-disable-next-line camelcase
      payload.old_password = old_password;
      payload.password = password;
      // eslint-disable-next-line camelcase
      payload.password_confirmation = password_confirmation;
    }
    return payload;
  };

  const payload = getPayload();
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
            value={settingsData.active}
            onChange={({ target: { value: active } }) => {
              putUserStatus({ active });
            }}
            input={<FilledInput name="active" />}
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
          {renderPassInput('showOldPassword', 'old_password', 'Введите старый пароль')}
        </div>
        <div className={classes.formInput}>
          {renderPassInput('showPassword', 'password', 'Введите новый пароль')}
          {renderPassInput('showRepeatPassword', 'password_confirmation', 'Повторите новый пароль')}
        </div>
      </div>
      <div className={classes.container}>
        <p className={classes.subtitle}>Изменить e-mail</p>
        <div className={classes.formInput}>
          <input
            type="text"
            className={classes.input}
            placeholder="email@gmail.com"
            defaultValue={settingsData.email}
            readOnly
          />
          <Input
            style={{
              height: 50,
            }}
            name="email"
            error={!!errors.email}
            disableUnderline={!errors.email}
            className={classes.input}
            type="text"
            value={state.email}
            placeholder="Введите новый e-mail"
            onChange={({ target: { name, value } }) =>
              setState(prevState => ({
                ...prevState,
                [name]: value,
              }))
            }
          />
        </div>
      </div>
      {_.size(payload) ? (
        <div className={classes.btnBox}>
          <Button variant="contained" className={classes.linkBtn} onClick={() => putUserProfile(payload)}>
            Сохранить
          </Button>
        </div>
      ) : null}
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
            value={liqPayAccount || ''}
            className={classes.input}
            onChange={({ target: { value } }) => setLiqPay(value)}
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
      <DeleteAccountComponent handleDeleteUser={() => handleDeleteMaster()}/>
    </>
  );
}

MasterSettings.propTypes = {
  classes: PropTypes.object,
  settingsData: PropTypes.object,
  putUserData: PropTypes.object,
  profile: PropTypes.object,
  putUserStatus: PropTypes.func,
  putUserProfile: PropTypes.func,
  saveLiqPay: PropTypes.func,
  handleDeleteMaster: PropTypes.func,
};

const MasterSettingsStyled = withStyles(styles)(MasterSettings);

export default memo(MasterSettingsStyled);
