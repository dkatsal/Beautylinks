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
    width: '70%',
    margin: '0 0 38px',
  },
  subtitle: {
    margin: '60px 0',
    ...theme.customerContent.subtitle,
    textAlign: 'center',
  },
  noData: {
    fontSize: 18,
    textAlign: 'center',
  },
  infoLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 14,
    color: '#cb2026',
    fontWeight: 700,
    textDecoration: 'underline',
    border: 'none',
    background: 'none',
    '& span': {
      width: 20,
      height: 20,
      marginRight: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #ccc',
      color: '#cccccc',
      borderRadius: '50%',
    },
  },
});
