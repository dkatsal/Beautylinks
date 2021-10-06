/**
 *
 * FaqPage
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
import Faq from '../../components/Faq/Loadable';
import FaqTop from '../../components/FaqPageComponents/FaqTop/Loadable';
import FaqClient from '../../components/FaqPageComponents/FaqClient/Loadable';
import FaqMaster from '../../components/FaqPageComponents/FaqMaster/Loadable';
import makeSelectFaqPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import Verified from '../../components/HomeComponents/Verified/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class FaqPage extends React.PureComponent {
  state = {
    btnTabIndex: 2,
  };

  handleChangeBtnTabIndex = val => this.setState({ btnTabIndex: val });

  render() {
    const { classes } = this.props;
    const { btnTabIndex } = this.state;
    return (
      <>
        <Helmet>
          <title>Beautylinks / Как это работает FAQs</title>
          <meta name="description" content="Description of FaqPage" />
        </Helmet>
        <div className={classes.wrap}>
          <FaqTop btnTabIndex={btnTabIndex} handleChangeBtnTabIndex={this.handleChangeBtnTabIndex} />
          <div className={classes.container}>
            {btnTabIndex === 0 ? (
              <>
                <FaqClient />
                <div className={classes.btnBox}>
                  <Link to="/category-search" className={classes.linkBtn}>
                    Найти специалиста
                  </Link>
                </div>
              </>
            ) : null}
            {btnTabIndex === 1 ? (
              <>
                <FaqMaster />
                <div className={classes.btnBox}>
                  <Link to="/customer-master" className={classes.linkBtn}>
                    В личный кабинет
                  </Link>
                </div>
              </>
            ) : null}
            {btnTabIndex === 2 ? (
              <>
                <Faq />
              </>
            ) : null}
          </div>
        </div>
        <Verified />
        <div className={classes.btnBox}>
          <Link to="/category-search" className={classes.linkBtn}>
            Довериться специалисту
          </Link>
        </div>
      </>
    );
  }
}

FaqPage.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  faqPage: makeSelectFaqPage(),
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

const withReducer = injectReducer({ key: 'faqPage', reducer });
const withSaga = injectSaga({ key: 'faqPage', saga });

const FaqPageStyled = withStyles(styles)(FaqPage);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FaqPageStyled);
