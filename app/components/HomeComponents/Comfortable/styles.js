import bgImage from '../../../img/comfortable_bg.png';

export default theme => ({
  wrap: {
    padding: '40px 0 50px',
    background: `url("${bgImage}") 50% 0/cover no-repeat`,
  },
  container: {
    ...theme.blocks.container,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    margin: '0 0 50px',
    '@media (max-width: 767px)': {
      fontSize: 18,
    },
    '@media (min-width: 768px)': {
      fontSize: 22,
      fontWeight: 300,
    },
  },
  box: {
    maxWidth: 450,
    marginBottom: 30,
    '@media (max-width: 767px)': {
      width: '100%',
    },
    '@media (min-width: 768px)': {
      width: 'calc(50% - 20px)',
    },
    '& p': {
      '@media (max-width: 767px)': {
        fontSize: 14,
        lineHeight: '20px',
      },
      '@media (min-width: 768px)': {
        fontSize: 18,
        lineHeight: '22px',
        fontWeight: 700,
      },
    },
    '&:first-child p': {
      marginRigh: 20,
      marginLeft: 'auto',
    },
  },
  boxTitle: {
    margin: '0 0 20px',
    '@media (max-width: 767px)': {
      fontSize: 16,
      lineHeight: '20px',
    },
    '@media (min-width: 768px)': {
      fontWeight: 400,
      fontSize: 18,
    },
  },
  linkBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
  btnBox: {
    textAlign: 'center',
  },
});
