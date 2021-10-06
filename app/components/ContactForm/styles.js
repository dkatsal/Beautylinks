export default theme => ({
  contactForm: {
    '@media (max-width: 767px)': {
      width: '100%',
      marginTop: 30,
    },
    '@media (min-width: 767px) and (max-width: 1023px)': {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    '@media (min-width: 1024px)': {
      width: 'calc(50% - 10px)',
      maxWidth: 665,
    },
  },
  contactFormAside: {
    '@media (max-width: 767px)': {
      display: 'contents',
    },
    '@media (min-width: 767px) and (max-width: 1023px)': {
      width: 'calc(50% - 16px)',
    },
    '@media (min-width: 1024px)': {
      display: 'contents',
    },
  },
  formInput: {
    width: '100%',
    '@media (max-width: 1439px)': {
      paddingBottom: 10,
    },
    '@media (min-width: 1440px)': {
      paddingBottom: 19,
    },
  },
  input: {
    width: '100%',
    border: '1px solid transparent',
    borderRadius: 30,
    color: '#4d4d4d',
    '&:before': {
      display: 'none',
    },
    '&:after': {
      display: 'none',
    },
    '@media (max-width: 1023px)': {
      padding: 20,
      height: 35,
      fontSize: 14,
      boxShadow: '0px 0px 10px rgb(0 0 0 / 10%)',
    },
    '@media (min-width: 1024px)': {
      height: 62,
      padding: '23px 39px',
      boxShadow: '0px 0px 20px rgb(0 0 0 / 10%)',
    },
    '@media (min-width: 1440px)': {
      fontSize: 24,
    },
  },
  textarea: {
    width: '100%',
    padding: '23px 39px',
    border: '1px solid transparent',
    borderRadius: 30,
    color: '#4d4d4d',
    '@media (max-width: 767px)': {
      height: 200,
      padding: 20,
      fontSize: 18,
    },
    '@media (min-width: 767px) and (max-width: 1023px)': {
      height: 170,
      margin: 0,
    },
    '@media (min-width: 767px) and (max-width: 1439px)': {
      fontSize: 18,
    },
    '@media (max-width: 1023px)': {
      boxShadow: '0px 0px 10px rgb(0 0 0 / 10%)',
    },
    '@media (min-width: 1024px)': {
      height: 160,
      boxShadow: '0px 0px 20px rgb(0 0 0 / 10%)',
    },
    '@media (min-width: 1440px)': {
      fontSize: 24,
    },
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
  btnBox: {
    width: '100%',
    '@media (max-width: 767px)': {
      margin: '0 0 40px',
      textAlign: 'center',
    },
    '@media (min-width: 768px)': {
      marginBottom: 70,
    },
  },
});
