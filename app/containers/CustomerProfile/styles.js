export default theme => ({
  header: {
    borderBottom: '1px solid #00c7c7',
    marginBottom: 40,
  },
  title: {
    margin: '0 0 32px',
    ...theme.customerContent.title,
  },
  desc: {
    ...theme.customerContent.desc,
  },
  subtitle: {
    width: '100%',
    margin: '0 0 30px',
    ...theme.customerContent.subtitle,
  },
  container: {
    padding: '0 0 40px',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  formInput: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginBottom: 30,

    '&:last-child': {
      marginBottom: 0,
    },
  },
  label: {
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: '0 20px',
    border: '1px solid #00c7c7',
    backgroundColor: `#ffffff`,
    fontSize: '18px',
    borderRadius: 10,
    lineHeight: '50px',
    '@media (min-width: 768px) and (max-width: 1023px)': {
      maxWidth: 340,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      maxWidth: 310,
    },
    '@media (min-width: 1440px)': {
      maxWidth: 360,
    },
    '&:nth-child(2)': {
      '@media (max-width: 767px)': {
        // marginTop: 30,
      },
      '@media (min-width: 768px)': {
        // marginLeft: 30,
      },
    },
  },
  // formInput: {
  //   position: 'relative',
  //   paddingBottom: 32,
  // },
  dscrBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
});
