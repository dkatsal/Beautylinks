/**
 *
 * MasterPageSidebar
 *
 */

import React, { memo, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import mapImg from '../../../images/map.png';
import pinterestImg from '../../../img/icons/pinterest_icon.png';
import facebookImg from '../../../img/icons/facebook_icon.png';
import instaImg from '../../../img/icons/insta_icon.png';
import styles from './styles';
import MasterPageSchedule from '../MasterPageSchedule/Loadable';
import MasterPageSertificate from '../MasterPageSertificate/Loadable';
import HMap from '../../HEREComponents/HMap';

function MasterPageSidebar({ classes, geoposition, phone, certificate_images, schedules }) {
  const [showPhone, setShowPhone] = useState(false);
  const [salonAddress, setSalonAddress] = useState(false);
  const [mobileAddress, setMobileAddress] = useState(false);
  const platform = new H.service.Platform({
    apikey: 'zDJwqdRCTTDPoqxspdhKEcWYEJpnM9ctcVnC_G8lStE',
  });

  function reverseGeocode(platform, prox, onSuccess, onError, locationType) {
    const geocoder = platform.getGeocodingService();
    const reverseGeocodingParameters = {
      prox,
      mode: 'retrieveAddresses',
      maxresults: '1',
      jsonattributes: 1,
      language: 'ru',
    };

    geocoder.reverseGeocode(reverseGeocodingParameters, onSuccess, onError);
  }
  function definePoints(geoposition) {
    switch (true) {
      case (!!geoposition.salon && !!geoposition.mobile):
        reverseGeocode(platform, `${geoposition.salon.lat}, ${geoposition.salon.lon}`, (e) => {
          setSalonAddress(e.response.view[0].result[0].location.address.label);
        });
        reverseGeocode(platform, `${geoposition.mobile.lat}, ${geoposition.mobile.lon}`, (e) => {
          setMobileAddress(e.response.view[0].result[0].location.address.label);
        });

        return [{
          points: {
            lng: geoposition.salon.lon,
            lat: geoposition.salon.lat
          }, letter: 'S'
        },
        {
          points:
          {
            lng: geoposition.mobile.lon,
            lat: geoposition.mobile.lat
          },
          letter: 'M'
        }];
      case (!!geoposition.salon && !geoposition.mobile):
        reverseGeocode(platform, `${geoposition.salon.lat}, ${geoposition.salon.lon}`, (e) => {
          setSalonAddress(e.response.view[0].result[0].location.address.label);
        });
        return [{
          points: {
            lng: geoposition.salon.lon,
            lat: geoposition.salon.lat
          }, letter: 'S'
        }];
      case (!geoposition.salon && !!geoposition.mobile):
        reverseGeocode(platform, `${geoposition.mobile.lat}, ${geoposition.mobile.lon}`, (e) => {
          setMobileAddress(e.response.view[0].result[0].location.address.label);
        });
        return [{
          points:
          {
            lng: geoposition.mobile.lon,
            lat: geoposition.mobile.lat
          },
          letter: 'M'
        }];

      default: return [];
    }

  };

  return (
    <aside className={classes.sidebar}>
      <div className={classes.mapImg}>
        {geoposition ? <HMap markers={definePoints(geoposition)} initialZoom="16" /> : null}
      </div>
      <div className={classes.contactsBox}>
        {salonAddress ?
          <p className={classes.contactsAdress}>
            <i className={classes.contactsMapIcon} /> Салон: {salonAddress}
          </p> : null
        }
        {mobileAddress ?
          <p className={classes.contactsAdress}>
            <i className={classes.contactsMapIcon} /> На выезде: {mobileAddress}
          </p> : null
        }

        {/* <p className={classes.contactsAdress}>
          <i className={classes.contactsMapIcon} /> Украина, г. Харьков, ул. Сумская 35а
        </p> */}

        {/* {showPhone ? (
          <p className={classes.contactsPhone}>
            <i className={classes.contactsPhoneIcon} /> <span>{phone}</span>
          </p>
        ) : (
          <p className={classes.contactsPhone} onClick={() => setShowPhone(true)}><i className={classes.contactsPhoneIcon} />
            <span>Показать номер телефона </span>
          </p>
        )} */}

        {/* <p className={classes.contactsSocial}>
          <span>Присоединяйтесь в соцсетях:</span>
          <Link to="#" className={classes.contactsSocialIcon}>
            <img src={pinterestImg} alt="pinterest" />
          </Link>
          <Link to="#" className={classes.contactsSocialIcon}>
            <img src={facebookImg} alt="facebook" />
          </Link>
          <Link to="#" className={classes.contactsSocialIcon}>
            <img src={instaImg} alt="insta" />
          </Link>
        </p> */}
      </div>
      <MasterPageSchedule schedule={schedules} />
      <MasterPageSertificate data={certificate_images} />
    </aside>
  );
}

MasterPageSidebar.propTypes = {
  classes: PropTypes.object,
};

const MasterPageSidebarStyled = withStyles(styles)(MasterPageSidebar);

export default memo(MasterPageSidebarStyled);
