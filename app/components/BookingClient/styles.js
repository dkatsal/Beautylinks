export default theme => ({
  booking: {
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #00C6C6',
    '@media (max-width: 819px)': {
      padding: '20px 0',
    },
    '@media (min-width: 820px)': {
      padding: '10px 0',
    },
  },
  master: {
    textAlign: 'center',
    minWidth: '10%',
    margin: '0 20px',
    '@media (max-width: 819px)': {
      width: 70,
      textAlign: 'center',
    },
  },
  picture: {
    margin: '0 auto 10px',
    borderRadius: '50%',
    '@media (max-width: 819px)': {
      width: 30,
      height: 30,
    },
    '@media (min-width: 820px)': {
      width: 60,
      height: 60,
    },
  },
  name: {
    color: '#4C4C4C',
    '@media (max-width: 819px)': {
      fontSize: 12,
    },
    '@media (min-width: 820px)': {
      fontSize: 16,
      fontWeight: 700,
    },
  },
  content: {
    '@media (max-width: 819px)': {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 40,
      marginRight: 'auto',
    },
    '@media (min-width: 820px)': {
      // display: 'contents',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      // justifyContent: 'space-around',
    },
  },
  treatment: {
    fontWeight: 700,
    '@media (max-width: 819px)': {
      marginBottom: 2,
      fontSize: 14,
    },
    '@media (min-width: 820px)': {
      marginBottom: 8,
      fontSize: 18,
    },
  },
  place: {
    '@media (max-width: 819px)': {
      fontSize: 12,
    },
    '@media (min-width: 820px)': {
      fontSize: 16,
    },
  },
  text: {
    width: '100%',
  },
  date: {
    width: '100%',
    fontSize: 18,
    fontWeight: 700,
    color: '#4C4C4C',
    marginLeft: 'auto',
    '@media (max-width: 819px)': {
      marginBottom: 10,
    },
  },
  options: {
    marginLeft: 'auto',
    '@media (max-width: 819px)': {
      display: 'none',
    },
    '@media (min-width: 820px)': {
      // display: 'contents',
    },
  },
  optionsLabel: {
    '@media (max-width: 819px)': {
      height: 30,
      width: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid #4C4C4C',
      borderRadius: '50%',
      fontWeight: 700,
      color: '#4C4C4C',
    },
    '@media (min-width: 820px)': {
      display: 'none',
    },
  },
  order: {
    width: '100%',
    fontSize: 18,
    fontWeight: 700,
    color: '#4C4C4C',
  },
  linkBox: {
    width: 100,
    display: 'flex',
    flexDirection: 'column',
  },
  detailsBtn: {
    marginBottom: 5,
    padding: 0,
    fontSize: 12,
    textTransform: 'lowercase',
    '& .MuiButton-label': {
      lineHeight: '1em',
    },
  },
  rescheduleBtn: {
    marginBottom: 5,
    padding: 0,
    fontSize: 12,
    textTransform: 'lowercase',
    '& .MuiButton-label': {
      lineHeight: '1em',
    },
  },
  cancelBtn: {
    marginBottom: 5,
    padding: 0,
    fontSize: 12,
    textTransform: 'lowercase',
    '& .MuiButton-label': {
      lineHeight: '1em',
    },
  },
});
