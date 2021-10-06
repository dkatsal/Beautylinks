import bgImage from '../../../img/hot_bg.png';

export default theme => ({
  wrap: {
    paddingTop: 65,
    ...theme.blocks.container,
  },
  title: {
    textAlign: 'center',
    margin: '0 0 20px',
    '@media (max-width: 767px)': {
      fontSize: 18,
    },
    '@media (min-width: 768px)': {
      fontSize: 32,
    },
  },
  itemsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    '@media (max-width: 767px)': {
      marginBottom: 20,
    },
    '@media (min-width: 768px)': {
      marginBottom: 70,
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1024px)': {
      width: '100%',
      maxWidth: 620,
      margin: 'auto',
      justifyContent: 'flex-start',
      fontSize: 14,
    },
    '@media (min-width: 1025px)': {
      width: '50%',
    },
    '@media (min-width: 1200px)': {
      alignItems: 'flex-end',
      '&:first-child': {
        '& p': {
          width: 270,
          transform: 'translateX(-40px)',
        },
      },
      '&:nth-child(2)': {
        transform: 'translateX(-120px)',
        '& p': {
          width: 450,
          transform: 'translateX(-40px)',
        },
      },
      '&:nth-child(3)': {
        transform: 'translateX(120px)',
        '& p': {
          width: 350,
          transform: 'translateX(-30px)',
        },
      },
      '&:last-child': {
        transform: 'translateX(120px)',
        '& p': {
          width: 410,
          transform: 'translateX(-40px)',
        },
      },
    },
  },
  boxNumber: {
    position: 'relative',
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    textAlign: 'center',
    '@media (max-width: 767px)': {
      width: 85,
      height: 85,
      fontSize: 40,
      marginRight: 20,
    },
    '@media (min-width: 768px)': {
      width: 170,
      height: 160,
      fontSize: 80,
    },
    '@media (min-width: 768px) and (max-width: 1199px)': {
      marginRight: 40,
    },
    '&:before': {
      position: 'absolute',
      zIndex: -1,
      content: '""',
      background: `url(${bgImage}) 50% 0 no-repeat`,
      '@media (max-width: 767px)': {
        top: 7,
        left: 4,
        width: 85,
        height: 85,
        backgroundSize: '100%',
      },
      '@media (min-width: 768px)': {
        top: 10,
        left: 10,
        width: 170,
        height: 160,
      },
    },
  },
  itemDesc: {
    '@media (max-width: 767px)': {
      maxWidth: 300,
      width: 'calc(100% - 100px)',
      fontSize: 14,
    },
    '@media (min-width: 768px)': {
      fontSize: 18,
      fontWeight: 700,
    },
    '@media (min-width: 768px) and (max-width: 1199px)': {
      maxWidth: 'calc(100% - 210px)',
    },
    '@media (min-width: 1200px)': {
      maxWidth: 450,
    },
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
  btnBox: {
    textAlign: 'center',
    marginBottom: 70,
  },
});
