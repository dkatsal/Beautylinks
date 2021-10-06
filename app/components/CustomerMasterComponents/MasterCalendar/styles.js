import arrowIcon from '../../../img/icons/arrow-black.svg';

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
  monthChecker: {
    margin: '36px 0 44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthTitle: {
    margin: '0 17px',
    fontWeight: 700,
    '@media (max-width: 1023px)': {
      fontSize: 24,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      fontSize: 18,
    },
    '@media (min-width: 1440px)': {
      fontSize: 24,
    },
  },
  bntNext: {
    height: 17,
    width: 9,
    border: 'transparent',
    background: `url("${arrowIcon}") 0 no-repeat`,
  },
  bntPrew: {
    height: 17,
    width: 9,
    border: 'transparent',
    background: `url("${arrowIcon}") 0 no-repeat`,
    transform: 'rotate(180deg)',
  },
  scheduleHeader: {
    margin: '0 0 0 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    border: '1px solid #C4C4C4',
    fontWeight: 700,
    '@media (max-width: 1023px)': {
      fontSize: 16,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      fontSize: 14,
    },
    '@media (min-width: 1440px)': {
      fontSize: 18,
    },
    '& p': {
      flexGrow: 1,
      maxWidth: '20%',
      margin: 0,
      padding: '10px 0',
      borderRight: '1px solid #C4C4C4',
      textAlign: 'center',
      '&:last-child': {
        border: 'none',
      },
    },
  },
  scheduleTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableRow: {
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 16,
  },
  tableDate: {
    width: 40,
    paddingRight: 5,
    color: '#C4C4C4',
    transform: 'translateY(-12px)',
    fontSize: 14,
    textAlign: 'right',
  },
  tableCell: {
    width: 'calc(100% / 7 - 40px / 7)',
    backgroundColor: '#F2F2F2',
    '& p': {
      margin: 0,
      border: '1px solid #C4C4C4',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '@media (max-width: 767px)': {
        padding: 6,
        height: 60,
        fontSize: 14,
      },
      '@media (min-width: 768px)': {
        padding: '10px 0',
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        height: 35,
      },
      '@media (min-width: 1024px)': {
        height: 30,
      },
      '@media (min-width: 1024px) and (max-width: 1439px)': {
        fontSize: 14,
      },
      '@media (min-width: 1440px)': {
        fontSize: 16,
      },
    },
  },
  tableDesc: {
    marginTop: 30,
    marginBottom: 40,
    paddingLeft: 40,
    '@media (max-width: 1023px)': {
      fontSize: 24,
    },
    '@media (min-width: 1024px)': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      fontSize: 12,
    },
    '@media (min-width: 1440px)': {
      fontSize: 16,
    },
    '& > div': {
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      '@media (max-width: 1023px)': {
        paddingBottom: 28,
      },
      '@media (min-width: 1024px)': {
        paddingBottom: 20,
      },
    },
    '& p': {
      marginRight: 10,
      width: 135,
      '@media (max-width: 1023px)': {
        height: 50,
      },
    },
    '& > div div': {
      '@media (min-width: 1024px)': {
        width: 150,
      },
    },
  },
  details: {
    marginTop: 20,
    maxWidth: 100,
    '& div': {
      width: 180,
      height: 42,
      marginBottom: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
    },
  },
  dayOff: {
    backgroundColor: '#EDEDED',
  },
  booked: {
    backgroundColor: '#FFD6D6',
  },
  expired: {
    backgroundColor: '#FFD6D6',
  },
  free: {
    backgroundColor: '#D6FFDF',
  },
  freeCell: {
    backgroundColor: '#FFFFFF',
  },
  bookedCell: {
    border: '2px solid #00C6C6!important',
    backgroundColor: '#FFFFFF',
  },
  bookedCellStart: {
    border: '2px solid #00C6C6!important',
    borderBottom: 'none !important',
    backgroundColor: '#FFFFFF',
  },
  bookedCellMiddle: {
    border: '2px solid #00C6C6!important',
    borderBottom: 'none !important',
    borderTop: 'none !important',
    backgroundColor: '#FFFFFF',
  },
  bookedCellEnd: {
    border: '2px solid #00C6C6!important',
    borderTop: 'none !important',
    backgroundColor: '#FFFFFF',
  },
  expiredCell: {
    border: '2px solid #FFB600!important',
    backgroundColor: '#FFFFFF',
  },
  expiredCellStart: {
    border: '2px solid #FFB600!important',
    borderBottom: 'none !important',
    backgroundColor: '#FFFFFF',
  },
  expiredCellMiddle: {
    border: '2px solid #FFB600!important',
    borderBottom: 'none !important',
    borderTop: 'none !important',
    backgroundColor: '#FFFFFF',
  },
  expiredCellEnd: {
    border: '2px solid #FFB600!important',
    borderTop: 'none !important',
    backgroundColor: '#FFFFFF',
  },
  link: {
    color: '#00c7c7',
  },
  // Calendar styles
  calendar: {
  },
  calendarHeader:{
    textAlign: 'center',
    margin: '55px auto',
    fontSize: 24,
    fontFamily: 'Gilroy',
    fontWeight: 600,
    '& button':{
      border: 'none',
      background: 'none',
    },
    '& span':{
      display: 'inline-block',
      width: 200
    }
  },
  calendarTable:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  calendarTableHeader:{
    // display:'flex',
    maxWidth: 135,
    width: '100%',
    border: '1px solid #00C6C6',
    borderTop: 'none',
    textAlign: 'center',
    padding: 10,
  },
  calendarTableHeaderCell: {
    '&:not(.mobile)': {
      '@media (max-width: 1023px)': {
        display: 'none',
      },
    },
    '&.mobile': {
      '@media (min-width: 1024px)': {
        display: 'none',
      },
    },
  },
  calendarTableRow: {
    display: 'flex',
  },
  calendarTableCell: {
    border: '1px solid #00C6C6',
    minHeight: 150,
    maxWidth: 135,
    width: '100%',
    padding: '5px 12px',
    display: 'flex',
    flexDirection: 'column',
    '&:not(.day)': {
      cursor: 'inherit',
    },
    '@media (max-width: 767px)': {
      // display: 'none',
      padding: '5px 5px',
    },
  },
  calendarDayNumber: {
    fontFamily: 'Gilroy',
    fontWeight: 'bold',
    fontSize: 18,
  },
  calendarBookings: {
    fontSize: 12,
    fontFamily: 'Mont',
    textAlign: 'left',
    marginTop: 'auto',
    '& div': {
      lineHeight: '22px'
    },
    '&:not(.mobile)': {
      '@media (max-width: 767px)': {
        display: 'none',
      },
    },
    '&.mobile': {
      margin: 'auto',
      '@media (min-width: 768px)': {
        display: 'none',
      },
    },
  },
  // CalendarPopup styles
  dialogBox: {
    '& > div > div': {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      maxWidth: 400,
      boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
      '@media (max-width: 1023px)': {
        padding: '0px 10px 10px',
      },
      '@media (min-width: 1024px)': {
        padding: '0px 10px 48px',
      },
    },
  },
  popupTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 700,
    margin: '0 0 25px',
    width: '80%',
  },
  dialogCont: {
    padding: 0,
    maxWidth: '80%',
    margin: '0 auto',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    '& svg:not(:root)': {
      fontSize: '2.8rem',
      fill: '#000000',
    },
  },
  calendarPopupBookings: {
    fontSize: 16,
    fontFamily: 'Mont',
    textAlign: 'left',
    '& div': {
      lineHeight: '22px',
    },
  },
  popupBookingsItem :{
    display: 'flex',
    alignItems: 'center',
  },
  detailsBtn: {
    marginLeft: 'auto',
    padding: 0,
    fontSize: 12,
    textTransform: 'lowercase',
    '& .MuiButton-label': {
        lineHeight: '1em',
    },
  },
  optionsLabel: {
    '@media (max-width: 819px)': {
        height: 25,
        width: 25,
        // minWidth: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #4C4C4C',
        borderRadius: '50%',
        fontWeight: 700,
        color: '#4C4C4C',
    },
    '@media (min-width: 820px)': {
        display: 'none',
    },
  },
});
