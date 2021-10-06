import bgImage from '../../img/hot_bg.png';

export default theme => ({
  topBox: {
    ...theme.blocks.container,
    textAlign: 'center',
  },
  logo: {
    display: 'inline-block',
    margin: '0 auto 29px',
  },
  topBoxDscr: {
    position: 'relative',
    ...theme.customerContent.desc,
    whiteSpace: 'pre-wrap',
    margin: '0 auto',
    textAlign: 'left',
    '&:before': {
      position: 'absolute',
      zIndex: -1,
      top: -20,
      left: -20,
      width: 80,
      height: 70,
      content: '""',
      background: `url(${bgImage}) 50% 0/100% no-repeat`,
    },
    '@media (min-width: 768px)': {
      lineHeight: '1.5em',
      fontSize: 24,
      maxWidth: 1070,
    },
  },
  breadCrumbsBox: {
    '@media (max-width: 767px)': {
      margin: '20px 0',
    },
    '@media (min-width: 768px)': {
      margin: '40px 0',
    },
    '& span': {
      color: theme.palette.BLColors.main,
      fontSize: 16,
      '@media (max-width: 767px)': {
        fontSize: 12,
      },
      '@media (min-width: 768px)': {
        fontSize: 26,
      },
    },
  },
  breadCrumbsLink: {
    color: theme.palette.BLColors.main,
    transition: `text-shadow 0.2s ${theme.transitions.easing.easeOut}`,
    '@media (max-width: 767px)': {
      fontSize: 12,
    },
    '@media (min-width: 768px)': {
      fontSize: 26,
    },
    '&:hover': {
      textShadow: '1px 0 0 rgba(0, 0, 0, 0.5)',
    },
  },
  container: {
    paddingTop: 60,
    ...theme.blocks.container,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mapTitle: {
    width: '100%',
    textAlign: 'center',
    '@media (max-width: 1023px)': {
      fontSize: 16,
      margin: '0 0 30px',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      margin: '0 0 41px',
      fontSize: 24,
    },
    '@media (min-width: 1440px)': {
      margin: '0 0 73px',
      fontSize: 30,
    },
  },
  mapBox: {
    width: 'calc(50% - 10px)',
    maxWidth: 690,
    '@media (min-width: 768px) and (max-width: 1023px)': {
      margin: '0 0 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '@media (max-width: 1023px)': {
      width: '100%',
      margin: '0 0 40px',
    },
    '& iframe': {
      '@media (max-width: 767px)': {
        height: 214,
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        height: 250,
        width: '70%',
      },
    },
  },
  mapText: {
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
    },
  },
  mapRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& p': {
      '@media (max-width: 1024px)': {
        fontSize: 16,
      },
      '@media (min-width: 1025px)': {
        fontSize: 24,
        textAlign: 'center',
        width: '100%',
      },
    },
  },
  mapDesc: {
    color: theme.palette.BLColors.main,
    '@media (max-width: 399px)': {
      width: '100%',
    },
    '@media (min-width: 400px) and (max-width: 1024px)': {
      width: 'calc(100% - 160px)',
    },
    '@media (min-width: 1025px)': {
      width: '100%',
      margin: '0 0 30px',
    },
  },
  mapLabel: {
    '@media (max-width: 1024px)': {
      width: 140,
    },
    '@media (min-width: 1025px)': {
      width: '100%',
      margin: '0 0 10px',
    },
  },
  soclinks: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1024px)': {
      justifyContent: 'flex-start',
    },
    '@media (min-width: 1025px)': {
      justifyContent: 'center',
      margin: 0,
    },
    '& svg': {
      fill: '#00c7c7',
    },
  },
});
