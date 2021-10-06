/* DARK THEME */
// import { createMuiTheme } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles'
import closeIcon from '../img/icons/close.svg';

import customerSidebar from './customerSidebar';
import customerContent from './customerContent';
import switchContent from './switchContent';

export default createTheme({
  palette: {
    BLColors: {
      main: '#00c7c7',
      grey: '#f7f7f7',
      darkGrey: '#a5a5a5',
      white: '#fff',
      red: '#CB2026',
      clean: 'transparent',
    },
  },
  linkActions: {
    linkBtn: (transition, backgroundColor) => ({
      lineHeight: '1em',
      padding: '0 20px',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontWeight: 700,
      border: `2px solid ${backgroundColor}`,
      background: backgroundColor,
      transition: `all 0.2s ${transition}`,
      '@media (max-width: 767px)': {
        height: 36,
        fontSize: 16,
        borderRadius: 10,
      },
      '@media (min-width: 768px)': {
        height: 54,
        fontSize: 16,
        borderRadius: 20,
      },
      '&:hover': {
        color: backgroundColor,
        background: 'transparent',
      },
    }),
    underLine: (transition, backgroundColor) => ({
      position: 'relative',
      '&:after': {
        position: 'absolute',
        left: '50%',
        bottom: 0,
        content: '""',
        width: 0,
        height: 1,
        background: backgroundColor,
        transition: `all 0.2s ${transition}`,
      },
      '&:hover': {
        '&:after': {
          left: 0,
          width: '100%',
        },
      },
    }),
    deleteBtn: {
      marginTop: 1,
      width: 16,
      height: 16,
      border: 'none',
      background: `url("${closeIcon}") 0 no-repeat`,
    },
  },
  blocks: {
    container: {
      maxWidth: 1450,
      width: '100%',
      margin: '0 auto',
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  zIndex: {
    header: 900,
  },
  ...customerSidebar,
  ...customerContent,
  ...switchContent,
});
