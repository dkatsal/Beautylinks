import plusIcon from '../../../img/icons/plus-white.svg';
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
  loadImg: {
    width: 165,
    height: 165,
    margin: '40px auto',
    padding: '0 20px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: '22px',
    background: `url("${plusIcon}") 50% 43px no-repeat`,
    backgroundColor: '#C4C4C4',
    borderRadius: 5,
    cursor: 'pointer',
    '& input': {
      display: 'none',
    },
    '& span': {
      transform: 'translateY(20px)',
    },
  },
  previewImg: {
    margin: '0 auto',
    // padding: '0 10px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
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
