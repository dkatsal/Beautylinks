import ratingStar from '../../../img/icons/rating-star.svg';
import cleanStar from '../../../img/icons/clean-star.svg';

export default theme => ({
    rewievBox: {
        maxWidth: 1236,
        margin: '50px auto 55px',
    },
    rewievTitle: {
        '@media (max-width: 767px)': {
            fontSize: 18,
            margin: '0 20px 50px',
            fontWeight: 700,
        },
        '@media (min-width: 768px)': {
            fontSize: 24,
            marginBottom: 50,
        },
    },
    rewievItem: {
        padding: '30px 30px 50px',
        marginBottom: 30,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1)',
    },
    rewievImg: {
        width: 70,
        height: 70,
        marginRight: 30,
        borderRadius: '50%',
        overflow: 'hidden',
        '& img': {
            width: '100%',
        },
    },
    rewievContainer: {
        width: 'calc(100% - 100px)',
        fontSize: 18,
        color: '#4C4C4C',
    },
    rewievHeader: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        '& p': {
            marginTop: 0,
            '@media (max-width: 599px)': {
            width: '100%',
            },
            '@media (min-width: 600px)': {
            marginBottom: 0,
            },
        },
    },
    rewievContent: {
        marginTop: 20,
        '@media (max-width: 599px)': {
            transform: 'translateX(-100px)',
            width: 'calc(100% + 100px)',
            fontSize: 16,
        },
    },
    rewievName: {
        fontWeight: 700,
    },
    rewievDate: {
        color: '#DCE5E5',
        '@media (min-width: 600px)': {
            marginLeft: 20,
            marginRight: 'auto',
        },
    },
    rating: {
        display: 'flex',
        alignItems: 'center',
    },
    ratingStar: {
        width: 21,
        height: 20,
        display: 'inline-block',
        background: `url("${ratingStar}") 0 no-repeat`,
        marginRight: 5,
    },
    cleanStar: {
        width: 21,
        height: 20,
        display: 'inline-block',
        background: `url("${cleanStar}") 0 no-repeat`,
        marginRight: 5,
    },
    paginationBox: {
        // marginTop: 50,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: '#00C6C6'
        },
    },
    paginationLink: {
        height: 30,
        width: 30,
        margin: '0 5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: '#000000',
        fontSize: 18,
        transition: 'all 0.2s cubic-bezier(0.0, 0, 0.2, 1)',
        '&:hover': {
            color: '#FFFFFF',
            backgroundColor: '#00C6C6',
        },
    },
    paginationCurrent: {
        height: 30,
        width: 30,
        margin: '0 5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        fontSize: 18,
        color: '#FFFFFF',
        backgroundColor: '#00C6C6',
    },
    paginationPrew: {
        fontSize: 14,
        color: '#A1A1A1;',
        '@media (max-width: 599px)': {
        width: '100%',
        margin: '0 0 20px',
        textAlign: 'center',
        },
        '@media (min-width: 600px)': {
        marginRight: 15,
        },
    },
    paginationNext: {
        fontSize: 14,
        color: '#A1A1A1;',
        '@media (max-width: 599px)': {
        width: '100%',
        margin: '20px 0 0',
        textAlign: 'center',
        },
        '@media (min-width: 600px)': {
        marginLeft: 15,
        },
    },
});
