import triangleIcon from '../img/icons/triangle-main.svg';

export default {
  customerSidebar: {
    sidebar: {
      padding: '50px 0',
      textAlign: 'left',
      background: '#ffffff',
      '@media (max-width: 1023px)': {
        position: 'fixed',
        zIndex: 10,
        left: 0,
        top: 100,
        width: '100%',
        height: 'calc(100vh - 200px)',
        paddingBottom: 40,
        transform: 'translateY(-100%)',
        transition: '0.5s transform',
        overflow: 'scroll',
        '@media (max-width: 767px)': {
          minHeight: 'calc(100vh - 160px)',
        },
        '@media (min-width: 768px) and (max-width: 1023px)': {
          minHeight: 'calc(100vh - 210px)',
        },
        '#sidebarTriger:checked ~ main &': {
          '@media (max-width: 767px)': {
            transform: 'translateY(60px)',
          },
          '@media (min-width: 768px) and (max-width: 1023px)': {
            transform: 'translateY(110px)',
          },
        },
      },
      '@media (min-width: 1024px) and (max-width: 1439px)': {
        width: 310,
        transform: 'translateX(-20px)',
      },
      '@media (min-width: 1440px)': {
        width: 352,
      },
    },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      background: 'transparent',
      transition: 'background 0.4s',
      '@media (max-width: 767px)': {
        fontSize: 16,
        padding: '10px 15px 10px',
      },
      '@media (min-width: 768px)': {
        marginBottom: 12,
        fontSize: 18,
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        padding: '12px calc(50vw - 370px / 2) 15px',
      },
      '@media (min-width: 1024px)': {
        padding: '12px 17px 15px 20px',
      },
      '& span': {
        marginLeft: 23,
        display: 'inline-flex',
      },
      '&:hover': {
        backgroundColor: 'rgba(0, 198, 198, 0.2)',
      },
    },
    sidebarClose: {
      position: 'fixed',
      zIndex: 11,
      left: 0,
      width: '100%',
      backgroundColor: '#ffffff',
      fontWeight: 'bold',
      fontSize: 20,
      '@media (max-width: 767px)': {
        height: 60,
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        height: 110,
      },
      '@media (max-width: 1023px)': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '@media (min-width: 1024px)': {
        display: 'none',
      },
      '& span': {
        display: 'block',
        '@media (max-width: 767px)': {
          paddingRight: 15,
        },
      },
      '&:after': {
        position: 'relative',
        display: 'block',
        height: 12,
        width: 19,
        background: `url("${triangleIcon}") 0 no-repeat`,
        cursor: 'pointer',
        transition: '0.5s transform',
        content: '""',
        '#sidebarTriger:checked ~ main &': {
          transform: 'rotate(180deg)',
          transition: '0.5s transform',
        },
      },
    },
    link: {
      display: 'block',
      fontSize: 14,
      color: '#333333',
      '@media (max-width: 767px)': {
        padding: '12px 15px 15px 70px',
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        padding: '40px calc(50vw - 370px / 2) 20px',
      },
      '@media (min-width: 1024px)': {
        margin: '40px 0 20px 70px',
      },
    },
  },
};
