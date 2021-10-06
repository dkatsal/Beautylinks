
export default theme => ({
  Input: {
    opacity: 0,
  },
  input: {
    display: 'flex',
    height: 'auto',
  },
  inputMsg: {
    position: 'absolute',
    bottom: 20,
    left: 18,
    fontSize: 12,
    color: '#b3b3b3',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
    '& > div ': {
      margin: '5px 5px 5px 0',
    },
    '& + div > span ': {
      display: 'none',
    },
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
  },
  formInput: {
    position: 'relative',
    margin: '0 0 20px',
    '@media (max-width: 767px)': {
      margin: '0 0 20px',
    },
    '@media (min-width: 768px)': {
      border: '1px solid #00C6C6',
      borderRadius: 10,
    },
    '& > div > div': {
      '@media (max-width: 767px)': {
        padding: '2px 10px',
        background: 'rgb(0 198 198 / 30%)',
        borderRadius: 10,
        height: 36,
      },
      '@media (min-width: 768px)': {
        background: 'transparent',
      },
      '& > div': {
        paddingLeft: 10,
        '@media (max-width: 767px)': {
          padding: 0
        },
        '&:before, &:after': {
          display: 'none',
        },
      },
    },
  },
  inputIcon: {
    position: 'absolute',
    fill: '#cccccc',
    '@media (max-width: 767px)': {
      top: 9,
      right: 30,
      width: 18,
    },
    '@media (min-width: 768px)': {
      top: 13,
      right: 25,
      width: 24,
    },
  },
  formSelect: {
    position: 'relative',
    margin: '0 0 20px',
    '@media (max-width: 767px)': {
      margin: '0 0 20px',
      background: 'rgb(0 198 198 / 30%)',
      borderRadius: 10,
    },
    '@media (min-width: 768px)': {
      border: '1px solid #00C6C6',
      borderRadius: 10,
    },
    '& > div > div': {
      '@media (max-width: 767px)': {
        padding: '2px 10px',
      },
      '& > div': {
        paddingLeft: 10,
        '@media (max-width: 767px)': {
          padding: 0,
        },
        '&:before, &:after': {
          display: 'none',
        },
        '& > div': {
          '@media (max-width: 767px)': {
            padding: 0,
          },
        },
      },
    },
    '& > div svg': {
      top: 6,
      right: 7,
      fontSize: '2.3rem',
      color: '#00c7c7',
    },
    '& > div em': {
      fontStyle: 'normal',
    },
    '& label': {
      marginLeft: '0px !important',
    },
  },
  linkBtn: {
    padding: '0 115px',
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
  btnBox: {
    '@media (max-width: 767px)': {
      margin: '0 0 40px',
      textAlign: 'center',
    },
    '@media (min-width: 768px)': {
      margin: '0 0 40px',
    },
  },
  mapBox: {
    background: '#eeeeee',
    marginBottom: 20,
    '@media (max-width: 767px)': {
      height: 120,
    },
    '@media (min-width: 768px)': {
      height: 280,
    },
  },
});
