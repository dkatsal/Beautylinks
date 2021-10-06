export default theme => ({
  galleryWrap: {
    position: 'relative',
    '@media (min-width: 768px)': {
      margin: '0 0 80px',
    },
  },
  container: {
    ...theme.blocks.container,
    maxWidth: 1236,
  },
  sectionTitle: {
    '@media (max-width: 767px)': {
      margin: '0 0 15px',
      fontSize: 18,
      fontWeight: 700,
    },
    '@media (min-width: 768px)': {
      margin: '0 0 50px',
      fontSize: 24,
    },
  },
  gallery: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  galleryItem: {
    margin: '0 auto 20px 0',
    display: 'block',
    overflow: 'hidden',
    '@media (max-width: 767px)': {
      height: 100,
      width: 100,
    },
    '@media (min-width: 768px)': {
      height: 380,
      width: 380,
    },
    '& img': {
      display: 'block',
      transition: 'all 0.8s',
      height: '100%',
      marginLeft: '-50%',
      transform: 'translateX(50%)',
      '&:hover': {
        transform: 'scale(1.1, 1.1) translateX(50%)',
        transition: 'all 0.4s',
      },
    },
  },
});
