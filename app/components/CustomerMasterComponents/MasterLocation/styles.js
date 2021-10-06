import editIcon from '../../../img/icons/edit-dark.svg';

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
    padding: '0 0 20px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mapImg: {
    height: 700,
    width: '100%',
    overflow: 'hidden',
  },
  editIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    transform: 'translateY(7px)',
    display: 'inline-block',
    verticalAlign: 'middle',
    background: `url("${editIcon}") 0 no-repeat`,
  },
  switchContainer: {
    margin: '30px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxWidth: 365,
  },
  switchTitle: {
    ...theme.switchContent.switchTitle,
    width: 100,
  },
  switchBox: {
    ...theme.switchContent.switchBox,
  },
  btnContainer: {
    marginBottom: 40,
  },
  dscrBtn: {
    ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
  },
  inputBox: {
    width: '100%',
    maxWidth: 710,
  },
  inputSearch: {
    position: 'relative',
    '& > div > div': {
      background: '#f5f5f5',
    },
  },
});
