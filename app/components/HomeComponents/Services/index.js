/**
 *
 * Services
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './styles';
import makiyagImg from '../../../img/makiyag.svg';
import manikyurImg from '../../../img/manikyur.svg';
import massagImg from '../../../img/massag.svg';
import parikmaherImg from '../../../img/hairstyle.svg';
import resniciImg from '../../../img/resnici.svg';
import uhodzalicomImg from '../../../img/uhodzalicom.svg';
import barberImg from '../../../img/barber.svg';
import depilationImg from '../../../img/depilation.svg';

function Services({ classes }) {
  const ServicesItems = [
    { img: parikmaherImg, label: 'Уход за волосами', path: 'hair-care', id: 1 },
    { img: manikyurImg, label: 'Уход за ногтями', path: 'nail-care', id: 2 },
    { img: uhodzalicomImg, label: 'Косметолог', path: 'beautician', id: 3 },
    { img: makiyagImg, label: 'Макияж', path: 'makeup', id: 4 },
    { img: resniciImg, label: 'Брови и ресницы', path: 'eyebrows-and-eyelashes', id: 5 },
    { img: massagImg, label: 'Уход за телом', path: 'body-care', id: 6 },
    { img: barberImg, label: 'Барберы', path: 'mens-hairdressing-services-barbers', id: 7 },
    { img: depilationImg, label: 'Удаление волос', path: 'depilation', id: 8 },
  ];

  return (
    <div className={classes.wrap}>
      <h3 className={classes.title}>
        Услуги, которые пользуются популярностью
      </h3>
      <div className={classes.itemsBox}>
        {ServicesItems.map((item, index) => (
            <div key={item.id} className={classes.item}>
              <Link to={`/service/${item.path}`} className={classes.link}>
                <img src={item.img} alt={item.label} />
                <p className={classes.label}>{item.label}</p>
              </Link>
            </div>
        ))}
      </div>
      <div className={classes.btnBox}>
        <Link to="/service/all" className={classes.linkBtn}>
          посмотреть все услуги
        </Link>
      </div>
    </div>
  );
}

Services.propTypes = {
  classes: PropTypes.object,
  serviceCategories: PropTypes.object,
};

const ServicesStyled = withStyles(styles)(Services);

export default memo(ServicesStyled);
