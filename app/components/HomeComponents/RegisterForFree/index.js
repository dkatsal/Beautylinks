/**
 *
 * RegisterForFree
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import bgImage from '../../../images/registered-bg-img.jpg';
import styles from './styles';

function RegisterForFree({ classes }) {
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <h3 className={classes.title}>Зарегистрируйтесь сейчас бесплатно!</h3>
        <div className={classes.boxDscr}>
          <div className={classes.bgBox}>
            <p className={classes.feedback}>Заработок от данного сайта помог мне оплатить семейный отдых в этом году.</p>
            <img src={bgImage} alt="Зарегистрируйтесь сейчас бесплатно!" className={classes.bgImg} />
          </div> 
          <div className={classes.specialistBox}>
            <p className={classes.specName}>Анна</p>
            <p className={classes.specAbout}>Визажист</p>
            <p className={classes.specDesc}>Анна принимает заказы с сайта в течение 2 месяцев</p>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.btnBox}>
          <Link to="/how-it-work" className={classes.btnLink}>
            узнать больше
          </Link>
          <Link to="/register" className={classes.linkBtn}>
            зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}

RegisterForFree.propTypes = {
  classes: PropTypes.object,
};

const RegisterForFreeStyled = withStyles(styles)(RegisterForFree);

export default memo(RegisterForFreeStyled);
