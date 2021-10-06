/**
 *
 * Footer
 *
 */

import React, {memo, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import styles from './styles';
import logoImg from '../../img/footer-logo.svg';
import visaImg from '../../img/icons/visa.svg';
import mastercardImg from '../../img/icons/mastercard.svg';
// import vkImg from '../../img/icons/vk.svg';
import fbImg from '../../img/icons/fb.svg';
import instImg from '../../img/icons/inst.svg';
import cectigoImg from '../../images/sectigo_trust_seal_lg.png';
import GreetingPopup from '../../components/GreetingPopup';

function Footer({ classes, categories, isUserLogged }) {
  const roles = localStorage.getItem('role');
  const [openDialog, setOpenDialog] = useState(!localStorage.getItem('betaPopup'));
  const handleClose = () => {
    localStorage.setItem('betaPopup', false);
    setOpenDialog(false);
  };

  const menu1 = [
    {
      title: 'О нас',
      items: [{ title: 'Наша история', url: '/about' }, { title: 'Как это работает?', url: '/how-it-work' }],
    },
  ];
  const menu2 = [
    {
      title: 'Клиенту / Специалисту',
      items: isUserLogged ? [
        { title: 'Кабинет клиента', url: '/customer' },
        roles && roles.includes('master') && { title: 'Кабинет специалиста', url: '/customer-master' },
      ] : [
        { title: 'Зарегистрироваться', url: '/register' },
        { title: 'Войти', url: '/login' },
      ]
    },
  ];
  const menu3 = [
    {
      title: 'Услуги',
      items:
        categories.data &&
        _.map(categories.data, category => ({ title: category.short_name, url: `/service/${category.slug}` })),
    },
  ];
  const menu4 = [
    {
      title: 'Поддержка',
      items: [
        { title: 'Обратная связь', url: '/contact' },
        { title: 'Вопросы и ответы', url: '/how-it-work' },
        { title: 'Условия использования', url: '/terms' },
        { title: 'Политика конфиденциальности', url: '/policy' },
        { title: 'Cookies Policy', url: '/cookies-policy' },
      ],
    },
  ];

  const year = new Date().getFullYear();

  // console.log(menu2);
  return (
    <footer className={classes.footer}>
      <div className={classes.wrap}>
        <div className={classes.footerBox}>
          <div className={classes.menuBlock}>
            {_.map(menu1, (block, index) => (
              <div key={index} className={classes.menuCont}>
                <h6 className={classes.menuBlockTitle}>{block.title}</h6>
                {_.map(block.items, (item, i) => (
                  <Link key={`link_${i}`} to={item.url} className={classes.link}>
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
            {_.map(menu2, (block, index) => (
              <div key={index} className={classes.menuCont}>
                <h6 className={classes.menuBlockTitle}>{block.title}</h6>
                {block.items.length > 0 && _.map(block.items, (item, i) => (
                  item && (
                    <Link key={`link_${i}`} to={item.url} className={classes.link}>
                      {item.title}
                    </Link>
                  )
                ))}
              </div>
            ))}
          </div>
          <div className={classes.menuBlock}>
            {_.map(menu3, (block, index) => (
              <div key={index} className={classes.menuCont}>
                <h6 className={classes.menuBlockTitle}>{block.title}</h6>
                {_.map(block.items, (item, i) => (
                  <Link key={`link_${i}`} to={item.url} className={classes.link}>
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className={classes.logoBox}>
            <Link to="/" className={classes.logo}>
              <img src={logoImg} alt="Beauty links" />
            </Link>
            <div className={classes.soclinks}>
              {/* <Link to="vk.com/beautylinks" style={{ color: '#fff', fontSize: 26, marginRight: 15 }}>
                <img src={vkImg} alt="Vkontakte" />
              </Link> */}
              <Link to="//www.facebook.com/BeautyLinks-105507814246830/?modal=admin_todo_tour" target="_blank" style={{ color: '#fff', fontSize: 26, marginRight: 15 }}>
                <img src={fbImg} alt="Facebook" />
              </Link>
              <Link to="//www.instagram.com/beautylinks_official/" target="_blank"  style={{ color: '#fff', fontSize: 26 }}>
                <img src={instImg} alt="Instagramm" />
              </Link>
            </div>
          </div>
          <div className={classes.menuBlock}>
            {_.map(menu4, (block, index) => (
              <div key={index} className={classes.menuCont}>
                <h6 className={classes.menuBlockTitle}>{block.title}</h6>
                {_.map(block.items, (item, i) => (
                  <Link key={`link_${i}`} to={item.url} className={classes.link}>
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className={classes.payBox}>
            <img src={mastercardImg} alt="Mastercard" />
            <img src={visaImg} alt="Visa" />
            {/* <img src={cectigoImg} alt="cectigo" /> */}
            <Link to="/" className={classes.copyright}>
              © {year} Beautylinks
            </Link>
          </div>
        </div>
        <GreetingPopup open={openDialog} handleClose={handleClose} />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object,
  categories: PropTypes.object,
  isUserLogged: PropTypes.bool,
};

const FooterStyled = withStyles(styles)(Footer);

export default memo(FooterStyled);
