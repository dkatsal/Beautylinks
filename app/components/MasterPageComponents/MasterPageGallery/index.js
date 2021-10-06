/**
 *
 * MasterPageGallery
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';
// import galleryImage1 from '../../../images/gallery/gallery-1.jpg';
// import galleryImage2 from '../../../images/gallery/gallery-2.jpg';
// import galleryImage3 from '../../../images/gallery/gallery-3.jpg';
// import galleryImage4 from '../../../images/gallery/gallery-4.jpg';
// import galleryImage5 from '../../../images/gallery/gallery-5.jpg';
// import galleryImage6 from '../../../images/gallery/gallery-6.jpg';

function MasterPageGallery({ classes, data }) {
  // console.log(data);
  return (
    data && data.length > 0 && (
      <div className={classes.galleryWrap}>
        <div className={classes.container}>
          <p className={classes.sectionTitle}>Портфолио мастера</p>
          <div className={classes.gallery}>
            {data.map((item, index) => (
              <div key={index} className={classes.galleryItem}>
                <img src={item} alt="Галерея" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

MasterPageGallery.propTypes = {
  classes: PropTypes.object,
};

const MasterPageGalleryStyled = withStyles(styles)(MasterPageGallery);

export default memo(MasterPageGalleryStyled);
