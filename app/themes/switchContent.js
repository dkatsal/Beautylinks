export default {
  switchContent: {
    switchTitle: {
      fontSize: 18,
      marginRight: 26,
    },
    switchBox: {
      position: 'relative',
      zIndex: 1,
      width: 51,
      height: 31,
      display: 'flex',
      backgroundColor: 'rgba(120, 120, 128, 0.16);',
      cursor: 'pointer',
      borderRadius: 50,
      transition: 'transform 0.8s',
      '&:before': {
        position: 'absolute',
        zIndex: 2,
        top: 2,
        left: 2,
        width: 27,
        height: 27,
        borderRadius: '50%',
        display: 'block',
        content: '""',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06)',
      },
      'input:checked ~ &': {
        backgroundColor: '#01c7c7',
        '&:before': {
          transform: 'translateX(20px)',
        },
      },
    },
  },
};
