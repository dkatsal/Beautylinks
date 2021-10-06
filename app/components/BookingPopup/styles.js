export default theme => ({
  root: {
    color: theme.palette.BLColors.main,
    '&$checked': {
      color: theme.palette.BLColors.main,
    },
  },
  checked: {},
  dialogBox: {
    '& > div > div': {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      maxWidth: 1024,
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
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 700,
    margin: '0 0 25px',
  },
  dialogCont: {
    padding: 0,
    maxWidth: 900,
    margin: '0 auto',
  },
  date: {
    textAlign: 'center',
    fontSize: 18,
    color: '#4C4C4C',
    margin: '0 0 8px',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    '& svg:not(:root)': {
      '@media (max-width: 767px)': {
        fontSize: '1.2rem',
      },
      '@media (min-width: 768px)': {
        fontSize: '2.8rem',
      },
      fill: '#000000',
    },
  },
  dayRow: {
    margin: 0,
    padding: '13px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    fontSize: 18,
    borderTop: '1px solid #C4C4C4',
  },
  dayItem: {
    margin: '0 auto',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid transparent',
    '@media (max-width: 767px)': {
      width: 35,
      height: 30,
      fontSize: 16,
    },
    '@media (min-width: 768px)': {
      width: 65,
      height: 46,
      fontSize: 18,
    },
  },
  dateItem: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid transparent',
    borderRadius: 0,
    letterSpacing: 0,
    color: '#DCE5E5',
    minWidth: 'inherit',
    lineHeight: 1,
    padding: 0,
    '@media (max-width: 767px)': {
      width: 35,
      height: 30,
      fontSize: 16,
    },
    '@media (min-width: 768px)': {
      width: 65,
      height: 46,
      fontSize: 18,
    },
    '&:hover': {
      border: '2px solid #00C6C6',
      color: '#00C6C6',
      backgroundColor: 'transparent',
    },
  },
  dateItemCurrent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #00C6C6',
    margin: '0 auto',
    color: '#00C6C6',
    borderRadius: 0,
    letterSpacing: 0,
    padding: 0,
    '@media (max-width: 767px)': {
      width: 35,
      height: 30,
      fontSize: 16,
    },
    '@media (min-width: 768px)': {
      width: 65,
      height: 46,
      fontSize: 18,
    },
  },
  dateBox: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderTop: '1px solid #C4C4C4',
  },
  dateColumn: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 767px)': {
      width: '100%',
    },
    '@media (min-width: 768px)': {
      width: 'calc(100% / 3 - 40px)',
    },
    '&:nth-child(2)': {
      '@media (min-width: 768px)': {
        width: 'calc(100% / 3 + 10px)',
        maxWidth: 260,
      },
    },
    '&:last-child': {
      '@media (max-width: 767px)': {
        marginBottom: 45,
      },
    },
  },
  dateTitle: {
    width: '100%',
    marginBottom: 32,
    color: '#4C4C4C',
    textAlign: 'center',
    fontSize: 18,
    '@media (max-width: 767px)': {
      marginTop: 45,
    },
    '@media (min-width: 768px)': {
      marginTop: 30,
    },
  },
  timeItem: {
    width: 109,
    height: 54,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #4C4C4C',
    color: '#4C4C4C',
    borderRadius: 0,
    letterSpacing: 0,
    fontSize: 18,
    '@media (max-width: 767px)': {
      margin: '0 10px 20px',
    },
    '@media (min-width: 768px)': {
      margin: '0 auto 20px',
    },
    '&:hover': {
      borderColor: '#00C6C6',
      color: '#00C6C6',
      backgroundColor: 'rgba(0, 199, 199, 0.1)',
    },
  },
  timeItemCurrent: {
    width: 109,
    height: 54,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #00C6C6',
    color: '#00C6C6',
    fontSize: 18,
    backgroundColor: 'rgba(0, 199, 199, 0.1)',
    borderRadius: 0,
    letterSpacing: 0,
    '@media (max-width: 767px)': {
      margin: '0 10px 20px',
    },
    '@media (min-width: 768px)': {
      margin: '0 auto 20px',
    },
  },
  timeReservedImg: {
    width: '100%',
    margin: '0 auto 18px',
    display: 'flex',
    justifyContent: 'center',
  },
  timeReserved: {
    margin: 0,
    color: '#C4C4C4',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  servicesBox: {
    paddingTop: 34,
    borderTop: '1px solid #C4C4C4',
  },
  servicesItem: {
    position: 'relative',
    marginBottom: 30,
  },
  servicesRow: {
    marginTop: 0,
    marginBottom: 10,
    paddingRight: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceRem: {
    position: 'absolute',
    top: 0,
    right: 0,
    '& svg:not(:root)': {
      fill: '#C4C4C4',
    },
  },
  servicesTitle: {
    fontWeight: 700,
    '@media (max-width:767px)': {
      fontSize: 16,
    },
    '@media (min-width:768px)': {
      fontSize: 24,
    },
  },
  servicesPrice: {
    fontWeight: 700,
    '@media (max-width:767px)': {
      fontSize: 16,
    },
    '@media (min-width:768px)': {
      fontSize: 18,
    },
  },
  servicesPractitioner: {
    fontSize: 18,
    color: '#C4C4C4',
  },
  servicesTime: {
    fontSize: 14,
    color: '#C4C4C4',
  },
  dialogBottom: {
    width: '100%',
    // maxWidth: 400,
    margin: '0 auto',
    padding: 0,
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    textTransform: 'capitalize',
    '@media (max-width:767px)': {
      fontSize: 16,
      lineHeight: '40px',
      padding: '0 30px',
    },
    '@media (min-width:768px) and (max-width: 1023px)': {
      fontSize: 18,
      lineHeight: '60px',
      padding: '0 40px',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      border: '2px solid #00c7c7',
      color: '#00c7c7',
    },
  },
  radioGroup: {
    margin: '12px 0',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  addServicesContent: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
  },
  addServicesName: {
    marginRight: 10,
  },
  addServicesTime: {
    marginRight: 10,
  },
  addServicesPrice: {
    marginRight: 10,
  },
});
