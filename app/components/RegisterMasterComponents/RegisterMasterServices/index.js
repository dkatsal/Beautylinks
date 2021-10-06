/**
 *
 * RegisterMasterServices
 *
 */

import React, { memo, useState, useEffect } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles';
import searchIcon from '../../../img/icons/search_grey.svg';

let subServicesList = [];
function RegisterMasterServices({
  classes,
  defaultMasterServices,
  services,
  postServiceRegStep,
  postService,
  deleteService,
  putService,
}) {
  useEffect(() => {
    _.forEach(services, service => {
      subServicesList = _.concat(subServicesList, service.sub_services);
    });
  }, []);
  useEffect(() => {
    setMasterServices(defaultMasterServices);
    setSelectedSubService({});
  }, [defaultMasterServices]);

  const [filterSubServices, setFilterSubServices] = useState(services[0].sub_services);
  const [masterServices, setMasterServices] = useState(defaultMasterServices);
  const [selectedSubService, setSelectedSubService] = useState({});

  function handlePostService() {
    const service = {
      sub_service_id: selectedSubService.id,
      price: selectedSubService.price,
      duration: selectedSubService.duration,
    };
    postService(service);
  }

  function handleChangeMasterService(i, name, value) {
    const mServices = _.cloneDeep(masterServices);
    mServices[i][name] = value;
    setMasterServices(mServices);
  }

  return (
    <>
      <p className={classes.title}>Давайте перенесём ваш бизнес в онлайн!</p>
      <p className={classes.desc}>
        Для начала, добавьте свои основные услуги и цены. Не переживайте, вы сможете их изменить в любое время в своём
        личном кабинете.
      </p>
      <div className={classes.btnBox}>
        {_.map(services, service => (
          <button
            key={service.id}
            type="button"
            className={_.isEqual(filterSubServices, service.sub_services) ? classes.linkBtn : classes.cleanBtn}
            onClick={() => setFilterSubServices(service.sub_services)}
          >
            {service.name}
          </button>
        ))}
      </div>
      <div className={classes.searchBox}>
        <a className={classes.searchBtn} href="/lol">
          <img src={searchIcon} alt="search" className={classes.inputIcon} />
        </a>
        <Autocomplete
          freeSolo
          disableClearable
          filterOptions={x => x}
          options={filterSubServices}
          getOptionLabel={option => option.name}
          classes={{
            inputRoot: classes.searchAutocomplete,
          }}
          onChange={(e, value) => setSelectedSubService(value)}
          renderInput={params => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
              }}
              classes={{
                root: classes.searchInput,
              }}
              placeholder="Искать услугу..."
              fullWidth
            />
          )}
        />
      </div>
      {_.size(selectedSubService) ? (
        <div className={classes.serviceBox}>
          <p className={classes.serviceTitle}>{selectedSubService.name}</p>
          <button type="button" className={classes.addBtn} />
          <div className={classes.serviceCont}>
            <p className={classes.priceTitle}>Цена</p>
            <input
              type="number"
              className={classes.priceInput}
              placeholder=""
              value={selectedSubService.price || ''}
              onBlur={({ target: { value } }) =>
                setSelectedSubService(prevVal => ({
                  ...prevVal,
                  price: value && (+value).toFixed(2),
                }))
              }
              onChange={({ target: { value } }) =>
                setSelectedSubService(prevVal => ({
                  ...prevVal,
                  price: value,
                }))
              }
            />
            <span>грн</span>
          </div>
          <div className={classes.serviceCont}>
            <p className={classes.priceTitle}>Длительность</p>
            <input
              type="number"
              className={classes.priceInput}
              placeholder=""
              step={15}
              min={15}
              value={selectedSubService.duration || ''}
              onBlur={({ target: { value } }) =>
                setSelectedSubService(prevVal => ({
                  ...prevVal,
                  duration: Math.ceil(value / 15) * 15,
                }))
              }
              onChange={({ target: { value } }) =>
                setSelectedSubService(prevVal => ({
                  ...prevVal,
                  duration: value,
                }))
              }
            />
            <span>мин</span>
            <div className={classes.btnBox}>
              <button
                type="button"
                className={classes.linkBtn}
                disabled={!selectedSubService.price || !selectedSubService.duration}
                onClick={handlePostService}
              >
                Добавить услугу
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {_.map(masterServices, (masterService, i) => {
        const subServiceData = _.filter(subServicesList, { id: masterService.sub_service_id })[0];
        return (
          <div key={masterService.sub_service_id} className={classes.serviceBox}>
            {masterService.edit ? (
              <>
                <p className={classes.serviceTitle}>{selectedSubService.name}</p>
                <button
                  type="button"
                  className={classes.addBtn}
                  onClick={() => handleChangeMasterService(i, 'edit', false)}
                />
                <div className={classes.serviceCont}>
                  <p className={classes.priceTitle}>Цена</p>
                  <input
                    type="number"
                    value={masterService.price}
                    className={classes.priceInput}
                    placeholder=""
                    onChange={({ target: { value } }) => handleChangeMasterService(i, 'price', value)}
                    onBlur={({ target: { value } }) =>
                      handleChangeMasterService(i, 'price', value && (+value).toFixed(2))
                    }
                  />
                  <span>грн</span>
                </div>
                <div className={classes.serviceCont}>
                  <p className={classes.priceTitle}>Длительность</p>
                  <input
                    type="number"
                    className={classes.priceInput}
                    placeholder=""
                    step={15}
                    min={15}
                    value={masterService.duration || ''}
                    onChange={({ target: { value } }) => handleChangeMasterService(i, 'duration', value)}
                    onBlur={({ target: { value } }) =>
                      handleChangeMasterService(i, 'duration', Math.ceil(value / 15) * 15)
                    }
                  />
                  <span>мин</span>
                  <div className={classes.btnBox}>
                    <button
                      type="button"
                      className={classes.linkBtn}
                      disabled={!masterService.price || !masterService.duration}
                      onClick={() => {
                        const payload = _.omit(masterService, ['edit']);
                        putService(payload);
                      }}
                    >
                      Обновить услугу
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className={classes.serviceTitle}>
                  <i className={classes.checkedIcon} />
                  {subServiceData && subServiceData.name}
                </p>
                <p className={classes.servicePrice}>
                  Цена:<b> {masterService.price} грн/час</b>
                </p>
                <button
                  type="button"
                  className={classes.editBtn}
                  onClick={() => handleChangeMasterService(i, 'edit', true)}
                />
                <button
                  type="button"
                  className={classes.deleteBtn}
                  onClick={() => deleteService({ sub_service_id: masterService.sub_service_id })}
                />
              </>
            )}
          </div>
        );
      })}
      {masterServices.length ? (
        <div className={classes.continueBtnBox}>
          <Button variant="contained" className={classes.continueLinkBtn} onClick={postServiceRegStep}>
            Продолжить
          </Button>
        </div>
      ) : null}
    </>
  );
}

RegisterMasterServices.propTypes = {
  classes: PropTypes.object,
  defaultMasterServices: PropTypes.array,
  services: PropTypes.array,
  postServiceRegStep: PropTypes.func,
  postService: PropTypes.func,
  deleteService: PropTypes.func,
  putService: PropTypes.func,
};

const RegisterMasterServicesStyled = withStyles(styles)(RegisterMasterServices);

export default memo(RegisterMasterServicesStyled);
