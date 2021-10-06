import starIcon from '../../../img/icons/star-main.svg';
import starFill from '../../../img/icons/star_active.svg';

export default theme => ({
  sidebar: {
    ...theme.customerSidebar.sidebar,
  },
  pageScrolled: {
    '@media (max-width:1023px)': {
      top: 107,
    },
  },
  userName: {
    margin: 0,
    textAlign: 'center',
    margin: '0 0 40px',
    fontSize: 36,
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
  navLink: {
    ...theme.customerSidebar.navLink,
  },
  navLinkActive: {
    ...theme.customerSidebar.navLink,
    backgroundColor: 'rgba(0, 198, 198, 0.2)',
  },
  link: {
    ...theme.customerSidebar.link,
  },
  sidebarClose: {
    ...theme.customerSidebar.sidebarClose,
  },
});
