export default theme => ({
  sidebar: {
    ...theme.customerSidebar.sidebar,
  },
  pageScrolled: {
    '@media (max-width:1023px)': {
      top: 107,
    },
  },
  userName: {
    margin: 0,
    textAlign: 'center',
    '@media (max-width: 1024px)': {
      display: 'none',
    },
    '@media (min-width: 1024px)': {
      margin: '0 0 40px',
      fontSize: 36,
    },
  },
  navLink: {
    ...theme.customerSidebar.navLink,
  },
  navLinkActive: {
    ...theme.customerSidebar.navLink,
    backgroundColor: 'rgba(0, 198, 198, 0.2)',
  },
  link: {
    ...theme.customerSidebar.link,
  },
  sidebarClose: {
    ...theme.customerSidebar.sidebarClose,
  },
});
