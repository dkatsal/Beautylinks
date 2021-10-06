export default theme => ({
  box: {
    backgroundColor: '#fff',
    '@media (max-width: 767px)': {
      padding: '45px 20px 40px',
    },
    '@media (min-width: 768px)': {
      width: '690px',
      margin: '71px auto',
      padding: '45px 65px 40px',
      boxShadow: '0 5px 32px rgba(0, 0, 0, 0.14)',
      borderRadius: 20,
    },
  },
  input: {
    marginBottom: 24,
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
  btnBox: {
    textAlign: 'center',
  },
  title: {
    margin: '0 0 60px',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 400,
  },
  descText: {
    textAlign: 'center',
    fontSize: 18,
    '& > a': {
      color: '#2F3A96',
      textDecoration: 'underline',
    },
  },
});
