import addFavoriteIcon from '../../../img/icons/favorite.svg';
import addFavoriteFillIcon from '../../../img/icons/favorite_fill.svg';
import rewIcon from '../../../img/icons/rew_icon.svg';
import complaintIcon from '../../../img/icons/complaint_icon.svg';
import shareIcon from '../../../img/icons/share_icon.svg';
import ratingStar from '../../../img/icons/rating-star.svg';
import cleanStar from '../../../img/icons/clean-star.svg';

export default theme => ({
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '@media (max-width: 767px)': {
      order: 1,
      padding: '30px 0 0',
    },
    '@media (min-width: 768px)': {
      padding: '30px 0 0',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  avatarBox: {
    overflow: 'hidden',
    '@media (max-width: 767px)': {
      width: 80,
      height: 80,
      margin: '0 0 10px 10px',
    },
    '@media (min-width: 768px)': {
      width: 230,
      minWidth: 230,
      height: 230,
      margin: '0 auto 10px',
    },
  },
  avatarImg: {
    width: '100%',
  },
  headerRight: {
    '@media (max-width: 767px)': {
      width: 'calc(100% - 100px)',
      height: 80,
    },
    '@media (min-width: 768px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  ratingBox: {
    maxWidth: 140,
    fontSize: 14,
    color: '#4C4C4C',
    '@media (min-width: 768px)': {
      order: 1,
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
  ratingText: {
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
  boxTitle: {
    width: '100%',
    textTransform: 'capitalize',
    '@media (max-width: 767px)': {
      fontSize: 20,
      margin: '0 auto 15px',
    },
    '@media (min-width: 768px)': {
      order: 2,
      fontSize: 24,
      margin: '5px auto 35px',
    },
  },
  btnBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 767px)': {
      margin: '20px 0 0px',
    },
    '@media (min-width: 768px)': {
      marginBottom: 50,
    },
    '& > button': {
      paddingTop: 45,
      display: 'flex',
      alignItems: 'center',
      color: '#4C4C4C',
      border: 'transparent',
      '@media (max-width: 767px)': {
        fontSize: 12,
        margin: '0 15px',
      },
      '@media (min-width: 768px)': {
        fontSize: 14,
        margin: '0 25px',
      },
      '&:first-child': {
        marginLeft: 0,
      },
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  favoriteBox: {
    background: `url("${addFavoriteIcon}") top center no-repeat`,
  },
  favoriteFillBox: {
    background: `url("${addFavoriteFillIcon}") top center no-repeat`,
  },
  rewBox: {
    background: `url("${rewIcon}") top center no-repeat`,
  },
  complaintBox: {
    background: `url("${complaintIcon}") top center no-repeat`,
  },
  shareBox: {
    background: `url("${shareIcon}") top center no-repeat`,
  },
  shareContent: {
    minWidth: 100,
    display: 'flex',
    justifyContent: 'center',
  },
  socialIcon: {
    margin: 5,
  },
});
