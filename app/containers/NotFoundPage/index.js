/**
 *
 * NotFoundPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Link } from 'react-router-dom';
import makeSelectNotFoundPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import errorImage from '../../img/404.svg';

/* eslint-disable react/prefer-stateless-function */
export class NotFoundPage extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Helmet>
          <title>NotFoundPage</title>
          <meta name="description" content="Description of NotFoundPage" />
        </Helmet>
        <section>
          <div className={classes.container}>
            <img src={errorImage} className={classes.imgCenter} alt="404img" />
            <p className={classes.title}>404</p>
            <p className={classes.desc}>
              Ой! Что-то пошло не так!
              <br />
              Не расстраивайтесь. Просто вернитесь{' '}
              <Link to="/" className={classes.linkBtn}>
                на главную
              </Link>
              .
            </p>
          </div>
        </section>
      </>
    );
  }
}

NotFoundPage.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  aboutUs: makeSelectNotFoundPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'aboutUs', reducer });
const withSaga = injectSaga({ key: 'aboutUs', saga });

const NotFoundPageStyled = withStyles(styles)(NotFoundPage);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NotFoundPageStyled);
