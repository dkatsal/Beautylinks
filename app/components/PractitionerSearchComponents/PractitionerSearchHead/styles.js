export default theme => ({
  headContainer: {
    ...theme.blocks.container,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '15px 0',
  },
  leftBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    '@media (max-width: 1200px)': {
      order: 2,
      width: '100%',
    },
    '@media (min-width: 1200px)': {
      width: '50%',
    },
  },
  selectedChip: {
    display: 'inline-flex',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      justifyContent: 'space-between',
      width: '100%',
    },
    '@media (min-width: 768px)': {
      padding: '0 17px',
    },
  },
  chipLabel: {
    display: 'inline-block',
    marginRight: 22,
    padding: '10px 0',
    fontSize: 16,
    lineHeight: '20px',
  },
  deleteBtn: {
    ...theme.linkActions.deleteBtn,
    '@media (max-width: 450px)': {
      order: 2,
    },
  },
  border: {
    display: 'inline-block',
    marginRight: 18,
    width: 1,
    height: 40,
    background: '#000',
    '@media (max-width: 1200px)': {
      display: 'none',
    },
  },
  rightBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: 10,
    '@media (max-width: 767px)': {
      justifyContent: 'space-between',
    },
    '@media (max-width: 1200px)': {
      order: 1,
      margin: '0 0 20px',
      width: '100%',
    },
    '@media (min-width: 1200px)': {
      width: '50%',
      justifyContent: 'flex-end',
    },
    '& span': {
      lineHeight: '20px',
      fontSize: 16,
      '&:first-child': {
        '@media (max-width: 450px)': {
          order: 1,
          width: '100%',
          marginBottom: 10,
        },
      },
      '&:nth-child(2)': {
        '@media (max-width: 450px)': {
          flexGrow: 1,
          order: 2,
          maxWidth: 'calc(100% - 50px)',
        },
      },
    },
  },
  positionLabel: {
    marginRight: 22,
    opacity: 0.5,
  },
});
