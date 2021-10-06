export default theme => ({
  header: {
    borderBottom: '1px solid #00c7c7',
    marginBottom: 40,
  },
  title: {
    margin: '0 0 32px',
    ...theme.customerContent.title,
  },
  desc: {
    ...theme.customerContent.desc,
  },
  subtitle: {
    width: '100%',
    margin: '0 0 30px',
    ...theme.customerContent.subtitle,
  },
  container: {
    padding: '0 0 40px',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  formInput: {
    position: 'relative',
    marginBottom: 30,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  input: {
    width: '100%',
    padding: '0 20px',
    border: '1px solid #00c7c7',
    backgroundColor: `#ffffff`,
    fontSize: '18px',
    borderRadius: 10,
    // lineHeight: '50px',
    height: 50,
    '@media (min-width: 768px) and (max-width: 1023px)': {
      maxWidth: 340,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      maxWidth: 310,
    },
    '@media (min-width: 1440px)': {
      maxWidth: 360,
    },
    '&:nth-child(2)': {
      '@media (max-width: 767px)': {
        marginTop: 30,
      },
      '@media (min-width: 768px)': {
        marginLeft: 30,
      },
    },
  },
  link: {
    color: '#4C4C4C',
    display: 'inline-flex',
    textDecoration: 'underline',
    '@media (max-width: 1023px)': {
      marginLeft: 15,
    },
    '@media (min-width: 1024px)': {
      fontSize: 18,
      marginLeft: 7,
    },
  },
  formLink: {
    color: '#4C4C4C',
    display: 'inline-flex',
    textDecoration: 'underline',
    '@media (max-width: 767px)': {
      marginTop: 20,
    },
    '@media (min-width: 768px)': {
      marginLeft: 30,
    },
    '@media (min-width: 1024px)': {
      fontSize: 18,
    },
  },
  formControl: {
    width: '100%',
    maxWidth: 360,
    border: '1px solid #00c7c7',
    borderRadius: 10,
    '& label': {
      fontSize: '18px',
      left: 24,
    },
    '& > div:before': {
      display: 'none',
    },
    '& > div:after': {
      display: 'none',
    },
    '& > div': {
      backgroundColor: 'transparent',
      color: '#3a3a3a',
      '& svg': {
        top: 6,
        right: 7,
        fontSize: '2.3rem',
        fill: '#00c7c7',
      },
      '& em': {
        fontStyle: 'normal',
      },
      '& > div': {
        padding: '0 50px 0 24px',
        lineHeight: '50px',
      },
    },
  },
  btnBox: {
    margin: '0 0 40px',
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    textTransform: 'none',
    boxShadow: 'none',
  },
  payment: {
    width: '100%',
    margin: '0 0 30px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  paymentMessage: {
    width: '100%',
    padding: '14px 22px',
    color: '#007878',
    background: '#beeeee',
    fontSize: 14,
    '@media (max-width: 659px)': {
      margin: '0 0 10px',
    },
    '@media (min-width: 660px)': {
      margin: '0 30px 0 0',
    },
    '@media (min-width: 660px) and (max-width: 1439px)': {
      maxWidth: 355,
    },
    '@media (min-width: 1440px)': {
      maxWidth: 360,
    },
  },
  paymentLink: {
    color: '#2F3A96',
    fontSize: 14,
    textDecoration: 'underline',
  },
  paymentText: {
    fontSize: 18,
    display: 'inline-block',
    '@media (max-width: 767px)': {
      margin: '20px 0 0',
    },
    '@media (min-width: 768px)': {
      width: 'calc(100% - 390px)',
    },
  },
});
