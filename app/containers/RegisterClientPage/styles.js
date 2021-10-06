export default theme => ({
  mainBox: {
    ...theme.blocks.container,
    margin: '54px auto 60px',
    '@media (min-width: 1024px)': {
      width: 'calc(100% - 20px)',
      padding: '40px 115px 60px',
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
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
  input: {
    marginBottom: 30,
  },
  chbx: {
    color: '#01c7c7',
  },
  checked: {
    color: '#01c7c7',
  },
  fieldTitle: {
    fontSize: 24,
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
    padding: '0 115px',
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
});
