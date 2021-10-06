import bgImage from '../../../img/check_img.png';

export default theme => ({
  wrap: {
    position: 'relative',
  },
  container: {
    ...theme.blocks.container,
    '@media (max-width: 767px)': {
      padding: '40px 0 0',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      padding: '60px 0 0',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      paddingTop: 50,
    },
    '@media (min-width: 1440px)': {
      paddingTop: 60,
    },
  },
  title: {
    textAlign: 'center',
    margin: '0 0 50px',
    '@media (max-width: 939px)': {
      fontSize: 18,
    },
    '@media (min-width: 940px)': {
      fontSize: 22,
      fontWeight: 300,
    },
  },
  box: {
    position: 'relative',
    padding: '0 40px 40px 0',
    verticalAlign: 'top',
    '@media (min-width: 940px)': {
      width: 830,
      minHeight: 450,
      border: `1px solid ${theme.palette.BLColors.main}`,
    },
    '@media (min-width: 940px) and (max-width: 1199px)': {
      margin: '0 auto 40px',
    },
    '& p': {
      fontSize: 18,
      lineHeight: '22px',
    },
    '&:before': {
      position: 'absolute',
      zIndex: -1,
      display: 'block',
      content: '""',
      background: `url(${bgImage}) 50% 0 no-repeat`,
      '@media (max-width: 939px)': {
        top: -100,
        right: 10,
        width: 147,
        height: 158,
        backgroundSize: '100%',
      },
      '@media (min-width: 940px)': {
        bottom: -30,
        left: -30,
        width: 353,
        height: 375,
      },
    },
    '@media (min-width: 1200px)': {
      '&:last-child': {
        transform: 'translate(329px, -87px)',
        minHeight: 380,
      },
    },
  },
  boxTitle: {
    fontWeight: 400,
    margin: '0 0 20px',
    fontWeight: 700,
    borderBottom: `1px solid ${theme.palette.BLColors.main}`,
    '@media (max-width: 939px)': {
      padding: '0 0 10px 15px',
      maxWidth: 'calc(100% - 160px)',
      fontSize: 18,
    },
    '@media (min-width: 940px)': {
      padding: '30px 0 30px 75px',
      width: 500,
      borderRight: `1px solid ${theme.palette.BLColors.main}`,
      fontSize: 22,
    },
  },
  listItems: {
    textAlign: 'left',
    listStyle: 'none',
    '@media (max-width: 939px)': {
      marginLeft: 15,
    },
    '@media (min-width: 940px)': {
      marginLeft: 75,
    },
    '& li': {
      '@media (max-width: 939px)': {
        marginBottom: 10,
        fontSize: 14,
      },
      '&:before': {
        position: 'relative',
        top: -2,
        width: 5,
        height: 5,
        marginRight: 12,
        display: 'inline-block',
        content: '""',
        borderRadius: '50%',
        background: theme.palette.BLColors.main,
      },
    },
  },
});
