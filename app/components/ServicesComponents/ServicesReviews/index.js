/**
 *
 * ServicesReviews
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import reviewImg1 from 'images/avatar-1.png';
import styles from './styles';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Rating from '@material-ui/lab/Rating';

function ServicesReviews({ classes }) {
  const ServicesReviewsItems = [
    { img: reviewImg1, label: 'Анастасия', time: 'На сайте 1 месяца', comment: '', id: 1, review_count: 0, review_raiting: 0},
    { img: reviewImg1, label: 'Ирина', time: 'На сайте 2 месяца', comment: '', id: 2, review_count: 0, review_raiting: 1 },
    { img: reviewImg1, label: 'Елена', time: 'На сайте 3 месяца', comment: '', id: 3, review_count: 0, review_raiting: 2 }
  ];

  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <h3 className={classes.title}>Отзывы клиентов нашего сервиса</h3>
      </div>
      <div className={classes.box}>
        <Carousel
          NextIcon={<ArrowForwardIcon/>}
          PrevIcon={<ArrowBackIcon/>}
          navButtonsProps={{
            className: classes.carouselNavButtons
          }}
          navButtonsWrapperProps={{
            className: classes.buttonWrapper,
          }}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          // animation='slide'
          timeout={500}
          indicators={false}
        >
          {ServicesReviewsItems.map((item, i) => (
            <div key={item.id} className={classes.boxItem}>
              <div className={classes.boxImg}>
                <figure className={classes.boxImgCont}>
                  <img src={item.img} alt={item.label} />
                </figure>
              </div>
              <div className={classes.boxCont}>
                <p className={classes.name}>{item.label}</p>
                <p>
                  <Rating
                    className={classes.userReviews}
                    name="read-only"
                    value={item.review_raiting}
                    readOnly
                    precision={1}
                    icon={<i className={classes.reviewClean} />}
                    IconContainerComponent={props => {
                      const { ...other } = props;
                      return <span {...other} />;
                    }}
                  />
                  <span className={classes.reviewText}>{item.review_count} отзывов</span>
                </p>
                <p className={classes.time}>{item.time}</p>
                <div className={classes.descWrap}>
                  <div className={classes.boxImg}>
                    <figure className={classes.boxImgCont}>
                      <img
                        src={i ? ServicesReviewsItems[i-1].img : ServicesReviewsItems[ServicesReviewsItems.length - 1].img}
                        alt={i ? ServicesReviewsItems[i-1].label : ServicesReviewsItems[ServicesReviewsItems.length - 1].label}
                      />
                      <div className={classes.notActiveImg}></div>
                    </figure>
                  </div>
                  <p className={classes.desc}>
                    {item.comment || (
                      `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint .`
                    )}
                  </p>
                  <div className={classes.boxImg}>
                    <figure className={classes.boxImgCont}>
                      <img
                        src={i === (ServicesReviewsItems.length - 1) ? ServicesReviewsItems[0].img : ServicesReviewsItems[i + 1].img}
                        alt={i === (ServicesReviewsItems.length - 1) ? ServicesReviewsItems[0].label : ServicesReviewsItems[i + 1].label}
                      />
                      <div className={classes.notActiveImg}></div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        {/* {_.map(ServicesReviewsItems, (item, index) => (
          <div key={index} className={classes.boxItem}>
            <div className={classes.boxImg}>
              <figure className={classes.boxImgCont}>
                <img src={item.img} alt={item.label} />
              </figure>
            </div>
            <div className={classes.boxCont}>
              <p className={classes.name}>{item.label}</p>
              <p className={classes.time}>{item.time}</p>
              <p className={classes.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint .
              </p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

ServicesReviews.propTypes = {
  classes: PropTypes.object,
};

const ServicesReviewsStyled = withStyles(styles)(ServicesReviews);

export default memo(ServicesReviewsStyled);
