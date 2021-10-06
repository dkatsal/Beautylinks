/**
 *
 * ComfortableA
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';

function ComfortableA({ classes }) {
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <h3 className={classes.title}>Чем мы будем полезны</h3>
        <div className={classes.box}>
          <h5 className={classes.boxTitle}>Клиентам</h5>
          <ul className={classes.listItems}>
            <li>поиск по геолокации, возможность вызова мастера на дом </li>
            <li>онлайн оплата, безопасная сделка</li>
            <li>возврат стоимости в случае неоказания услуги</li>
            <li>подтвержденные номера телефонов</li>
            <li>реальные отзывы клиентов, которые уже воспользовались услугами</li>
            <li>возможность проверить наличие у специалиста необходимых сертификатов, дипломов до заказа услуги</li>
            <li>реальные фото работ мастера</li>
            <li>регулярные скидки, акции и бонусы за пользование сервисом</li>
          </ul>
        </div>
        <div className={classes.box}>
          <h5 className={classes.boxTitle}>Мастерам-специалистам</h5>
          <ul className={classes.listItems}>
            <li>быстрый старт, без вложений на раскрутку и рекламу</li>
            <li>прозрачность и фиксация всех выплат напрямую на банковскую карту</li>
            <li>личный кабинет с расписанием и функцией "выходного дня"</li>
            <li>большой потенциал для роста, в отличии от соц. сетей и непрофильных сервисов- вся аудитория является целевой</li>
            <li>возможность заполнить "окна" в своем расписании</li>
            <li>возможность продвижения своего профиля на платформе</li>
            <li>сохранение рейтинга и клиентов в случае смены места работы</li>
          </ul>
        </div>
      </div>
      <p>&nbsp;</p>
      <div className={classes.bottomBgImg} />
    </div>
  );
}

ComfortableA.propTypes = {
  classes: PropTypes.object,
};

const ComfortableAStyled = withStyles(styles)(ComfortableA);

export default memo(ComfortableAStyled);
