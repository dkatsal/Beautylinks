/**
 *
 * PractitionerSearchHead
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './styles';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import moment from 'moment';

function PractitionerSearchHead({ classes, searchData, serviceCategories }) {
  const [redirect, setRedirect] = useState(false);
  const [addr, setAddr] = useState(searchData.addr);
  const [subCategory, setSubCategory] = useState(defineSubCategorieLabel(searchData.treatmentId, serviceCategories.serviceCategories.data).subCategory);
  const [mainCategory, setMainCategory] = useState(defineSubCategorieLabel(searchData.treatmentId, serviceCategories.serviceCategories.data).category);

  const [path, setPath] = useState('');

  useEffect(()=>{
    setSubCategory(defineSubCategorieLabel(searchData.treatmentId, serviceCategories.serviceCategories.data).subCategory);
    setMainCategory(defineSubCategorieLabel(searchData.treatmentId, serviceCategories.serviceCategories.data).category);
  },[searchData,serviceCategories]);
  function defineSubCategorieLabel(treatmentId, categoriesData) {
    // console.log(categories);
    let subCategory = '';
    let category = '';

    _.forEach(categoriesData, categories => _.find(categories.sub_services, (sub_service) => {
        if (+sub_service.id === +searchData.treatmentId) {
          category = categories.name;
          subCategory = sub_service.name;
        }
      }),
    );
    return { category, subCategory };
  }
  console.log('----->',subCategory, mainCategory);
  return (
    <div style={{ background: '#fafafa' }}>
      <div className={classes.headContainer}>
        <div className={classes.leftBlock}>
          <div className={classes.selectedChip} style={{ marginRight: 3 }}>
            <span className={classes.chipLabel} style={{ fontWeight: 700 }}>
             {mainCategory}
            </span>
          </div>
          <span className={classes.border}/>
          <div className={classes.selectedChip}>
            <span className={classes.chipLabel}> {subCategory}</span>
            <button type="button" className={classes.deleteBtn} onClick={() => {
              setPath(`/category-search?lat=${searchData.lat}&lon=${searchData.lon}&addr=${searchData.addr}`);
              setRedirect(true);
            }}/>
          </div>
        </div>
        <div className={classes.rightBlock}>
          <span className={classes.positionLabel}>Ваше местоположение:</span>
          <span style={{ marginRight: 14 }}>{addr}</span>
          <button type="button" className={classes.deleteBtn} onClick={() => {
            setPath(`/category-search?treatmentId=${searchData.treatmentId}`);
            setRedirect(true);
          }}/>
        </div>
      </div>
      {redirect ? <Redirect push to={path}/> : null}
    </div>
  );
}

PractitionerSearchHead.propTypes = {
  classes: PropTypes.object,
};

const PractitionerSearchHeadStyled = withStyles(styles)(PractitionerSearchHead);

export default memo(PractitionerSearchHeadStyled);
