export default () => ({
  box: {
    margin: '71px auto',
    backgroundColor: '#fff',
    '@media (max-width: 768px)': {
      padding: '40px 20px',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      padding: '45px 60px 40px',
    },
    '@media (min-width: 1024px)': {
      boxShadow: '0 5px 32px rgba(0, 0, 0, 0.14)',
      borderRadius: 20,
    },
    '@media (min-width: 1023px) and (max-width: 1439px)': {
      maxWidth: 950,
      padding: '45px 60px 40px',
    },
    '@media (min-width: 1440px)': {
      width: 1196,
      padding: '45px 117px 40px',
    },
  },
  title: {
    margin: '0 0 60px',
    fontSize: 24,
    fontWeight: 400,
    textAlign: 'center',
  },
});
