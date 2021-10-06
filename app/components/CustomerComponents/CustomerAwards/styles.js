export default theme => ({
  header: {
    marginBottom: 70,
    paddingBottom: 30,
    borderBottom: '1px solid #00c7c7',
    position: 'relative',
    '@media (min-width: 1440px)': {
      marginLeft: 33,
    },
  },
  title: {
    marginTop: 0,
    marginBottom: 0,
    ...theme.customerContent.title,
  },
  box: {
    margin: '0 auto 50px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    border: '3px solid #a5a5a5',
    '@media (max-width: 767px)': {
      maxWidth: 420,
    },
    '@media (min-width: 768px)': {
      width: 570,
    },
  },
  boxImg: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#dadada',
    '@media (max-width: 449px)': {
      width: 35,
      height: 35,
      margin: '10px 5px',
    },
    '@media (min-width: 450px) and (max-width: 767px)': {
      width: 40,
      height: 40,
      margin: '20px 10px',
    },
    '@media (min-width: 768px)': {
      width: 50,
      height: 50,
      margin: '20px 17px',
    },
  },
  boxImgFill: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#00c7c7',
    '@media (max-width: 449px)': {
      width: 35,
      height: 35,
      margin: '10px 5px',
    },
    '@media (min-width: 450px) and (max-width: 767px)': {
      width: 40,
      height: 40,
      margin: '20px 10px',
    },
    '@media (min-width: 768px)': {
      width: 50,
      height: 50,
      margin: '20px 17px',
    },
    '& img': {
      '@media (max-width: 449px)': {
        width: 20,
      },
      '@media (min-width: 450px) and (max-width: 767px)': {
        width: 25,
      },
      '@media (min-width: 768px)': {
        width: 35,
      },
    },
  },
  boxImgGift: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '3px solid #00c7c7',
    '@media (max-width: 449px)': {
      width: 50,
      height: 50,
      margin: '10px 8px 10px 10px',
    },
    '@media (min-width: 450px) and (max-width: 767px)': {
      width: 60,
      height: 60,
      margin: '12px 10px 12px 30px',
    },
    '@media (min-width: 768px)': {
      width: 65,
      height: 65,
      margin: '12px 14px 12px 60px',
    },
    '& img': {
      '@media (max-width: 767px)': {
        width: 30,
      },
      '@media (min-width: 768px)': {
        width: 40,
      },
    },
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
  btnBox: {
    textAlign: 'center',
    marginBottom: 70,
  },
  legendContainer: {
    width: 326,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      marginTop: 20,
    },
    '@media (min-width: 768px)': {
      position: 'absolute',
      top: 0,
      right: 30,
    },
  },
  legendBox: {
    width: 285,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    border: '3px solid #a5a5a5',
  },
  legendImg: {
    width: 25,
    height: 25,
    margin: '10px 8px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#dadada',
  },
  legendDesc: {
    position: 'absolute',
    zIndex: 2,
    width: 160,
    margin: 0,
    padding: 10,
    fontSize: 14,
    color: '#656565',
    background: '#FFF',
    borderRadius: 5,
    boxShadow: '0 0 10px rgba(29, 6, 0, 0.1)',
    opacity: 0,
    transition: 'opacity 0.2s',
    '@media (max-width: 767px)': {
      top: 110,
      left: 170,
    },
    '@media (min-width: 768px)': {
      top: 60,
      right: -20,
    },
    '&:before': {
      position: 'absolute',
      zIndex: 2,
      top: -12,
      right: 20,
      borderStyle: 'solid',
      borderWidth: '0 10px 12px 10px',
      borderColor: 'transparent transparent #FFFFFF transparent',
      content: '""',
    },
  },
  legendImgGift: {
    width: 32,
    height: 32,
    margin: '5px 6px 5px 32px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '1px solid #00c7c7',
    '& img': {
      '@media (max-width: 767px)': {
        width: 19,
      },
      '@media (min-width: 768px)': {
        width: 19,
      },
    },
  },
  legendImgQuestion: {
    display: 'inline-flex',
    width: 27,
    '&:hover + p': {
      opacity: 1,
      transition: 'opacity 0.2s',
    },
  },
  container: {
    borderTop: '1px solid #00c7c7',
    marginBottom: 70,
    '@media (min-width: 1024px)': {
      marginLeft: 33,
    },
  },
  subtitle: {
    margin: '70px 0 50px',
    fontWeight: 700,
    ...theme.customerContent.subtitle,
  },
  descText: {
    textAlign: 'center',
    ...theme.customerContent.desc,
    '& > a': {
      color: '#00c7c7',
      textDecoration: 'underline',
    },
  },
});
