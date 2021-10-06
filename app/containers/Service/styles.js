export default theme => ({
  topWrap: {
    position: 'relative',
  },
  topBox: {
    ...theme.blocks.container,
    padding: '16px 0 16px',
  },
  breadCrumbsBox: {
    marginBottom: 20,
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
  topBoxDscr: {
    margin: '0 auto',
    opacity: 0.8,
    lineHeight: '1.4',
    maxWidth: 1170,
    ...theme.customerContent.desc,
  },
  wrap: {
    backgroundColor: '#ffffff',
  },
  container: {
    paddingTop: 60,
    ...theme.blocks.container,
  },
  faqTitle: {
    margin: '0 0 65px',
    textAlign: 'center',
    ...theme.customerContent.title,
  },
});
