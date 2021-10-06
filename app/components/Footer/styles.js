export default theme => ({
  footer: {
    flex: '0 0 auto',
    minHeight: 295,
    background: '#272727',
  },
  wrap: {
    ...theme.blocks.container,
    color: '#fff',
    '@media (max-width:767px)': {
      paddingBottom: 20,
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      paddingBottom: 50,
    },
    '@media (max-width:1023px)': {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  footerBox: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingTop: 50,
    '@media (max-width:767px)': {
      alignItems: 'center',
    },
  },
  logoBox: {
    '@media (max-width:767px)': {
      width: 100,
    },
    '@media (min-width:768px)': {
      width: 190,
    },
  },
  soclinks: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    display: 'block',
    '& img': {
      maxWidth: '100%',
      width: 190,
      height: 57,
      margin: '10px auto 40px',
    },
  },
  menuBlock: {
    '@media (max-width:767px)': {
      margin: 'auto 17px auto 0',
      '&:nth-child(2), &:nth-child(4)': {
        display: 'none',
      },
    },
    '@media (min-width:768px)': {
      marginRight: 23,
    },
  },
  menuCont: {
    display: 'block',
    '&:nth-child(2)': {
      '@media (min-width:768px)': {
        marginTop: 40,
      },
    },
  },
  menuBlockTitle: {
    margin: '0 0 15px',
    '@media (max-width:767px)': {
      display: 'none',
    },
    '@media (min-width:768px)': {
      fontSize: 18,
    },
  },
  link: {
    color: '#fff',
    display: 'block',
    fontWeight: 700,
    '@media (max-width:767px)': {
      fontSize: 10,
      lineHeight: '30px',
    },
    '@media (min-width:768px)': {
      margin: '0 0 8px',
      fontSize: 16,
    },
  },
  copyright: {
    color: '#fff',
    display: 'block',
    margin: '20px 0 0',
    '@media (max-width:767px)': {
      fontSize: 10,
    },
    '@media (min-width:768px)': {
      fontSize: 18,
    },
  },
  payBox: {
    margin: 'auto 0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 0,
    '@media (min-width:768px)': {
      width: 160,
    },
  },
});
