/**
 *
 * HeaderTop
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from '@material-ui/core';
import logoImg from '../../../img/logo_beta.svg';
import searchIcon from '../../../img/icons/search.svg';
import commentIcon from '../../../img/icons/comment.svg';
import styles from './styles';
import AddressSearch from '../../AddressSearch';
// import HeaderUserbar from '../HeaderUserbar';

function HeaderTop({ classes, isUserLogged, user, address, handleAddress, dispatch, handleSelectItem }) {
  const roles = localStorage.getItem('role');
  const [anchorEl, setAnchorEl] = useState(null);
  const [addressEl, setAddressEl] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    const removeEvents = () => {
      window.removeEventListener('scroll', () => onScroll());
      window.removeEventListener('touchmove', () => onScroll());
    };
    window.addEventListener('scroll', () => onScroll());
    window.addEventListener("touchmove", () => onScroll());
    return removeEvents();
  }, []);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleChange(val) {
    setAddressEl(val);
    handleAddress(val);
  }

  return (
    <div className={classes.wrap}>
      <div className={classes.block}>
        <Link to="/" className={`${classes.logo} ${isScrolled && classes.logoScrolled}`}>
          <img src={logoImg} alt="Beauty links" />
        </Link>
        <div
          className={`${classes.inputBox} ${isScrolled && classes.pageScrolled}`}
          // style={{ top: isScrolled ? '107px' : '131px' }}
        >
          <AddressSearch handleSelect={handleChange} address={address} />
          <Link
            to={
              addressEl
                ? `/category-search?lat=${addressEl.lat}&lon=${addressEl.lon}&addr=${addressEl.display_name}`
                : '/category-search'
            }
            className={classes.searchBtn}
          >
            <img src={searchIcon} alt="search" />
          </Link>
        </div>
        <Link to="/how-it-work" className={classes.howWorksLink}>
          Как это работает?
        </Link>
      </div>
      <div className={classes.mobileBar}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="topMenuTriger" className={classes.topnavBtn} />
        <label htmlFor="searchTriger" className={classes.searchPanelBtn} />
        {isUserLogged ? (
          <>
            <Link to="/customer" className={classes.favoriteLink} />
            <Link to="/customer" className={classes.bookingLink} />
          </>
        ) : null}
        <label htmlFor="userTriger" className={classes.userPanelBtn} />
      </div>
      {/* <HeaderUserbar /> */}
      <div className={classes.userBlock} style={{top: isScrolled ? '107px' : '131px'}}>
        {isUserLogged ? (
          <>
            <Button onClick={handleClick} className={classes.userBox}>
              <div className={classes.userAvatarBox}>
                <Avatar src={user.avatar && user.avatar}>
                  {!user.avatar && user.first_name.charAt(0) + user.last_name.charAt(0)}
                </Avatar>
              </div>
              <span>
                {user.first_name !== '-' ? user.first_name : ''} {user.last_name !== '-' ? user.last_name : ''}
              </span>
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className={classes.userMenu}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/customer" onClick={handleSelectItem}>
                  Кабинет клиента
                </Link>
              </MenuItem>
              {roles && roles.includes('master') && (
                <MenuItem onClick={handleClose}>
                  <Link to="/customer-master" onClick={handleSelectItem}>
                    Кабинет специалиста
                  </Link>
                </MenuItem>
              )}
              <MenuItem
                onClick={() => {
                  handleClose();
                  dispatch({
                    type: 'LOG_OUT',
                  });
                }}
              >
                <Link to="/login" onClick={handleSelectItem}>
                  Выход
                </Link>
              </MenuItem>
            </Menu>
            <div className={classes.mobileUserBox}>
              <Link to="/customer" onClick={handleSelectItem} className={classes.userBoxLink}>
                    Кабинет клиента
              </Link>
              {roles && roles.includes('master') && (
                <Link to="/customer-master" onClick={handleSelectItem} className={classes.userBoxLink}>
                  Кабинет специалиста
                </Link>
              )}
              <Link to="/login" className={classes.userBoxLink} onClick={() => {
                dispatch({
                  type: 'LOG_OUT',
                });
                handleSelectItem();
              }}>
                  Выход
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className={classes.loginLink} onClick={handleSelectItem}>
              Войти
            </Link>
            <Link to="/register" className={classes.btnLink} onClick={handleSelectItem}>
              Зарегестрироваться
            </Link>
          </>
        )}
      </div>
      <Link to="/contact" className={classes.commentBtn}>
        <img src={commentIcon} alt="Write to us" style={{ marginTop: 2 }} />
      </Link>
    </div>
  );
}

HeaderTop.propTypes = {
  classes: PropTypes.object,
  isUserLogged: PropTypes.bool,
  dispatch: PropTypes.func,
  address: PropTypes.object,
  handleAddress: PropTypes.func,
  user: PropTypes.object,
  // eslint-disable-next-line react/no-unused-prop-types
  history: PropTypes.object,
  handleSelectItem: PropTypes.func,
};

const HeaderTopStyled = withStyles(styles)(HeaderTop);

export default memo(HeaderTopStyled);
