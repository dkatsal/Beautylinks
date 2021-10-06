export default theme => ({
  title: {
    fontWeight: 700,
    textAlign: 'center',
    '@media (max-width: 479px)': {
      margin: '0 0 20px',
      fontSize: 24,
    },
    '@media (min-width: 480px) and (max-width: 1023px)': {
      margin: '0 0 25px',
      fontSize: 30,
    },
    '@media (min-width: 1024px)': {
      margin: '0 0 25px',
      fontSize: 24,
    },
  },
  desc: {
    textAlign: 'center',
    color: '#4C4C4C',
    '@media (max-width: 479px)': {
      margin: '0 0 30px',
      fontSize: 18,
    },
    '@media (min-width: 480px) and (max-width: 768px)': {
      margin: '0 0 35px',
      fontSize: 21,
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      margin: '0 0 35px',
      fontSize: 18,
    },
    '@media (min-width: 1024px)': {
      margin: '0 0 35px',
      fontSize: 18,
    },
  },
  input: {
    marginBottom: 30,
  },
  chbx: {
    color: '#01c7c7',
    '& + span': {
      '@media (max-width: 479px)': {
        fontSize: 14,
      },
    },
  },
  checked: {
    color: '#01c7c7',
  },
  fieldTitle: {
    fontSize: 18,
    marginBottom: 30,
  },
  formControl: {
    width: '100%',
    marginTop: 40,
  },
  btnBox: {
    margin: '40px 0 0',
    textAlign: 'center',
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    textTransform: 'none',
    '@media (max-width: 1023px)': {
      width: '100%',
      maxWidth: 700,
      height: 70,
      fontSize: 24,
    },
    '@media (min-width: 1024px)': {
      padding: '0 50px',
      fontSize: 18,
    },
  },
});
