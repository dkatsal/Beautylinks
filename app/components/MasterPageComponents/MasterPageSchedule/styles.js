import scheduleIcon from '../../../img/icons/schedule-button.svg';

export default () => ({
  sidebarBox: {
    background: '#FFFFFF',
    color: '#4C4C4C',
    '@media (max-width: 767px)': {
      order: 7,
      marginTop: 30,
    },
    '@media (min-width: 768px)': {
      marginTop: 20,
      padding: 20,
      boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1)',
    },
  },
  scheduleTitle: {
    marginTop: 0,
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      fontSize: 18,
      fontWeight: 700,
    },
  },
  scheduleIcon: {
    display: 'inline-block',
    marginRight: 8,
    verticalAlign: 'middle',
    width: 18,
    height: 18,
    background: `url("${scheduleIcon}") 0 no-repeat`,
  },
  dayRow: {
    maxWidth: 360,
    paddingLeft: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 419px)': {
      fontSize: 18,
    },
  },
  dayTitle: {
    marginTop: 0,
    '@media (min-width: 420px)': {
      fontSize: 18,
    },
  },
  dayTime: {
    marginTop: 0,
    display: 'flex',
    alignItems: 'center',
  },
  timeSeparator: {
    width: 30,
    height: 1,
    margin: 'auto 10px',
    background: '#C4C4C4',
  },
});
