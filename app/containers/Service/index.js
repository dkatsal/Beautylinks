/**
 *
 * Service
 *
 */

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import {Helmet} from 'react-helmet';
import {createStructuredSelector} from 'reselect';
import {bindActionCreators, compose} from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {Link, matchPath} from 'react-router-dom';
import ServiceItems from '../../components/ServicesComponents/ServiceItems/Loadable';
import ServicesHowItWorks from '../../components/ServicesComponents/ServicesHowItWorks/Loadable';
import ServicesReviews from '../../components/ServicesComponents/ServicesReviews/Loadable';
import Faq from '../../components/Faq/Loadable';
import makeSelectService from './selectors';
import {makeSelectGlobal} from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import * as actions from "../RegisterMasterPage/actions";

/* eslint-disable react/prefer-stateless-function */
export class Service extends React.PureComponent {
  displayAll() {
    const {
      global: { serviceCategories },
    } = this.props;

    const serviceCategoriesIndex = _.keyBy(serviceCategories.data, 'slug');

    const all = _.map(serviceCategoriesIndex, category => {
      return <ServiceItems serviceCategory={category} key={category.id}/>
    });

    return all;
  }

  render() {
    const {
      classes,
      location,
      global: { serviceCategories },
    } = this.props;

    const {
      params: { serviceCategory },
    } = matchPath(location.pathname, '/service/:serviceCategory');

    const serviceCategoriesIndex = _.keyBy(serviceCategories.data, 'slug');
    const services = serviceCategoriesIndex[serviceCategory] ? serviceCategoriesIndex[serviceCategory] : {};
    const title = (serviceCategory === 'all') ? 'Все услуги' : (services.name) ? services.name : '';

    const allCategories = this.displayAll();

    return (
      <>
        <Helmet>
          <title>Beautylinks / {title}</title>
          <meta name="description" content={title}/>
        </Helmet>
        <div className={classes.topWrap}>
          <div className={classes.topBox}>
            <div className={classes.breadCrumbsBox}>
              <Link to="/" className={classes.breadCrumbsLink}>
                Главная
              </Link>
              <span> / </span>
              <span style={{fontWeight: 700}}>{title}</span>
            </div>
          </div>
        </div>
        {serviceCategory === 'all' ? allCategories : <ServiceItems serviceCategory={services} />}

        <ServicesHowItWorks/>
        <ServicesReviews />
        <div className={classes.wrap}>
          <div className={classes.container}>
            <h3 className={classes.faqTitle}>Ответы на частозадаваемые вопросы</h3>
            <Faq/>
          </div>
        </div>
      </>
    );
  }
}

Service.propTypes = {
  classes: PropTypes.object,
  location: PropTypes.object,
  global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  service: makeSelectService(),
  global: makeSelectGlobal(),
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

const withReducer = injectReducer({key: 'service', reducer});
const withSaga = injectSaga({key: 'service', saga});

const ServiceStyled = withStyles(styles)(Service);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ServiceStyled);
