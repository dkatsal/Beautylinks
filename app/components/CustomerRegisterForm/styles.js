export default theme => ({
  root: {
    lineHeight: 2.1,
    '& > div': {
      marginBottom: 28,
    },
    '& > div:last-child': {
      marginBottom: 0,
    },
  },
  chbx: {
    color: '#01c7c7',
  },
  checked: {
    color: '#01c7c7',
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
  btnBox: {
    textAlign: 'center',
    marginTop: 60,
  },
  descText: {
    textAlign: 'center',
    fontSize: 18,
    '& > a': {
      color: '#2F3A96',
      textDecoration: 'underline',
    },
  },
  descText2: {
    fontSize: 13,
    lineHeight: '1.5em',
  },
  descText2Link: {
    color: '#2F3A96',
    textDecoration: 'underline',
    marginLeft: 6,
  },
  policyBox: {
    display: 'flex',
    alignItems: 'center',
  },
});
