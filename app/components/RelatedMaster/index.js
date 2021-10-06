/**
 *
 * RelatedMaster
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './styles';
import relatedImage1 from '../../images/related/related1.jpg';
import relatedImage2 from '../../images/related/related2.jpg';
import relatedImage3 from '../../images/related/related3.jpg';

function RelatedMaster({ classes }) {
  const RelatedMasterItems = [
    { name: 'Мария Салоедова', adress: 'Харьков, ул. Пушкинская 2', img: relatedImage1 },
    { name: 'Анжела Сухова', adress: 'Харьков, пр-кт Алёшина 12б', img: relatedImage2 },
    { name: 'Евгения Многошерстова', adress: 'Харьков, пр-кт Науки, 42, офис 13', img: relatedImage3 },
  ];
  return (
    <div className={classes.relatedWrap}>
      <div className={classes.relatedBox}>
        <p className={classes.relatedTitle}>Похожие мастера</p>
        <div className={classes.relatedContainer}>
          {_.map(RelatedMasterItems, (item, index) => (
            <div key={index} className={classes.relatedItem}>
              <img src={item.img} alt={item.name} />
              <div className={classes.relatedContent}>
                <p className={classes.masterName}>{item.name}</p>
                <p className={classes.masterAdress}>
                  <i className={classes.contactsMapIcon} /> <span>{item.adress}</span>
                </p>
              </div>
              <Link to="/master" className={classes.relatedLink} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

RelatedMaster.propTypes = {
  classes: PropTypes.object,
};

const RelatedMasterStyled = withStyles(styles)(RelatedMaster);

export default memo(RelatedMasterStyled);
