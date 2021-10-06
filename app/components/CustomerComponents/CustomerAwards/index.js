/**
 *
 * CustomerAwards
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import studyImg from '../../../img/icons/study.svg';
import giftImg from '../../../img/icons/gift.svg';
import questionImg from '../../../img/icons/question.svg';
import styles from './styles';
import BookingClient from '../../BookingClient/Loadable';

function CustomerAwards({ classes, achievements, bookings }) {
  const BookingsMade = () => {
    const html = [];
    for (let i = 0; i < 5; i += 1) {
      if (achievements > i) {
        html.push(
          <figure key={i} className={classes.boxImgFill}>
            <img src={studyImg} alt="Достижение" />
          </figure>,
        );
      } else {
        html.push(<figure key={i} className={classes.boxImg} />);
      }
    }
    return html;
  };

  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Мои достижения</h3>
        <div className={classes.legendContainer}>
          <div className={classes.legendBox}>
            <figure className={classes.legendImg} />
            <figure className={classes.legendImg} />
            <figure className={classes.legendImg} />
            <figure className={classes.legendImg} />
            <figure className={classes.legendImg} />
            <figure className={classes.legendImgGift}>
              <img src={giftImg} alt="Подарок" />
            </figure>
          </div>
          <img className={classes.legendImgQuestion} src={questionImg} alt="Вопрос" />
          <p className={classes.legendDesc}>Сделайте более 5 заказов через сайт и получите от нас подарок!</p>
        </div>
      </div>
      <div className={classes.box}>
        {BookingsMade()}
        <figure className={classes.boxImgGift}>
          <img src={giftImg} alt="Подарок" />
        </figure>
      </div>
      <div className={classes.btnBox}>
        <button type="button" className={classes.linkBtn}>
          Искать!
        </button>
      </div>
      <div className={classes.container}>
        <p className={classes.subtitle}>Предыдущие бронирования</p>
        {bookings && bookings.length > 0 ? (
          bookings.map(item => (
            <BookingClient
              key={item.id}
              data={item}
              type='customer'
              cancelBooking={() => cancelBooking({id: item.id, data: item})}
            />
          ))
        ) : (
          <p className={classes.descText}>
            У вас еще нет заказов. <Link to="/category-search">Найдите первый</Link>
          </p>
        )}
      </div>
    </>
  );
}

CustomerAwards.propTypes = {
  classes: PropTypes.object,
  achievements: PropTypes.number,
  bookings: PropTypes.array,
};

const CustomerAwardsStyled = withStyles(styles)(CustomerAwards);

export default memo(CustomerAwardsStyled);
