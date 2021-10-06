import mapIcon from '../../../img/icons/map-icon-grey.svg';
import phoneIcon from '../../../img/icons/phone-call.svg';

export default () => ({
  sidebar: {
    '@media (max-width: 767px)': {
      display: 'contents',
    },
    '@media (min-width: 768px)': {
      flexGrow: 1,
    },
    '@media (min-width: 768px) and (max-width: 1439px)': {
      maxWidth: 340,
    },
    '@media (min-width: 1440px)': {
      maxWidth: 467,
      padding: '80px 0 50px',
    },
  },
  mapImg: {
    maxWidth: 467,
    overflow: 'hidden',
    width: '100%',
    height: 260,
    background: '#F5F5F5',
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
  contactsBox: {
    '@media (max-width: 767px)': {
      order: 2,
      padding: '20px 0',
    },
    '@media (min-width: 768px)': {
      padding: '20px 22px',
    },
    '& p': {
      fontSize: 18,
      display: 'flex',
      alignItems: 'center',
      '@media (max-width: 767px)': {
        fontSize: 14,
      },
    },
  },
  contactsAdress: {
    color: '#4C4C4C',
  },
  contactsPhone: {
    '& span': {
      color: '#00C6C6',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  contactsSocial: {
    color: '#C4C4C4',
    '@media (max-width: 767px)': {
      position: 'absolute',
      top: 150,
      right: 20,
      flexDirection: 'column',
    },
    '& span': {
      '@media (max-width: 767px)': {
        display: 'none',
      },
    },
  },
  contactsMapIcon: {
    display: 'inline-block',
    marginRight: 8,
    verticalAlign: 'middle',
    width: 18,
    height: 18,
    background: `url("${mapIcon}") 0 no-repeat`,
  },
  contactsPhoneIcon: {
    display: 'inline-block',
    marginRight: 8,
    verticalAlign: 'middle',
    width: 18,
    height: 18,
    background: `url("${phoneIcon}") 0 no-repeat`,
  },
  contactsSocialIcon: {
    '@media (max-width: 767px)': {
      marginBottom: 10,
    },
    '@media (min-width: 768px)': {
      display: 'inline-block',
      verticalAlign: 'middle',
      marginLeft: 20,
    },
  },
});
