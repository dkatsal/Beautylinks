/**
 *
 * AddressSearch
 *
 */
import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import _ from 'lodash';
import { geocoderHereApiKey } from '../../configs';
import styles from './styles';

class AddressSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
      defaultData: props.defaultData || null,
    };

    this.autoDetectLocation();
    this.handleChange = _.debounce(this.searchLocationAlt.bind(this), 400);
  }

  /*
  searchLocation(searchString) {
    try {
      axios
        .get(
          `${openStreetMapApiUrl}search?format=json&addressdetails=1&countrycodes=ua&q=${searchString}&language=uk,ru`,
        )
        .then(result => {
          this.setState({options: result.data});
        });
    } catch (e) {
      console.log(e);
    }
  }
  */

  /**
   * 250k/month free
   * @see: https://developer.here.com/pricing
   * @param searchString
   */
  searchLocationAlt(searchString) {
    if (searchString.length < 3) return;

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      const result = JSON.parse(xhr.responseText);

      if (
        result &&
        result.Response &&
        result.Response.View &&
        result.Response.View[0] &&
        result.Response.View[0].Result
      ) {
        const res = result.Response.View[0].Result.map(item => ({
          display_name: item.Location.Address.Label,
          lat: item.Location.DisplayPosition.Latitude,
          lon: item.Location.DisplayPosition.Longitude,
          address: {
            street: item.Location.Address.Street,
            house_number: item.Location.Address.HouseNumber ? item.Location.Address.HouseNumber : '',
            country: item.Location.Address.AdditionalData[0] ? item.Location.Address.AdditionalData[0].value : '',
            country_code: item.Location.Address.Country,
            city: item.Location.Address.City,
            postcode: item.Location.Address.PostalCode,
          },
        }));
        this.setState({ options: res });
      }
    });
    xhr.open(
      'GET',
      `https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${geocoderHereApiKey}&searchtext=${searchString}&country=UKR&language=ru`,
    );
    xhr.send();
  }

  autoDetectLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // console.log(position.coords.latitude, position.coords.longitude);
        if (position.coords.latitude && position.coords.longitude) {
          const xhr = new XMLHttpRequest();
          xhr.addEventListener('load', () => {
            const result = JSON.parse(xhr.responseText);

            if (
              result &&
              result.Response &&
              result.Response.View &&
              result.Response.View[0] &&
              result.Response.View[0].Result
            ) {
              const res = result.Response.View[0].Result.map(item => ({
                display_name: item.Location.Address.Label,
                lat: item.Location.DisplayPosition.Latitude,
                lon: item.Location.DisplayPosition.Longitude,
                address: {
                  street: item.Location.Address.Street,
                  house_number: item.Location.Address.HouseNumber ? item.Location.Address.HouseNumber : '',
                  country: item.Location.Address.AdditionalData[0] ? item.Location.Address.AdditionalData[0].value : '',
                  country_code: item.Location.Address.Country,
                  city: item.Location.Address.City,
                  postcode: item.Location.Address.PostalCode,
                },
              }));

              this.setState({ options: res, defaultOption: res[0] }, () => {
                console.log(this.state);
              });
            }
          });
          xhr.open(
            'GET',
            `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${position.coords.latitude},${
              position.coords.longitude
            },250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=${geocoderHereApiKey}`,
          );
          xhr.send();
        }
      });
    } else {
      console.error('Geolocation is not supported by this browser!');
    }
  }

  render() {
    const { classes, handleSelect, classesRoot, label, inputClassName, valueData } = this.props;
    const { options, defaultData } = this.state;
    const props = valueData ? { value: { display_name: valueData.addr, lat: valueData.lat, lon: valueData.lng } } : {};

    // @TODO: need to set default value from options[0];

    return (
      <Autocomplete
        ref={this.autocompleteField}
        filterOptions={x => x}
        options={options}
        autoComplete
        includeInputInList
        getOptionLabel={option => option.display_name}
        onChange={(evant, value) => handleSelect(value)}
        defaultValue={
          defaultData ? { display_name: defaultData.addr, lat: defaultData.lat, lon: defaultData.lon } : null
        }
        {...props}
        renderInput={params => (
          <TextField
            {...params}
            className={inputClassName}
            classes={{
              root: classesRoot || classes.addressInput,
            }}
            label={label}
            placeholder="Введите адрес"
            fullWidth
            autoComplete="false"
            onChange={event => {
              this.handleChange(event.target.value);
            }}
          />
        )}
      />
    );
  }
}

AddressSearch.propTypes = {
  classes: PropTypes.object,
  defaultData: PropTypes.object,
  valueData: PropTypes.object,
  classesRoot: PropTypes.string,
  address: PropTypes.object,
  label: PropTypes.string,
  inputClassName: PropTypes.string,
  onPlaceLoaded: PropTypes.func,
  handleSelect: PropTypes.func,
};

const AddressSearchStyled = withStyles(styles)(AddressSearch);

export default memo(AddressSearchStyled);
