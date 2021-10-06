/**
 *
 * RegisterMasterSkills
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import ChipInput from 'material-ui-chip-input';
import { withStyles, FormControlLabel, Checkbox, Grid, Button, GridList, GridListTile } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import _ from 'lodash';
import styles from './styles';
function RegisterMasterSkills({ classes, postTrustAndSafety }) {
  const [images, setImages] = useState([]);
  const [data, setData] = useState({
    qualifications: [],
    insurance: false,
    medical_disclaimer_form: false,
    start_working_date: '',
  });

  function handleChange(name, value) {
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleDeleteChip(chip, index) {
    setData(prevData => {
      const qualifications = _.cloneDeep(prevData.qualifications);
      qualifications.splice(index, 1);
      return {
        ...prevData,
        qualifications,
      };
    });
  }

  function handleChangeImages(FileList) {
    const files = Array.from(FileList);
    if (files.length > 10) {
      files.splice(10);
    }
    setImages(files);
  }

  return (
    <>
      <p className={classes.title}>Опыт и навыки</p>
      <p className={classes.desc}>Расскажите нам о своих навыках и опыте. Эта информация будет отражена в профиле.</p>
      <p className={classes.subTitle}>Введите свои навыки</p>
      <div className={classes.formControl}>
        <ChipInput
          value={data.qualifications}
          onChange={chips => handleChange('qualifications', chips)}
          onDelete={handleDeleteChip}
          fullWidth
          className={classes.skillsInput}
          placeholder="Начните набирать текст..."
          disableUnderline
        />
        {/* <button type="button" className={classes.addBtn}> */}
        {/*  Добавить */}
        {/* </button> */}
      </div>
      <p className={classes.subTitle}>Введите свой опыт работы</p>
      <div className={classes.formControl}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container className={classes.grid} justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              openTo="year"
              format="yyyy-MM-dd"
              value={data.start_working_date ? moment(data.start_working_date).toDate() : null}
              onChange={date => handleChange('start_working_date', moment(date).format('YYYY-MM-DD'))}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              placeholder="Я работаю с..."
              fullWidth
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
      {images.length ? (
        <div className={classes.formControl}>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {_.map(images, (image, i) => (
              <GridListTile key={i} cols={1}>
                <img src={URL.createObjectURL(image)} alt="" />
              </GridListTile>
            ))}
          </GridList>
        </div>
      ) : null}
      <p className={classes.subTitle}>Загрузите до 10 изображений в своё портфолио</p>
      <label className={classes.loadImg}>
        <input accept="image/*" multiple type="file" onChange={e => handleChangeImages(e.currentTarget.files)} />
        <span>Добавить фотографию</span>
        <i className={classes.inputImage} />
      </label>
      <div className={classes.fieldBox}>
        <span>Есть ли у вас медицинское разрешение на предоставление услуг?</span>
        <FormControlLabel
          control={
            <Checkbox
              value
              color="default"
              name="medical_disclaimer_form"
              checked={data.medical_disclaimer_form}
              classes={{ root: classes.chbx, checked: classes.checked }}
              onChange={({ target: { name, value } }) => handleChange(name, value === 'true')}
            />
          }
          label="Да"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={false}
              color="default"
              name="medical_disclaimer_form"
              checked={!data.medical_disclaimer_form}
              classes={{ root: classes.chbx, checked: classes.checked }}
              onChange={({ target: { name, value } }) => handleChange(name, value === 'true')}
            />
          }
          label="Нет"
        />
      </div>
      <div className={classes.btnBox}>
        <Button
          variant="contained"
          className={classes.linkBtn}
          disabled={!data.qualifications.length || !data.start_working_date}
          onClick={() => postTrustAndSafety({ data, images })}
        >
          Продолжить
        </Button>
      </div>
    </>
  );
}

RegisterMasterSkills.propTypes = {
  classes: PropTypes.object,
  postTrustAndSafety: PropTypes.func,
};

const RegisterMasterSkillsStyled = withStyles(styles)(RegisterMasterSkills);

export default memo(RegisterMasterSkillsStyled);
