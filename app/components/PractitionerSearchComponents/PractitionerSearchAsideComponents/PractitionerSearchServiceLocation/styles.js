export default theme => ({
  formControl: {
    marginBottom: 20,
  },
  root: {
    color: theme.palette.BLColors.main,
    '&$checked': {
      color: theme.palette.BLColors.main,
    },
  },
  checked: {},
});
