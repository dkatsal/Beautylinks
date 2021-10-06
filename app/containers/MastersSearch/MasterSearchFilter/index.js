/**
 *
 * PractitionerSearchAside
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPractitionerSearchAside from './selectors';
import PractitionerSearchByTime from '../../../components/PractitionerSearchComponents/PractitionerSearchAsideComponents/PractitionerSearchByTime/Loadable';
import PractitionerSearchServiceLocation from '../../../components/PractitionerSearchComponents/PractitionerSearchAsideComponents/PractitionerSearchServiceLocation/Loadable';
import PractitionerSearchLocation from '../../../components/PractitionerSearchComponents/PractitionerSearchAsideComponents/PractitionerSearchLocation/Loadable';
import PractitionerSearchCare from '../../../components/PractitionerSearchComponents/PractitionerSearchAsideComponents/PractitionerSearchCare/Loadable';
import PractitionerSearchDate from '../../../components/PractitionerSearchComponents/PractitionerSearchAsideComponents/PractitionerSearchDate/Loadable';
import PractitionerSearchRating from '../../../components/PractitionerSearchComponents/PractitionerSearchAsideComponents/PractitionerSearchRating/Loadable';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import _ from 'lodash';
import moment from 'moment';

/* eslint-disable react/prefer-stateless-function */
export class PractitionerSearchAside extends React.PureComponent {
  constructor(props){
    super(props);

  }

   handleChangeFilter (type, value){
     const { searchData, filterChanged } = this.props;
    let clonedData = _.cloneDeep(searchData);
     console.log(type, value);
     clonedData[type] = value;
    filterChanged(clonedData);
  };

  render() {
    const { classes, searchData } = this.props;

    return (
      <aside className={classes.wrap}>
        <header className={classes.filterHeader}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="filterTriger" className={classes.filterClose} />
          <span>Фильтр</span>
        </header>
        <div className={classes.box}>
          <h6 className={classes.title}>Фильтр по дате</h6>
          <PractitionerSearchDate onDayChanged={(e)=>{this.handleChangeFilter('date', moment(e).format('YYYY-MM-DD')); }} defaultDate={searchData.date}/>
        </div>
        {/*<div className={classes.box}>
          <h6 className={classes.title}>Фильтр по времени</h6>
          <PractitionerSearchByTime onTimeChange={(e)=>{this.handleChangeFilter('from', e.from); this.handleChangeFilter('to', e.to)}} defaultTime = {{from: searchData.from, to: searchData.to}}/>
        </div>*/}
        <div className={classes.box}>
          <h6 className={classes.title}>Где будет предоставляться услуга</h6>
          <PractitionerSearchServiceLocation onChangeLocation={(e)=>{this.handleChangeFilter('locationtype', e)}} defaultLocation={searchData.locationtype}/>
        </div>
        {/*<div className={classes.box}>*/}
        {/*  <h6 className={classes.title}>Местоположение</h6>*/}
        {/*  <PractitionerSearchLocation />*/}
        {/*</div>*/}
        {/*<div className={classes.box}>*/}
        {/*  <h6 className={classes.title}>Уход</h6>*/}
        {/*  <PractitionerSearchCare />*/}
        {/*</div>*/}
        {/*
        <div className={classes.box}>
          <h6 className={classes.title}>Оценка</h6>
          <PractitionerSearchRating  onChangeRating = {(e)=>{this.handleChangeFilter('rating', e)}} />
        </div>
        */}
      </aside>
    );
  }
}

PractitionerSearchAside.propTypes = {
  classes: PropTypes.object,
  filterChanged: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  practitionerSearchAside: makeSelectPractitionerSearchAside(),
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

const withReducer = injectReducer({ key: 'practitionerSearchAside', reducer });
const withSaga = injectSaga({ key: 'practitionerSearchAside', saga });

const PractitionerSearchAsideStyled = withStyles(styles)(PractitionerSearchAside);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PractitionerSearchAsideStyled);
