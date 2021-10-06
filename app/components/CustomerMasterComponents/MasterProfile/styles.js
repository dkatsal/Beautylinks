import editIcon from '../../../img/icons/edit-dark.svg';
import plusIcon from '../../../img/icons/plus-white.svg';
import purpleIcon from '../../../img/icons/plus-purple.svg';
import basketIcon from '../../../img/icons/basket-icon.svg';

export default theme => ({
  header: {
    borderBottom: '1px solid #00c7c7',
  },
  title: {
    margin: '0 0 32px',
    ...theme.customerContent.title,
  },
  desc: {
    ...theme.customerContent.desc,
  },
  container: {
    padding: '50px 0',
    borderBottom: '1px solid #00c7c7',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  subtitle: {
    fontSize: 18,
    margin: '0 0 22px',
  },
  desc: {
    maxWidth: 700,
    fontSize: 16,
    margin: '0 0 25px',
  },
  headerBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editTitle: {
    textAlign: 'left',
    display: 'inline-block',
    '@media (max-width: 1023px)': {
      fontSize: 14,
      width: 100,
      marginRight: 20,
    },
    '@media (min-width: 1024px)': {
      fontSize: 16,
      width: 180,
      fontWeight: 700,
    },
  },
  avatarBox: {
    width: 320,
    margin: '40px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarImg: {
    width: 'auto',
    height: 150,
    display: 'block',
    borderRadius: 5,
  },
  loadAvatar: {
    width: 150,
    height: 150,
    padding: '0 20px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: '22px',
    background: `url("${plusIcon}") 50% 43px no-repeat`,
    backgroundColor: '#00C6C6',
    borderRadius: 5,
    cursor: 'pointer',
    '& input': {
      display: 'none',
    },
    '& span': {
      transform: 'translateY(20px)',
    },
  },
  portfolio: {
    margin: '0 0 40px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  portfolioItem: {
    border: '2px solid #00C6C6',
    borderRadius: 10,
    maxHeight: 120,
    height: '100%',
    margin: '0 5px 5px 0',
  },
  uploadedItem: {
    position: 'relative',
    width: 'calc(25% - 10px)',
    height: 180,
    margin: '0 10px 10px 0',
    overflow: 'hidden',
    '&:hover button': {
      display: 'block',
    },
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
  },
  loadPortfolioItem: {
    width: 120,
    height: 120,
    margin: '0 23px 5px',
    padding: 20,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: '22px',
    background: `url("${purpleIcon}") 50% 43px no-repeat`,
    border: '1px solid #4C4C4C',
    borderRadius: 10,
    cursor: 'pointer',
    '& input': {
      display: 'none',
    },
    '& span': {
      marginRight: 20,
    },
  },
  saveIcon: {
    fontSize: 24,
    color: '#00c6c6',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  loadImg: {
    width: '100%',
    margin: '40px 0',
    padding: 20,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: '22px',
    backgroundColor: 'transparent',
    border: '2px dashed #4C4C4C',
    cursor: 'pointer',
    '& input': {
      display: 'none',
    },
    '& span': {
      marginRight: 20,
    },
  },
  inputImage: {
    height: 26,
    width: 20,
    marginTop: 20,
    background: `url("${basketIcon}") 50% 50%/100% no-repeat`,
  },
  deleteButton: {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)',
    height: 50,
    width: 50,
    padding: 10,
    borderRadius: '50%',
    background: `url("${basketIcon}") 50% 50% no-repeat rgba(255, 255, 255, 0.8)`,
    borderColor: 'transparent',
    display: 'none',
  },
  customerData: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      width: '100%',
    },
    '@media (min-width: 768px)': {
      maxWidth: 650,
    },
  },
  inputBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: '0 0 10px',
  },
  selectBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: 40,
    margin: '0 0 10px',
  },
  checkboxCont: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: 40,
    margin: '10px 0 0',
  },
  inputFullBox: {
    width: '100%',
  },
  inputField: {
    width: '100%',
    maxWidth: 270,
    marginTop: 0,
    marginBottom: 0,
    padding: '0 15px',
    background: 'transparent',
    lineHeight: '40px',
    borderRadius: 4,
    border: '1px solid #00c7c7',
    fontSize: 16,
  },
  inputFullField: {
    width: '100%',
    minHeight: 150,
    marginTop: 0,
    marginBottom: 40,
    padding: '18px 15px',
    background: 'transparent',
    border: 'transparent',
    border: '1px solid #00c7c7',
    fontSize: 16,
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  profileLink: {
    padding: '8px 0 8px 10px',
    width: 320,
    fontSize: 14,
    background: '#eee',
    '@media (max-width: 1439px)': {
      margin: '0 0 20px',
    },
    '@media (min-width: 1440px)': {
      transform: 'translateY(-15px)',
    },
    '&:before': {
      border: 0,
    },
  },
  copyIcon: {
    fontSize: 16,
    color: '#00C6C6',
  },
  chbx: {
    color: '#01c7c7',
    '& + span': {
      '@media (max-width: 479px)': {
        fontSize: 14,
      },
    },
  },
  checked: {
    color: '#01c7c7',
  },
  btnBox: {
    margin: '20px 0 40px',
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
  select: {
    height: 40,
    width: 270,
    border: '1px solid #00c7c7',
    boxShadow: 'none',
  },
});
