import leftBgImage from '../../../img/leftFaqHdr.svg';
import rightBgImage from '../../../img/rightFaqHdr.svg';

export default theme => ({
  topBox: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '&:before': {
      '@media (min-width: 768px)': {
        position: 'absolute',
        bottom: 9,
        display: 'block',
        content: "''",
        background: `url("${leftBgImage}") 50% 0/100% no-repeat`,
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        left: 0,
        height: 170,
        width: 230,
      },
      '@media (min-width: 1024px) and (max-width: 1439px)': {
        left: 0,
        height: 176,
        width: 280,
      },
      '@media (min-width: 1440px)': {
        left: -115,
        height: 287,
        width: 457,
      },
    },
    '&:after': {
      '@media (min-width: 768px)': {
        position: 'absolute',
        bottom: 9,
        display: 'block',
        content: "''",
        background: `url(${rightBgImage}) 50% 0/100% no-repeat`,
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        right: 0,
        height: 157,
        width: 224,
      },
      '@media (min-width: 1024px) and (max-width: 1439px)': {
        right: 0,
        height: 181,
        width: 258,
      },
      '@media (min-width: 1440px)': {
        right: -44,
        height: 261,
        width: 372,
      },
    },
  },
  topContainer: {
    ...theme.blocks.container,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      padding: 0,
    },
    '@media (min-width: 768px)': {
      borderBottom: '1px solid #00c7c7',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      minHeight: 200,
    },
    '@media (min-width: 1440px)': {
      minHeight: 290,
    },
  },
  btnBox: {
    margin: 0,
    width: '100%',
  },
  logo: {
    display: 'inline-block',
    '@media (min-width:768px) and (max-width:1024px)': {
      maxWidth: 264,
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      maxWidth: 164,
      marginRight: 29,
    },
    '& img': {
      maxWidth: '100%',
    },
  },
  title: {
    color: '#404040',
    '@media (max-width: 768px)': {
      maxWidth: 270,
      margin: '0 auto',
    },
    '@media (max-width: 1439px)': {
      fontSize: 18,
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      maxWidth: 230,
      margin: '0 auto 30px',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      maxWidth: 280,
      margin: '0 auto 40px',
    },
    '@media (min-width: 1440px)': {
      fontSize: 24,
      margin: '30px 0 40px',
    },
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    background: 'transparent',
    border: `0px solid ${theme.palette.BLColors.main}`,
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.2)',
    color: '#333333',
    fontWeight: 400,
    '@media (max-width: 1023px)': {
      width: '100%',
      maxWidth: 300,
      margin: '0 auto 20px',
      fontSize: 14,
    },
    '@media (min-width: 1024px)': {
      minWidth: 290,
      borderRadius: 40,
      fontSize: 22,
    },
  },
  linkBtnActive: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.2)',
    fontWeight: 400,
    '@media (max-width: 1023px)': {
      width: '100%',
      maxWidth: 300,
      margin: '0 auto 20px',
      fontSize: 14,
      borderRadius: 40,
    },
    '@media (min-width: 1024px)': {
      minWidth: 290,
      borderRadius: 40,
      fontSize: 22,
    },
  },
  topWrap: {
    ...theme.blocks.container,
    padding: '16px 0 0',
    textAlign: 'center',
  },
  faqBtnBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      padding: '40px 0',
    },
    '@media (min-width: 768px)': {
      padding: '70px 0',
    },
    '& button': {
      '@media (max-width: 1023px)': {
        margin: '0 10px 10px',
      },
      '&:nth-child(2)': {
        '@media (min-width: 1024px)': {
          margin: '0 40px',
        },
      },
    },
  },
  breadCrumbsBox: {
    '@media (max-width: 767px)': {
      margin: '0 0 20px',
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
  topBoxDscr: {
    margin: '0 auto',
    opacity: 0.8,
    lineHeight: '34px',
    maxWidth: 1170,
  },
});
