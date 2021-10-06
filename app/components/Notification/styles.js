import green from '@material-ui/core/colors/green';

export default theme => ({
  content: {
    display: 'block',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
});
