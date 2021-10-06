export default theme => ({
  mainBox: {
    ...theme.blocks.container,
    margin: '54px auto 60px',
    '@media (min-width: 1024px)': {
      width: 'calc(100% - 40px)',
      padding: '40px 40px 60px',
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
    },
    '@media (min-width: 1440px)': {
      maxWidth: 1236,
      paddingTop: 40,
      paddingBottom: 60,
      paddingLeft: 120,
      paddingRight: 120,
      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
    },
    '& > div': {
      '@media (max-width: 480px)': {
        padding: '20px 0',
      },
    },
  },
  title: {
    fontWeight: 700,
    textAlign: 'center',
    '@media (min-width:768px) and (max-width: 1023px)': {
      margin: '0 0 25px',
      fontSize: 30,
    },
    '@media (min-width: 1024px)': {
      margin: '0 0 25px',
      fontSize: 24,
    },
  },
  desc: {
    textAlign: 'center',
    color: '#4C4C4C',
    '@media (max-width: 768px)': {
      margin: '0 0 35px',
      fontSize: 21,
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      margin: '0 0 35px',
      fontSize: 18,
    },
    '@media (min-width: 1024px)': {
      margin: '0 0 35px',
      fontSize: 18,
    },
  },
  input: {
    marginBottom: 30,
  },
  chbx: {
    color: '#01c7c7',
  },
  checked: {
    color: '#01c7c7',
  },
  fieldTitle: {
    fontSize: 24,
    marginBottom: 30,
  },
  formControl: {
    width: '100%',
    marginTop: 40,
  },
  stepTitle: {
    padding: '0 5px',
    '& .MuiSvgIcon-root': {
      color: '#80E3E3',
      '@media (max-width: 767px)': {
        height: 50,
        width: 40,
      },
      '@media (min-width: 768px) and (max-width: 1439px)': {
        height: 50,
        width: 50,
      },
      '@media (min-width: 1440px)': {
        height: 60,
        width: 60,
      },
    },
    '& .MuiStepIcon-active': {
      color: '#01c7c7',
    },
    '& .MuiTypography-root': {
      '@media (max-width: 767px)': {
        display: 'none',
      },
      '@media (min-width: 768px) and (max-width: 1439px)': {
        fontSize: 14,
      },
      '@media (min-width: 1440px)': {
        fontSize: 12,
      },
    },
    '& .MuiStepIcon-text': {
      fontSize: '10px',
      fontWeight: 400,
    },
    '& .MuiStepConnector-alternativeLabel': {
      '@media (max-width: 1439px)': {
        top: 25,
      },
      '@media (min-width: 1440px)': {
        top: 30,
      },
      '& span': {
        borderColor: '#C4C4C4',
      },
    },
    '& .MuiStepLabel-root': {
      position: 'relative',
      zIndex: 2,
    },
  },
});
