export default theme => ({
    container: {
        padding: '0 0 40px',
        '&:last-child': {
            borderBottom: 'none',
        },
    },
    subtitle: {
        width: '100%',
        margin: '0 0 30px',
        ...theme.customerContent.subtitle,
    },
    linkBtn: {
        ...theme.linkActions.linkBtn(theme.transitions.easing.easeOut, theme.palette.BLColors.main),
        textTransform: 'none',
        boxShadow: 'none',
    },

});
