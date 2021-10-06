export default theme => ({
  container: {
    ...theme.blocks.container,
    padding: '50px 0 64px',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '& > aside': {
      flexGrow: 1,
      '@media (min-width: 768px)': {
        padding: '40px 50px 60px',
        boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
      },
      '@media (min-width: 768px) and (max-width: 1259px)': {
        width: 'calc(50% - 20px)',
      },
    },
  },
  sidebarLeft: {
    '@media (max-width: 767px)': {
      order: 2,
    },
    '@media (min-width: 768px) and (max-width: 1259px)': {
      marginRight: 20,
    },
    '@media (min-width: 1024px)': {
      maxWidth: 830,
    },
    '@media (min-width: 1260px)': {
      marginRight: 40,
    },
  },
  sidebarRight: {
    '@media (max-width: 767px)': {
      order: 1,
      marginBottom: 80,
    },
    '@media (min-width: 1024px)': {
      maxWidth: 530,
    },
  },
  label: {
    fontWeight: 700,
    fontSize: 18,
    margin: '0 0 10px',
  },
  desc: {
    margin: '0 0 30px',
    color: '#4C4C4C',
    '@media (max-width: 1439px)': {
      fontSize: 14,
    },
    '@media (min-width: 1440px)': {
      fontSize: 16,
    },
  },
  formTitle: {
    margin: '0 0 25px',
    fontSize: 24,
    fontWeight: 700,
    textAlign: 'center',
  },
  services: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#4C4C4C',
    '@media (max-width: 1439px)': {
      fontSize: 16,
      margin: '0 0 10px',
    },
    '@media (min-width: 1440px)': {
      fontSize: 18,
      margin: '0 0 30px',
    },
  },
  bottomSumm: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    paddingBottom: 20,
    borderTop: '1px solid #4C4C4C',
    '@media (max-width: 1439px)': {
      fontSize: 16,
      paddingTop: 10,
    },
    '@media (min-width: 1440px)': {
      fontSize: 20,
      paddingTop: 30,
    },
    '& > b': {
      fontWeight: 700,
    },
  },
  btnBox: {
    textAlign: 'left',
  },
  btBoxCancel: {
    textAlign: 'center',
    // margin: 10,
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    '@media (min-width: 768px) and (max-width: 1023px)': {
      fontSize: 24,
      lineHeight: '60px',
    },
  },
  buttonBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
