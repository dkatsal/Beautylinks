/**
 *
 * PractitionerSearch
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import queryString from 'query-string';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import TopFilter from '../../../components/PractitionerSearchComponents/PractitionerSearchHead/Loadable';
import AsaidMasterFilter from '../MasterSearchFilter/Loadable';
import MasterSearchResult from '../../../components/PractitionerSearchComponents/PractitionerSearchContent/Loadable';
import makeSelectPractitionerSearch from './selectors';
import { makeSelectGlobal } from '../../App/selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class MasterSearch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryParams: queryString.parse(props.location.search),
      redirect: false,
    };
  }

  // eslint-disable-next-line no-unused-vars
  componentWillReceiveProps(nextProps, nextContext) {
    const { practitionerSearch } = nextProps;
    // eslint-disable-next-line react/prop-types
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // eslint-disable-next-line react/prop-types
    const queryParamsFromUrl = queryString.parse(this.props.location.search);
    const { queryParams } = this.state;
    // eslint-disable-next-line react/prop-types
    const { searchMasters, practitionerSearch } = this.props;
    // eslint-disable-next-line react/prop-types
    if (!!queryParamsFromUrl && !_.isEqual(queryParams, queryParamsFromUrl) && !practitionerSearch.loading) {
      this.setState({ queryParams: queryParamsFromUrl }, () => searchMasters(queryParamsFromUrl));
    }
  }

  componentWillMount(prevProps, prevState, snapshot) {
    // eslint-disable-next-line react/prop-types
    const queryParamsFromUrl = queryString.parse(this.props.location.search);
    const { queryParams } = this.state;
    // eslint-disable-next-line react/prop-types
    const { searchMasters, practitionerSearch } = this.props;
    // eslint-disable-next-line react/prop-types
    console.log(queryParamsFromUrl, !_.isEqual(queryParams, queryParamsFromUrl));

    if (!!queryParamsFromUrl && !practitionerSearch.loading) {
      this.setState({ queryParams: queryParamsFromUrl }, () => searchMasters(queryParamsFromUrl));
    }
  }

  fetchRedirectWithNewParams = data => {
    this.setState({ redirect: true, path: queryString.stringify(data) }, () => {
      this.setState({ redirect: false });
    });
  };

  render() {
    const { classes, practitionerSearch } = this.props;
    const { queryParams, redirect, path } = this.state;
    return (
      <>
        <Helmet>
          <title>Поиск Специалиста</title>
          <meta name="description" content="Description of PractitionerSearch" />
        </Helmet>
        <TopFilter searchData={queryParams} serviceCategories={this.props.serviceCategories} />
        <div className={classes.content}>
          <AsaidMasterFilter
            searchData={queryParams}
            filterChanged={data => {
              this.fetchRedirectWithNewParams(data);
            }}
          />
          <MasterSearchResult
            data={practitionerSearch}
            queryParams={queryParams}
            serviceCategories={this.props.serviceCategories}
          />
        </div>
        {redirect ? <Redirect push to={`/specialists/beautician?${path}`} /> : null}
      </>
    );
  }
}
// http://localhost:3000/specialists/beautician?date=2020-01-22&from=00%3A00&lat=49.9902794&locationtype=idm&lon=36.2303893&serviceType=beautician&to=15%3A00&treatmentId=17
MasterSearch.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object,
  searchMasters: PropTypes.func,
  practitionerSearch: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  practitionerSearch: makeSelectPractitionerSearch(),
  serviceCategories: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    searchMasters: bindActionCreators(actions.searchAvailableMasters, dispatch),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'practitionerSearch', reducer });
const withSaga = injectSaga({ key: 'practitionerSearch', saga });

const MasterSearchStyled = withStyles(styles)(MasterSearch);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MasterSearchStyled);
