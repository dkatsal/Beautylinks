/**
 *
 * MasterServices
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import _ from 'lodash';
import AdditionalServices from './additioanServices';
import styles from './styles';

function MasterServices({ classes, services, masterServices, postService, deleteService, putService }) {
  const [selectedSubServices, setSelectedSubServices] = useState({});
  const [subServices, setSubServices] = useState(masterServices);

  useEffect(() => {
    setSubServices(mergeServices());
    setSelectedSubServices({});
  }, [masterServices]);

  const mergeServices = () => {
    // console.log(masterServices);
    const newSubServices = masterServices ? masterServices.slice() : [];
    newSubServices.forEach(item => {
      services.forEach(service => {
        service.sub_services.forEach(subService => {
          if (item.sub_service_id === subService.id) {
            Object.assign(item, subService);
          }
        });
      });
    });
    // console.log(newSubServices);
    return newSubServices;
  };

  const handleEdit = (subServiceId, name, value) => {
    setSubServices(prev => {
      const newArr = prev.slice();
      const index = newArr.findIndex(item => item.sub_service_id === subServiceId);
      newArr[index][name] = value;
      return newArr;
    });
  };

  const handleSelectSubservice = (id, subService) => {
    setSelectedSubServices(prevSelectedServices => ({
      ...prevSelectedServices,
      [id]: subService,
    }));
  };

  const handleSelectedEdit = (id, name, value) => {
    setSelectedSubServices(prevStateServices => {
      const newObj = {
        ...prevStateServices,
        [id]: {
          ...prevStateServices[id],
          [name]: value,
        },
      };
      return newObj;
    });
  };

  const handlePostService = (payload, put) => {
    console.log('save');
    console.log(payload);
    if (put) {
      putService(payload);
    } else {
      postService(payload);
    }
  };

  const isDisabled = showedSunbservice => {
    // console.log(showedSunbservice)
    if (
      !showedSunbservice.price ||
      !showedSunbservice.duration ||
      (showedSunbservice.additional_services &&
        !showedSunbservice.additional_services.every(item => item.name && item.price && item.duration))
    ) {
      return true;
    }
    // const index = _.findIndex(masterServices, { sub_service_id: showedSunbservice.id });
    // if (index !== -1) {
    //   const { price, duration } = masterServices[index];
    //   return +price === +showedSunbservice.price && +duration === +showedSunbservice.duration;
    // }
    return false;
  };

  const addAdditionalServices = (serviceId, subServId) => {
    const newAdditionalServs = [{ name: '', price: '', duration: '' }];
    if (subServId) {
      setSubServices(prev => {
        const newArr = prev.slice();
        const obj = newArr.find(item => item.sub_service_id === subServId);
        obj.additional_services = obj.additional_services
          ? obj.additional_services.concat(newAdditionalServs)
          : newAdditionalServs;
        return newArr;
      });
    } else {
      setSelectedSubServices(prevStateServices => {
        const newObj = {
          ...prevStateServices,
          [serviceId]: {
            ...prevStateServices[serviceId],
            additional_services: prevStateServices[serviceId].additional_services
              ? prevStateServices[serviceId].additional_services.concat(newAdditionalServs)
              : newAdditionalServs,
          },
        };
        return newObj;
      });
    }
  };

  const changeAdditionalServices = (serviceId, subServId, index, name, value) => {
    if (subServId) {
      setSubServices(prev => {
        const newArr = prev.slice();
        const obj = newArr.find(item => item.sub_service_id === subServId);
        obj.additional_services[index][name] = value;
        return newArr;
      });
    } else {
      setSelectedSubServices(prevStateServices => {
        const newServices = _.cloneDeep(prevStateServices);
        const subServ = newServices[serviceId];
        subServ.additional_services[index][name] = value;
        return newServices;
      });
    }
  };

  const deleteAdditionalServices = (serviceId, subServId, index) => {
    if (subServId) {
      setSubServices(prev => {
        const newArr = prev.slice();
        const obj = newArr.find(item => item.sub_service_id === subServId);
        obj.additional_services.splice(index, 1);
        return newArr;
      });
    } else {
      setSelectedSubServices(prevStateServices => {
        prevStateServices[serviceId].additional_services.splice(index, 1);
        const newObj = {
          ...prevStateServices,
          [serviceId]: {
            ...prevStateServices[serviceId],
            additional_services: prevStateServices[serviceId].additional_services,
          },
        };
        return newObj;
      });
    }
  };

  // console.log(services);
  // console.log(subServices);
  // console.log(selectedSubServices);

  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Услуги</h3>
        <p className={classes.desc}>Все услуги, которые есть на сайте, отображаются здесь.</p>
      </div>
      {_.map(services, (service, index) => {
        const showedSunbservices = subServices ? subServices.slice() : [];
        if (selectedSubServices[service.id]) {
          showedSunbservices.push(selectedSubServices[service.id]);
        }
        return (
          <div key={service.id} className={classes.serviceBox}>
            <p className={classes.sectionTitle}>{service.name}</p>
            <div className={classes.searchBox}>
              <Autocomplete
                freeSolo
                style={{ width: '100%' }}
                options={service.sub_services}
                getOptionDisabled={option => _.findIndex(subServices, { id: option.id }) !== -1}
                getOptionLabel={option => option.name}
                onChange={(evant, value) => handleSelectSubservice(service.id, value)}
                value={selectedSubServices[service.id]}
                renderInput={params => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                    }}
                    className={classes.searchInput}
                    variant="standard"
                    placeholder="Искать услугу..."
                    fullWidth
                  />
                )}
              />
            </div>
            {showedSunbservices
              .filter(item => item.service_id === service.id)
              .map((showedSunbservice, subServiceIndex) => (
                <div key={showedSunbservice.id}>
                  {showedSunbservice.edit ? (
                    <div className={classes.serviceContainerActive}>
                      <div className={classes.serviceHeader}>
                        <p className={classes.serviceTitle}>{showedSunbservice.name}</p>
                        <button
                          type="button"
                          className={classes.deleteBtn}
                          onClick={() =>
                            showedSunbservice.sub_service_id
                              ? handleEdit(showedSunbservice.id, 'edit', false)
                              : handleSelectedEdit(service.id, 'edit', false)
                          }
                        />
                      </div>
                      <div className={classes.serviceContent}>
                        <p className={classes.priceTitle}>Цена</p>
                        <input
                          type="number"
                          className={classes.priceInput}
                          placeholder=""
                          value={showedSunbservice.price || ''}
                          onBlur={({ target: { value } }) =>
                            showedSunbservice.sub_service_id
                              ? handleEdit(showedSunbservice.id, 'price', value && (+value).toFixed(2))
                              : handleSelectedEdit(service.id, 'price', value && (+value).toFixed(2))
                          }
                          onChange={({ target: { value } }) =>
                            showedSunbservice.sub_service_id
                              ? handleEdit(showedSunbservice.id, 'price', value)
                              : handleSelectedEdit(service.id, 'price', value)
                          }
                        />
                        грн
                      </div>
                      <div className={classes.serviceDuration}>
                        <p className={classes.priceTitle}>Длительность</p>
                        <input
                          onBlur={({ target: { value } }) =>
                            showedSunbservice.sub_service_id
                              ? handleEdit(showedSunbservice.id, 'duration', Math.ceil(value / 15) * 15)
                              : handleSelectedEdit(service.id, 'duration', Math.ceil(value / 15) * 15)
                          }
                          type="number"
                          className={classes.priceInput}
                          placeholder=""
                          step={15}
                          min={15}
                          value={showedSunbservice.duration || ''}
                          onChange={({ target: { value } }) =>
                            showedSunbservice.sub_service_id
                              ? handleEdit(showedSunbservice.id, 'duration', value)
                              : handleSelectedEdit(service.id, 'duration', value)
                          }
                        />
                        мин
                      </div>
                      <AdditionalServices
                        showedSunbservice={showedSunbservice}
                        addAdditionalServices={subServId => addAdditionalServices(service.id, subServId)}
                        changeAdditionalServices={(subServId, subServIndex, name, value) =>
                          changeAdditionalServices(service.id, subServId, subServIndex, name, value)
                        }
                        deleteAdditionalServices={(subServId, subServIndex) =>
                          deleteAdditionalServices(service.id, subServId, subServIndex)
                        }
                      />
                      <button
                        type="button"
                        className={classes.linkBtn}
                        disabled={isDisabled(showedSunbservice)}
                        onClick={() =>
                          handlePostService(
                            {
                              sub_service_id: showedSunbservice.id,
                              price: showedSunbservice.price,
                              duration: showedSunbservice.duration,
                              additional_services: showedSunbservice.additional_services || [],
                            },
                            !!showedSunbservice.sub_service_id,
                          )
                        }
                      >
                        Сохранить
                      </button>
                    </div>
                  ) : (
                    <div className={classes.serviceContainer}>
                      <p className={classes.serviceTitle}>
                        {showedSunbservice.price && showedSunbservice.sub_service_id ? (
                          <i className={classes.checkedIcon} />
                        ) : null}
                        {showedSunbservice.name}
                      </p>
                      {showedSunbservice.price ? (
                        <p className={classes.servicePrice}>Цена: {showedSunbservice.price} грн</p>
                      ) : null}
                      {showedSunbservice.sub_service_id ? (
                        <>
                          <button
                            type="button"
                            className={classes.editBtn}
                            onClick={() => handleEdit(showedSunbservice.id, 'edit', true, subServiceIndex)}
                          />
                          <button
                            type="button"
                            className={classes.deleteBtn}
                            onClick={() => deleteService({ sub_service_id: showedSunbservice.sub_service_id })}
                          />
                        </>
                      ) : (
                        <button
                          type="button"
                          className={classes.addBtn}
                          onClick={() => handleSelectedEdit(service.id, 'edit', true, subServiceIndex)}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        );
      })}
    </>
  );
}

MasterServices.propTypes = {
  classes: PropTypes.object,
  services: PropTypes.array,
  masterServices: PropTypes.array,
  postService: PropTypes.func,
  deleteService: PropTypes.func,
  putService: PropTypes.func,
};

const MasterServicesStyled = withStyles(styles)(MasterServices);

export default memo(MasterServicesStyled);
