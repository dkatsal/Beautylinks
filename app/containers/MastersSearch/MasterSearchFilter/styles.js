import closeIcon from '../../../img/icons/close.svg';

export default theme => ({
  wrap: {
    '@media (max-width:1023px)': {
      position: 'fixed',
      zIndex: 3,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      padding: '130px 15px 15px',
      transform: 'translateX(-100%)',
      transition: '0.8s transform',
      background: '#FFF',
      overflow: 'auto',
    },
    '@media (min-width:1024px)': {
      width: 352,
      padding: '35px 30px 0 0',
      borderRight: `2px solid ${theme.palette.BLColors.main}`,
    },
    '#filterTriger:checked ~ main &': {
      '@media (max-width: 1023px)': {
        transform: 'translateX(0%)',
        transition: '0.3s transform',
      },
    },
  },
  box: {
    marginBottom: 40,
  },
  title: {
    position: 'relative',
    margin: '0 0 20px',
    paddingBottom: 13,
    fontWeight: 400,
    lineHeight: 1,
    '@media (max-width: 1023px)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#000000',
      fontSize: 24,
    },
    '@media (min-width: 1024px)': {
      textAlign: 'center',
      color: '#a5a5a5',
      fontSize: 18,
    },
    '&:after': {
      content: '""',
      background: theme.palette.BLColors.main,
      '@media (max-width: 1023px)': {
        flexGrow: 1,
        height: 2,
        marginLeft: 40,
      },
      '@media (min-width: 1024px)': {
        position: 'absolute',
        left: '50%',
        bottom: 0,
        width: 240,
        height: 1,
        transform: 'translateX(-50%)',
      },
    },
  },
  filterHeader: {
    '@media (max-width: 1023px)': {
      height: 70,
      width: 'calc(100% + 30px)',
      padding: '0 15px',
      margin: '0 -15px 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#F5F5F5',
      fontWeight: 700,
    },
    '@media (min-width: 1024px)': {
      display: 'none',
    },
    '& span': {
      margin: '0 auto 0 0',
    },
  },
  filterClose: {
    height: 20,
    width: 20,
    display: 'inline-flex',
    background: `url("${closeIcon}") 0 0/100% no-repeat`,
    '@media (max-width: 767px)': {
      margin: '0 20px 0 0',
    },
    '@media (min-width: 768px)': {
      margin: '0 auto 0 0',
    },
  },
});
