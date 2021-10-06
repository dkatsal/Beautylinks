export default theme => ({
  wrap: {
    paddingTop: 60,
    ...theme.blocks.container,
  },
  title: {
    margin: '0 0 50px',
    textAlign: 'center',
    '@media (max-width: 767px)': {
      fontSize: 18,
    },
    '@media (min-width: 768px)': {
      fontSize: 22,
      fontWeight: 300,
    },
  },
  itemsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'streight',
    justifyContent: 'center',
    '& img': {
      '@media (max-width: 679px)': {
        margin: '20px auto 20px',
        maxWidth: 70,
      },
      '@media (min-width: 680px) and (max-width: 1024px)': {
        margin: '40px auto',
        maxWidth: 200,
      },
      '@media (min-width: 1024px)': {
        margin: 'auto auto 20px',
        maxWidth: 110,
      },
    },
  },
  item: {
    margin: '0 0 50px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '&:first-child': {
      marginLeft: 0,
    },
    '@media (max-width: 679px)': {
      width: 'calc(50% - 16px)',
      padding: '0 5px',
      '&:nth-child(odd)': {
        marginLeft: 0,
      },
    },
    '@media (min-width: 679px)': {
      border: `1px solid ${theme.palette.BLColors.main}`,
      padding: '40px 35px',
    },
    '@media (min-width: 679px) and (max-width: 1024px)': {
      width: 'calc(100%/3 - 16px)',
      '&:nth-child(3n + 1)': {
        marginLeft: 0,
      },
    },
    '@media (min-width: 1025px) and (max-width: 1399px)': {
      width: 'calc(25% - 16px)',
      '&:nth-child(5n)': {
        marginLeft: 0,
      },
    },
    '@media (min-width: 1400px)': {
      width: 'calc(20% - 16px)',
      '&:nth-child(6n)': {
        marginLeft: 0,
      },
    },
  },
  label: {
    margin: 0,
    textAlign: 'center',
    '@media (max-width: 679px)': {
      fontSize: 16,
    },
    '@media (min-width: 680px)': {
      fontSize: 18,
      fontWeight: 700,
    },
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    borderRadius: 10,
  },
  btnBox: {
    textAlign: 'center',
    marginBottom: 70,
  },
  link: {
    color: '#000',
  }
});
