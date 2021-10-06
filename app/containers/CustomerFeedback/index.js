/**
 *
 * CustomerFeedback
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectGlobal } from '../App/selectors';

import makeSelectCustomerFeedback from './selectors';
import { postCustomerFeedbackAction } from './actions';

import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import emptyAvatr from '../../images/empty_avatar.jpg';

import ReviewForm from '../../components/ReviewForm';

import BookingClient from '../../components/BookingClient/Loadable';

import * as customerPageActions from '../CustomerPage/actions';
import makeSelectCustomerPage from '../CustomerPage/selectors';
import customerPageReducer from '../CustomerPage/reducer';
import customerPageSaga from '../CustomerPage/saga';

/* eslint-disable react/prefer-stateless-function */
export class CustomerFeedback extends React.PureComponent {
  componentDidMount() {
    this.props.getUserBookingById(this.props.match.params.id);
  }

  render() {
    const {
      classes,
      customerPage: { bookings },
      postCustomerFeedback,
      match: { params: id },
    } = this.props;

    const review = true;
    if (bookings.loaded) {
      console.log('bookingById', bookings.data);
    }
    return (
      <>
        {bookings.loaded && (
          <div>
            <Helmet>
              <title>Страница отзыва</title>
              <meta name="description" content="Description of CustomerFeedback" />
            </Helmet>
            <div className={classes.mainBox}>
              <BookingClient data={bookings.data[0]} type="customer" review={review} />
              <div className={classes.mainContent}>
                <div className={classes.header}>
                  <div className={classes.avatarBox}>
                    <img
                      src={bookings.data[0].master_avatar ? bookings.data[0].master_avatar : emptyAvatr}
                      alt="Специалист"
                      className={classes.avatarImg}
                    />
                  </div>
                  <div className={classes.headerRight}>
                    <p className={classes.boxTitle}>{bookings.data[0].master_name}</p>
                    <div className={classes.ratingBox}>
                      {/* <div className={classes.rating}>{renderStars(5)}</div> */}
                      <div className={classes.ratingText}>
                        <p className={classes.item}>
                          <Link to={`/master/${bookings.data[0].master_id}`} className={classes.link}>
                            Профиль мастера
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {bookings.data[0].review === true ? (
              <ReviewForm handleSubmit={postCustomerFeedback} bookingId={+id.id} />
            ) : (
              <p className={classes.subtitle} style={{ fontWeight: 'bold' }}>
                Вы уже оставляли отзыв на эту услугу
              </p>
            )}
          </div>
        )}
      </>
    );
  }
}

CustomerFeedback.propTypes = {
  classes: PropTypes.object,
  customerPage: PropTypes.object,
  bookings: PropTypes.object,
  match: PropTypes.object,
  getUserBookingById: PropTypes.func,
  postCustomerFeedback: PropTypes.func,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  customerFeedback: makeSelectCustomerFeedback(),
  customerPage: makeSelectCustomerPage(),
  global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    postCustomerFeedback: bindActionCreators(postCustomerFeedbackAction, dispatch),
    getUserBookingById: bindActionCreators(customerPageActions.getUserBookingByIdAction, dispatch),

    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'customerFeedback', reducer });
const withSaga = injectSaga({ key: 'customerFeedback', saga });
const withCustomerPageReducer = injectReducer({ key: 'customerPage', reducer: customerPageReducer });
const withCustomerPageSaga = injectSaga({ key: 'customerPage', saga: customerPageSaga });

const CustomerFeedbackStyled = withStyles(styles)(CustomerFeedback);

export default compose(
  withReducer,
  withCustomerPageReducer,
  withSaga,
  withCustomerPageSaga,
  withConnect,
)(CustomerFeedbackStyled);
