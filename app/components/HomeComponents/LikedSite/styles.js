export default theme => ({
  wrap: {
    padding: '65px 0 70px',
    background: theme.palette.BLColors.main,
    '@media (max-width: 767px)': {
      padding: '40px 0 70px',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      padding: '60px 0 120px',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      padding: '50px 0 60px',
    },
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    '@media (max-width: 767px)': {
      margin: '0 0 40px',
      fontSize: 24,
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      margin: '0 0 60px',
      fontSize: 36,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      margin: '0 0 40px',
      fontSize: 24,
    },
    '@media (min-width: 1440px)': {
      margin: '0 0 25px',
      fontSize: 32,
    },
  },
  btnLink: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.white),
    color: '#000',
    '&:hover': {
      color: theme.palette.BLColors.main,
    },
  },
  btnBox: {
    textAlign: 'center',
    '@media (max-width: 1023px)': {
      width: '100%',
      padding: '0 20px',
    },
  },
});
