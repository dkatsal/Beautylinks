/**
 *
 * CustomerRegisterForm
 *
 */
import _ from 'lodash';
import React, { memo, useEffect, createRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';
import ReCaptcha from '../ReCaptcha';

function CustomerRegisterForm({ classes, handleNextStep, userExists, registerCustomerPage }) {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    repeatPassword: '',
    policy: false,
    showPassword: false,
    showRepeatPassword: false,
    captchaResponse: false,
  });
  const [isExists, setIsExists] = React.useState(false);
  const emailField = createRef();

  useEffect(() => {
    setIsExists(registerCustomerPage.data.status);

    if (!registerCustomerPage.data.status) {
      emailField.current.focus();
    }
  }, [registerCustomerPage]);

  const host = window.document.location.hostname;

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleAgreedPolicy = prop => event => {
    setValues({ ...values, [prop]: event.target.checked });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowRepeatPassword = () => {
    setValues({ ...values, showRepeatPassword: !values.showRepeatPassword });
  };

  const isValidEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isFilled = () => {
    return _.trim(values.email) &&
            isValidEmail(values.email) &&
            _.trim(values.password) &&
            _.trim(values.repeatPassword) &&
            values.password === values.repeatPassword &&
            values.policy &&
            isExists &&
            (host === 'localhost' || values.captchaResponse);
  }


  const checkUserExists = email => {
    if (isValidEmail(email)) {
      userExists({ email });
    }
  };

  const handleSubmit = () => {
    const userData = {
      email: values.email,
      password: values.password,
      password_confirmation: values.repeatPassword,
    };
    handleNextStep(userData);
  };

  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        label="Ваш e-mail *"
        onChange={handleChange('email', true)}
        onBlur={e => checkUserExists(e.target.value)}
        inputRef={emailField}
      />
      <FormControl fullWidth>
        <InputLabel htmlFor="adornment-password">Пароль *</InputLabel>
        <Input
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="adornment-password">Подтвердите пароль *</InputLabel>
        <Input
          type={values.showRepeatPassword ? 'text' : 'password'}
          value={values.repeatPassword}
          onChange={handleChange('repeatPassword')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility" onClick={handleClickShowRepeatPassword}>
                {values.showRepeatPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl fullWidth>
        <ReCaptcha
          id="recaptcha"
          apiKey="6LfL88AUAAAAAJpEpYxe05nCnW6gyUNMSnJ1XJfa"
          onChange={() => {
            setValues({ ...values, captchaResponse: true });
          }}
        />
      </FormControl>
      <div className={classes.policyBox}>
        <FormControlLabel
          control={
            <Checkbox
              color="default"
              onChange={handleAgreedPolicy('policy')}
              classes={{ root: classes.chbx, checked: classes.checked }}
            />
          }
        />
        <span className={classes.descText2}>
          Подтверждаю, что ознакомился и принимаю условия 
          <Link to="policy" className={classes.descText2Link}>
            политики конфиденциальности
          </Link>
        </span>
      </div>
      <div className={classes.btnBox}>
        <button type="button" className={classes.linkBtn} onClick={handleSubmit} disabled={!isFilled()}>
          Регистрация
        </button>
        <p className={classes.descText}>
          Уже есть аккаунт? <Link to="/login">Войдите</Link>
        </p>
      </div>
    </div>
  );
}

CustomerRegisterForm.propTypes = {
  classes: PropTypes.object,
  handleNextStep: PropTypes.func,
  userExists: PropTypes.func,
  registerCustomerPage: PropTypes.object,
};

const CustomerRegisterFormStyled = withStyles(styles)(CustomerRegisterForm);

export default memo(CustomerRegisterFormStyled);
