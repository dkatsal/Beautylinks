/**
 *
 * CustomerProfile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCustomerProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import styles from './styles';
import { makeSelectGlobal } from '../App/selectors';
import * as actions from './actions';
import NumberFormat from 'react-number-format';
// import _ from 'lodash';

/* eslint-disable react/prefer-stateless-function */
export class CustomerProfile extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      first_name: props.global.user.data.first_name || '',
      last_name: props.global.user.data.last_name || '',
      phone: props.global.user.data.phone || '',
    };
  }
  handleSaveUserProfile = () => {
    const { updateUserInfo } = this.props;
    const { first_name, last_name, phone } = this.state;

    updateUserInfo({ first_name, last_name, phone });
    console.log(this.state);
  };

  isFilled = () => {
    const { first_name, last_name, phone } = this.state;
    return first_name.trim() && last_name.trim() && this.isValidPhone(phone);
  };

  isValidPhone = phone => {
    // Ukraine only
    const re = /^\+?3?8?(0\d{9})$/;
    return re.test(phone);
  };

  render() {
    const { classes } = this.props;

    const handleChangeField = (event) => {
      console.log(event)
      const {
        target: { value, name },
      } = event;
      this.setState({ [name]: value })
    };

    const changePhone = (formattedValue) => {
      this.setState({ phone: formattedValue })
    }

    console.log(this.state)

    return (
      <>
        <Helmet>
          <title>Мой профиль</title>
          <meta name="description" content="Personal profile" />
        </Helmet>
        <div className={classes.header}>
          <h3 className={classes.title}>Мой профиль</h3>
        </div>
        <div className={classes.container}>
          <p className={classes.subtitle}></p>
          <div className={classes.formInput}>
            <label htmlFor="first_name" className={classes.label}>Имя</label>
            <input
              type="text"
              onChange={e => handleChangeField(e)}
              className={classes.input}
              name="first_name"
              value={this.state.first_name}
              placeholder="Имя"
            />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="last_name" className={classes.label}>Фамилия</label>
            <input
              type="text"
              onChange={e => handleChangeField(e)}
              className={classes.input}
              value={this.state.last_name}
              name="last_name"
              placeholder="Фамилия"
            />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="phone" className={classes.label}>Телефон</label>
            <NumberFormat
              type="tel"
              // prefix="+38"
              value={this.state.phone || ''}
              className={classes.input}
              onValueChange={({formattedValue}) => {
                changePhone(formattedValue);
              }}
              format='+38 ### ### ## ##'
            />
          </div>
          {/* <div className={classes.formInput}>
            <label htmlFor="phone" className={classes.label}>Телефон</label>
            <input
              type="text"
              onChange={e => handleChangeField(e)}
              className={classes.input}
              value={this.state.phone}
              name="phone"
              placeholder="Телефон"
            />
          </div> */}
          <button
            type="button"
            className={classes.dscrBtn}
            onClick={this.handleSaveUserProfile}
          >
            Сохранить
          </button>
        </div>
      </>
    );
  }
}

CustomerProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  customerProfile: makeSelectCustomerProfile(),
  global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateUserInfo: bindActionCreators(actions.updateUserInfo, dispatch),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'customerProfile', reducer });
const withSaga = injectSaga({ key: 'customerProfile', saga });

const CustomerProfileStyled = withStyles(styles)(CustomerProfile);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CustomerProfileStyled);
