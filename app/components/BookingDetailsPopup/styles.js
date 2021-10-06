export default theme => ({
  dialogBox: {
    '& > div > div': {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      maxWidth: 1024,
      boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1)',
      '@media (max-width: 1023px)': {
        borderRadius: 10,
        padding: '0px 10px 10px',
      },
      '@media (min-width: 1024px)': {
        borderRadius: 40,
        padding: '0 50px 48px',
      },
    },
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
    margin: 0,
  },
  dialogCont: {
    padding: 0,
    margin: '44px auto 0',
    display: 'flex',
    flexWrap: 'wrap',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    '& svg:not(:root)': {
      fill: '#000000',
      '@media (max-width: 767px)': {
        fontSize: '1.2rem',
      },
      '@media (min-width: 768px)': {
        fontSize: '2.8rem',
      },
    },
  },
  bookingDesc: {
    '@media (max-width: 1023px)': {
      width: '100%',
      marginBottom: 40,
    },
    '@media (min-width: 1024px)': {
      width: 'calc(100% - 440px)',
      marginRight: 40,
    },
  },
  item: {
    margin: '0 auto 25px',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      maxWidth: 400,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  mapBox: {
    height: '270px',
    backgroundColor: '#C4C4C4',
    '@media (max-width:767px)': {
      width: '100%',
    },
    '@media (min-width:768px)': {
      width: '385px',
    },
  },
  label: {
    width: 120,
    color: '#4C4C4C',
    fontSize: 16,
    '@media (max-width:767px)': {
      fontSize: 12,
    },
  },
  desc: {
    // width: 'calc(100% - 130px)',
    fontSize: 18,
    '@media (max-width:767px)': {
      fontSize: 12,
    },
  },
  link: {
    marginLeft: 'auto',
    fontSize: 18,
    '@media (max-width:767px)': {
      fontSize: 12,
    },
  },
  dialogBottom: {
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 35,
    justifyContent: 'center',
  },
  btn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    '@media (max-width:767px)': {
      fontSize: 16,
      // lineHeight: '49px',
      height: 49,
      padding: '0 20px',
      margin: '0 auto 20px',
      borderRadius: 20,
      textTransform: 'capitalize',
      fontWeight: 400,
    },
    '@media (min-width:768px)': {
      fontSize: 18,
      // lineHeight: '60px',
      height: 60,
      padding: '0 40px',
      maxWidth: 'fit-content',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      border: '2px solid #00c7c7',
      color: '#00c7c7',
    },
  },
  btnCancel: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.red),
    '@media (max-width:767px)': {
      fontSize: 16,
      // lineHeight: '49px',
      height: 49,
      padding: '0 20px',
      margin: '0 0 20px auto',
      borderRadius: 20,
      textTransform: 'capitalize',
      fontWeight: 400,
    },
    '@media (min-width:768px)': {
      fontSize: 18,
      // lineHeight: '60px',
      height: 60,
      padding: '0 40px',
      maxWidth: 'fit-content',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      border: '2px solid #CB2026',
      color: '#CB2026',
    },
  },
  linkBottom: {
    width: '100%',
    marginTop: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 700,
    textAlign: 'center',
    color: '#365C94',
    textDecoration: 'underline',
    border: 'none',
    background: 'none',
    '@media (max-width:767px)': {
      display: 'none',
    },
  },
  linkIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    textDecoration: 'none',
    borderRadius: '50%',
    border: '1px solid #4C4C4C',
    color: '#4C4C4C',
  },
});
