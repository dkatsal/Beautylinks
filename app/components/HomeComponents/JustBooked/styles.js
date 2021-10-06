export default theme => ({
  wrap: {
    background: '#f7f7f7',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    ...theme.blocks.container,
    '@media (max-width: 767px)': {
      padding: '50px 20px 65px',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      padding: '60px 20px 90px',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      maxWidth: 1080,
      padding: '50px 25px 55px',
    },
    '@media (min-width: 1440px)': {
      padding: '65px 25px 70px',
    },
  },
  title: {
    width: '100%',
    textAlign: 'center',
    '@media (max-width: 767px)': {
      margin: '0 0 50px',
      fontSize: 24,
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      margin: '0 0 60px',
      fontSize: 36,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      margin: '0 0 50px',
      fontSize: 24,
    },
    '@media (min-width: 1440px)': {
      margin: '0 0 60px',
      fontSize: 32,
    },
  },
  box: {
    display: 'inline-flex',
    verticalAlign: 'top',
    '@media (max-width: 767px)': {
      width: '100%',
    },
    '@media (min-width: 1024px)': {
      width: '50%',
    },
    '@media (max-width: 1023px)': {
      maxWidth: 460,
      margin: '0 auto',
    },
  },
  desc: {
    '@media (max-width: 767px)': {
      maxWidth: 480,
      margin: '60px auto 0',
      fontSize: 24,
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      maxWidth: 780,
      margin: '60px auto 0',
      fontSize: 36,
    },
    '@media (min-width: 1024px)': {
      margin: 0,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '50%',
      maxWidth: 520,
      fontSize: 24,
    },
    '@media (min-width: 1440px)': {
      fontSize: 30,
      width: '50%',
      display: 'inline-flex',
      verticalAlign: 'top',
    },
  },
  specialistBox: {
    display: 'flex',
    fontSize: 18,
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  nameSpecBox: {
    '@media (max-width: 767px)': {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    '& p:first-child': {
      margin: 0,
    },
  },
  specName: {
    fontWeight: 700,
    '@media (max-width: 767px)': {
      margin: '10px 0 0',
    },
    '@media (max-width: 1023px)': {
      fontSize: 18,
    },
    '@media (min-width: 768px) and (max-width: 1439px)': {
      margin: '18px 0 9px',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      fontSize: 16,
    },
    '@media (min-width: 1440px)': {
      maxWidth: 330,
      margin: '10px 0',
    },
  },
  specAbout: {
    '@media (max-width: 479px)': {
      width: '100%',
      marginTop: 20,
    },
    '@media (min-width: 480px) and (max-width: 767px)': {
      maxWidth: 230,
      margin: 0,
    },
    '@media (max-width: 1023px)': {
      fontSize: 18,
    },
    '@media (min-width: 1024px)': {
      margin: 0,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      fontSize: 16,
      maxWidth: 300,
    },
    '@media (min-width: 1440px)': {
      maxWidth: 330,
      fontSize: 24,
    },
  },
  avatarImg: {
    '@media (max-width: 767px)': {
      marginRight: 24,
      maxWidth: 83,
      maxHeight: 83,
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      marginRight: 16,
      maxWidth: 130,
      maxHeight: 130,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      marginRight: 16,
      maxWidth: 100,
      maxHeight: 100,
    },
    '@media (min-width: 1440px)': {
      marginRight: 42,
      maxWidth: 121,
      maxHeight: 121,
    },
  },
  specContainer: {
    '@media (max-width: 767px)': {
      '& b': {
        fontSize: 24,
      },
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      fontSize: 18,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      fontSize: 18,
    },
    '@media (min-width: 1440px)': {
      fontSize: 24,
    },
  },
});
