import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles, TextField } from '@material-ui/core';
// import _ from 'lodash';
import styles from './styles';

function AdditionalServices({
  classes,
  showedSunbservice,
  addAdditionalServices,
  changeAdditionalServices,
  deleteAdditionalServices,
}) {
  console.log(showedSunbservice);
  return (
    <div className={classes.addServs}>
      <p className={classes.addServsTitle}>Дополнительные услуги:</p>
      {showedSunbservice.additional_services &&
        showedSunbservice.additional_services.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={classes.addService} key={`${showedSunbservice.sub_service_id}-${index}`}>
            <div className={classes.addServiceHeader}>
              <TextField
                name="name"
                className={classes.addServiceName}
                label="Название доп. услуги"
                value={item.name}
                onChange={({ target: { value, name } }) =>
                  changeAdditionalServices(showedSunbservice.sub_service_id, index, name, value)
                }
              />
              <button
                type="button"
                className={classes.deleteBtn}
                onClick={() => deleteAdditionalServices(showedSunbservice.sub_service_id, index)}
              />
            </div>
            <div className={`${classes.addServiceField} price`}>
              <p className={classes.priceTitle}>Цена</p>
              <input
                type="number"
                min="0"
                name="price"
                className={classes.priceInput}
                placeholder=""
                value={item.price}
                onChange={({ target: { value, name } }) =>
                  changeAdditionalServices(showedSunbservice.sub_service_id, index, name, value)
                }
                onBlur={({ target: { value, name } }) =>
                  changeAdditionalServices(showedSunbservice.sub_service_id, index, name, value && (+value).toFixed(2))
                }
              />
              грн
            </div>
            <div className={classes.addServiceField}>
              <p className={classes.priceTitle}>Длительность</p>
              <input
                type="number"
                min="0"
                step="1"
                name="duration"
                className={classes.priceInput}
                placeholder=""
                value={item.duration}
                onChange={({ target: { value, name } }) =>
                  changeAdditionalServices(showedSunbservice.sub_service_id, index, name, value)
                }
                onBlur={({ target: { value, name } }) =>
                  changeAdditionalServices(showedSunbservice.sub_service_id, index, name, value && (+value).toFixed(0))
                }
              />
              мин
            </div>
          </div>
        ))}
      <button
        type="button"
        className={`${classes.addBtn} additional`}
        onClick={() => addAdditionalServices(showedSunbservice.sub_service_id)}
      />
    </div>
  );
}

AdditionalServices.propTypes = {
  classes: PropTypes.object,
  showedSunbservice: PropTypes.object,
  addAdditionalServices: PropTypes.func,
  changeAdditionalServices: PropTypes.func,
  deleteAdditionalServices: PropTypes.func,
};

const AdditionalServicesStyled = withStyles(styles)(AdditionalServices);

export default memo(AdditionalServicesStyled);
