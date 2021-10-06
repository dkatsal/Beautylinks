/**
 *
 * RegisterClientPage
 * 3rt page of registration (register as client)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import _ from 'lodash';
import { makeSelectGlobal } from '../App/selectors';
import makeSelectRegisterClientPage from './selectors';
import makeSelectRegisterCustomerPage from '../RegisterCustomerPage/selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import * as actions from './actions';

export class RegisterClientPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      gender: '',
      whereFind: 'google',
      redirect: false,
      path: '',
    };
  }

  componentWillMount() {
    const {
      global: { user },
      registerCustomerPage: { data },
    } = this.props;
    const roles = localStorage.getItem('role');

    if (user.loaded || roles) {
      if (roles.includes('customer')) {
        this.setState({
          redirect: true,
          path: 'customer',
        });
      }
    }

    if (!data) {
      this.setState({
        redirect: true,
        path: 'register',
      });
    }
  }

  // eslint-disable-next-line no-unused-vars
  componentWillReceiveProps(nextProps, nextContext) {
    const {
      global: { user },
      registerClientPage,
    } = this.props;

    const roles = localStorage.getItem('role');

    if (user.loaded || roles) {
      if (roles.includes('customer')) {
        this.setState({
          redirect: true,
          path: 'customer',
        });
      }
    }

    if (registerClientPage.loaded) {
      this.setState({
        redirect: true,
        path: 'customer',
      });
    }
  }

  handleChangeFirstName = val => this.setState({ firstName: val });

  handleChangeLastName = val => this.setState({ lastName: val });

  handleChangePhone = val => this.setState({ phone: val });

  handleChangeWhereFind = val => this.setState({ whereFind: val });

  handleRegister = () => {
    const {
      clientRegisterAction,
      registerCustomerPage: { data },
    } = this.props;
    const { gender, firstName, lastName, phone, whereFind } = this.state;

    if (!data) {
      this.setState({
        redirect: true,
        path: 'register',
      });
    }

    const userData = {
      first_name: firstName,
      last_name: lastName,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
      user_role: 'customer',
      how_you_find: whereFind,
      gender,
      phone,
    };

    clientRegisterAction(userData);
  };

  handleChangeGender = val => {
    this.setState({ gender: val });
  };

  isFilled = () => {
    const { firstName, lastName, phone, whereFind } = this.state;
    return _.trim(firstName) && _.trim(lastName) && this.isValidPhone(phone) && whereFind;
  };

  isValidPhone = phone => {
    // Ukraine only
    const re = /^\+?3?8?(0\d{9})$/;
    return re.test(phone);
  };

  render() {
    const { classes } = this.props;
    const { whereFind, gender, redirect, path } = this.state;
    return (
      <>
        <Helmet>
          <title>Начать как клиент</title>
          <meta name="description" content="Description of RegisterClientPage" />
        </Helmet>
        <section className={classes.mainBox}>
          <p className={classes.title}>Укажите свои личные данные</p>
          <p className={classes.desc}>Эти данные будут отображены в вашем профиле.</p>
          <TextField
            name="username"
            className={classes.input}
            fullWidth
            label="Ваше имя *"
            onChange={e => {
              this.handleChangeFirstName(e.target.value);
            }}
          />
          <TextField
            name="secondname"
            className={classes.input}
            fullWidth
            label="Ваша фамилия *"
            onChange={e => {
              this.handleChangeLastName(e.target.value);
            }}
          />
          <TextField
            name="phone"
            className={classes.input}
            fullWidth
            label="Телефон *"
            onChange={e => {
              this.handleChangePhone(e.target.value);
            }}
          />
          <p className={classes.fieldTitle}>Пол *</p>
          <FormControlLabel
            control={
              <Checkbox
                color="default"
                value="m"
                checked={gender === 'm'}
                classes={{ root: classes.chbx, checked: classes.checked }}
                onChange={e => {
                  this.handleChangeGender(e.target.checked ? e.target.value : '');
                }}
              />
            }
            label="Мужской"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="default"
                value="f"
                checked={gender === 'f'}
                classes={{ root: classes.chbx, checked: classes.checked }}
                onChange={e => {
                  this.handleChangeGender(e.target.checked ? e.target.value : '');
                }}
              />
            }
            label="Женский"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="default"
                value=""
                checked={gender === ''}
                classes={{ root: classes.chbx, checked: classes.checked }}
                onChange={e => {
                  this.handleChangeGender(e.target.checked ? e.target.value : '');
                }}
              />
            }
            label="Не важно"
          />
          <FormControl className={classes.formControl}>
            <InputLabel shrink>Откуда вы о нас узнали?</InputLabel>
            <NativeSelect
              value={whereFind}
              onChange={e => this.handleChangeWhereFind(e.target.value)}
              input={<Input />}
            >
              <option value="google">Долго гуглил</option>
              <option value="recommendation">По рекомендации</option>
            </NativeSelect>
          </FormControl>
          <div className={classes.btnBox}>
            <button type="button" onClick={this.handleRegister} className={classes.linkBtn} disabled={!this.isFilled()}>
              Начать
            </button>
            {redirect ? <Redirect push to={`${path}`} /> : null}
          </div>
        </section>
      </>
    );
  }
}

RegisterClientPage.propTypes = {
  classes: PropTypes.object,
  global: PropTypes.object,
  user: PropTypes.object,
  registerCustomerPage: PropTypes.object,
  registerClientPage: PropTypes.object,
  clientRegisterAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  global: makeSelectGlobal(),
  registerCustomerPage: makeSelectRegisterCustomerPage(),
  registerClientPage: makeSelectRegisterClientPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    clientRegisterAction: bindActionCreators(actions.clientRegisterAction, dispatch),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'registerClientPage', reducer });
const withSaga = injectSaga({ key: 'registerClientPage', saga });

const RegisterClientPageStyled = withStyles(styles)(RegisterClientPage);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterClientPageStyled);
