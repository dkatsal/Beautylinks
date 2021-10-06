import mapIconGrey from '../../../img/icons/map-icon-grey.svg';
import addFavoriteIcon from '../../../img/icons/favorite_fill.svg';
import ratingStar from '../../../img/icons/rating-star.svg';
import cleanStar from '../../../img/icons/clean-star.svg';
import masterPageIcon from '../../../img/icons/arrow-right.svg';

export default theme => ({
  header: {
    borderBottom: '1px solid #00c7c7',
  },
  title: {
    margin: '0 0 32px',
    ...theme.customerContent.title,
  },
  desc: {
    ...theme.customerContent.desc,
  },
  container: {
    padding: '50px 0',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #00c7c7',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  masterBox: {
    margin: '40px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  masterImgCont: {
    '@media (max-width: 767px)': {
      display: 'none',
    },
    '@media (min-width: 768px)': {
      maxWidth: 270,
      marginRight: 24,
    },
    '& img': {
      width: '100%',
    },
  },
  masterImg: {
    '@media (max-width: 767px)': {
      display: 'none',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      maxWidth: 230,
      marginBottom: 24,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      maxWidth: 218,
    },
    '@media (min-width: 1440px)': {
      maxWidth: 266,
    },
    '& img': {
      width: '100%',
    },
  },
  masterCont: {
    flexGrow: 1,
    '@media (max-width: 767px)': {
      padding: 10,
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      display: 'contents',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      flexBasis: 405,
      marginLeft: 15,
    },
    '@media (min-width: 1440px)': {
      maxWidth: '100%',
    },
  },
  masterHeader: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      width: '100%',
      marginBottom: 40,
    },
    '@media (min-width: 767px) and (max-width: 1023px)': {
      flexBasis: 440,
      flexGrow: 1,
      marginLeft: 20,
    },
    '@media (min-width: 1024px)': {
      width: '100%',
      marginBottom: 20,
    },
  },
  leftBlock: {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    '@media (max-width: 767px)': {
      width: 'calc(100% - 50px)',
      marginBottom: 40,
    },
    '&:after': {
      '@media (min-width: 1024px)': {
        position: 'absolute',
        width: 1,
        display: 'block',
        background: '#C4C4C4',
        content: '""',
      },
      '@media (min-width: 1024px) and (max-width: 1439px)': {
        height: 43,
        right: 80,
        bottom: 0,
      },
      '@media (min-width: 1440px)': {
        right: 15,
        top: 10,
        height: 55,
      },
    },
  },
  avatarBox: {
    overflow: 'hidden',
    flexShrink: 0,
    width: 80,
    height: 80,
    '@media (max-width: 767px)': {
      marginRight: 12,
    },
    '@media (min-width: 768px)': {
      marginRight: 26,
    },
    '& img': {
      width: '100%',
    },
  },
  textBox: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (min-width: 1440px)': {
      maxWidth: 'calc(100% - 130px)',
    },
  },
  boxTitle: {
    margin: 0,
    fontWeight: 700,
    '@media (max-width: 767px)': {
      fontSize: 20,
    },
    '@media (min-width: 768px)': {
      fontSize: 24,
    },
  },
  boxDesc: {
    width: '100%',
    margin: '15px 0 0',
    display: 'flex',
    alignItems: 'center',
    color: '#4C4C4C',
    '@media (max-width: 767px)': {
      fontSize: 10,
    },
    '@media (min-width: 768px)': {
      fontSize: 16,
    },
  },
  contactsMapIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    display: 'inline-flex',
    flexShrink: 0,
    verticalAlign: 'middle',
    background: `url("${mapIconGrey}") 0 no-repeat`,
    transform: 'translateY(3px)',
  },
  masterDesc: {
    color: '#4C4C4C',
    fontSize: 18,
    lineHeight: 1.5,
  },
  ratingBox: {
    maxWidth: 140,
    fontSize: 14,
    color: '#4C4C4C',
    '@media (max-width: 767px)': {
      margin: '10px 0 0',
      width: '100%',
    },
    '& p': {
      margin: 0,
      lineHeight: '17px',
    },
    '& a': {
      color: '#00C6C6',
    },
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  ratingStar: {
    width: 21,
    height: 20,
    display: 'inline-block',
    background: `url("${ratingStar}") 0 no-repeat`,
    marginRight: 5,
  },
  cleanStar: {
    width: 21,
    height: 20,
    display: 'inline-block',
    background: `url("${cleanStar}") 0 no-repeat`,
    marginRight: 5,
  },
  favoriteBox: {
    border: 'transparent',
    display: 'block',
    background: `url("${addFavoriteIcon}") 0 no-repeat`,
    cursor: 'pointer',
    '@media (max-width: 767px)': {
      width: 30,
      height: 30,
      backgroundSize: '100%',
      alignSelf: 'flex-start',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: 50,
      height: 50,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: 38,
      height: 38,
    },
    '@media (min-width: 1440px)': {
      width: 30,
      height: 30,
    },
  },
  servicesRow: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 767px)': {
      order: 2,
      margin: '20px 0 0',
      fontSize: 12,
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
      marginBottom: 30,
      fontSize: 18,
    },
    '@media (min-width: 1024px) and (max-width: 1440px)': {
      fontSize: 14,
      marginBottom: 20,
    },
    '@media (min-width: 1440px)': {
      fontSize: 18,
      marginBottom: 20,
    },
    '& > span:first-child': {
      '@media (max-width: 1439px)': {
        flexBasis: 120,
        flexGrow: 1,
      },
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  servicesLeft: {
    '@media (max-width: 767px)': {
      flexGrow: 1,
    },
    '@media (max-width: 768px)': {
      display: 'content',
    },
  },
  serviceTime: {
    color: '#C4C4C4',
    '@media (max-width: 767px)': {
      flexGrow: 1,
      margin: '5px 0 0',
      display: 'block',
    },
    '@media (max-width: 768px)': {
      display: 'content',
      margin: '0 0 0 auto',
    },
  },
  servicePrice: {
    margin: '0 18px 0 34px',
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    borderRadius: 20,
    fontWeight: 400,
    '@media (max-width: 767px)': {
      height: 36,
      fontSize: 12,
    },
    '@media (min-width: 768px)': {
      height: 40,
      fontSize: 16,
    },
  },
  masterPageLink: {
    color: '#00C6C6',
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    '@media (max-width: 767px)': {
      margin: '20px auto 0',
      lineHeight: '50px',
    },
    '@media (min-width: 768px)': {
      width: '100%',
      justifyContent: 'flex-end',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
    },
    '&:after': {
      width: 11,
      height: 11,
      marginLeft: 8,
      display: 'block',
      background: `url("${masterPageIcon}") 0 no-repeat`,
      content: '""',
    },
  },
});
