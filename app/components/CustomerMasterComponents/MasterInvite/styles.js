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
  subtitle: {
    margin: '0 0 100px',
    ...theme.customerContent.subtitle,
    textAlign: 'center',
  },
  container: {
    padding: '50px 0 0',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0 20px',
  },
  input: {
    width: '100%',
    lineHeight: '50px',
    display: 'block',
    padding: '0 20px',
    border: '1px solid #00C6C6',
    boxSizing: 'border-box',
    borderRadius: 10,
    backgroundColor: `#ffffff`,
    fontSize: '18px',
    '@media (max-width: 767px)': {
      marginBottom: 20,
      lineHeight: '60px',
    },
    '@media (min-width: 768px)': {
      maxWidth: 340,
      marginRight: 30,
    },
  },
  btnLink: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
    margin: 0,
    borderRadius: 10,
    '@media (min-width: 768px) and (max-width: 1440px)': {
      maxWidth: 300,
      fontSize: 18,
      lineHeight: '45px',
    },
    '&[disabled]': {
      backgroundColor: '#E5E5E5',
      borderColor: '#E5E5E5',
      '&:hover': {
        color: '#ffffff',
      },
    },
  },
});
