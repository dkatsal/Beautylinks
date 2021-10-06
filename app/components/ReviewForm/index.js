/**
 *
 * ReviewForm
 *
 */

import React, { memo, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Input } from '@material-ui/core';

import styles from './styles';

function ReviewForm({ classes, handleSubmit, bookingId }) {
  const [state, setState] = useState({
    review: '',
    timekeeping: 0,
    friendliness: 0,
    communication: 0,
    satisfaction: 0,
  });

  function isFilled() {
    // eslint-disable-next-line camelcase
    const { review, timekeeping, friendliness, communication, satisfaction } = state;

    // eslint-disable-next-line camelcase
    return !review || !timekeeping || !friendliness || !communication || !satisfaction;
  }

  const { review, timekeeping, friendliness, communication, satisfaction } = state;

  const renderStars = (name, value) => {
    const stars = [];

    for (let i = 0; i < 5; i += 1) {
      stars.push(
        <button
          type="button"
          key={`i_${i}`}
          className={i < value ? classes.ratingStar : classes.cleanStar}
          onClick={() => {
            setState(prevState => ({ ...prevState, [name]: i + 1 }));
            renderStars(name, value);
          }}
        />,
      );
    }

    return stars;
  };

  return (
    <div className={classes.reviewBox}>
      <div className={classes.containerBox}>
        <div className={classes.container}>
          <div className={classes.inputFullBox}>
            <p className={classes.subtitle}>Оставьте отзыв о полученной услуге</p>
            <Input
              className={classes.inputFullField}
              placeholder="Ваш отзыв"
              name="bio"
              value={review || ''}
              onChange={({ target: { value } }) =>
                setState(previousState => ({
                  ...previousState,
                  review: value,
                }))
              }
              multiline
              disableUnderline
              maxRows={4}
            />
          </div>
        </div>
        <div className={classes.containerRating}>
          <p className={classes.subtitle}>Проставьте оценки</p>
          <div className={classes.ratingBlocks}>
            <div className={classes.headerRight}>
              <p className={classes.boxTitle}>Пунктуальность</p>
              <div className={classes.ratingBox}>
                <div className={classes.rating}>{renderStars('timekeeping', timekeeping)}</div>
              </div>
            </div>
            <div className={classes.headerRight}>
              <p className={classes.boxTitle}>Вежливость</p>
              <div className={classes.ratingBox}>
                <div className={classes.rating}>{renderStars('friendliness', friendliness)}</div>
              </div>
            </div>
            <div className={classes.headerRight}>
              <p className={classes.boxTitle}>Комуникабельность</p>
              <div className={classes.ratingBox}>
                <div className={classes.rating}>{renderStars('communication', communication)}</div>
              </div>
            </div>
            <div className={classes.headerRight}>
              <p className={classes.boxTitle}>Удовольствие</p>
              <div className={classes.ratingBox}>
                <div className={classes.rating}>{renderStars('satisfaction', satisfaction)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.btnBox}>
        <button
          type="button"
          className={classes.linkBtn}
          onClick={() => {
            handleSubmit(state, bookingId);
            setState({ review: '', timekeeping: 0, friendliness: 0, communication: 0, satisfaction: 0 });
          }}
          disabled={!!isFilled()}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}

ReviewForm.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  bookingId: PropTypes.number,
};

const ReviewFormStyled = withStyles(styles)(ReviewForm);

export default memo(ReviewFormStyled);
