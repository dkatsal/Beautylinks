/**
 *
 * MasterLocation
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './styles';
import HMap from '../../HEREComponents/HMap';
import AddressSearch from '../../AddressSearch';

const letters = {
  salon: 'C',
  mobile: 'B',
};
const locationTitles = {
  salon: 'Салон',
  mobile: 'На выезде',
};
function MasterLocation({ classes, data, putLocationTypes }) {
  const [state, setState] = useState(data);
  useEffect(() => {
    if (_.isEmpty(data)) {
      const defaultData = {
        mobile: {
          disabled: true,
          distance_to_travel: 6,
          address: {}
        },
        salon: {
          disabled: true,
          name: '',
          address: {}
        }
      }
      setState(defaultData);
    } else {
      setState(data);
    }
  }, [data]);

  const handleCheck = type => ({ target: { checked } }) => {
    setState(prevState => {
      const locationType = _.cloneDeep(data[type]);
      return {
        ...prevState,
        [type]: {
          ...locationType,
          disabled: !checked,
        },
      };
    });
  };

  // eslint-disable-next-line consistent-return
  const handleSetAddress = type => location => {
    setState(prevState => {
      let address = {};
      if (location) {
        const {
          lat,
          lon: lng,
          // eslint-disable-next-line camelcase
          address: { street, house_number, city, postcode },
        } = location;
        let fullAddress = street;
        // eslint-disable-next-line camelcase
        if (house_number) {
          // eslint-disable-next-line camelcase
          fullAddress += `, ${house_number}`;
        }
        address = {
          city,
          postcode,
          address: fullAddress,
          country_id: 'UA', // country_code,
          country_name: 'Ukraine', // country,
          location: {
            lat,
            lng,
          },
        };
      }
      const newState = {
        ...prevState,
        [type]: {
          ...prevState[type],
          address,
        },
      };
      return newState;
    });
  };

  const markers = [];
  const states = [];
  // eslint-disable-next-line consistent-return
  _.forEach(locationTitles, (title, locationType) => {
    const values = state[locationType];
    if (!values) {
      return false;
    }
    if (values && !values.disabled && _.size(values.address)) {
      markers.push({
        letter: letters[locationType],
        locationType,
        points: values.address.location,
      });
    }
    console.log(markers)

    let addr = (values.address && values.address.address) || '';
    if (values.address && values.address.city) {
      if (addr.length) {
        addr += `, `;
      }
      addr += values.address.city;
    }
    if (values.address && values.address.postcode) {
      if (addr.length) {
        addr += `, `;
      }
      addr += values.address.postcode;
    }
    if (values.address && values.address.country_name) {
      if (addr.length) {
        addr += `, `;
      }
      addr += values.address.country_name;
    }
    const defaultData = values.address ? {
      ...values.address.location,
      addr,
    } : {
      lat: 0,
      lng: 0,
      addr,
    };

    // console.log(defaultData)

    states.push(
      <div key={`type_${locationType}`}>
        <div className={classes.switchContainer}>
          <span className={classes.switchTitle}>{title}</span>
          <label>
            <input
              className={classes.switchInput}
              type="checkbox"
              hidden
              checked={values ? !values.disabled : false}
              onChange={handleCheck(locationType)}
            />
            <div className={classes.switchBox} />
          </label>
        </div>
        {values && !values.disabled ? (
          <div className={classes.container}>
            <div className={classes.inputBox}>
              <div className={classes.inputSearch}>
                <AddressSearch
                  handleSelect={handleSetAddress(locationType)}
                  defaultData={defaultData}
                  // valueData={defaultData}
                  classesRoot={classes.root}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div >,
    );
  });

  const isAddressDefined = type => {
    const { address } = state[type];
    if (_.isEmpty(address)) return false
    return !address.city || !address.postcode || !address.address;
  };

  function isDisabled() {
    let disabled = false;
    if (_.isEqual(state, data)) {
      disabled = true;
    }
    if (!_.isEqual(state.salon, data.salon)) {
      disabled = isAddressDefined('salon');
    }
    if (!_.isEqual(state.mobile, data.mobile)) {
      disabled = isAddressDefined('mobile');
    }

    return disabled;
  }

  function handleSubmit() {
    console.log('Save')
    let payload = _.cloneDeep(state);
    if (_.isEmpty(data)){
      console.log('no data >> post location')
    }
    if (_.isEqual(payload.salon, data.salon) || _.isEmpty(payload.salon.address)) {
      payload = _.omit(payload, ['salon']);
    }
    if (_.isEqual(payload.mobile, data.mobile) || _.isEmpty(payload.mobile.address)) {
      payload = _.omit(payload, ['mobile']);
    }
    putLocationTypes(payload);
  }
  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Локации</h3>
        <p className={classes.desc}>Укажите своё местоположение на карте.</p>
      </div>
      {states}
      <div className={classes.btnContainer}>
        <button type="submit" className={classes.dscrBtn} onClick={handleSubmit} disabled={isDisabled()}>
          Сохранить
        </button>
      </div>
      <div className={classes.mapImg}>
        <HMap markers={markers} setAddress={handleSetAddress} initialZoom={'16'} />
      </div>
    </>
  );
}

MasterLocation.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  putLocationTypes: PropTypes.func,
};

const MasterLocationStyled = withStyles(styles)(MasterLocation);

export default memo(MasterLocationStyled);
