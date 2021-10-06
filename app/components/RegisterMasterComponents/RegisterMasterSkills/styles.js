import plusIcon from '../../../img/icons/plus-grey.svg';

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
  subTitle: {
    margin: '0 0 40px',
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
  },
  fieldBox: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    color: '#4C4C4C',
    fontSize: 18,
    '& > span': {
      '@media (max-width: 479px)': {
        width: '100%',
      },
      '@media (min-width: 480px)': {
        marginRight: 20,
      },
      '@media (min-width: 480px) and (max-width: 767px)': {
        maxWidth: '50%',
      },
    },
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
    position: 'relative',
    maxWidth: 710,
    margin: '0 auto 40px',
  },
  loadImg: {
    height: 60,
    margin: '0 auto 40px',
    padding: '0 20px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: '22px',
    backgroundColor: '#ffffff',
    border: '1px dashed #4C4C4C',
    borderRadius: 5,
    cursor: 'pointer',
    '@media (min-width: 768px)': {
      width: 470,
    },
    '& input': {
      display: 'none',
    },
    '& span': {
      marginRight: 20,
    },
  },
  inputImage: {
    height: 20,
    width: 20,
    background: `url("${plusIcon}") 50% 50%/100% no-repeat`,
  },
  skillsInput: {
    padding: '6px 0 8px',
    width: '100%',
    borderColor: 'transparent',
    borderBottom: '1px solid #4C4C4C',
  },
  addBtn: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    padding: '8px 23px',
    fontSize: 12,
    background: '#E5E5E5',
    borderColor: 'transparent',
    borderRadius: 100,
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
