/**
 *
 * HowItWorks
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './styles';

function HowItWorks({ classes }) {
  const WorkItems = [
    'Введите Ваше гео и услугу, которая вам нужна.',
    'Выберете место, где Вам удобно встретиться с мастером: дома или в салоне поблизости.',
    'Просмотрите список мастеров, которые доступны в Вашем районе.',
    'Выберите и оплатите услугу с мастером, который подходит именно Вам!',
  ];

  return (
    <div className={classes.wrap}>
      <h3 className={classes.title}>
        Как это работает?
      </h3>
      <div className={classes.itemsBox}>
        {_.map(WorkItems, (item, index) => (
          <div key={index} className={classes.item}>
            <span className={classes.boxNumber}>{index + 1}</span>
            <p className={classes.itemDesc}>{item}</p>
          </div>
        ))}
      </div>
      <div className={classes.btnBox}>
        <Link to="/specialists/care" className={classes.linkBtn}>
          Начать
        </Link>
      </div>
    </div>
  );
}

HowItWorks.propTypes = {
  classes: PropTypes.object,
};

const HowItWorksStyled = withStyles(styles)(HowItWorks);

export default memo(HowItWorksStyled);
