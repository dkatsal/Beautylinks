import closeIcon from '../../../img/cross_sm.png';
import doneIcon from '../../../img/check_sm.png';

export default theme => ({
  header: {
    borderBottom: '1px solid #00c7c7',
  },
  title: {
    margin: '0 0 32px',
    ...theme.customerContent.title,
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
  subtitle: {
    width: '100%',
    margin: '0 0 32px',
    ...theme.customerContent.subtitle,
  },
  desc: {
    ...theme.customerContent.desc,
  },
  statusBox: {
    minHeight: 150,
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 14,
    color: '#4C4C4C',
    textAlign: 'center',
    border: '1px solid #00C6C6',
    borderRadius: 5,
    marginBottom: 20,
    '@media (max-width:529px)': {
      width: 'calc(50% - 10px)',
      '&:nth-of-type(2n)': {
        marginLeft: 20,
      },
    },
    '@media (min-width:530px) and (max-width:779px)': {
      width: 'calc(100% / 3 - 80px / 3)',
      '&:nth-of-type(2n), &:nth-of-type(3n), &:nth-of-type(5)': {
        marginLeft: 40,
      },
    },
    '@media (min-width:780px) and (max-width:1023px)': {
      width: 'calc(25% - 30px)',
      '&:nth-of-type(2n), &:nth-of-type(3n), &:nth-of-type(4)': {
        marginLeft: 40,
      },
    },
    '@media (min-width:1024px) and (max-width:1219px)': {
      width: 'calc(100% / 3 - 80px / 3)',
      '&:nth-of-type(2n), &:nth-of-type(3n), &:nth-of-type(5)': {
        marginLeft: 40,
      },
    },
    '@media (min-width:1220px)': {
      width: 'calc(20% - 32px)',
      '&': {
        marginLeft: 40,
      },
      '&:first-of-type': {
        marginLeft: 0,
      },
    },
    '& > div': {
      width: '100%',
      minHeight: 100,
      padding: 15,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFFFFF',
      fontSize: 16,
      lineHeight: '1.3em',
    },
  },
  statisticBox: {
    height: 100,
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 18,
    color: '#4C4C4C',
    background: '#FFFFFF',
    borderRadius: 5,
    flexGrow: 1,
    '@media (max-width:767px)': {
      width: '100%',
    },
    '@media (min-width:768px)': {
      width: 'calc(100% / 3 - 40px / 3)',
      '&:last-child': {
        marginLeft: 40,
      },
    },
    '& p': {
      margin: '0 0 20px',
      '& b': {
        display: 'inline-flex',
        margin: '30px 0 0',
        fontSize: 30,
        fontWeight: 400,
        color: '#00c7c7',
      },
    },
    '&:last-child b': {
      color: '#333333',
    },
  },
  btnClose: {
    width: 30,
    height: 30,
    margin: '10px auto',
    background: `url("${closeIcon}") 50% no-repeat`,
  },
  btnDone: {
    width: 30,
    height: 30,
    margin: '10px auto',
    background: `url("${doneIcon}") 50% no-repeat`,
  },
  bookingContainer: {
    margin: '0 0 38px',
  },
  headingRow: {
    marginBottom: 35,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    border: '1px solid #C4C4C4',
    '@media (max-width: 767px)': {
      fontSize: 14,
    },
    '@media (min-width: 768px)': {
      fontSize: 16,
    },
    '& p': {
      flexGrow: 1,
      maxWidth: '20%',
      margin: 0,
      padding: '10px 15px',
      borderRight: '1px solid #C4C4C4',
      textAlign: 'center',
      '&:last-child': {
        border: 'none',
      },
    },
  },
  tableRow: {
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    border: '1px solid #C4C4C4',
    '@media (max-width: 767px)': {
      fontSize: 14,
    },
    '@media (min-width: 768px)': {
      fontSize: 16,
    },
    '& p': {
      flexGrow: 1,
      maxWidth: '20%',
      margin: 0,
      padding: '10px 15px',
      borderRight: '1px solid #C4C4C4',
      textAlign: 'center',
      '&:last-child': {
        border: 'none',
      },
    },
  },
  link: {
    color: '#00c7c7',
  },
  profileLink: {
    color: '#000000',
    textDecoration: 'underline',
    marginLeft: 0,
    marginRight: 'auto',
  },
});
