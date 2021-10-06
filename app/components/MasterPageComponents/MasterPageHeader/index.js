/**
 *
 * MasterPageHeader
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import emptyAvatr from '../../../images/empty_avatar.jpg';
import { Link } from 'react-router-dom';
// import {ShareSocial} from 'react-share-social';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import { EmailShareButton, FacebookShareButton, FacebookShareCount, FacebookIcon } from 'react-share';

function MasterPageHeader({ classes, data, favoriteMasters, toggleToFavorite, isChosen }) {
  console.log(window.location.href);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const renderStars = rating => {
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      stars.push(<i key={`i_${i}`} className={i < rating ? classes.ratingStar : classes.cleanStar} />);
    }
    return stars;
  };

  const scrollToReviews = e => {
    e.preventDefault();
    document.getElementById('reviewBox').scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <div className={classes.header}>
      <div className={classes.avatarBox}>
        <img src={data.avatar ? data.avatar : emptyAvatr} alt="Специалист" className={classes.avatarImg} />
      </div>
      <div className={classes.headerRight}>
        <p className={classes.boxTitle}>{data.full_name}</p>
        <div className={classes.ratingBox}>
          <div className={classes.rating}>{renderStars(data.master_rating)}</div>
          <div className={classes.ratingText}>
            <p>{data.master_reviews_count} отзывов</p>
            {/* <Link to="#" className={classes.profileLink} onClick={scrollToReviews}>
              (Показать все)
            </Link> */}
          </div>
        </div>
      </div>
      <div className={classes.btnBox}>
        {favoriteMasters.loaded ? (
          <button
            type="button"
            className={`${isChosen ? classes.favoriteFillBox : classes.favoriteBox}`}
            onClick={toggleToFavorite}
          >
            {isChosen ? <span>Из избранного</span> : <span>В избранное</span>}
          </button>
        ) : null}
        <button type="button" className={classes.rewBox} onClick={scrollToReviews}>
          <span>Отзывы</span>
        </button>
        <button type="button" className={classes.complaintBox} onClick={scrollToReviews}>
          <span>Жалобы</span>
        </button>
        <button
          type="button"
          className={classes.shareBox}
          onClick={e => setAnchorEl(e.currentTarget)}
          aria-describedby={id}
        >
          <span>Поделиться</span>
        </button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.shareContent}>
            <FacebookShareButton url={window.location.href} quote={'best master'} className={classes.socialIcon}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </Typography>
        </Popover>
      </div>
    </div>
  );
}

MasterPageHeader.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  favoriteMasters: PropTypes.object,
  toggleToFavorite: PropTypes.func,
};

const MasterPageHeaderStyled = withStyles(styles)(MasterPageHeader);

export default memo(MasterPageHeaderStyled);
