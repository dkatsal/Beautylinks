import bgImage from '../../../images/livebetter_img.png';
import bgImage768 from '../../../images/livebetter_bg.png';

export default theme => ({
  wrap: {
    position: 'relative',
  },
  container: {
    ...theme.blocks.container,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    display: 'flex',
    '@media (max-width:767px)': {
      paddingTop: 15,
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      paddingTop: 105,
    },
    '@media (min-width:1024px)': {
      minHeight: 720,
    },
  },
  box: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (max-width:767px)': {
      marginBottom: 70,
      width: '100%',
    },
    '@media (min-width:768px) and (max-width:1023px)': {
      marginBottom: 90,
      width: '100%',
    },
    '@media (min-width:768px)': {
      maxWidth: 570,
      marginTop: 95,
    },
  },
  containerBg: {
    display: 'block',
    content: '""',
    background: `url(${bgImage}) 50% 0/100% no-repeat`,
    '@media (max-width:459px)': {
      left: 205,
    },
    '@media (min-width:460px) and (max-width:767px)': {
      right: -20,
    },
    '@media (max-width:499px)': {
      width: 250,
      height: 280,
    },
    '@media (min-width:500px) and (max-width:767px)': {
      left: 260,
      width: 390,
      height: 370,
    },
    '@media (min-width:768px)': {
      minHeight: 620,
      width: 695,
      height: 545,
    },
    '@media (min-width:768px) and (max-width:1059px)': {
      left: 380,
    },
    '@media (min-width:1060px) and (max-width:1299px)': {
      right: 0,
    },
    '@media (max-width:1299px)': {
      position: 'absolute',
      top: 0,
    },
    '@media (min-width:1300px)': {
      position: 'relative',
    },

    '&::after': {
      position: 'absolute',
      display: 'block',
      content: '""',
      background: `url(${bgImage768}) 50% 0/100% no-repeat`,
      '@media (max-width:499px)': {
        left: -10,
        bottom: 50,
        width: 250,
        height: 61,
      },
      '@media (min-width:500px) and (max-width:767px)': {
        bottom: 0,
        left: -10,
        width: 360,
        height: 90,
      },
      '@media (min-width:768px)': {
        bottom: -40,
        left: -30,
        width: 660,
        height: 163,
      },
    },
  },
  title: {
    fontWeight: 700,
    '@media (max-width:767px)': {
      margin: '0 0 20px',
      fontSize: 18,
      maxWidth: 250,
    },
    '@media (min-width:768px)': {
      fontSize: 40,
      margin: '0 0 25px',
    },
  },
  dscr: {
    '@media (max-width:767px)': {
      margin: '0 0 20px',
      maxWidth: 210,
      fontSize: 14,
    },
    '@media (min-width:768px)': {
      fontSize: 22,
      margin: '0 0 40px',
    },
  },
  formBox: {
    display: 'flex',
    flexWrap: 'wrap',
    '@media (max-width:767px)': {
      maxWidth: 370,
    },
    '@media (min-width:768px)': {
      maxWidth: 465,
    },
  },
  inputBox: {
    position: 'relative',
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgb(0 199 199 / 30%)',
    marginBottom: 20,
    '@media (max-width:767px)': {
      height: 36,
      '& > div > div > div': {
        color: '#7b7b7b',
        fontSize: 14,
      },
    },
    '@media (min-width:768px)': {
      height: 54,
    },
    '& > div > div > div:before': {
      display: 'none',
    },
    '& > div > div > div:after': {
      display: 'none',
    },
    '& .MuiFormControl-fullWidth': {
      backgroundColor: 'transparent',
    },
  },
  input: {
    padding: '0 8px 0 18px',
    width: '100%',
    display: 'flex',
    fontSize: 16,
    border: 'none',
    overflow: 'hidden',
    borderRadius: 10,
    '& svg': {
      display: 'none',
    },
    '@media (max-width: 767px)': {
      height: 36,
      '& p': {
        color: '#7b7b7b',
        fontSize: 14,
      },
    },
    '@media (min-width: 768px)': {
      height: 50,
    },
  },
  inputMsg: {
    position: 'absolute',
    left: 18,
    bottom: 12,
    fontSize: 12,
    color: '#b3b3b3',
  },
  dscrBtn: {
    width: '100%',
    textAlign: 'center',
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    width: 172,
  },
  linkBtn: {
    padding: '0 50px',
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    '@media (max-width: 767px)': {
      width: '100%',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
      maxWidth: 768,
    },
  },
  Input: {
    opacity: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    overflow: 'hidden',
    flexGrow: 1,
    '@media (min-width:768px)': {
      flex: 1,
    },
    '& > div ': {
      margin: '5px 5px 5px 0',
    },
    '& + div > span ': {
      display: 'none',
    },
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
  },
  IndicatorsContainer: {
    transform: 'translateX(20px)',
  },
  formInput: {
    position: 'relative',
    paddingBottom: 46,
  },
  inputIcon: {
    position: 'absolute',
    top: 13,
    right: 17,
    width: 24,
    fill: '#cccccc',
  },
  btnBox: {
    textAlign: 'center',
  },
  formControl: {
    width: '100%',
    paddingBottom: 46,
    '& label': {
      fontSize: '18px',
      left: 24,
    },
    '& > div:before': {
      display: 'none',
    },
    '& > div:after': {
      display: 'none',
    },
    '& > div': {
      backgroundColor: 'transparent',
      boxShadow: '0 5px 32px rgba(0, 0, 0, 0.05)',
      color: '#4d4d4d',
    },
    '& > div > div': {
      padding: '0 50px 0 24px',
      lineHeight: '50px',
    },
    '& > div svg': {
      top: 6,
      right: 7,
      fontSize: '2.3rem',
      color: '#00c7c7',
    },
    '& > div em': {
      fontStyle: 'normal',
    },
  },
});
