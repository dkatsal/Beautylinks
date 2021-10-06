export default theme => ({
  contentBox: {
    background: '#FFFFFF',
    color: '#4C4C4C',
    '@media (max-width: 767px)': {
      order: 5,
    },
    '@media (min-width: 768px)': {
      marginTop: 30,
      padding: '21px 21px 21px 34px',
      boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1)',
    },
  },
  boxTitle: {
    marginBottom: 30,
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
  servicesRow: {
    marginBottom: 30,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 767px)': {
      fontSize: 16,
    },
    '@media (min-width: 768px)': {
      fontSize: 18,
    },
    '& span:first-child': {
      '@media (max-width: 420px)': {
        width: 120,
      },
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  serviceLabel: {
    '@media (min-width: 1024px)': {
      maxWidth: 'calc(100% - 370px)',
    },
  },
  serviceTime: {
    color: '#C4C4C4',
    margin: '0 0 0 auto',
  },
  servicePrice: {
    fontWeight: 700,
    '@media (max-width: 767px)': {
      width: '20%',
      margin: '0 0 0 34px',
    },
    '@media (min-width: 768px)': {
      width: '10%',
      margin: '0 30px 0 34px',
    },
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    margin: 0,
    '@media (max-width: 767px)': {
      width: '100%',
      fontSize: 18,
      padding: '0 20px',
      lineHeight: '36px',
      marginTop: 20,
      borderRadius: 20,
    },
    '@media (min-width: 768px)': {
      width: 'auto',
      padding: '0 20px',
      fontSize: 18,
      lineHeight: '50px',
      borderRadius: 5,
    },
  },
});
