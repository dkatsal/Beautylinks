import closeIcon from '../../../img/icons/close-dark.svg';

export default theme => ({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: theme.zIndex.header,
    width: '100%',
    background: '#f5f5f5',
    boxShadow: '0 6px 13px rgba(30, 15, 0, 0.15)',
    '@media (min-width:1024px)': {
      height: 150,
      '&:after': {
        position: 'absolute',
        left: 0,
        bottom: 0,
        content: "''",
        width: '100%',
        height: 50,
        background: theme.palette.BLColors.main,
      },
    },
  },
  menuWrap: {
    '@media (max-width:1023px)': {
      position: 'absolute',
      zIndex: 9,
      top: 131,
      left: 0,
      height: 'calc(100vh - 131px)',
      width: '100%',
      maxWidth: 420,
      padding: '30px 50px 30px 20px',
      margin: 0,
      transform: 'translateX(-100%)',
      transition: '0.8s transform',
      background: '#00C7C7',
      '#topMenuTriger:checked ~ header &': {
        transform: 'translateX(0)',
        transition: '0.5s transform',
      },
    },
    '@media (min-width:1024px)': {
      position: 'relative',
      zIndex: 1,
      ...theme.blocks.container,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
    },
  },
  pageScrolled: {
    '@media (max-width:1023px)': {
      top: 107,
    },
  },
  menuClose: {
    '@media (max-width: 1023px)': {
      position: 'absolute',
      right: 20,
      top: 30,
      display: 'block',
      width: 30,
      height: 30,
      background: `url("${closeIcon}") 50% 50%/100% no-repeat`,
    },
    '@media (min-width:1024px)': {
      display: 'none',
    },
  },
  menuTitle: {
    display: 'block',
    color: '#5E5E5E',
    '@media (max-width:767px)': {
      margin: '0 0 20px',
      fontSize: 24,
    },
    '@media (min-width:768px) and (max-width: 1023px)': {
      fontSize: 30,
      margin: '0 0 40px',
    },
    '@media (min-width:1024px)': {
      display: 'none',
    },
  },
  link: {
    color: '#ffffff',
    '@media (max-width:1023px)': {
      fontSize: 16,
      marginBottom: 20,
      display: 'block',
    },
    '@media (min-width:1024px)': {
      transition: `text-shadow 0.2s ${theme.transitions.easing.easeOut}`,
      '&:hover': {
        textShadow: '1px 0 0 #fff',
      },
    },
    '@media (min-width:1024px) and (max-width: 1439px)': {
      fontSize: 14,
    },
    '@media (min-width:1440px)': {
      fontSize: 18,
    },
  },
  activeLink: {
    position: 'relative',
    '@media (min-width:1024px)': {
      textShadow: '1px 0 0 #fff',
    },
    '&:after': {
      position: 'absolute',
      left: 0,
      bottom: -5,
      content: '""',
      width: '100%',
      height: 1,
      background: '#fff',
    },
  },
});
