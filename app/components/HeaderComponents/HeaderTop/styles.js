import burgerIcon from '../../../img/icons/mob_nav.svg';
import userIcon from '../../../img/icons/user_link.svg';
import favoriteIcon from '../../../img/icons/favorite-icon.svg';
import bookingIcon from '../../../img/icons/booking-icon.svg';
import searchIcon from '../../../img/icons/search-dark.svg';

export default theme => ({
  wrap: {
    ...theme.blocks.container,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width:1023px)': {
      height: 86,
    },
    '@media (min-width:1024px)': {
      height: 100,
    },
  },
  block: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width:1023px)': {
      justifyContent: 'center',
      width: '100%',
    },
  },
  userBlock: {
    display: 'flex',
    '@media (max-width:1023px)': {
      position: 'absolute',
      zIndex: 10,
      top: 131,
      right: 0,
      width: '100%',
      height: 'calc(100vh - 131px)',
      padding: 20,
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      textAlign: 'center',
      transform: 'translateX(calc(100% + 190px))',
      transition: '0.8s transform',
      background: '#ffffff',
    },
    '@media (min-width: 1024px)': {
      alignItems: 'center',
      marginRight: 0,
      marginLeft: 'auto',
    },
    '& button ': {},
    '#userTriger:checked ~ header &': {
      transform: 'translateX(0)',
    },
  },
  logo: {
    display: 'inline-block',
    '@media (max-width:1023px)': {
      maxWidth: 264,
      margin: '15px auto 3px',
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      maxWidth: 164,
      marginRight: 29,
    },
    '& img': {
      maxWidth: '100%',
    },
  },
  logoScrolled: {
    '@media (max-width:1023px)': {
      maxWidth: 140,
    },
  },
  favoriteLink: {
    order: 3,
    width: 15,
    height: 15,
    margin: '0 15px 0 0',
    background: `url("${favoriteIcon}") 50%/100% no-repeat`,
    '@media (min-width:767px)': {
      margin: '0 15px 0 auto',
    },
  },
  bookingLink: {
    order: 5,
    width: 15,
    height: 15,
    margin: '0 0 0 15px',
    background: `url("${bookingIcon}") 50%/100% no-repeat`,
  },
  mobileBar: {
    '@media (max-width:1023px)': {
      width: 'calc(100% + 40px)',
      height: 45,
      margin: '0 -20px',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#00c7c7',
    },
    '@media (min-width:1024px)': {
      display: 'none',
    },
  },
  topnavBtn: {
    order: 1,
    display: 'block',
    height: 25,
    width: 25,
    background: `url("${burgerIcon}") 50% 50%/100% no-repeat`,
    '#topMenuTriger:checked ~ header &:before': {
      position: 'fixed',
      display: 'block',
      right: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      background: '#cccccc5e',
      content: '""',
    },
  },
  searchPanelBtn: {
    order: 2,
    height: 15,
    width: 15,
    margin: '0 15px 0 auto',
    display: 'block',
    background: `url("${searchIcon}") 50%/100% no-repeat`,
    '#searchTriger:checked ~ header &:before': {
      position: 'fixed',
      zIndex: 1,
      display: 'block',
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      background: '#cccccc5e',
      content: '""',
    },
    '@media (min-width:767px)': {
      display: 'none',
    },
  },
  userPanelBtn: {
    order: 4,
    display: 'block',
    height: 15,
    width: 15,
    background: `url("${userIcon}") 50%/100% no-repeat`,
    '#userTriger:checked ~ header &:before': {
      position: 'fixed',
      zIndex: 1,
      display: 'block',
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      background: '#cccccc5e',
      content: '""',
    },
  },
  inputBox: {
    position: 'relative',
    '@media (max-width:767px)': {
      position: 'absolute',
      zIndex: 2,
      top: 131,
      left: 0,
      height: 100,
      width: '100%',
      background: '#f5f5f5',
      padding: 20,
      transform: 'translateX(-100%)',
      transition: '0.5s transform',
      '#searchTriger:checked ~ header &': {
        transform: 'translateX(0)',
      },
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      width: 375,
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      marginRight: 53,
      width: 240,
    },
    '@media (min-width:1440px)': {
      marginRight: 40,
      marginLeft: 55,
      width: 300,
    },
  },
  input: {
    padding: '0 85px 0 25px',
    width: '100%',
    color: '#4d4d4d',
    fontSize: 18,
    border: 'none',
    borderRadius: 5,
    '@media (max-width:767px)': {
      lineHeight: '60px',
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      lineHeight: '37px',
      padding: '0 25px 0 10px',
      fontSize: 14,
    },
    '@media (min-width:1440px)': {
      lineHeight: '50px',
      padding: '0 85px 0 25px',
      fontSize: 18,
    },
  },
  searchBtn: {
    position: 'absolute',
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    borderRadius: '0 10px 10px 0',
    background: theme.palette.BLColors.main,
    cursor: 'pointer',
    '@media (max-width:767px)': {
      top: 20,
      right: 20,
      height: 50,
    },
    '@media (min-width:768px)': {
      top: 0,
      right: 0,
      height: '100%',
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      width: 44,
    },
    '@media (min-width:1440px)': {
      width: 60,
    },
    '& img': {
      margin: '0 auto',
      maxWidth: 24,
      '@media (min-width:1024px) and (max-width:1439px)': {
        maxWidth: 14,
      },
      '@media (min-width:1440px)': {
        width: 24,
      },
    },
  },
  howWorksLink: {
    padding: `${theme.spacing(0.3)}px 0`,
    fontSize: 18,
    color: '#000',
    fontWeight: theme.typography.fontWeightBold,
    ...theme.linkActions.underLine(theme.transitions.easing.easeOut, '#000'),
    '@media (max-width:1024px)': {
      display: 'none',
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      fontSize: 16,
    },
    '@media (min-width:1440px)': {
      fontSize: 18,
    },
  },
  loginLink: {
    padding: `${theme.spacing(0.3)}px 0`,
    fontSize: 16,
    color: '#000',
    fontWeight: theme.typography.fontWeightBold,
    ...theme.linkActions.underLine(theme.transitions.easing.easeOut, '#000'),
    '@media (max-width:499px)': {
      margin: '20px 0',
    },
    '@media (min-width:1024px)': {
      marginRight: 38,
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      fontSize: 16,
    },
    '@media (min-width:1440px)': {
      fontSize: 18,
    },
  },
  btnLink: {
    padding: '0 28px',
    display: 'block',
    borderRadius: 20,
    border: `2px solid transparent`,
    background: theme.palette.BLColors.main,
    color: '#fff',
    fontSize: 16,
    lineHeight: '46px',
    fontWeight: theme.typography.fontWeightBold,
    transition: `all 0.2s ${theme.transitions.easing.easeOut}`,
    '@media (min-width:1024px)': {
      marginRight: 38,
    },
    '&:hover': {
      color: theme.palette.BLColors.main,
      border: `2px solid ${theme.palette.BLColors.main}`,
      background: 'transparent',
    },
  },
  commentBtn: {
    position: 'relative',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '50%',
    boxShadow: '0 0 15px rgba(0, 199, 199, 0.50)',
    background: theme.palette.BLColors.main,
    cursor: 'pointer',
    '@media (max-width: 1023px)': {
      position: 'fixed',
      bottom: 20,
      right: 20,
    },
    '&:after': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: -1,
      content: '""',
      width: 0,
      height: 0,
      border: '1px solid #b5b5b5',
      borderRadius: '50%',
      opacity: 0.5,
      animation: 'circle 2s infinite ease-in-out',
    },
    '&:before': {
      position: 'absolute',
      top: -5,
      left: -5,
      zIndex: -1,
      content: '""',
      width: 60,
      height: 60,
      border: '1px solid #b5b5b5',
      borderRadius: '50%',
      opacity: 0.5,
      animation: 'circle2 2s infinite ease-in-out',
    },
  },
  userMenu: {
    transform: 'translateY(50px)',
    '& li': {
      color: '#000',
      transition: `all 0.2s ${theme.transitions.easing.easeOut}`,
      '&:hover': {
        background: 'transparent',
        color: '#00c7c7',
      },
    },
    '& a': {
      color: '#000',
      transition: `all 0.2s ${theme.transitions.easing.easeOut}`,
      '&:hover': {
        color: '#00c7c7',
      },
    },
  },
  userBox: {
    '@media (max-width: 1023px)': {
      display: 'none',
      background: `url("${userIcon}") 50%/100% no-repeat`,
    },
    '@media (min-width: 1024px)': {
      marginRight: theme.spacing(5),
    },
    '& span': {
      fontWeight: 700,
      '& span': {
        '@media (max-width: 499px)': {
          width: '100%',
          marginTop: 10,
        },
      },
    },
    '& .MuiButton-label': {
      '@media (max-width: 499px)': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
  userAvatarBox: {
    overflow: 'hidden',
    width: 40,
    height: 40,
    marginRight: '10px',
    borderRadius: '50%',
    '& svg': {
      fontSize: 40,
    },
    '@media (max-width:1023px)': {
      margin: '0 auto',
    },
  },
  mobileUserBox: {
    '@media (min-width: 1023px)': {
      display: 'none',
      // background: `url("${userIcon}") 50%/100% no-repeat`,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'self-start',
  },
  userBoxLink: {
    lineHeight: '40px',
    margin: 0,
    fontSize: 16,
    fontWeight: 700,
    color: 'black',
  },
  pageScrolled: {
    '@media (max-width:767px)': {
      top: 107,
    },
  },
});
