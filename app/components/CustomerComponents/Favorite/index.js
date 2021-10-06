/**
 *
 * Favorite
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import styles from './styles';
import emptyAvatar from '../../../images/empty_avatar.jpg';
import slideImg from '../../../images/slideImg.jpg';

function Favorite({ classes, favoriteMasters, deleteFavorite }) {
  console.log(favoriteMasters.data);

  const renderStars = rating => {
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      stars.push(<i key={`i_${i}`} className={i < rating ? classes.ratingStar : classes.cleanStar} />);
    }
    return stars;
  };

  function timeDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours ? `${hours} ч ` : ''}${minutes ? `${minutes} м` : ''}`;
  }

  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Избранные мастера</h3>
        <p className={classes.desc}>Здесь находится список избранных мастеров, к которым вы можете вернуться.</p>
      </div>
      {_.map(favoriteMasters.data, master => (
        <div key={master.master_id} className={classes.masterBox}>
          {/* <div className={classes.masterImgCont}>
            <img src={slideImg} alt="Специалист" />
          </div> */}
          <div className={classes.masterCont}>
            <div className={classes.masterHeader}>
              <div className={classes.leftBlock}>
                <div className={classes.avatarBox}>
                  <img src={master.avatar || emptyAvatar} alt="Специалист" className={classes.avatarImg} />
                </div>
                <div className={classes.textBox}>
                  <p className={classes.boxTitle}>{master.master_name}</p>
                  <div className={classes.ratingBox}>
                    <div className={classes.rating}>{renderStars(master.rating)}</div>
                  </div>
                  <p className={classes.boxDesc}>
                    <i className={classes.contactsMapIcon} />
                    {master.address}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className={classes.favoriteBox}
                onClick={() =>
                  deleteFavorite({
                    master_id: master.master_id,
                  })
                }
              />
            </div>
            {/* {_.map(master.subServices, subService => (
              <div key={subService.id} className={classes.servicesRow}>
                <div className={classes.servicesLeft}>
                  <span>{subService.name}</span>
                  <span className={classes.serviceTime}>{timeDuration(subService.pivot.duration)}</span>
                </div>
                <span className={classes.servicePrice}>{subService.pivot.price} грн</span>
                <button type="button" className={classes.linkBtn}>
                  Забронировать
                </button>
              </div>
            ))} */}
            <Link to={`/master/${master.master_id}`} className={classes.masterPageLink}>
              Перейти в профиль мастера
            </Link>
          </div>
        </div>
      ))}
      <p>&nbsp;</p>
    </>
  );
}

Favorite.propTypes = {
  classes: PropTypes.object,
  favoriteMasters: PropTypes.object,
  deleteFavorite: PropTypes.func,
};

const FavoriteStyled = withStyles(styles)(Favorite);

export default memo(FavoriteStyled);
