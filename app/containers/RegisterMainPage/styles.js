export default theme => ({
  mainBox: {
    ...theme.blocks.container,
    margin: '54px auto 60px',
    '@media (min-width: 1024px)': {
      width: '100% - 20px',
      padding: '40px 0 60px',
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
    },
    '@media (min-width: 1440px)': {
      maxWidth: 1236,
    },
  },
  title: {
    margin: '0 0 25px',
    textAlign: 'center',
    ...theme.customerContent.title,
  },
  desc: {
    margin: '0 0 35px',
    textAlign: 'center',
    ...theme.customerContent.desc,
  },
  container: {
    '@media (min-width: 768px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  registerBox: {
    flexGrow: 1,
    textAlign: 'center',
    '@media (max-width: 767px)': {
      marginBottom: 40,
    },
    '@media (min-width: 768px)': {
      maxWidth: 468,
    },
  },
  registerImg: {
    padding: '8px 0 ',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    '@media (max-width: 767px)': {
      marginBottom: 20,
    },
    '@media (min-width: 768px)': {
      margin: '0 10px 40px',
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
      background: '#FFFFFF',
    },
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    margin: '0 auto',
    '@media (min-width: 1024px)': {
      fontSize: 18,
    },
  },
});
