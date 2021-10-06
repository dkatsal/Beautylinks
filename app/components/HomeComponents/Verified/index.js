/**
 *
 * Verified
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import certificateImg from '../../../img/certificate.svg';
import mapImg from '../../../img/map.svg';
import warrantyImg from '../../../img/warranty.svg';
import styles from './styles';

function Verified({ classes }) {
  const verifiedItems = [
    {
      img: mapImg,
      text: 'Удобный поиск по геолокации',
    },
    {
      img: certificateImg,
      text: 'Сертифицированные мастера',
    },
    {
      img: warrantyImg,
      text: 'Гарантия оплаты',
    },
  ];

  return (
    <div className={classes.wrap}>
      <h3 className={classes.title}>Быстро, качественно, безопасно</h3>
      <div className={classes.itemsBox}>
        {_.map(verifiedItems, (item, index) => (
          <div key={index}>
            <img src={item.img} alt="Проверенно" />
            <p className={classes.label}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Verified.propTypes = {
  classes: PropTypes.object,
};

const VerifiedStyled = withStyles(styles)(Verified);

export default memo(VerifiedStyled);
