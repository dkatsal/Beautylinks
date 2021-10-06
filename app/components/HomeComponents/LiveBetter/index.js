/**
 *
 * LiveBetter
 *
 */

import React, { memo } from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NoSsr from '@material-ui/core/NoSsr';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
import CancelIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Paper from '@material-ui/core/Paper';
import AddressSearch from '../../AddressSearch';
import styles from './styles';
import moment from 'moment';

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

function LiveBetter({ classes, address, handleAddress, serviceCategories }) {
  const theme = useTheme();
  const [multi, setMulti] = React.useState(null);
  const [lat, setLat] = React.useState(null);
  const [lon, setLon] = React.useState(null);
  const [subCategory, setSubCategory] = React.useState(null);
  const [addr, setAddr] = React.useState(null);
  // const [lat]
  // @TODO: refactor it
  const suggestions = [];

  // eslint-disable-next-line array-callback-return
  serviceCategories.data.map(service => {
    suggestions.push({
      value: null,
      label: (
        <label style={{ fontWeight: 'bold' }} aria-disabled>
          {service.name}
        </label>
      ),
    });

    // eslint-disable-next-line camelcase
    const { sub_services } = service;
    // eslint-disable-next-line array-callback-return
    sub_services.map(sub => {
      suggestions.push({
        value: sub.id,
        label: <label style={{ marginLeft: 20 }}>{sub.name}</label>,
      });
    });
  });

  function handleChangeMulti(value) {
    console.log(value);
    setSubCategory(value[0].value);
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
  const definePath = () => {
    switch(true){
      case lat && lon && addr && !(!!subCategory):
        return `/category-search?lat=${lat}&lon=${lon}&addr=${addr}`;
      case !(lat && lon && addr) && !!subCategory:
        return `/category-search?treatmentId=${subCategory}`;
      case lat && lon && addr && !!subCategory:
        return `/specialists/beautician?treatmentId=${subCategory}&lat=${lat}&lon=${lon}&date=${moment().format(
          'YYYY-MM-DD',
        )}&from=00:00&to=23:59&locationtype=idm&serviceType=beautician&addr=${addr}`;
      default:
        return '/category-search';
    }
  };
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <div className={classes.box}>
          <h2 className={classes.title}>
            Мастера красоты и здоровья вашего города
          </h2>
          <p className={classes.dscr}>
            Найдите ближайшего специалиста всего в 3 клика
          </p>
          <div className={classes.formBox}>
            <div className={classes.inputBox}>
              <AddressSearch
                handleSelect={selectedOption => {
                  console.log(selectedOption);
                  setLat(selectedOption.lat);
                  setLon(selectedOption.lon);
                  setAddr(selectedOption.display_name);
                }}
                address={address}
              />
            </div>
            <div className={classes.inputBox}>
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
                  placeholder="Выберите услугу"
                  options={suggestions}
                  components={components}
                  value={multi}
                  onChange={handleChangeMulti}
                  isMulti
                />
              </NoSsr>
            </div>
          </div>
          <Link to={definePath()} className={classes.dscrBtn}>
            поиск
          </Link>
        </div>
        <div className={classes.containerBg} />
      </div>
    </div>
  );
}

LiveBetter.propTypes = {
  classes: PropTypes.object,
  address: PropTypes.string,
  handleAddress: PropTypes.func,
  serviceCategories: PropTypes.object,
};

const LiveBetterStyled = withStyles(styles)(LiveBetter);

export default memo(LiveBetterStyled);
