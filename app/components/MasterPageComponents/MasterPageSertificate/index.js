/**
 *
 * MasterPageSertificate
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';
// import sertImage from '../../../images/sertificate.jpg';

function MasterPageSertificate({ classes, data }) {
  console.log(data)
  return (
    data &&
    data.length > 0 && (
      <div className={classes.sidebarBox}>
        <p className={classes.sertificateTitle}>
          <i className={classes.sertificateIcon} /> Сертификаты
        </p>
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className={classes.sertificateImg}>
            <img src={item} alt="Сертификат" />
          </div>
        ))}
      </div>
    )
  );
}

MasterPageSertificate.propTypes = {
  classes: PropTypes.object,
};

const MasterPageSertificateStyled = withStyles(styles)(MasterPageSertificate);

export default memo(MasterPageSertificateStyled);
