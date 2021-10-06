/**
 *
 * ServicesSearch
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
import ServicesSearchForm from '../../components/ServicesSearchForm/Loadable';
import makeSelectServicesSearch from './selectors';
import { makeSelectGlobal } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import makiyagImg from '../../img/makiyag.svg';
import manikyurImg from '../../img/manikyur.svg';
import massagImg from '../../img/massag.svg';
import parikmaherImg from '../../img/hairstyle.svg';
import resniciImg from '../../img/resnici.svg';
import uhodzalicomImg from '../../img/uhodzalicom.svg';
import barberImg from '../../img/barber.svg';
import depilationImg from '../../img/depilation.svg';
import styles from './styles';
import queryString from 'query-string';
// import HMap from '../../components/HEREComponents/HMap';

/* eslint-disable react/prefer-stateless-function */
export class ServicesSearch extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      queryParams: queryString.parse(props.location.search),
      redirect: false,
    };
  }

  render() {
    const {
      classes,
      global: {
        serviceCategories,
      }
    } = this.props;
    const { queryParams } = this.state;

    const ServicesItems = [
      { img: parikmaherImg, label: 'Уход за волосами' },
      { img: massagImg, label: 'Уход за телом' },
      { img: manikyurImg, label: 'Уход за ногтями' },
      { img: uhodzalicomImg, label: 'Косметолог' },
      { img: makiyagImg, label: 'Макияж' },
      { img: resniciImg, label: 'Брови и ресницы' },
      { img: barberImg, label: 'Барберы' },
      { img: depilationImg, label: 'Удаление волос' },
    ];
    console.log(queryParams)

    return (
      <div>
        <Helmet>
          <title>Поиск услуги</title>
          <meta name="description" content="Description of ServicesSearch" />
        </Helmet>
        <div className={classes.container}>
          {ServicesItems.map(item => (
            <div key={item} className={classes.itemImg}>
              <img src={item.img} alt={item.label} />
            </div>
          ))}
          <div className={classes.box}>
            <ServicesSearchForm serviceCategories={serviceCategories} defaultData={queryParams} />
            <p className={classes.desc}>*используя карту Вы можете выбрать мастера поблизости</p>
          </div>
        </div>
      </div>
    );
  }
}

ServicesSearch.propTypes = {
  classes: PropTypes.object,
  global: PropTypes.object,
  serviceCategories: PropTypes.object,
  address: PropTypes.object,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  servicesSearch: makeSelectServicesSearch(),
  global: makeSelectGlobal(),
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

const withReducer = injectReducer({ key: 'servicesSearch', reducer });
const withSaga = injectSaga({ key: 'servicesSearch', saga });

const ServicesSearchStyled = withStyles(styles)(ServicesSearch);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ServicesSearchStyled);
