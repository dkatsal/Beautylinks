/**
 *
 * Checkout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import _ from 'lodash';
import moment from 'moment/min/moment-with-locales.min';
import * as actions from './actions';
import makeSelectCheckout from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import NotFoundPage from '../NotFoundPage/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class Checkout extends React.PureComponent {
  componentDidMount() {
    this.props.getBooking(this.props.match.params.bookingId);
  }

  debouncedPutPaymentCustomerCancel = _.debounce(this.props.putBookingCustomerCancel, 300);

  render() {
    const {
      classes,
      checkout: { data, loaded, loading, paymentProcessing },
      match: {
        params: { bookingId },
      },
    } = this.props;
    const booking = loaded ? data[0] : { treatments: [] };
    return loaded && !paymentProcessing.loading ? (
      <div>
        <Helmet>
          <title>Checkout</title>
          <meta name="description" content="Description of Checkout" />
        </Helmet>
        <section className={classes.container}>
          <aside className={classes.sidebarRight}>
            {booking.booking_status === 'cancelled by customer' ? (
              <p className={classes.formTitle}>Заказ отменен</p>
            ) : (
              <p className={classes.formTitle}>Вы забронировали</p>
            )}
            <p className={classes.label}>Мастер</p>
            <p className={classes.desc}>{booking.master_name}</p>
            <p className={classes.desc}>тел: {booking.master_phone}</p>
            <p className={classes.label}>Бесплатная отмена бронирования</p>
            <p className={classes.desc}>24 часа</p>
            <p className={classes.label}>Дата бронирования</p>
            <p className={classes.desc}>
              {moment(booking.date)
                .locale('ru')
                .format('D MMM YYYY, dddd')}
            </p>
            <p className={classes.label}>Время</p>
            <p className={classes.desc}>{booking.start_time}</p>
            <p className={classes.label}>Услуга(и)</p>
            {_.map(booking.treatments, treatment => (
              <p key={treatment.id} className={classes.services}>
                <span>{treatment.name}</span>
                <span>{treatment.price} грн</span>
              </p>
            ))}
            <p className={classes.bottomSumm}>
              <span>Сумма к оплате:</span>
              <b>{booking.total_amount} грн</b>
            </p>
            <div className={classes.buttonBlock}>
              {(!booking.paid && booking.booking_status !== 'cancelled by customer') ||
              (!paymentProcessing.data.message && booking.booking_status !== 'cancelled by customer') ? (
                  <div dangerouslySetInnerHTML={{ __html: paymentProcessing.data.html }} /> ) : null
              }
              {booking.booking_status === 'confirmed' ? (
                <div className={classes.btBoxCancel}>
                  <button
                    type="button"
                    className={classes.linkBtn}
                    onClick={() => this.debouncedPutPaymentCustomerCancel(bookingId)}
                  >
                    Отменить
                  </button>
                </div>
              ) : null}
            </div>
          </aside>
        </section>
      </div>
    ) : (
      <>{!loading && !paymentProcessing.loading ? <NotFoundPage /> : null}</>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object,
  checkout: PropTypes.object,
  match: PropTypes.object,
  getBooking: PropTypes.func,
  putBookingCustomerCancel: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout(),
});

function mapDispatchToProps(dispatch) {
  return {
    getBooking: bindActionCreators(actions.getBooking, dispatch),
    putBookingCustomerCancel: bindActionCreators(actions.putBookingCustomerCancel, dispatch),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'checkout', reducer });
const withSaga = injectSaga({ key: 'checkout', saga });

const CheckoutStyled = withStyles(styles)(Checkout);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CheckoutStyled);
