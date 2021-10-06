export default () => ({
  inputBox: {
    position: 'relative',
    marginRight: 32,
    width: 300,
  },
  input: {
    padding: '0 85px 0 25px',
    width: '100%',
    color: '#4d4d4d',
    border: 'none',
    fontSize: 16,
    '@media (max-width:767px)': {
      // lineHeight: '60px',
      height: 60,
    },
    '@media (min-width:768px)': {
      padding: '0 40px 0 20px',
      // lineHeight: '58px',
      height: 58,
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      // lineHeight: '50px',
      height: 50,
      padding: '0 25px 0 10px',
    },
    '@media (min-width:1440px)': {
      // lineHeight: '50px',
      height: 50,
      padding: '0 85px 0 25px',
      borderRadius: 5,
    },
  },
  addressInput: {
    height: 50,
    backgroundColor: '#fff',
    '@media (min-width:1440px)': {
      borderRadius: 10,
    },
    '& input': {
      width: 250,
      height: 30,
      '@media (max-width:767px)': {
        padding: '0!important',
      },
    },
    '& > div': {
      '@media (max-width:1439px)': {
        padding: '5px 10px 4px',
      },
      '@media (min-width:1440px)': {
        padding: '5px 20px 10px',
      },
      '&:before': {
        display: 'none',
      },
      '&:after': {
        display: 'none',
      },
      '& button:last-child': {
        display: 'none',
      },
    },
  },
});
