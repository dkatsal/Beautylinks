/**
 *
 * RegisterMasterPage
 * 3rt page of registration (register as master)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import _ from 'lodash';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Redirect } from 'react-router-dom';
import RegisterMasterForm from '../../components/RegisterMasterComponents/RegisterMasterForm/Loadable';
import RegisterMasterServices from '../../components/RegisterMasterComponents/RegisterMasterServices/Loadable';
import RegisterMasterLocation from '../../components/RegisterMasterComponents/RegisterMasterLocation/Loadable';
import RegisterMasterAvailability from '../../components/RegisterMasterComponents/RegisterMasterAvailability/Loadable';
import RegisterMasterSkills from '../../components/RegisterMasterComponents/RegisterMasterSkills/Loadable';
import RegisterMasterEnd from '../../components/RegisterMasterComponents/RegisterMasterEnd/Loadable';
import makeSelectRegisterMasterPage from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import { makeSelectGlobal } from '../App/selectors';
import makeSelectRegisterCustomerPage from '../RegisterCustomerPage/selectors';
import AppPreloader from '../../components/AppPreloader';

/* eslint-disable react/prefer-stateless-function */
export class RegisterMasterPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      activeStep: 1,
      // steps: ['Регистрация', 'Услуги', 'Локация', 'Доступность', 'Опыт и навыки', 'Завершение регистрации'],
      steps: ['Регистрация', 'Локация'],
    };
    const {
      postRegister,
      postMasterService,
      deleteMasterService,
      putMasterService,
      postServicesRegStep,
      postMasterLocation,
      postMasterAvailability,
      postMasterTrustAndSafety,
      postMasterAvatar,
    } = this.props.actions;
    this.debouncedPostRegister = _.debounce(postRegister, 300);
    this.debouncedPostServicesRegStep = _.debounce(postServicesRegStep, 300);
    this.debouncedPostMasterService = _.debounce(postMasterService, 300);
    this.debouncedDeleteMasterService = _.debounce(deleteMasterService, 300);
    this.debouncedPutMasterService = _.debounce(putMasterService, 300);
    this.debouncedPostMasterLocation = _.debounce(postMasterLocation, 300);
    this.debouncedPostMasterAvailability = _.debounce(postMasterAvailability, 300);
    this.debouncedPostMasterTrustAndSafety = _.debounce(postMasterTrustAndSafety, 300);
    this.debouncedPostMasterAvatar = _.debounce(postMasterAvatar, 300);
  }

  componentDidMount() {
    this.props.actions.getMasterServices();
    const {
      registerCustomerPage: { data },
    } = this.props;
    const token = localStorage.getItem('token');
    if (!token && !_.size(data)) {
      this.setState({ redirect: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      global: {
        regStep: { data },
      },
    } = nextProps;
    this.setState({
      activeStep: data,
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: 'CLEAR',
    });
  }

  fetGetStepContent(step) {
    const {
      global: { serviceCategories },
      registerCustomerPage,
      registerMasterPage: {
        registerData: { errors },
        masterServices: { data },
        masterInfo: { data: masterInfo },
        masterSalons: { data: masterSalons },
        masterAvatar: { data: masterAvatar },
      },
    } = this.props;
    switch (step) {
      case 0:
        return (
          <RegisterMasterForm
            data={registerCustomerPage && registerCustomerPage.data}
            errors={errors}
            postRegister={this.debouncedPostRegister}
          />
        );
      case 1:
        return <RegisterMasterLocation postLocation={this.debouncedPostMasterLocation} />;
        // In case of thre rediction of the registration
        // return (
        //   <RegisterMasterServices
        //     defaultMasterServices={data}
        //     services={serviceCategories && serviceCategories.data}
        //     postService={this.debouncedPostMasterService}
        //     postServiceRegStep={this.debouncedPostServicesRegStep}
        //     deleteService={this.debouncedDeleteMasterService}
        //     putService={this.debouncedPutMasterService}
        //   />
        // );
      case 2:
        return <Redirect push to="/customer-master" />
        // In case of thre rediction of the registration
        // return <RegisterMasterLocation postLocation={this.debouncedPostMasterLocation} />;
      case 3:

        return (
          <RegisterMasterAvailability
            data={masterInfo}
            masterSalons={masterSalons}
            postAvailability={this.debouncedPostMasterAvailability}
          />
        );
      case 4:
        return <RegisterMasterSkills postTrustAndSafety={this.debouncedPostMasterTrustAndSafety} />;
      case 5:
        return <RegisterMasterEnd data={masterAvatar} postAvatar={this.debouncedPostMasterAvatar} />;
      default:
        return 'Unknown step';
    }
  }

  render() {
    const {
      classes,
      global: {
        regStep: { loading: regStepsLoading },
      },
    } = this.props;
    const { activeStep, steps, redirect } = this.state;
    return (
      <div>
        <Helmet>
          <title>RegisterMasterPage</title>
          <meta name="description" content="Description of RegisterMasterPage" />
        </Helmet>
        {regStepsLoading ? (
          <AppPreloader size="big" type="outside" />
        ) : (
          <section className={classes.mainBox}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label} className={classes.stepTitle}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {this.fetGetStepContent(activeStep)}
          </section>
        )}
        {redirect ? <Redirect push to="/register" /> : null}
      </div>
    );
  }
}

RegisterMasterPage.propTypes = {
  classes: PropTypes.object,
  actions: PropTypes.object,
  registerMasterPage: PropTypes.object,
  global: PropTypes.object,
  registerCustomerPage: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  registerMasterPage: makeSelectRegisterMasterPage(),
  global: makeSelectGlobal(),
  registerCustomerPage: makeSelectRegisterCustomerPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'registerMasterPage', reducer });
const withSaga = injectSaga({ key: 'registerMasterPage', saga });

const RegisterMasterPageStyled = withStyles(styles)(RegisterMasterPage);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterMasterPageStyled);
