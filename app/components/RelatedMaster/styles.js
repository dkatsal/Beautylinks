import mapIconGrey from '../../img/icons/map-icon-light.svg';

export default theme => ({
  relatedWrap: {
    '@media (min-width: 768px)': {
      background: '#F7F7F7',
      padding: '45px 0 60px',
    },
  },
  relatedBox: {
    ...theme.blocks.container,
    maxWidth: 1236,
    margin: '0 auto',
  },
  relatedTitle: {
    fontWeight: 'bold',
    '@media (max-width: 767px)': {
      fontSize: 18,
    },
    '@media (min-width: 768px)': {
      marginBottom: 50,
      fontSize: 24,
    },
  },
  relatedContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  relatedItem: {
    position: 'relative',
    '@media (max-width: 599px)': {
      margin: '0 auto 30px',
    },
    '@media (min-width: 600px) and (max-width: 1024px)': {
      width: 'calc(50% - 10px)',
      marginBottom: 20,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: 'calc(100% / 3 - 15px)',
    },
    '&:last-child': {
      '@media (min-width: 600px) and (max-width: 1024px)': {
        display: 'none',
      },
    },
    '& > img': {
      position: 'relative',
      zIndex: 1,
      width: '100%',
    },
    '&:before': {
      position: 'absolute',
      zIndex: 2,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.4)',
      content: '""',
    },
  },
  relatedContent: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
    height: '100%',
    padding: '18px 25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  relatedLink: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  masterName: {
    fontWeight: 700,
    color: '#FFFFFF',
    margin: 0,
    '@media (max-width: 1439px)': {
      fontSize: 20,
    },
    '@media (min-width: 1440px)': {
      fontSize: 24,
    },
  },
  masterAdress: {
    color: '#D9D9D9',
    margin: '5px 0 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '@media (max-width: 1439px)': {
      fontSize: 14,
    },
    '@media (min-width: 1440px)': {
      fontSize: 18,
    },
  },
  contactsMapIcon: {
    display: 'inline-block',
    marginRight: 8,
    verticalAlign: 'middle',
    width: 18,
    height: 18,
    background: `url("${mapIconGrey}") 0 no-repeat`,
  },
});
