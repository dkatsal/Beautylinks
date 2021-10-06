export default theme => ({
  root: {
    marginBottom: 5,
    left: 7,
    width: 'calc(100% - 20px)',
  },
  track: {
    height: 3,
    backgroundColor: theme.palette.BLColors.main,
  },
  thumb: {
    marginTop: -7,
    width: 17,
    height: 17,
    backgroundColor: theme.palette.BLColors.main,
  },
  dscr: {
    margin: '0 0 35px',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 300,
    color: '#a5a5a5',
  },
  valueLabel: {
    left: 'calc(-50% + 1px)',
    '& *': {
      backgroundColor: theme.palette.BLColors.main,
    },
  },
});
