import checkedIcon from '../../../img/icons/checked-icon.svg';
import editIcon from '../../../img/icons/edit-icon.svg';
import deleteIcon from '../../../img/icons/delete-grey.svg';
import searchIcon from '../../../img/icons/search_grey.svg';
//
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
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #00c7c7',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  input: {
    marginBottom: 30,
  },
  fieldTitle: {
    fontSize: 24,
    marginBottom: 30,
  },
  formControl: {
    width: '100%',
    marginTop: 40,
  },
  searchBox: {
    display: 'flex',
    width: '100%',
    '@media (max-width: 499px)': {
      margin: '0 0 20px',
    },
    '@media (min-width: 500px)': {
      margin: '0 0 30px',
    },
  },
  searchInput: {
    // height: 40,
    width: '100%',
    maxWidth: 710,
    padding: '0 10px 0 40px',
    fontSize: 18,
    background: `url("${searchIcon}") 10px 50% no-repeat`,
    border: 'transparent',
    // borderBottom: '1px solid #4c4c4c',
    color: '#C4C4C4',
  },
  serviceContainer: {
    margin: '0 auto 44px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceContainerActive: {
    margin: '0 auto',
    padding: '18px 23px 18px 33px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#F9F9F9',
    '& > p': {
      fontWeight: 700,
    },
  },
  serviceBox: {
    background: '#FFFFFF',
    '@media (max-width: 499px)': {
      margin: '20px auto',
    },
    '@media (min-width: 500px)': {
      margin: '60px auto 60px 0',
      maxWidth: 650,
    },
  },
  sectionTitle: {
    fontSize: 24,
    color: '#000000',
    '@media (max-width: 499px)': {
      margin: '0 0 20px',
    },
    '@media (min-width: 500px)': {
      margin: '0 0 45px',
    },
  },
  serviceTitle: {
    margin: '0 auto 0 0',
    fontWeight: 700,
    '@media (max-width: 499px)': {
      maxWidth: 'calc(100% - 50px)',
      fontSize: 14,
    },
    '@media (min-width: 500px)': {
      fontSize: 18,
    },
    '@media (max-width: 767px)': {
      order: 1,
    },
  },
  checkedIcon: {
    height: 18,
    width: 20,
    marginRight: 17,
    display: 'inline-block',
    background: `url("${checkedIcon}") 50% 0/100% no-repeat`,
    cursor: 'pointer',
  },
  editBtn: {
    height: 16,
    width: 16,
    marginRight: 10,
    display: 'inline-block',
    background: `url("${editIcon}") center no-repeat`,
    backgroundSize: 'contain',
    cursor: 'pointer',
    border: 'transparent',
    '@media (max-width: 767px)': {
      order: 2,
    },
  },
  deleteBtn: {
    height: 17,
    width: 17,
    display: 'inline-block',
    background: `url("${deleteIcon}") center no-repeat`,
    backgroundSize: 'contain',
    cursor: 'pointer',
    border: 'transparent',
    '@media (max-width: 767px)': {
      order: 2,
    },
  },
  servicePrice: {
    fontSize: 18,
    lineHeight: '22px',
    color: '#4C4C4C',
    background: 'transparent',
    '@media (max-width: 767px)': {
      order: 3,
      width: '100%',
      marginTop: 20,
      paddingLeft: 30,
    },
    '@media (min-width: 768px)': {
      margin: '0 20px 0 auto',
    },
  },
  addBtn: {
    position: 'relative',
    height: 14,
    width: 14,
    border: 'transparent',
    background: 'transparent',
    '@media (max-width: 767px)': {
      order: 2,
    },
    '&:before': {
      position: 'absolute',
      zIndex: 1,
      top: 6,
      left: 0,
      width: 14,
      height: 2,
      backgroundColor: '#4C4C4C',
      display: 'block',
      content: '""',
    },
    '&:after': {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 6,
      width: 2,
      height: 14,
      backgroundColor: '#4C4C4C',
      display: 'block',
      content: '""',
    },
    '&.additional': {
      marginTop: 20,
    },
  },
  serviceDuration: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    '@media (max-width: 767px)': {
      order: 3,
      margin: '20px auto 0',
    },
    '@media (min-width: 768px)': {
      margin: '20px auto 0 50px',
    },
  },
  serviceContent: {
      display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    '@media (max-width: 767px)': {
      order: 3,
      margin: '20px auto 0',
    },
    '@media (min-width: 768px)': {
      margin: '20px 0 0',
    },
  },
  priceTitle: {
    position: 'relative',
    margin: 0,
    color: '#4C4C4C',
    '@media (max-width: 767px)': {
      minWidth: 100,
      fontSize: 14,
      paddingRight: 10,
    },
    '@media (min-width: 768px)': {
      fontSize: 18,
    },
  },
  priceInput: {
    color: '#4c4c4c',
    borderColor: 'transparent',
    background: 'transparent',
    borderBottom: '1px solid #c4c4c4',
    '@media (max-width: 767px)': {
      maxWidth: 60,
      marginLeft: 10,
      fontSize: 14,
    },
    '@media (min-width: 768px)': {
      maxWidth: 100,
      marginLeft: 10,
      fontWeight: 700,
      fontSize: 18,
    },
  },
  linkBtn: {
    order: 5,
    marginLeft: 'auto',
    height: 36,
    lineHeight: '1em',
    padding: '0 20px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 700,
    border: `2px solid ${theme.palette.BLColors.main}`,
    background: theme.palette.BLColors.main,
    transition: `all 0.2s ${theme.transitions.easing.easeOut}`,
    fontSize: 16,
    '@media (max-width: 767px)': {
      borderRadius: 10,
    },
    '@media (min-width: 768px)': {
      borderRadius: 20,
      marginLeft: 'auto',
    },
    '&:hover': {
      color: theme.palette.BLColors.main,
      background: 'transparent',
    },
  },
  serviceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  addServs: {
    width: '100%',
    marginTop: 40,
    order: 4,
  },
  addServsTitle: {
    fontSize: 16,
    fontWeight: 700,
    margin: 0,
  },
  addService: {
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 0 30px',
  },
  addServiceHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto 20px',
    '& > div': {
      width: '100%',
      maxWidth: 500,
    },
  },
  addServiceName: {
    margin: '10px auto 15px 0',
  },
  addServiceField: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    '@media (max-width: 767px)': {
      margin: '20px auto 0',
    },
    '&.price': {
      '@media (min-width: 768px)': {
        marginRight: 50,
      },
    },
  },
});
