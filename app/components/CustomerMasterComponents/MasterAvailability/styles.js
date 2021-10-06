import deleteIcon from '../../../img/icons/delete-grey.svg';

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
  },
  subtitle: {
    width: '100%',
    margin: '0 0 50px',
    paddingBottom: 20,
    borderBottom: '1px solid #01c7c7',
    ...theme.customerContent.subtitle,
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
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 18,
    width: '100%',
    margin: '0 0 30px',
    '&:last-child': {
      borderBottom: 'transparent',
    },
  },
  switchContent: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  switchTitle: {
    ...theme.switchContent.switchTitle,
    width: 120,
  },
  switchLabel: {
    order: 2,
    marginLeft: 'auto',
  },
  switchBox: {
    ...theme.switchContent.switchBox,
  },
  scheduleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: 14,
    '@media (max-width: 767px)': {
      order: 3,
      width: '100%',
      margin: '20px 0 10px',
      justifyContent: 'flex-start',
    },
    '@media (min-width: 768px)': {
      width: 315,
      margin: '0 0 0 20px',
      justifyContent: 'center',
    },
  },
  scheduleTitle: {
    display: 'flex',
    position: 'relative',
    fontSize: 18,
    '@media (max-width: 767px)': {
      order: 3,
      width: '100%',
      margin: '20px 0 10px',
      justifyContent: 'flex-start',
    },
    '@media (min-width: 768px)': {
      margin: '0 0 0 50px',
      justifyContent: 'center',
    },
  },
  row: {
    margin: 0,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fromInput: {
    width: 105,
    height: 30,
    fontWeight: 700,
    margin: '0 0 0 15px',
    paddingLeft: 5,
    display: 'block',
    textAlign: 'center',
    border: '1px solid #C4C4C4',
    borderRadius: 5,
  },
  toInput: {
    width: 80,
    height: 30,
    marginLeft: 11,
    display: 'block',
    textAlign: 'center',
    border: '1px solid #C4C4C4',
    borderRadius: 5,
  },
  divider: {
    width: 1,
    height: 30,
    margin: '0 11px 0 23px',
    display: 'block',
    backgroundColor: '#C4C4C4',
  },
  deleteBtn: {
    position: 'absolute',
    zIndex: 1,
    top: 4,
    right: -40,
    height: 22,
    width: 22,
    display: 'inline-block',
    background: `url("${deleteIcon}") 50% 50%/50% no-repeat`,
    cursor: 'pointer',
    border: 'transparent',
    transform: 'translateX(-10px)',
  },
  '#contained-button-file': {
    color: '#EEE',
  },
  btnBox: {
    margin: '40px 0 0',
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    textTransform: 'none',
  },
  vacation: {
    justifyContent: 'flex-start',
    '&>div': {
      width: '100%',
    },
  },
  vacationHeader: {
    display: 'flex',
    borderBottom: '1px solid #01c7c7',
    marginBottom: 50,
    '& > p': {
      border: 'none',
      margin: 0,
    },
  },
  vacationRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& > div': {
      marginRight: 20,
    },
    '@media (max-width: 570px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      '& > div': {
        width: 325,
        justifyContent: 'flex-end',
        marginBottom: 20,
        '& > span': {
          marginRight: 'auto',
        },
      },
    },
  },
  vacationDatePicker: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginRight: 10,
    },
    '@media (max-width: 380px)': {
      width: '100% !important',
    },
  },
});
