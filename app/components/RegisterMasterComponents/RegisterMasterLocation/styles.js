export default theme => ({
  title: {
    margin: '0 0 25px',
    fontSize: 24,
    fontWeight: 700,
    textAlign: 'center',
  },
  desc: {
    margin: '0 0 35px',
    fontSize: 18,
    textAlign: 'center',
    color: '#4C4C4C',
  },
  input: {
    marginBottom: 30,
  },
  chbx: {
    color: '#01c7c7',
  },
  checked: {
    color: '#01c7c7',
  },
  fieldTitle: {
    fontSize: 24,
    marginBottom: 30,
  },
  formControl: {
    width: '100%',
    marginTop: 40,
  },
  switchContainer: {
    maxWidth: 300,
    margin: '0 auto 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  switchTitle: {
    fontSize: 18,
    marginRight: 26,
  },
  switchWrap: {
    position: 'relative',
    width: 100,
    overflow: 'hidden',
    borderRadius: 5,
    'input:checked ~ & > div': {
      transform: 'translateX(0px)',
    },
  },
  switchBox: {
    position: 'relative',
    zIndex: 1,
    width: 150,
    height: 40,
    display: 'flex',
    backgroundColor: '#01c7c7',
    cursor: 'pointer',
    transform: 'translateX(-50px)',
    transition: 'transform 0.8s',
    '&:before': {
      position: 'absolute',
      zIndex: 2,
      top: 0,
      right: 0,
      width: 75,
      height: 40,
      display: 'block',
      content: '""',
      backgroundColor: '#C60000',
    },
    '& span': {
      position: 'relative',
      zIndex: 3,
      width: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 1,
      border: '1px solid #01c7c7',
      borderRadius: 5,
      color: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      '&:first-child': {
        backgroundColor: '#01c7c7',
      },
      '&:last-child': {
        backgroundColor: '#C60000',
        border: '1px solid #C60000',
      },
    },
  },
  switchLabel: {
    width: 34,
  },
  inputBox: {
    maxWidth: 710,
    margin: '0 auto 24px',
  },
  inputSearch: {
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    top: 20,
    right: 5,
    width: 16,
  },
  switchContent: {
    position: 'relative',
  },
  switchInput: {
    position: 'relative',
    '&:checked ~ .switchWrap > .switchBox': {
      transform: 'translate(-50px, 0)',
    },
  },
  root: {},
  btnBox: {
    margin: '40px 0 0',
    textAlign: 'center',
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    textTransform: 'none',
    '@media (max-width: 1023px)': {
      width: '100%',
      maxWidth: 700,
      height: 70,
      fontSize: 24,
    },
    '@media (min-width: 1024px)': {
      padding: '0 50px',
      fontSize: 18,
    },
  },
});
