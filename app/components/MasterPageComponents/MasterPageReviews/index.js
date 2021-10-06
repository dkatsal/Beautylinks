/**
 *
 * MasterPageReviews
 *
 */

import React, { memo, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import emptyAvatr from '../../../images/empty_avatar.jpg';
import Pagination from '@material-ui/lab/Pagination';

const mockReviews = [
  {
    name: 'Alex',
    reviewer_name: 'Alex',
    date: '12.07.2021',
    rating: 5,
    text: 'some text 1',
  },
  {
    name: 'Jonh',
    reviewer_name: 'Jonh',
    date: '12.07.2021',
    rating: 2,
    text: 'some text 2',
  },
  {
    name: 'User',
    reviewer_name: 'User',
    date: '12.07.2021',
    rating: 1,
    text: 'some text 3',
  },
  {
    name: 'User4',
    reviewer_name: 'User4',
    date: '12.07.2021',
    rating: 1,
    text: 'some text 4',
  },
];

function MasterPageReviews({ classes, data, reviewsCount }) {
  const [page, setPage] = useState(1);

  const renderStars = rating => {
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      stars.push(<i key={`i_${i}`} className={i < rating ? classes.ratingStar : classes.cleanStar} />);
    }
    return stars;
  };

  const displayData = (data.length > 0 && data) || [];

  return (
    <div className={classes.rewievBox} id="reviewBox">
      <p className={classes.rewievTitle}>Отзывы ({reviewsCount})</p>
      {displayData.slice((page - 1) * 3, (page - 1) * 3 + 3).map((item, index) => (
        <div key={index} className={classes.rewievItem}>
          <div className={classes.rewievImg}>
            <img src={!item.avatar ? emptyAvatr : item.avatar} alt={item.reviewer_name} />
          </div>
          <div className={classes.rewievContainer}>
            <div className={classes.rewievHeader}>
              <p className={classes.rewievName}>{item.reviewer_name}</p>
              <p className={classes.rewievDate}>{item.date}</p>
              <div className={classes.rating}>{renderStars(item.rating)}</div>
            </div>
            <div className={classes.rewievContent}>{item.text}</div>
          </div>
        </div>
      ))}
      {displayData.length > 0 && (
        <Pagination
          count={Math.ceil(mockReviews.length / 3)}
          onChange={(e, page) => setPage(page)}
          className={classes.paginationBox}
        />
      )}
    </div>
  );
}

MasterPageReviews.propTypes = {};

const MasterPageReviewsStyled = withStyles(styles)(MasterPageReviews);

export default memo(MasterPageReviewsStyled);
