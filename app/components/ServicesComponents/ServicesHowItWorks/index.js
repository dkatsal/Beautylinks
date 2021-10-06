/**
 *
 * ServicesHowItWorks
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './styles';

function ServicesHowItWorks({ classes }) {
  const ServicesWorkItems = [
    'Введите Ваше гео и услугу, которая вам нужна.',
    'Выберете место, где Вам удобно встретиться с мастером: дома или в салоне поблизости.',
    'Просмотрите список мастеров, которые доступны в Вашем районе.',
    'Выберите и оплатите услугу с мастером, который подходит именно Вам!',
  ];
  return (
    <div className={classes.wrap}>
      <h3 className={classes.title}>Как это работает?</h3>
      <div className={classes.itemsBox}>
        {ServicesWorkItems.map((item, index) => (
          <div key={item} className={classes.item}>
            <span className={classes.boxNumber}>{index + 1}</span>
            <p style={{ margin: 0 }}>{item}</p>
          </div>
        ))}
      </div>
      <div className={classes.btnBox}>
        <Link to="/category-search" className={classes.linkBtn}>
          Начать
        </Link>
      </div>
    </div>
  );
}

ServicesHowItWorks.propTypes = {
  classes: PropTypes.object,
};

const ServicesHowItWorksStyled = withStyles(styles)(ServicesHowItWorks);

export default memo(ServicesHowItWorksStyled);
