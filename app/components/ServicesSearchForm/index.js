/**
 *
 * ServicesSearchForm
 *
 */

import React, { memo } from 'react';
import clsx from 'clsx';
import Select from 'react-select';
import { useTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styles from './styles';
import searchIcon from '../../img/icons/search_turquoise.svg';
import AddressSearch from '../AddressSearch/Loadable';
// import _ from 'lodash';
import HMap from '../HEREComponents/HMap';


function NoOptionsMessage(props) {
  return (
    <Typography color="textSecondary" className={props.selectProps.classes.noOptionsMessage} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
}

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired,
};

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
};

function Placeholder(props) {
  return (
    <Typography color="textSecondary" className={props.selectProps.classes.placeholder} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
};

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  removeProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
};

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object,
};

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

// eslint-disable-next-line react/prop-types
function ServicesSearchForm({ classes, serviceCategories, defaultData }) {
  const theme = useTheme();

  const filteredLabel = [];
  serviceCategories.data.forEach(categories => categories.sub_services.find(sub_service => {
    if (+sub_service.id === +defaultData.treatmentId) {
      filteredLabel.push(<label style={{ marginLeft: 20 }}>
        {sub_service.name}</label>)
    }
  }));
  const [multi, setMulti] = React.useState(defaultData.treatmentId ? {
    value: parseInt(defaultData.treatmentId, 10), label:
      <label style={{ marginLeft: 20 }}>
        {filteredLabel}
      </label>
  }
    : null);
  const [lat, setLat] = React.useState(defaultData.lat || null);
  const [lon, setLon] = React.useState(defaultData.lon || null);
  const [subCategory, setSubCategory] = React.useState(defaultData.treatmentId || null);
  const [addr, setAddr] = React.useState(defaultData.addr || null);
  const [markers, setMarkers] = React.useState([]);
  console.log(lat, lon, addr);

  React.useEffect(() => {
    if (defaultData.lat && defaultData.lon) {
      setMarkers([{letter: 'Вы', locationType: 'Client', points: {lat: defaultData.lat, lng: defaultData.lon}}])
    }
  }, []);

  // @TODO: refactor it

  const suggestions = [];

  // eslint-disable-next-line react/prop-types,array-callback-return
  serviceCategories.data.map(service => {
    suggestions.push({
      label: (
        <span key={service.id} style={{ fontWeight: 'bold' }} aria-disabled>
          {service.name}
        </span>
      ),

    });

    // eslint-disable-next-line camelcase
    const { sub_services } = service;
    // eslint-disable-next-line array-callback-return
    sub_services.map(sub => {
      suggestions.push({
        value: sub.id,
        label: <label key={sub.id} style={{ marginLeft: 20 }}>{sub.name}</label>,
      });
    });
  });

  function handleChangeMulti(value) {
    setSubCategory(value.value);
    setMulti(value);
  }

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <>
      <div className={classes.mapBox}>
        <HMap markers={markers} initialZoom={'15'} />
      </div>
      <div className={classes.formInput}>
        {/* <TextField className={classes.input} defaultValue={address} fullWidth label="Введите адрес..." /> */}
        <AddressSearch
          handleSelect={selectedOption => {
            if (selectedOption) {
              setLat(selectedOption.lat);
              setLon(selectedOption.lon);
              setAddr(selectedOption.display_name);
              setMarkers([{letter: 'Вы', locationType: 'Client', points: {lat: selectedOption.lat, lng: selectedOption.lon}}])
            }
          }}
          defaultData={defaultData || null}
        />
        <img src={searchIcon} alt="search" className={classes.inputIcon} />
      </div>
      <div className={classes.formSelect}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            inputId="react-select-multiple"
            TextFieldProps={{
              InputLabelProps: {
                htmlFor: 'react-select-multiple',
                shrink: true,
              },
            }}
            // defaultValue={defaultData || null}
            placeholder="Выберите услугу"
            options={suggestions}
            components={components}
            value={multi}
            onChange={handleChangeMulti}
            isMulti={false}
          />
        </NoSsr>
      </div>
      <div className={classes.btnBox}>
        <Link
          to={`/specialists/beautician?treatmentId=${subCategory}&lat=${lat}&lon=${lon}&date=${moment().format(
            'YYYY-MM-DD',
          )}&from=00:00&to=23:59&locationtype=idm&serviceType=beautician&addr=${addr}`}
          className={classes.linkBtn}
          disabled={(!subCategory || !lat || !lon)}
          onClick={(e) => { if (!subCategory || !lat || !lon) e.preventDefault() }}
        >
          Искать!
        </Link>
      </div>
    </>
  );
}

ServicesSearchForm.propTypes = {
  classes: PropTypes.object,
  defaultData: PropTypes.object,
};

const ServicesSearchFormStyled = withStyles(styles)(ServicesSearchForm);

export default memo(ServicesSearchFormStyled);
