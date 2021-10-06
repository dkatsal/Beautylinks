export default theme => ({
  wrap: {
    backgroundColor: '#ffffff',
  },
  container: {
    ...theme.blocks.container,
    position: 'relative',
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
  btnBox: {
    textAlign: 'center',
    marginBottom: 70,
  },
});
