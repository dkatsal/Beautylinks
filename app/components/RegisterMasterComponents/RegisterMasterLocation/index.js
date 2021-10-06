/**
 *
 * RegisterMasterLocation
 *
 */

import React, { memo, useState } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles';
import AddressSearch from '../../AddressSearch';

function RegisterMasterLocation({ classes, postLocation }) {
  const [values, setValues] = useState({
    mobile: false,
    salon: false,
  });

  const [state, setState] = useState({
    2: {},
    1: [{ name: '' }],
  });

  const switchers = [
    {
      title: 'Выездные услуги',
      name: 'mobile',
      inputPlaceholder: 'Допустимое расстояние для выезда (км) *',
      addressPlaceholder: 'Найдите адрес вашего дома *',
    },
    {
      title: 'Работа в салоне',
      name: 'salon',
      inputPlaceholder: 'Название вашего салона *',
      addressPlaceholder: 'Найдите адрес вашего салона *',
    },
  ];

  const handleChangeTextField = choice => ({ target: { value } }) => {
    if (choice === 'mobile') {
      setState(prevState => ({
        ...prevState,
        2: {
          ...prevState[2],
          distance: value,
        },
      }));
    } else {
      setState(prevState => {
        const salon = [
          {
            ...prevState[1][0],
            name: value,
          },
        ];
        return {
          ...prevState,
          1: salon,
        };
      });
    }
  };

  const handleSetAddress = choice => location => {
    if (choice === 'mobile') {
      if (location) {
        const { address, lat, lon: lng } = location;
        setState(prevState => {
          let street = address.street ? address.street : '';
          if (address.house_number) {
            street += `, ${address.house_number}`;
          }
          return {
            ...prevState,
            2: {
              ...prevState[2],
              home_address: {
                city: address.city || address.town || address.village,
                postcode: address.postcode,
                country_name: 'Ukraine', // address.country,
                country_id: 'UA', // address.country_code,
                address: street,
                home_location: { lat, lng },
              },
            },
          };
        });
      } else {
        setState(prevState => ({
          ...prevState,
          2: {
            ...prevState[2],
            home_address: {},
          },
        }));
      }
    } else if (location) {
      const { address, lat, lon: lng } = location;

      setState(prevState => {
        let street = address.street ? address.street : '';
        if (address.house_number) {
          street += `, ${address.house_number}`;
        }
        const salon = [
          {
            ...prevState[1][0],
            city: address.city || address.town || address.village,
            postcode: address.postcode,
            country_name: 'Ukraine', // address.country,
            country_id: 'UA', // address.country_code,
            address: street,
            salon_location: { lat, lng },
          },
        ];
        return {
          ...prevState,
          1: salon,
        };
      });
    } else {
      setState(prevState => {
        const salon = [
          {
            name: prevState[1][0].name,
          },
        ];
        return {
          ...prevState,
          1: salon,
        };
      });
    }
  };

  function isDisabled() {
    let mobileDisabled = true;
    if (values.mobile) {
      const mobile = state[2];
      mobileDisabled = !mobile.distance || !_.size(mobile.home_address);
      if (!values.salon) {
        return mobileDisabled;
      }
    }
    let salonDisabled = true;
    if (values.salon) {
      const salon = state[1][0];
      salonDisabled = !salon.name || !_.size(salon.salon_location);
      if (!values.mobile) {
        return salonDisabled;
      }
    }
    return mobileDisabled || salonDisabled;
  }

  function handlePost() {
    let payload = state;
    if (!values.mobile) {
      payload = _.omit(state, ['2']);
    } else if (!values.salon) {
      payload = _.omit(state, ['1']);
    }
    console.log(payload)

    postLocation(payload);
  }

  return (
    <>
      <p className={classes.title}>Ваше расположение для работы</p>
      <p className={classes.desc}>
        Вы можете выбрать своё удобное место для работы. Предложение действительно для выездных либо услуг в салоне.
      </p>
      {_.map(switchers, (switcher, i) => (
        <div key={i}>
          <div className={classes.switchContainer}>
            <span className={classes.switchTitle}>{switcher.title}</span>
            <label>
              <input
                className={classes.switchInput}
                type="checkbox"
                hidden
                checked={values[switcher.name]}
                onChange={({ target: { checked } }) =>
                  setValues(oldValues => ({
                    ...oldValues,
                    [switcher.name]: checked,
                  }))
                }
              />
              <div className={classes.switchWrap}>
                <div className={classes.switchBox}>
                  <span className={classes.switchLabel}>On</span>
                  <span className={classes.switchLabel} />
                  <span className={classes.switchLabel}>Off</span>
                </div>
              </div>
            </label>
          </div>
          {values[switcher.name] ? (
            <div className={classes.inputBox}>
              <TextField
                type={switcher.name === 'mobile' ? 'number' : 'text'}
                onChange={handleChangeTextField(switcher.name)}
                fullWidth
                className={classes.input}
                label={switcher.inputPlaceholder}
              />
              <div className={classes.inputSearch}>
                <AddressSearch
                  handleSelect={handleSetAddress(switcher.name)}
                  classesRoot={classes.root}
                  inputClassName={classes.input}
                  label={switcher.addressPlaceholder}
                />
              </div>
            </div>
          ) : null}
        </div>
      ))}
      <div className={classes.btnBox}>
        <Button variant="contained" className={classes.linkBtn} onClick={handlePost} disabled={isDisabled()}>
          {/* In case of thre rediction of the registration  */}
          {/* Продолжить */}
          Закончить
        </Button>
      </div>
    </>
  );
}

RegisterMasterLocation.propTypes = {
  classes: PropTypes.object,
  postLocation: PropTypes.func,
};

const RegisterMasterLocationStyled = withStyles(styles)(RegisterMasterLocation);

export default memo(RegisterMasterLocationStyled);
