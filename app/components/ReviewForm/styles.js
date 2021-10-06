import ratingStar from '../../img/icons/rating-star.svg';
import cleanStar from '../../img/icons/clean-star.svg';
export default theme => ({
  reviewBox: {
    ...theme.blocks.container,
    maxWidth: 1236,
    border: '1px solid #00c7c7',
    marginBottom: 10,
  },
  containerBox: {
    // ...theme.blocks.container,
    // maxWidth: 1236,
    // // borderRadius: 10,
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
    // borderBottom: '1px solid #00c7c7',
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
  boxTitle: {
    width: '100%',
    textAlign: 'center',
    textTransform: 'capitalize',
    '@media (max-width: 890px)': {
      textAlign: 'start',
      fontSize: 20,
      margin: '0 auto',
    },
    '@media (min-width: 891px)': {
      textAlign: 'center',
      order: 1,
      fontSize: 22,
      margin: '0 auto',
    },
  },
  headerRight: {
    width: '50%',
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
  ratingBox: {
    maxWidth: '170px',
    fontSize: 14,
    color: '#4C4C4C',
    '@media (min-width: 768px)': {
      order: 2,
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
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
  btnBox: {
    marginBottom: '10px',
    textAlign: 'center',
  },
  cleanStar: {
    width: 21,
    height: 20,
    display: 'inline-block',
    background: `url("${cleanStar}") 0 no-repeat`,
    marginRight: 5,
    border: 'none',
  },

  ratingStar: {
    width: 21,
    height: 20,
    display: 'inline-block',
    background: `url("${ratingStar}") 0 no-repeat`,
    marginRight: 5,
    border: 'none',
  },
});
