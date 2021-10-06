import ratingStar from '../../img/icons/rating-star.svg';
import cleanStar from '../../img/icons/clean-star.svg';

export default theme => ({
  mainContent: {
    '@media (max-width: 768px)': {
      display: 'contents',
    },
    '@media (min-width: 1440px)': {
      maxWidth: 710,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      marginRight: 30,
    },
  },
  mainBox: {
    ...theme.blocks.container,
    maxWidth: 1236,
    '@media (max-width: 767px)': {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto 5px',
    },
    '@media (min-width: 768px)': {
      margin: '0 auto 10px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  },
  reviewBox: {
    ...theme.blocks.container,
    maxWidth: 1236,
    border: '1px solid #00c7c7',
    marginBottom: 10,
  },
  containerBox: {
    '@media (max-width: 767px)': {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
    },
    '@media (min-width: 768px)': {
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  },
  container: {
    padding: '15px 0',
    width: '100%',
    marginRight: 30,
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  inputFullBox: {
    width: '100%',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    margin: '0 0 22px',
  },
  inputFullField: {
    width: '100%',
    minHeight: 150,
    marginTop: 0,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 40,
    padding: '18px 15px',
    background: 'transparent',
    border: 'transparent',
    border: '1px solid #00c7c7',
    fontSize: 16,
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  containerRating: {
    padding: '15px 0',
    width: '100%',
  },
  ratingBlocks: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  headerRight: {
    alignItems: 'center',
    marginBottom: 10,
    '@media (max-width: 767px)': {
      width: 'calc(100% - 100px)',
      height: 80,
    },
    '@media (min-width: 768px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '@media (max-width: 767px)': {
      order: 1,
      padding: '10px 0 0',
    },
    '@media (min-width: 768px)': {
      padding: '10px 0 0',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  boxTitle: {
    width: '100%',
    textAlign: 'center',
    textTransform: 'capitalize',
    '@media (max-width: 767px)': {
      textAlign: 'start',
      fontSize: 19,
      margin: '0 auto 10px',
    },
    '@media (min-width: 768px)': {
      textAlign: 'center',
      order: 1,
      fontSize: 22,
      margin: '5px auto 10px',
    },
  },
  ratingBox: {
    maxWidth: 140,
    fontSize: 14,
    color: '#4C4C4C',
    '@media (min-width: 768px)': {
      order: 2,
    },
    '& p': {
      margin: 0,
      lineHeight: '17px',
    },
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
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
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
  btnBox: {
    marginBottom: '10px',
    textAlign: 'center',
  },
  avatarBox: {
    overflow: 'hidden',
    '@media (max-width: 767px)': {
      width: 80,
      height: 80,
      margin: '0 0 10px 10px',
    },
    '@media (min-width: 768px)': {
      width: 160,
      minWidth: 160,
      height: 160,
      margin: '0 auto 10px',
    },
  },
  avatarImg: {
    width: '100%',
  },

  item: {
    margin: '0 auto 25px',
    '@media (max-width: 768px)': {
      maxWidth: 400,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  link: {
    fontSize: 16,
    '@media (max-width:767px)': {
      fontSize: 12,
    },
  },
});
