import quoteImg from '../../../img/quote_home.png';

export default theme => ({
  wrap: {
    position: 'relative',
    paddingBottom: 65,
  },
  container: {
    ...theme.blocks.container,
  },
  title: {
    textAlign: 'center',
    '@media (max-width: 767px)': {
      marginBottom: 140,
      fontSize: 18,
    },
    '@media (min-width: 768px)': {
      marginBottom: 100,
      fontSize: 22,
      fontWeight: 400,
    },
  },
  boxDscr: {
    '@media (min-width: 768px)': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
    },
    '@media (min-width: 768px) and (max-width: 1299px)': {
      justifyContent: 'flex-end',
    },
    '@media (min-width: 1300px)': {
      justifyContent: 'center',
    },
  },
  bgBox: {
    position: 'relative',
    '@media (max-width: 767px)': {
      width: 265,
    },
    '@media (max-width: 1069px)': {
      margin: '0 0 30px auto',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    '@media (min-width: 1300px)': {
      marginLeft: 230,
    },
  },
  bgImg: {
    '@media (max-width: 767px)': {
      width: 265,
      transform: 'translateX(20px)',
    },
    '@media (min-width: 768px)': {
      maxWidth: '100%',
    },
  },
  feedback: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: 0,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 767px)': {
      width: 180,
      height: 140,
      padding: 20,
      fontSize: 12,
      transform: 'translate(-70px,-120px)',
      lineHeight: '16px',
    },
    '@media (min-width: 768px)': {
      width: 300,
      height: 200,
      transform: 'translate(-280px,-70px)',
      padding: 40,
      fontSize: 18,
      lineHeight: '24px',
    },
    '&:before': {
      position: 'absolute',
      content: '""',
      background: `url("${quoteImg}") 0 -4px/100% no-repeat`,
      '@media (max-width: 767px)': {
        width: 180,
        height: 140,
      },
      '@media (min-width: 768px)': {
        width: 304,
        height: 231,
      },
    },
  },
  specialistBox: {
    '@media (max-width: 1069px)': {
      width: '100%',
      marginLeft: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    '@media (min-width: 1070px)': {
      width: 245,
      marginLeft: 30,
    },
  },
  specName: {
    margin: 0,
    '@media (max-width: 767px)': {
      fontSize: 14,
    },
    '@media (min-width: 768px)': {
      fontSize: 22,
    },
  },
  specAbout: {
    fontWeight: 700,
    '@media (max-width: 767px)': {
      margin: '5px 0',
      fontSize: 14,
    },
    '@media (min-width: 768px)': {
      margin: '5px 0',
      fontSize: 18,
    },
  },
  specDesc: {
    fontSize: 18,
    margin: 0,
    '@media (max-width: 767px)': {
      fontSize: 12,
      textAlign: 'right',
    },
    '@media (min-width: 768px)': {
      fontSize: 18,
    },
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    textAlign: 'center',
  },
  btnLink: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.clean),
    border: `2px solid ${theme.palette.BLColors.main}`,
    color: theme.palette.BLColors.main,
    '&:hover': {
      color: '#fff',
      background: theme.palette.BLColors.main,
    },
  },
  btnBox: {
    width: '100%',
    textAlign: 'center',
    '@media (max-width: 767px)': {
      padding: '15px 0 0',
      display:' flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '@media (min-width: 768px)': {
      padding: '50px 20px 0',
    },
    '& a:first-child': {
      '@media (max-width: 767px)': {
        order: 2,
      },
      '@media (min-width: 768px)': {
        marginRight: 30,
      },
    },
    '& a:last-child': {
      '@media (max-width: 767px)': {
        order: 1,
        marginBottom: 20,
      },
    },
  },
});
