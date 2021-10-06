export default theme => ({
  wrap: {
    ...theme.blocks.container,
  },
  title: {
    textAlign: 'center',
    '@media (max-width: 767px)': {
      fontSize: 18,
      fontWeight: 700,
      margin: '0 0 40px'
    },
    '@media (min-width: 768px)': {
      fontSize: 22,
      fontWeight: 300,
      margin: '0 0 50px'
    },
  },
  itemsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    textAlign: 'center',
    '@media (max-width: 767px)': {
      maxWidth: 360,
      margin: '0 auto',
      '& img': {
        width: 50,
        marginRight: 20,
      },
    },
    '@media (min-width: 768px)': {
      margin: '0 auto 120px',
      '& img': {
        width: 100,
        margin: '0 auto 40px',
      },
    },
    '& > div': {
      '@media (max-width: 767px)': {
        padding: '0 0 40px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        padding: '60px 15px 0',
        maxWidth: 510,
      },
      '@media (min-width: 1024px) and (max-width: 1439px)': {
        width: 'calc(100% / 3 - 40px / 3)',
        padding: '0 15px',
        fontSize: 18,
        lineHeight: 1.25,
      },
      '@media (min-width: 1440px)': {
        minWidth: 295,
        maxWidth: 325,
      },
    },
  },
  boxNumber: {
    fontSize: 175,
    opacity: 0.3,
  },
  label: {
    '@media (max-width: 767px)': {
      fontSize: 14,
    },
    '@media (min-width: 768px)': {
      fontSize: 18,
      fontWeight: 700,
    },
  },
});
