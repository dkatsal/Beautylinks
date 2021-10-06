

export default theme => ({
  mainBox: {
    ...theme.blocks.container,
    maxWidth: 1236,
    '@media (max-width: 767px)': {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto 30px',
    },
    '@media (min-width: 768px)': {
      margin: '0 auto 85px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  },
  mainContent: {
    flexGrow: 1,
    '@media (max-width: 768px)': {
      display: 'contents',
    },
    '@media (min-width: 1440px)': {
      maxWidth: 710,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      marginRight: 30,
    },
  },
  sliderBox: {
    marginBottom: 25,
    '& img': {
      '@media (max-width: 767px)': {
        width: '100%',
      },
      '@media (min-width: 1024px)': {
        maxWidth: '100%',
      },
    },
  },
  masterDesc: {
    margin: '0 0 50px',
    lineHeight: 1.4,
    '@media (max-width: 767px)': {
      fontSize: 14,
      order: 3,
    },
    '@media (min-width: 768px)': {
      fontSize: 18,
    },
  },
  title: {
    '@media (max-width: 768px)': {
      order: 4,
      margin: '0 0 15px',
      fontSize: 18,
      fontWeight: 700,
    },
    '@media (min-width: 768px)': {
      margin: '0 0 50px',
      fontSize: 24,
    },
  },
});
