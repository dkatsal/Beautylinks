export default {
  customerContent: {
    title: {
      fontWeight: 700,
      '@media (max-width: 767px)': {
        fontSize: 18,
      },
      '@media (min-width: 768px)': {
        fontSize: 32,
      },
    },
    desc: {
      color: '#4C4C4C',
      '@media (max-width: 1023px)': {
        fontSize: 14,
      },
      '@media (min-width: 1024px) and (max-width: 1439px)': {
        fontSize: 24,
      },
      '@media (min-width: 1024px)': {
        fontSize: 18,
      },
    },
    subtitle: {
      color: '#4C4C4C',
      fontWeight: 700,
      '@media (max-width: 767px)': {
        fontSize: 18,
      },
      '@media (min-width: 768px) and (max-width: 1023px)': {
        fontSize: 20,
        lineHeight: '36px',
      },
      '@media (min-width: 1024px)': {
        fontSize: 24,
      },
    },
    label: {
      fontWeight: 700,
      '@media (min-width: 768px) and (max-width: 1023px)': {
        fontSize: 20,
      },
      '@media (min-width: 1024px)': {
        fontSize: 24,
      },
      '@media (min-width: 1439px)': {
        marginBottom: 20,
      },
      '@media (min-width: 1440px)': {
        marginBottom: 50,
      },
    },
  },
};
