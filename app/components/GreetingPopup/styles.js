export default theme => ({
  dialogBox: {
    '& > div > div': {
      width: '100%',
      maxWidth: 685,
      boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
      '@media (max-width: 1023px)': {
        padding: '0px 10px 10px',
      },
      '@media (min-width: 1024px)': {
        padding: '0px 10px 48px',
      },
    },
  },
  popupLogo: {
    margin: '20px auto 0',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    '& svg:not(:root)': {
      fontSize: '2.8rem',
      fill: '#000000',
    },
  },
  dialogCont: {
    lineHeight: '21px',
    textAlign: 'center',
    '@media (max-width: 439px)': {
      fontSize: 18,
      padding: 0,
    },
    '@media (min-width: 440px)': {
      fontSize: 20,
    },
    '&>p': {
      margin: '0 0 20px',
    },
  },
  link: {
    color: '#0675C6',
    textDecoration: 'underline',
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    margin: '20px auto 0',
    '@media (max-width: 439px)': {
      fontSize: 16,
    },
    '@media (min-width: 440px)': {
      fontSize: 18,
    },
    '@media (max-width: 1439px) and (min-width: 1024px)': {
      maxWidth: 'inherit',
    },
    '@media (min-width: 1440px)': {
      width: 'auto',
      maxWidth: 'inherit',
    },
  },
});
