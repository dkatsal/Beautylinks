/**
 *
 * RegisterMasterForm
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styles from './styles';

function RegisterMasterForm({ classes, errors, postRegister, data }) {
  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      ...data,
    }));
  }, [data]);

  const [state, setState] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: '',
    phone: '',
    appointment_scheduling: 'google',
    user_role: 'master',
    gender: 'm',
    how_you_find: 'google',
  });

  function handleSetState(name, val) {
    setState(prevState => ({
      ...prevState,
      [name]: val,
    }));
  }

  return (
    <>
      <p className={classes.title}>Укажите свои личные данные</p>
      <p className={classes.desc}>Эти данные будут отображены в вашем профиле мастера.</p>
      <TextField
        name="first_name"
        error={errors.first_name && errors.first_name.includes('validation.required')}
        onChange={({ target: { name, value } }) => handleSetState(name, value)}
        className={classes.input}
        fullWidth
        label="Ваше имя *"
      />
      <TextField
        name="last_name"
        error={errors.last_name && errors.last_name.includes('validation.required')}
        onChange={({ target: { name, value } }) => handleSetState(name, value)}
        className={classes.input}
        fullWidth
        label="Ваша фамилия *"
      />
      <TextField
        name="phone"
        error={errors.phone && errors.phone.includes('validation.required')}
        onChange={({ target: { name, value } }) => handleSetState(name, value)}
        className={classes.input}
        fullWidth
        label="Телефон *"
      />
      <p className={classes.fieldTitle}>Ваш пол</p>
      <FormControlLabel
        control={
          <Checkbox
            name="gender"
            value="m"
            onChange={({ target: { name, value } }) => handleSetState(name, value)}
            color="default"
            classes={{ root: classes.chbx, checked: classes.checked }}
            checked={state.gender === 'm'}
          />
        }
        label="Мужской"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="gender"
            value="f"
            onChange={({ target: { name, value } }) => handleSetState(name, value)}
            color="default"
            classes={{ root: classes.chbx, checked: classes.checked }}
            checked={state.gender === 'f'}
          />
        }
        label="Женский"
      />
      <FormControl className={classes.formControl}>
        <InputLabel shrink>Выберите тип календаря, который будет вам удобен</InputLabel>
        <NativeSelect
          name="appointment_scheduling"
          value={state.appointment_scheduling}
          onChange={({ target: { name, value } }) => handleSetState(name, value)}
          input={<Input />}
        >
          <option value="google">Google Calendar</option>
          <option value="another">Другой календарь</option>
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink>Откуда вы о нас узнали?</InputLabel>
        <NativeSelect
          name="how_you_find"
          value={state.how_you_find}
          onChange={({ target: { name, value } }) => handleSetState(name, value)}
          input={<Input />}
        >
          <option value="google">Долго гуглил</option>
          <option value="another">По рекомендации</option>
        </NativeSelect>
      </FormControl>
      <div className={classes.btnBox}>
        <Button variant="contained" className={classes.linkBtn} onClick={() => postRegister(state)}>
          Продолжить
        </Button>
      </div>
    </>
  );
}

RegisterMasterForm.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  errors: PropTypes.object,
  postRegister: PropTypes.func,
};

const RegisterMasterFormStyled = withStyles(styles)(RegisterMasterForm);

export default memo(RegisterMasterFormStyled);
