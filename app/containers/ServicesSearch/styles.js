export default () => ({
  container: {
    position: 'relative',
    maxWidth: 1400,
    margin: '0 auto',
    '@media (max-width: 767px)': {
      minHeight: 620,
    },
    '@media (min-width: 768px)': {
      minHeight: 800,
    },
  },
  itemImg: {
    position: 'absolute',
    '@media (max-width: 767px)':{
      display: 'none',
    },
    '@media (min-width: 1300px)': {
      '&:nth-child(1), &:nth-child(4), &:nth-child(5), &:nth-child(8)': {
        '&:before': {
          position: 'absolute',
          width: 223,
          height: 223,
          display: 'block',
          border: '1px solid #00C6C6',
          content: '""',
        },
        '&:after': {
          position: 'absolute',
          width: 223,
          height: 223,
          display: 'block',
          border: '1px solid #00C6C6',
          content: '""',
        },
      },
    },
    '&:nth-child(1)': {
      '@media (max-width: 767px)': {
        top: -76,
        left: 60,
      },
      '@media (min-width: 768px) and (max-width: 1299px)': {
        top: 140,
        left: 60,
      },
      '@media (min-width: 1300px)': {
        top: 140,
        left: 170,
      },
      '&:before': {
        top: -105,
        left: -110,
      },
      '&:after': {
        top: -35,
        left: -40,
      },
    },
    '&:nth-child(2)': {
      '@media (max-width: 767px)': {
        top: 277,
        left: 50,
      },
      '@media (min-width: 768px) and (max-width: 1299px)': {
        top: 360,
        left: 40,
      },
      '@media (min-width: 1300px)': {
        top: 360,
        left: 40,
      },
    },
    '&:nth-child(3)': {
      '@media (max-width: 767px)': {
        top: 430,
        left: 30,
      },
      '@media (min-width: 768px) and (max-width: 1299px)': {
        top: 490,
        left: 10,
      },
      '@media (min-width: 1300px)': {
        top: 430,
        left: 250,
      },
    },
    '&:nth-child(4)': {
      '@media (max-width: 767px)': {
        top: 150,
        left: 10,
      },
      '@media (min-width: 768px) and (max-width: 1299px)': {
        top: 630,
        left: 100,
      },
      '@media (min-width: 1300px)': {
        top: 580,
        left: 120,
      },
      '&:before': {
        top: -102,
        left: -105,
      },
      '&:after': {
        top: -40,
        left: -35,
      },
    },
    '&:nth-child(5)': {
      '@media (max-width: 767px)': {
        top: -60,
        right: 30,
      },
      '@media (min-width: 768px) and (max-width: 1299px)': {
        top: 105,
        right: 30,
      },
      '@media (min-width: 1300px)': {
        top: 105,
        right: 170,
      },
      '&:before': {
        top: -95,
        left: -40,
      },
      '&:after': {
        top: -25,
        right: -25,
      },
    },
    '&:nth-child(6)': {
      '@media (max-width: 767px)': {
        top: 83,
        right: 4,
      },
      '@media (min-width: 768px) and (max-width: 1299px)': {
        top: 260,
        right: 60,
      },
      '@media (min-width: 1300px)': {
        top: 380,
        right: 150,
      },
    },
    '&:nth-child(7)': {
      '@media (max-width: 767px)': {
        top: 390,
        right: 4,
      },
      '@media (min-width: 768px) and (max-width: 1299px)': {
        top: 440,
        right: 25,
      },
      '@media (min-width: 1300px)': {
        top: 430,
        right: 305,
      },
    },
    '&:nth-child(8)': {
      '@media (max-width: 767px)': {
        top: 260,
        right: 69,
      },
      '@media (min-width: 768px) and (max-width: 1299px)': {
        top: 640,
        right: 125,
      },
      '@media (min-width: 1300px)': {
        top: 570,
        right: 125,
      },
      '&:before': {
        top: -25,
        left: -120,
      },
      '&:after': {
        top: -95,
        left: -50,
      },
    },
    '& img': {
      '@media (max-width: 767px)': {
        width: 50,
      },
      '@media (min-width: 768px)': {
        width: 85,
      },
    },
  },
  box: {
    position: 'relative',
    zIndex: 5,
    '@media (max-width: 767px)': {
      // width: 'calc(100% - 110px)',
      margin: '40px 20px 40px',
    },
    '@media (min-width: 768px)': {
      width: '480px',
      margin: '71px auto',
      background: '#ffffff',
    },
  },
  desc: {
    '@media (max-width: 767px)': {
      fontSize: 14,
      margin: '60px 0 0',
    },
    '@media (min-width: 768px)': {
      fontSize: 18,
      marginTop: 100,
    },
  },
});
