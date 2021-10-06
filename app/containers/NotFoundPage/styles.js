export default theme => ({
  title: {
    margin: '20px 0 -20px',
    fontSize: 72,
    fontWeight: 700,
    color: '#00C7C7',
    textAlign: 'center',
  },
  container: {
    ...theme.blocks.container,
    paddingBottom: 60,
  },
  desc: {
    fontSize: 18,
    lineHeight: '22px',
    textAlign: 'center',
  },
  imgCenter: {
    margin: '0 auto',
    maxWidth: '100%',
  },
  linkBtn: {
    color: '#00C7C7',
    textDecoration: 'underline',
  },
});
