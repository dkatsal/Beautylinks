/**
 *
 * FaqClient
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import bgImage1 from '../../../images/faq-client-1.svg';
import bgImage2 from '../../../images/faq-client-2.svg';
import bgImage3 from '../../../images/faq-client-3.svg';
import styles from './styles';

// eslint-disable-next-line no-unused-vars
function FaqClient({ classes }) {
  return (
    <>
      <div className={classes.contBox}>
        <div className={classes.boxText}>
          <h3 className={classes.title}>Ваш специалист уже ждёт!</h3>
          <ul className={classes.boxList}>
            <li>
              укажите свое гео, чтобы найти специалиста, который работает недалеко от Вашего дома;
            </li>
            <li>
              укажите того профи, который Вам нужен сейчас (на сайте есть косметологи, мастера маникюра, барберы, парикмахеры и даже специалисты по массажу);
            </li>
            <li>
              просмотрите всю информацию о специалисте или салоне: специализацию, реальные фото работ, отзывы и сертификаты,
            </li>
            <li>
              находите нужные услуги в своем районе, выбирайте место, стоимость и делайте заказ. Один клик и мастер уже едет к Вам!
            </li>
          </ul>
        </div>
        <div className={classes.bgBox}>
          <img src={bgImage1} alt="Легко найти независимого специалиста." />
        </div>
      </div>
    </>
  );
}

FaqClient.propTypes = {
  classes: PropTypes.object,
};

const FaqClientStyled = withStyles(styles)(FaqClient);

export default memo(FaqClientStyled);
