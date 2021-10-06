import starIcon from '../../../img/icons/star-main.svg';
import starFill from '../../../img/icons/star_active.svg';
import ellipse from '../../../img/ellipse-review.png';

export default theme => ({
  wrap: {
    background: '#f7f7f7',
  },
  container: {
    paddingTop: 60,
    ...theme.blocks.container,
  },
  title: {
    margin: '0 0 65px',
    textAlign: 'center',
    ...theme.customerContent.title,
  },
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '50px',
    justifyContent: 'space-around',
    '& img': {
      width: '100%',
    },
    '& > div': {
      backgroundSize: '92%',
      background: `url("${ellipse}") no-repeat`,
      '@media (max-width:700px)': {
        backgroundPosition: '50% 20px',
      },
      '@media (min-width:701px)': {
        backgroundPosition: '50% 40px',
      },
    },
  },
  boxItem: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '700px',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxImg: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    '@media (max-width:700px)': {
      width: '44px',
      height: '44px',
    },
    '@media (min-width:701px)': {
      width: '90px',
      height: '90px',
    },
  },
  boxImgCont: {
    margin: 'auto',
    width: 110,
    overflow: 'hidden',
    borderRadius: '50%',
    position: 'relative',
  },
  notActiveImg: {
    position: 'absolute',
    top: 0,
    background: '#ffffff',
    opacity: 0.5,
    '@media (max-width:700px)': {
      width: '44px',
      height: '44px',
    },
    '@media (min-width:701px)': {
      width: '90px',
      height: '90px',
    },
  },
  carouselNavButtons: {
    backgroundColor: 'transparent !important',
    borderRadius: 50,
    border: '2px solid #00C6C6',
    color: '#00C6C6',
    '@media (max-width:700px)': {
      padding: 5,
    },
  },
  buttonWrapper: {
    position: 'absolute',
    height: 'auto',
    '@media (max-width:700px)': {
      top: 10,
    },
    '@media (min-width:701px)': {
      top: 75,
    },
  },
  boxCont: {
    textAlign: 'center',
    // maxWidth: 460,
    flexGrow: 1,
  },
  name: {
    fontWeight: 500,
    margin: '0 0 20px',
    '@media (max-width:700px)': {
      fontSize: 16,
    },
    '@media (min-width:701px)': {
      fontSize: 24,
    },
  },
  time: {
    fontWeight: 500,
    marginBottom: 20,
    opacity: '0.7',
    '@media (max-width:700px)': {
      fontSize: 14,
    },
    '@media (min-width:701px)': {
      fontSize: 21,
    },
  },
  desc: {
    ...theme.customerContent.desc,
    '@media (max-width:700px)': {
      margin: '0 20px 0',
    },
    '@media (min-width:701px)': {
      margin: '0 60px 0',
    },
  },
  descWrap: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  userReviews: {
    margin: '10px 0 0',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > span': {
      display: 'inline-flex',
      width: 22,
      height: 22,
    },
    '& > span.MuiRating-iconFilled': {
      background: `url("${starFill}") 0 no-repeat`,
    },
    '& > span.MuiRating-iconEmpty': {
      background: `url("${starIcon}") 0 no-repeat`,
    },
  },
  reviewFill: {
    background: `url("${starFill}") 0 no-repeat`,
  },
  reviewClean: {
    background: `url("${starIcon}") 0 no-repeat`,
  },
  reviewText: {
    width: '100%',
    margin: '10px 0 0',
    display: 'inline-flex',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 700,
  },
});
