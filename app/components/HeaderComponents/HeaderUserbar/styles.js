export default theme => ({
  userBar: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 499px)': {
      right: 0,
      maxWidth: 200,
    },
    '@media (min-width:500px) and (max-width: 1023px)': {
      right: 0,
      maxWidth: 250,
    },
    '@media (max-width: 1023px)': {
      position: 'absolute',
      zIndex: 10,
      width: '100%',
      paddingTop: 40,
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      transform: 'translateX(100%)',
      transition: '0.8s transform',
    },
    '@media (min-width: 1024px)': {
      marginLeft: 'auto',
    },
    '#topMenuTriger:checked ~ header &': {
      '@media (max-width: 499px)': {
        transform: 'translateX(calc(120px - 100%))',
      },
      '@media (min-width: 500px) and (max-width: 1023px)': {
        transform: 'translateX(-135px)',
        transition: '0.5s transform',
      },
    },
  },
  btnLink: {
    padding: '0 28px',
    borderRadius: 5,
    border: `2px solid ${theme.palette.BLColors.main}`,
    color: theme.palette.BLColors.main,
    fontSize: 18,
    lineHeight: '46px',
    fontWeight: theme.typography.fontWeightBold,
    transition: `all 0.2s ${theme.transitions.easing.easeOut}`,
    '@media (min-width: 500px)': {
      marginRight: 38,
    },
    '&:hover': {
      color: '#fff',
      background: theme.palette.BLColors.main,
    },
  },
  loginLink: {
    padding: `${theme.spacing(0.3)}px 0`,
    fontSize: 18,
    color: '#000',
    fontWeight: theme.typography.fontWeightBold,
    ...theme.linkActions.underLine(theme.transitions.easing.easeOut, '#000'),
    '@media (max-width: 1023px)': {
      marginBottom: 10,
    },
    '@media (min-width:1024px)': {
      marginRight: 38,
    },
    '@media (min-width:1024px) and (max-width:1439px)': {
      fontSize: 16,
    },
    '@media (min-width:1440px)': {
      fontSize: 18,
    },
  },
  commentBtn: {
    position: 'relative',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '50%',
    boxShadow: '0 0 15px rgba(0, 199, 199, 0.50)',
    background: theme.palette.BLColors.main,
    cursor: 'pointer',
    '@media (max-width: 1023px)': {
      position: 'fixed',
      bottom: 20,
      right: 20,
    },
    '&:after': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: -1,
      content: '""',
      width: 0,
      height: 0,
      border: '1px solid #b5b5b5',
      borderRadius: '50%',
      opacity: 0.5,
      animation: 'circle 2s infinite ease-in-out',
    },
    '&:before': {
      position: 'absolute',
      top: -5,
      left: -5,
      zIndex: -1,
      content: '""',
      width: 60,
      height: 60,
      border: '1px solid #b5b5b5',
      borderRadius: '50%',
      opacity: 0.5,
      animation: 'circle2 2s infinite ease-in-out',
    },
  },
  userBox: {
    '@media (min-width: 1024px)': {
      marginRight: theme.spacing(5),
    },
    '& span': {
      fontWeight: 700,
      '& span': {
        '@media (max-width: 499px)': {
          width: '100%',
          marginTop: 10,
        },
      },
    },
    '& .MuiButton-label': {
      '@media (max-width: 499px)': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
  userAvatarBox: {
    overflow: 'hidden',
    width: 40,
    height: 40,
    marginRight: '10px',
    borderRadius: '50%',
    '& svg': {
      fontSize: 40,
    },
  },
});
