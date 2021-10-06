export default theme => ({
  wrap: {
    position: 'relative',
  },
  container: {
    position: 'relative',
    zIndex: 2,
    ...theme.blocks.container,
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  content: {
    flexGrow: 1,
    textAlign: 'left',
    paddingBottom: 40,
    '@media (max-width: 767px)': {
      paddingTop: 100,
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      paddingTop: 130,
    },
    '@media (max-width: 1023px)': {
      width: '100%',
    },
    '@media (min-width: 1024px)': {
      padding: '40px 0 40px 20px',
      flexGrow: 1,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      paddingTop: 40,
      flexBasis: 674,
    },
    '@media (min-width: 1440px)': {
      flexBasis: 680,
      maxWidth: 1058,
    },
  },
});
