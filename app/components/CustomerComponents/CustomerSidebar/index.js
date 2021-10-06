/**
 *
 * CustomerSidebar
 *
 */
//
import React, { createRef, memo, useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';
import trophyImg from '../../../img/icons/trophy.svg';
import contractImg from '../../../img/icons/contract.svg';
import settingsImg from '../../../img/icons/settings.svg';
import favoriteImg from '../../../img/icons/favorite.svg';
import personalImg from '../../../img/icons/person-circle.svg'

function CustomerSidebar({ classes, handleChangeBtnTabIndex, btnTabIndex, user, dispatch }) {
  const menuItems = [
    // {name: 'Мои достижения', img: trophyImg},
    {name: 'Бронирования', img: contractImg},
    {name: 'Настройки', img: settingsImg},
    {name: 'Избранные мастера', img: personalImg},
    {name: 'Мой профиль', img: favoriteImg},
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarClose = createRef();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', () => onScroll());
    return window.removeEventListener('scroll', () => onScroll());
  }, []);

  const handleSelect = index => {
    setActiveIndex(index);
    handleChangeBtnTabIndex(index);
    window.scrollTo(0, 0);
    sidebarClose.current.click();
  };
  console.log(btnTabIndex);
  console.log(menuItems);

  return (
    <>
      <label
        htmlFor="sidebarTriger"
        className={`${classes.sidebarClose} ${isScrolled && classes.pageScrolled}`}
        ref={sidebarClose}
      >
        <span>{menuItems[activeIndex].name}</span>
      </label>
      <aside className={classes.sidebar} style={{top: isScrolled ? '75px' : '100px'}}>
        <p className={classes.userName}>
          {user.first_name !== '-' ? user.first_name : ''} {user.last_name !== '-' ? user.last_name : ''}
        </p>
        <nav className={classes.nav}>
          {menuItems.map((item, index) => (
            <button
              key={item.name}
              className={btnTabIndex === index ? classes.navLinkActive : classes.navLink}
              type="button"
              onClick={() => handleSelect(index)}
            >
              <img src={item.img} style={{ width: 30 }} alt={item.name}/>
              <span>{item.name}</span>
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

CustomerSidebar.propTypes = {
  classes: PropTypes.object,
  btnTabIndex: PropTypes.any,
  handleChangeBtnTabIndex: PropTypes.func,
  user: PropTypes.object,
  dispatch: PropTypes.func,
};

const CustomerSidebarStyled = withStyles(styles)(CustomerSidebar);

export default memo(CustomerSidebarStyled);
