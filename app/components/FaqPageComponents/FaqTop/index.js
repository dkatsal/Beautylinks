/**
 *
 * FaqTop
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoImg from '../../../img/logo.svg';
import styles from './styles';

function FaqTop({ classes, handleChangeBtnTabIndex, btnTabIndex }) {
  return (
    <div className={classes.topWrap}>
      <div className={classes.breadCrumbsBox}>
        <Link to="/" className={classes.breadCrumbsLink}>
          Главная
        </Link>
        <span> / </span>
        <span style={{ fontWeight: 700 }}>Как это работает?</span>
      </div>
      <div className={classes.topBox}>
        <div className={classes.topContainer}>
          <Link to="/" className={classes.logo}>
            <img src={logoImg} alt="Beauty links" />
          </Link> 
          <p className={classes.title}>Узнайте, как наш сервис может работать на вас.</p>
        </div>
      </div>
      <div className={classes.faqBtnBox}>
        <button
          className={btnTabIndex === 2 ? classes.linkBtnActive : classes.linkBtn}
          type="button"
          onClick={() => handleChangeBtnTabIndex(2)}
        >
          Ответы на вопросы
        </button>
        <button
          className={btnTabIndex === 0 ? classes.linkBtnActive : classes.linkBtn}
          type="button"
          onClick={() => handleChangeBtnTabIndex(0)}
        >
          Я клиент
        </button>
        <button
          className={btnTabIndex === 1 ? classes.linkBtnActive : classes.linkBtn}
          type="button"
          onClick={() => handleChangeBtnTabIndex(1)}
        >
          Я специалист
        </button>
      </div>
    </div>
  );
}

FaqTop.propTypes = {
  classes: PropTypes.object,
  btnTabIndex: PropTypes.any,
  handleChangeBtnTabIndex: PropTypes.func,
};

const FaqTopStyled = withStyles(styles)(FaqTop);

export default memo(FaqTopStyled);
