export default theme => ({
  box: {
    paddingBottom: '50px',
  },
  boxItem: {
    boxShadow: 'none;',
    background: 'rgba(0, 198, 198, 0.2)',
    '@media (max-width: 767px)': {
      marginBottom: 5,
    },
    '@media (min-width: 768px)': {
      marginBottom: 30,
    },
    '&::before': {
      display: 'none',
    },
  },
  label: {
    fontWeight: 700,
    margin: 0,
    '@media (max-width: 1023px)': {
      fontSize: 12,
    },
    '@media (min-width: 1024px)': {
      marginLeft: 76,
      fontSize: 19,
    },
  },
  desc: {
    marginBottom: 20,
    '@media (max-width: 1023px)': {
      fontSize: 12,
    },
    '@media (min-width: 1024px)': {
      marginLeft: 93,
      fontSize: 16,
    },
  },
});
