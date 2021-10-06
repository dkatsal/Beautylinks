import sertIcon from '../../../img/icons/sertificate.svg';

export default () => ({
  sidebarBox: {
    marginTop: 30,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    background: '#FFFFFF',
    color: '#4C4C4C',
    '@media (max-width: 767px)': {
      order: 6,
    },
    '@media (min-width: 768px)': {
      padding: '20px 20px 0',
      boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1)',
    },
  },
  sertificateTitle: {
    marginTop: 0,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    '@media (max-width: 767px)': {
      fontSize: 18,
      fontWeight: 700,
    },
  },
  sertificateImg: {
    margin: '0 0 10px',
    display: 'inline-block',
    '& img': {
      maxWidth: '100%',
    },
    '@media (max-width: 767px)': {
      width: 'calc(100% / 3 - 5px)',
    },
    '@media (min-width: 768px)': {
      width: 'calc(50% - 5px)',
    },
  },
  sertificateIcon: {
    display: 'inline-block',
    marginRight: 8,
    verticalAlign: 'middle',
    width: 20,
    height: 20,
    background: `url("${sertIcon}") 0 no-repeat`,
  },
});
