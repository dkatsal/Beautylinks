/**
 *
 * ComfortableB
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';

function ComfortableB({ classes }) {
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <h3 className={classes.title}>Почему именно мы?</h3>
        <div className={classes.box}>
          <h5 className={classes.boxTitle}>Клиентам</h5>
          <ul className={classes.listItems}>
            <li>нет свободного времени для планирования похода в салоны красоты</li>
            <li>хочу найти мастера/салон рядом с домом, заказать услугу на дом</li>
            <li>нет возможности записаться к своему мастеру (нет постоянного мастера)</li>
            <li>необходимо ехать на незапланированное мероприятие или встречу, услуга нужна срочно</li>
            <li>приехал в другой город (конференции, командировки и т.д.)</li>
            <li>хочу исправить ошибки прошлых мастеров</li>
            <li>предпочитаю онлайн-оплаты</li>
          </ul>
        </div>
        <div className={classes.box}>
          <h5 className={classes.boxTitle}>Cпециалистам</h5>
          <ul className={classes.listItems}>
            <li>предоставляю услуги в бьюти индустрии</li>
            <li>хочу заявить о себе на рынке, создать свой бренд</li>
            <li>не имею возможности, стартового капитала для создания и продвижения своего сайта, страницы в инстаграме
            или фейсбуке</li>
            <li>имею круг своих клиентов, но хочу его расширить и заполнить свободные часы</li>
            <li>являюсь владельцем салона/клиники, хочу продвижения в онлайне и охват новой целевой аудитории</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

ComfortableB.propTypes = {
  classes: PropTypes.object,
};

const ComfortableBStyled = withStyles(styles)(ComfortableB);

export default memo(ComfortableBStyled);
