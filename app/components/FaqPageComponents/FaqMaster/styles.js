export default () => ({
  contBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  boxText: {
    '@media (max-width: 1023px)': {
      order: 2,
    },
    '@media (min-width: 1024px)': {
      flexBasis: 400,
      maxWidth: 780,
      flexGrow: 1,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '70%',
    },
    '& + div': {
      '@media (min-width: 1024px) and (max-width: 1439px)': {
        marginLeft: 100,
      },
      '@media (min-width: 1440px)': {
        marginLeft: 150,
      },
    },
  },
  bgBox: {
    '@media (max-width: 1023px)': {
      width: '100%',
      order: 1,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '30%',
    },
    '& img': {
      maxWidth: 500,
      width: '100%',
      margin: '0 auto',
    },
    '& + div': {
      '@media (min-width: 1024px) and (max-width: 1439px)': {
        marginLeft: 100,
      },
      '@media (min-width: 1440px)': {
        marginLeft: 150,
      },
    },
  },
  title: {
    fontWeight: 700,
    marginBottom: 32,
    '@media (max-width: 1023px)': {
      fontSize: 20,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      fontSize: 30,
    },
    '@media (min-width: 1440px)': {
      fontSize: 36,
    },
  },
  boxList: {
    '@media (max-width: 1023px)': {
      fontSize: 16,
    },
    '& li': {
      position: 'relative',
      paddingLeft: 44,
      '@media (max-width: 1023px)': {
        marginBottom: 20,
      },
      '@media (min-width: 1024px)': {
        marginBottom: 40,
      },
      '&:before': {
        position: 'absolute',
        top: 3,
        left: 0,
        display: 'block',
        height: 24,
        width: 24,
        content: '""',
        backgroundColor: '#00c6c6',
        borderRadius: '50%',
      },
    },
  },
});
