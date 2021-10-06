export default theme => ({
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
