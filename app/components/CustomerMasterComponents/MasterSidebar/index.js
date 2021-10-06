/**
 *
 * MasterSidebar
 *
 */

import React, {createRef, memo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import _ from 'lodash';
import styles from './styles';
import homeImg from '../../../img/icons/home.svg';
import calendarImg from '../../../img/icons/calendar.svg';
import writeImg from '../../../img/icons/write.svg';
import scissorsImg from '../../../img/icons/scissors.svg';
import clockImg from '../../../img/icons/clock.svg';
import mapImg from '../../../img/icons/map-pin.svg';
import personImg from '../../../img/icons/person-circle.svg';
import settingsImg from '../../../img/icons/settings.svg';
import addImg from '../../../img/icons/person-add.svg';

function MasterSidebar({ classes, handleChangeBtnTabIndex, btnTabIndex, dispatch, data }) {
  const navButtons = [
    { image: homeImg, title: 'Основное' },
    { image: calendarImg, title: 'Календарь' },
    { image: writeImg, title: 'Бронирования' },
    { image: scissorsImg, title: 'Услуги' },
    { image: clockImg, title: 'Рабочие часы' },
    { image: mapImg, title: 'Локации' },
    { image: personImg, title: 'Мой профиль' },
    { image: settingsImg, title: 'Настройки' },
    { image: addImg, title: 'Пригласить людей' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarTrigerClose = createRef();

  useEffect(() => {
    const onScroll = (e) => {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', () => onScroll());
    return window.removeEventListener('scroll', () => onScroll());
  }, []);

  return (
    <>
      <label
        htmlFor="sidebarTriger"
        className={`${classes.sidebarClose} ${isScrolled && classes.pageScrolled}`}
        ref={sidebarTrigerClose}
      >
        <span>{navButtons[activeIndex].title}</span>
      </label>
      <aside className={classes.sidebar} style={{top: isScrolled ? '75px' : '100px'}}>
        <p className={classes.userName}>{data.full_name}</p>
        {/* <p>
          <Rating
            className={classes.userReviews}
            name="read-only"
            value={data.master_rating}
            readOnly
            precision={1}
            icon={<i className={classes.reviewClean} />}
            IconContainerComponent={props => {
              const { ...other } = props;
              return <span {...other} />;
            }}
          />
          <span className={classes.reviewText}>{data.master_reviews_count} отзывов</span>
        </p> */}
        <nav className={classes.nav}>
          {_.map(navButtons, (navButton, i) => (
            <button
              key={`i_${i}`}
              className={btnTabIndex === i ? classes.navLinkActive : classes.navLink}
              type="button"
              onClick={() => {
                setActiveIndex(i);
                handleChangeBtnTabIndex(i);
                window.scrollTo(0, 0);
                sidebarTrigerClose.current.click();
              }}
            >
              <img src={navButton.image} style={{ width: 30 }} alt={navButton.title} />
              <span>{navButton.title}</span>
            </button>
          ))}
        </nav>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link
          to="#"
          className={classes.link}
          onClick={() => {
            dispatch({ type: 'LOG_OUT' });
          }}
        >
          Выйти из аккаунта
        </Link>
      </aside>
    </>
  );
}

MasterSidebar.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  btnTabIndex: PropTypes.number,
  handleChangeBtnTabIndex: PropTypes.func,
  dispatch: PropTypes.func,
};

const MasterSidebarStyled = withStyles(styles)(MasterSidebar);

export default memo(MasterSidebarStyled);
