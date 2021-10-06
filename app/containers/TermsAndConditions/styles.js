export default theme => ({
  topBox: {
    ...theme.blocks.container,
    padding: '16px 0 0',
    textAlign: 'center',
  },
  title: {
    margin: '0 0 40px',
    fontSize: 36,
  },
  breadCrumbsBox: {
    '@media (max-width: 767px)': {
      margin: '0 0 20px',
    },
    '@media (min-width: 768px)': {
      margin: '40px 0',
    },
    '& span': {
      color: theme.palette.BLColors.main,
      fontSize: 16,
      '@media (max-width: 767px)': {
        fontSize: 12,
      },
      '@media (min-width: 768px)': {
        fontSize: 26,
      },
    },
  },
  breadCrumbsLink: {
    color: theme.palette.BLColors.main,
    transition: `text-shadow 0.2s ${theme.transitions.easing.easeOut}`,
    '@media (max-width: 767px)': {
      fontSize: 12,
    },
    '@media (min-width: 768px)': {
      fontSize: 26,
    },
    '&:hover': {
      textShadow: '1px 0 0 rgba(0, 0, 0, 0.5)',
    },
  },
  container: {
    ...theme.blocks.container,
    paddingBottom: 60,
  },
  figureLeft: {
    float: 'left',
    margin: '0 33px 33px 0',
  },
});
