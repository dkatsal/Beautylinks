export default theme => ({
  root: {
    color: theme.palette.BLColors.main,
    '&$checked': {
      color: theme.palette.BLColors.main,
    },
  },
  group: {
    padding: '30px 40px 34px 40px',
    backgroundColor: '#f8f8f8',
  },
  checked: {},
  formControl: {
    width: '100%',
  },
  formControlTitle: {
    padding: '12px 12px 12px 70px',
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
    fontSize: 18,
  },
});
