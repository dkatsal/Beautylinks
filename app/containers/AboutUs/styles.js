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
    marginBottom: 36,
    '& span': {
      color: '#000',
      opacity: 0.5,
      fontSize: 16,
    },
  },
  breadCrumbsLink: {
    color: '#000',
    opacity: 0.5,
    fontSize: 16,
    transition: `text-shadow 0.2s ${theme.transitions.easing.easeOut}`,
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
