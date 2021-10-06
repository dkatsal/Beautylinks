/**
 *
 * ServiceItems
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import { Link } from 'react-router-dom';
import serviceImgDefault from 'images/default_service.png';
import styles from './styles';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function ServiceItems({ classes, serviceCategory }) {
  return (
    <>
      {serviceCategory && serviceCategory.sub_services && (
        <>
          <div className={classes.topWrap}>
            <div className={classes.topBox}>
              <h2 className={classes.titleH2}>
                <span>{serviceCategory.name}</span>
              </h2>
              <p className={classes.topBoxDscr}>{serviceCategory.description && serviceCategory.description}</p>
            </div>
          </div>
          <div className={classes.wrap}>
            <div className={classes.container}>
              <h3 className={classes.title}>Наши услуги</h3>
              <div className={classes.box}>
                {serviceCategory.sub_services.map((item, index) => (
                  <div key={item.id} className={classes.boxItem}>
                    <div className={classes.boxImg}>
                      <figure className={classes.boxImgCont}>
                        <img src={item.image ? item.image : serviceImgDefault} alt={item.name} />
                      </figure>
                    </div>
                    <p className={classes.label}>{item.name}</p>
                    <p className={classes.desc}>{item.description}</p>
                    {/* <Link to={`/specialists/${item.slug}`} className={classes.btnLink}>
                      Посмотреть специалистов
                    </Link>
                    */}
                    <Link to={`/category-search?treatmentId=${item.id}`} className={classes.btnLink}>
                      Посмотреть специалистов
                    </Link>
                  </div>
                ))}
              </div>
              <div className={classes.carouselBox}>
                <Carousel
                  NextIcon={<ArrowForwardIcon/>}
                  PrevIcon={<ArrowBackIcon/>}
                  navButtonsProps={{
                    className: classes.carouselNavButtons
                  }}
                  navButtonsWrapperProps={{
                    className: classes.buttonWrapper,
                  }}
                  indicatorIconButtonProps={{
                    className: classes.indiacators,
                  }}
                  activeIndicatorIconButtonProps={{
                    className: classes.indiacatorsActive,
                  }}
                  autoPlay={false}
                  timeout={500}
                >
                  {serviceCategory.sub_services.map((item, index) => (
                    <div key={item.id} className={classes.carouselBoxItem}>
                      <div className={classes.boxImg}>
                        <figure className={classes.boxImgCont}>
                          <img src={item.image ? item.image : serviceImgDefault} alt={item.name} />
                        </figure>
                      </div>
                      <p className={classes.label}>{item.name}</p>
                      <p className={classes.desc}>{item.description}</p>
                      <Link to={`/category-search?treatmentId=${item.id}`} className={classes.btnLink}>
                        Посмотреть специалистов
                      </Link>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

ServiceItems.propTypes = {
  classes: PropTypes.object,
  serviceCategory: PropTypes.object,
};

const ServiceItemsStyled = withStyles(styles)(ServiceItems);

export default memo(ServiceItemsStyled);
