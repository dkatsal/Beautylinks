import baseStarIcon from '../../../../img/icons/rating_star.svg';
import starIcon from '../../../../img/icons/active_rating_star.svg';

export default theme => ({
  wrap: {
    backgroundColor: '#f8f8f8',
    padding: '30px 40px 34px 40px',
  },
  ratingItem: {
    width: '100%',
    '&:nth-child(2) $star:nth-child(n+5)': {
      backgroundImage: `url("${baseStarIcon}")`,
    },
    '&:nth-child(3) $star:nth-child(n+4)': {
      backgroundImage: `url("${baseStarIcon}")`,
    },
    '&:nth-child(4) $star:nth-child(n+3)': {
      backgroundImage: `url("${baseStarIcon}")`,
    },
    '&:nth-child(5) $star:nth-child(n+2)': {
      backgroundImage: `url("${baseStarIcon}")`,
    },
  },
  star: {
    display: 'inline-block',
    marginRight: 5,
    width: 18,
    height: 17,
    background: `url("${starIcon}") 0 no-repeat`,
  },
  root: {
    color: theme.palette.BLColors.darkGrey,
    '&$checked': {
      color: theme.palette.BLColors.main,
    },
  },
  checked: {},
});
