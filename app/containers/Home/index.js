/**
 *
 * Home
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import { makeSelectGlobal } from '../App/selectors';
import { setFilterAddressAction } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import LiveBetter from '../../components/HomeComponents/LiveBetter/Loadable';
import Services from '../../components/HomeComponents/Services/Loadable';
import Comfortable from '../../components/HomeComponents/Comfortable/Loadable';
import ComfortableA from '../../components/HomeComponents/ComfortableA/Loadable';
import ComfortableB from '../../components/HomeComponents/ComfortableB/Loadable';
import HowItWorks from '../../components/HomeComponents/HowItWorks/Loadable';
import RegisterForFree from '../../components/HomeComponents/RegisterForFree/Loadable';
import Verified from '../../components/HomeComponents/Verified/Loadable';
// import JustBooked from '../../components/HomeComponents/JustBooked/Loadable';
import styles from './styles';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.PureComponent {
  // handleAddress = value => {
  //   this.props.setFilterAddressAction(value);
  // };

  componentWillMount() {
    const {
      home: { justBooked },
      getJustBooked,
    } = this.props;

    if (!justBooked.loaded) {
      getJustBooked();
    }
  }

  render() {
    const {
      global: { serviceCategories },
      home: { justBooked },
    } = this.props;
    return (
      <>
        <Helmet>
          <title>Beautylinks</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <LiveBetter serviceCategories={serviceCategories} />
        <ComfortableA />
        <Services />
        <ComfortableB />
        <Comfortable />
        <HowItWorks />
        <RegisterForFree />
        <Verified />
        {/* <JustBooked justBooked={justBooked.data} /> */}
        {/* <LikedSite /> */}
      </>
    );
  }
}

Home.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  global: PropTypes.object,
  serviceCategories: PropTypes.object,
  // justBooked: PropTypes.object,
  home: PropTypes.object,
  getJustBooked: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setFilterAddressAction: bindActionCreators(setFilterAddressAction, dispatch),
    getJustBooked: bindActionCreators(actions.getJustBookedAction, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

const HomeStyled = withStyles(styles)(Home);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomeStyled);
