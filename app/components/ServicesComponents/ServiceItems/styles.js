import bgImage from '../../../img/hot_bg.png';

export default theme => ({
  wrap: {
    position: 'relative',
    marginBottom: 20,
  },
  container: {
    ...theme.blocks.container,
  },
  title: {
    margin: '0 0 65px',
    textAlign: 'center',
    ...theme.customerContent.title,
  },
  carouselBox:{
    boxShadow: '0 1px 38px rgba(30, 15, 0, 0.14)',
    padding: 20,
    // minHeight: 400,
    '@media (min-width: 767px)': {
      display: 'none',
    },
  },
  carouselBoxItem:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '50px',
    justifyContent: 'center',
    '& img': {
      width: '100%',
    },
    '@media (max-width: 767px)': {
      display: 'none',
    },

  },
  boxItem: {
    marginBottom: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    transition: `all 0.2s ${theme.transitions.easing.easeOut}`,
    boxShadow: '0 1px 38px rgba(30, 15, 0, 0.14)',
    '@media (max-width: 767px)': {
      width: '100%',
      maxWidth: 400,
      margin: '0 auto 20px',
      padding: '30px 20px',
      borderRadius: 15,
    },
    '@media (min-width: 767px)': {
      padding: '20px 28px 23px',
      borderRadius: 20,
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      maxWidth: 'calc(50% - 24px)',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      maxWidth: 'calc(100% / 3 - 40px / 3)',
      '&:nth-child(3n)': {
        marginRight: 0,
      },
    },
    '@media (min-width: 1440px)': {
      maxWidth: 'calc(25% - 80px / 3)',
      '&:nth-child(4n)': {
        marginRight: 0,
      },
    },
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: '0 1px 38px rgba(30, 15, 0, 0)',
    },
  },
  boxImg: {
    width: '120px',
    height: '120px',
    margin: '0 auto 20px',
    boxShadow: '0 0 17.7481px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  boxImgCont: {
    margin: 'auto',
    width: 110,
    height: 110,
    overflow: 'hidden',
    borderRadius: '50%',
    '& img': {
      minHeight: '100%',
      minWidth: '100%',
    },
  },
  label: {
    fontWeight: 500,
    margin: '0 0 26px',
    '@media (max-width: 1023px)': {
      fontSize: 14,
    },
    '@media (min-width: 1024px)': {
      fontSize: 18,
    },
  },
  desc: {
    margin: '0 0 auto',
    padding: '0 12px',
    opacity: 0.7,
    whiteSpace: 'pre-wrap',
    '@media (max-width: 1023px)': {
      fontSize: 14,
    },
    '@media (min-width: 1024px)': {
      fontSize: 16,
    },
  },
  btnLink: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.clean),
    background: theme.palette.BLColors.main,
    color: theme.palette.BLColors.white,
    border: `2px solid ${theme.palette.BLColors.main}`,
    marginTop: 20,
    '@media (max-width: 1023px)': {
      fontSize: 14,
      lineHeight: '50px',
    },
    '@media (min-width: 1024px) and (max-width: 1200px)': {
      padding: '0 10px',
      fontWeight: 400,
    },
    '@media (min-width: 1400px)': {
      fontSize: 18,
      padding: '0 10px',
    },
    '&:hover': {
      color: theme.palette.BLColors.main,
      background: 'transparent',
    },
  },
  btnBox: {
    textAlign: 'center',
    paddingBottom: 70,
  },
  topBox: {
    ...theme.blocks.container,
    padding: '0 0 32px',
  },
  topBoxDscr: {
    position: 'relative',
    lineHeight: '1.4',
    maxWidth: 1170,
    ...theme.customerContent.desc,
    whiteSpace: 'pre-wrap',
    '@media (min-width: 1024px)': {
      '&:before': {
        position: 'absolute',
        zIndex: -1,
        top: -20,
        left: -30,
        width: 80,
        height: 70,
        content: '""',
        background: `url(${bgImage}) 50% 0/100% no-repeat`,
      },
    },
  },
  titleH2: {
    position: 'relative',
    margin: '0 0 20px',
    ...theme.customerContent.title,
    '&:before': {
      '@media (max-width: 1023px)': {
        position: 'absolute',
        zIndex: -1,
        top: -20,
        left: -20,
        width: 80,
        height: 70,
        content: '""',
        background: `url(${bgImage}) 50% 0/100% no-repeat`,
      },
    },
    '&:after': {
      '@media (max-width: 767px)': {
        position: 'absolute',
        zIndex: -1,
        bottom: 0,
        left: 0,
        width: 'calc(100% + 10px)',
        height: 2,
        content: '""',
        background: theme.palette.BLColors.main,
      },
    },
  },
  carouselNavButtons:{
    backgroundColor: 'white !important',
    borderRadius: 50,
    border: '2px solid #00C6C6',
    color: '#00C6C6',
  },
  buttonWrapper:{
    position: 'absolute',
    top: '75px',
    height: 'auto',
  },
  indiacators: {
    color: '#00C6C6',
    opacity: 0.5,
    '&:hover':{
      color: '#00C6C6',
      opacity: 1,
    },
  },
  indiacatorsActive: {
    color: '#00C6C6',
    opacity: 1,
  }
});
