import awardIcon from '../../../img/icons/award.svg';
import yesIcon from '../../../img/icons/check_small.png';
import noIcon from '../../../img/icons/close_small.png';
import baseStarIcon from '../../../img/icons/star.svg';
import starIcon from '../../../img/icons/star_active.svg';
import filterIcon from '../../../img/icons/filter.svg';

const starIconStyle = {
  display: 'inline-block',
  marginRight: 5,
  width: 21,
  height: 20,
  background: `url("${baseStarIcon}") 0 no-repeat`,
};

export default theme => ({
  wrap: {
    flex: 1,
    '&:last-child': {
      paddingBottom: 105,
    },
  },
  head: {
    padding: '40px 0 40px 40px',
  },
  container: {
    width: '100%',
    '@media (max-width:767px)': {
      marginBottom: 40,
      gridTemplateColumns: 'repeat(2,80px) repeat(3,1fr) repeat(1,70px)',
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      marginBottom: 60,
    },
    '@media (max-width:1023px)': {
      display: 'grid',
    },
    '@media (min-width:1024px)': {
      display: 'flex',
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      padding: '40px 0 0 15px',
    },
    '@media (min-width:1440px)': {
      padding: '40px 0 40px 40px',
      borderTop: `1px solid ${theme.palette.BLColors.main}`,
    },
  },
  avatarBox: {
    overflow: 'hidden',
    '@media (max-width:767px)': {
      gridColumn: '1 / 3',
      gridRow: '1 / 4',
      width: 150,
      height: 150,
      borderRadius: 20,
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      gridColumn: '1 / 2',
      gridRow: '1 / 7',
      width: 160,
      height: 160,
      marginRight: 20,
      borderRadius: 20,
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      marginRight: 20,
      width: 140,
      height: 140,
      borderRadius: 20,
    },
    '@media (min-width:1440px)': {
      marginRight: 58,
      width: 208,
      height: 208,
      borderRadius: 22,
    },
    '& img': {
      maxWidth: '100%',
    },
  },
  main: {
    '@media (max-width:1023px)': {
      display: 'contents',
    },
    '@media (min-width:1024px)': {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      maxWidth: 680,
      height: 190,
    },
    '@media (min-width:1440px)': {
      fontSize: 30,
      height: 208,
    },
  },
  mainHead: {
    '@media (max-width:1023px)': {
      display: 'contents',
    },
    '@media (min-width:1024px)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: -5,
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      marginBottom: 20,
    },
    '& > div': {
      display: 'flex',
      alignItems: 'flex-start',
      '@media (max-width:419px)': {
        gridColumn: '1 / 7',
        gridRow: '7 / 8',
        margin: '20px 0',
      },
      '@media (min-width:420px) and (max-width:767px)': {
        gridColumn: '4 / 7',
        gridRow: '4 / 5',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginTop: 20,
      },
      '@media (min-width:768px) and (max-width:1023px)': {
        gridColumn: '2 / 3',
        gridRow: '3 / 4',
        margin: '20px 0',
      },
    },
  },
  practitionerName: {
    fontWeight: 700,
    '@media (max-width:419px)': {
      gridColumn: '1 / 7',
      gridRow: '6 / 7',
    },
    '@media (min-width:420px) and (max-width:767px)': {
      gridColumn: '1 / 4',
      gridRow: '4 / 5',
      alignSelf: 'center',
      marginTop: 20,
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      gridColumn: '2 / 3',
      gridRow: '1 / 2',
    },
    '@media (max-width:1439px)': {
      fontSize: 24,
    },
    '@media (min-width:1440px)': {
      fontSize: 30,
    },
  },
  awardIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 25,
    height: 30,
    background: `url("${awardIcon}") 0 0/100% no-repeat`,
    '@media (max-width:767px)': {
      marginRight: 5,
    },
    '@media (min-width:768px) and (max-width:1439px)': {
      marginRight: 10,
    },
    '@media (min-width:1440px)': {
      marginRight: 18,
    },
  },
  dateValue: {
    opacity: 0.7,
    verticalAlign: 'middle',
    '@media (min-width:1024px) and (max-width:1439px)': {
      fontSize: 21,
    },
    '@media (min-width:1440px)': {
      fontSize: 24,
    },
  },
  sumValue: {
    fontSize: 30,
    fontWeight: 700,
    '@media (max-width:419px)': {
      gridColumn: '3 / 7',
      gridRow: '2 / 3',
    },
    '@media (min-width:420px) and (max-width:767px)': {
      gridColumn: '6 / 7',
      gridRow: '1 / 2',
      fontSize: 22,
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      gridColumn: '3 / 4',
      gridRow: '1 / 2',
      margin: '0 0 20px',
    },
    '@media (min-width:420px) and (max-width:1023px)': {
      textAlign: 'right',
    },
  },
  mainContent: {
    '@media (max-width:1023px)': {
      display: 'contents',
    },
    '@media (min-width:1024px)': {
      display: 'flex',
    },
  },
  practitionerDscr: {
    overflow: 'hidden',
    margin: 0,
    flex: 1,
    color: '#4d4d4d',
    '@media (max-width:419px)': {
      gridColumn: '1 / 7',
      gridRow: '8 / 9',
      margin: '0 0 20px',
    },
    '@media (min-width:420px) and (max-width:767px)': {
      gridColumn: '1 / 7',
      gridRowStart: '5 / 6',
      margin: '20px 0',
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      gridColumn: '2 / 3',
      gridRow: '4 / 7',
    },
    '@media (max-width:1023px)': {
      fontSize: 16,
      // lineHeight: '19px',
      height: 19,
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      height: 80,
      fontSize: 14,
    },
    '@media (min-width:1440px)': {
      height: 84,
      fontSize: 18,
    },
  },
  practTimeBox: {
    opacity: 0.7,
    '@media (max-width:1023px)': {
      display: 'contents',
    },
    '@media (min-width:1024px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 85,
      width: 123,
      marginLeft: 35,
    },
  },
  practTime: {
    fontSize: 16,
    '@media (max-width:419px)': {
      gridColumn: '3 / 7',
      gridRow: '1 / 2',
    },
    '@media (min-width:420px) and (max-width:767px)': {
      gridColumn: '3 / 6',
      gridRow: '1 / 2',
    },
    '@media (min-width:768px) and (max-width: 1023px;)': {
      gridColumn: '3 / 4',
      gridRow: '2 / 4',
    },
    '@media (min-width:768px)': {
      textAlign: 'right',
    },
  },
  practListWrap: {
    display: 'flex',
    '@media (max-width:419px)': {
      gridColumn: '3 / 7',
      gridRow: '3 / 4',
    },
    '@media (min-width:420px) and (max-width:767px)': {
      gridColumn: '3 / 6',
      gridRow: '2 / 3',
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      gridColumn: '3 / 4',
      gridRow: '4 / 5',
    },
    '@media (min-width:768px)': {
      justifyContent: 'flex-end',
    },
  },
  practItem: {
    paddingLeft: 22,
    fontSize: 14,
    background: `url("${noIcon}") 0 50% no-repeat`,
  },
  practItemActive: {
    backgroundImage: `url("${yesIcon}")`,
  },
  mainFooter: {
    '@media (max-width:1023px)': {
      display: 'contents',
    },
    '@media (min-width:1024px)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: 595,
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      transform: 'translateX(-160px)',
    },
    '& > div:first-child': {
      '@media (max-width:419px)': {
        gridColumn: '3 / 7',
        gridRow: '4 / 5',
      },
      '@media (min-width:420px) and (max-width:767px)': {
        gridColumn: '3 / 6',
        gridRow: '3 / 4',
        alignSelf: 'flex-end',
      },
      '@media (min-width:768px) and (max-width:1023px)': {
        gridColumn: '2 / 3',
        gridRow: '2 / 3',
      },
      '@media (min-width:1024px) and (max-width:1439px)': {
        width: 140,
      },
    },
    '& > div:last-child': {
      '@media (max-width:419px)': {
        gridColumn: '1 / 7',
        gridRow: '9 / 10',
        margin: '20px 0',
      },
      '@media (min-width:420px) and (max-width:767px)': {
        gridColumn: '1 / 7',
        gridRow: '6 / 7',
      },
      '@media (min-width:768px) and (max-width:1023px)': {
        gridColumn: '1 / 4',
        gridRow: '7 / 8',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      '@media (min-width:1024px) and (max-width:1439px)': {
        marginLeft: 20,
        flexGrow: 1,
      },
    },
  },
  profileLink: {
    position: 'relative',
    fontWeight: 700,
    color: '#000',
    transition: `color 0.2s ${theme.transitions.easing.easeOut}`,
    '@media (max-width:767px)': {
      width: '100%',
      margin: '0 0 20px',
      fontSize: 18,
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      width: 'calc(50% - 15px / 2)',
      lineHeight: '60px',
      fontSize: 20,
    },
    '@media (max-width:1023px)': {
      display: 'inline-block',
      textAlign: 'center',
      textDecoration: 'underline',
    },
    '@media (min-width:1024px)': {
      marginRight: 22,
      padding: '2px 0',
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      fontSize: 16,
    },
    '@media (min-width:1440px)': {
      fontSize: 18,
    },
    '&:hover': {
      color: theme.palette.BLColors.main,
      '&:after': {
        background: theme.palette.BLColors.main,
      },
    },
    '&:after': {
      '@media (min-width:1024px)': {
        position: 'absolute',
        left: 0,
        bottom: 0,
        content: '""',
        width: '100%',
        height: 2,
        background: '#000',
        transition: `background 0.2s ${theme.transitions.easing.easeOut}`,
      },
    },
  },
  baseStar: starIconStyle,
  star: {
    ...starIconStyle,
    backgroundImage: `url("${starIcon}")`,
  },
  btn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    padding: '0 70px',
    verticalAlign: 'middle',
    letterSpacing: 0,
    textTransform: 'inherit',
    '@media (max-width:767px)': {
      width: '100%',
      fontSize: 18,
      // lineHeight: '60px',
      height: 60,
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      width: 'calc(50% - 15px / 2)',
      // lineHeight: '60px',
      height: 60,
      fontSize: 20,
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      // lineHeight: '40px',
      height: 40,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      border: '2px solid #00c7c7',
      color: '#00c7c7',
    },
  },
  filterInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 45,
    background: '#ECECEC',
    borderRadius: 5,
    fontWeight: 500,
    '@media (max-width:419px)': {
      fontSize: 20,
      height: 60,
    },
    '@media (min-width:420px)': {
      fontSize: 30,
      height: 70,
    },
    '@media (min-width:1024px)': {
      display: 'none',
    },
  },
  filterIcon: {
    '@media (max-width:419px)': {
      width: 27,
      height: 27,
    },
    '@media (min-width:420px)': {
      width: 37,
      height: 37,
    },
    marginRight: 14,
    background: `url("${filterIcon}") 0 0/100% no-repeat`,
  },
});
