/**
 *
 * Comfortable
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';

function Comfortable({ classes }) {
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <h3 className={classes.title}>Там, где вам удобно.</h3>
        <div className={classes.box}>
          <h5 className={classes.boxTitle}>С комфортом у себя дома.</h5>
          <p>
            Напряженный график? Вы получите выгоду
            <br />
            от легкости и удобства, когда специалист
            <br />
            придёт к вам домой или в офис.
          </p>
        </div>
        <div className={classes.box}>
          <h5 className={classes.boxTitle}>В салоне красоты.</h5>
          <p>
            Нужно сбежать? Возьмите лечение
            <br />
            в профессиональном салоне и воспользуйтесь
            <br />
            расслабленной обстановкой и широким спектром услуг.
          </p>
        </div>
      </div>
      <div className={classes.btnBox}>
        <Link to="/category-search" className={classes.linkBtn}>
          найти специалиста
        </Link>
      </div>
    </div>
  );
}

Comfortable.propTypes = {
  classes: PropTypes.object,
};

const ComfortableStyled = withStyles(styles)(Comfortable);

export default memo(ComfortableStyled);
