/**
 *
 * MasterProfile
 *
 */

import React, { memo, useState, useEffect, createRef } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import NumberFormat from 'react-number-format';
import { Input } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import styles from './styles';

function MasterProfile({
  classes,
  avatar,
  postAvatar,
  userData,
  masterBio,
  profileId,
  certImages,
  portfolioImages,
  deleteImage,
  postImages,
  postCertImages,
  deleteCertImage,
  putUserProfile,
  putMasterProfile,
}) {
  const [statePortfolioImages, setPortfolioImages] = useState([]);
  const [stateCertImages, setCertImages] = useState([]);
  const [state, setState] = useState(userData);
  const [bio, setBio] = useState(masterBio);
  const [selectedCity, setSelectedCity] = useState('');
  const profileLinkInput = createRef();
  useEffect(() => {
    setPortfolioImages([]);
  }, [portfolioImages]);

  useEffect(() => {
    setCertImages([]);
  }, [certImages]);

  function handleChange(name, value) {
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleChangeImages = setImages => FileList => {
    const files = Array.from(FileList);
    if (files.length > 10) {
      files.splice(10);
    }
    setImages(files);
  };

  console.log(state);

  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>?????? ??????????????</h3>
        <p className={classes.desc}>
          ?????????? ???? ???????????? ?????????????????????????????? ???????????????????? ?? ?????????? ?????????????? ?? ???????????????? ???????? ???????????? ?? ??????????????????.
        </p>
      </div>
      <div className={classes.container}>
        <div className={classes.inputBox}>
          <span className={classes.editTitle}>???????? ??????</span>
          <input
            className={classes.inputField}
            placeholder="??????"
            name="first_name"
            value={state.first_name || ''}
            onChange={({ target: { name, value } }) => handleChange(name, value)}
          />
        </div>
        <div className={classes.inputBox}>
          <span className={classes.editTitle}>???????? ??????????????</span>
          <input
            className={classes.inputField}
            placeholder="??????????????"
            name="last_name"
            value={state.last_name || ''}
            onChange={({ target: { name, value } }) => handleChange(name, value)}
          />
        </div>
        <div className={classes.inputBox}>
          <span className={classes.editTitle}>???????? ????????????????</span>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableFuture
              className={classes.inputField}
              margin="normal"
              openTo="year"
              format="yyyy-MM-dd"
              value={state.birthday ? moment(state.birthday).toDate() : null}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              placeholder="1990-01-01"
              InputProps={{
                disableUnderline: true,
              }}
              onChange={date => handleChange('birthday', moment(date).format('YYYY-MM-DD'))}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className={classes.customerData}>
          <div className={classes.checkboxCont}>
            <p className={classes.editTitle}>??????</p>
            <FormControlLabel
              control={
                <Checkbox
                  name="gender"
                  value="m"
                  onChange={({ target: { name, value } }) => handleChange(name, value)}
                  color="default"
                  classes={{ root: classes.chbx, checked: classes.checked }}
                  checked={state.gender === 'm'}
                />
              }
              label="??????????????"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="gender"
                  value="f"
                  onChange={({ target: { name, value } }) => handleChange(name, value)}
                  color="default"
                  classes={{ root: classes.chbx, checked: classes.checked }}
                  checked={state.gender === 'f'}
                />
              }
              label="??????????????"
            />
          </div>
        </div>
        {!_.isEqual(state, userData) ? (
          <div className={classes.btnBox}>
            <Button variant="contained" className={classes.linkBtn} onClick={() => putUserProfile(state)}>
              ??????????????????
            </Button>
          </div>
        ) : null}
      </div>

      <div className={classes.container}>
        <div className={classes.inputFullBox}>
          <p className={classes.subtitle}>???????? ??????????????????</p>
          <p className={classes.desc}>
            ?????????????? ???????????????????????????????? ????????, ?????? ?????????????????? ??????????????????, ?? ?????????? ?????????????? ?????????????? ???????????????? ( ?????????????????? 3
            ????????). ???????? ???????????? ?????????????????? ???????????? ????????????, ???????????????? ???????????????? ?? ??????????, ?????????????? ???????? ???? ???????????? ??????????????????
            ?????????? ????????????????.
          </p>
          <Input
            className={classes.inputFullField}
            placeholder="??????????????????"
            name="bio"
            value={bio || ''}
            onChange={({ target: { value } }) => setBio(value)}
            multiline
            disableUnderline
            maxRows={4}
          />
        </div>
        {!_.isEqual(bio, masterBio) && _.trim(bio) ? (
          <div className={classes.btnBox}>
            <Button variant="contained" className={classes.linkBtn} onClick={() => putMasterProfile({ bio })}>
              ??????????????????
            </Button>
          </div>
        ) : null}
      </div>

      <div className={classes.container}>
        <div className={classes.inputFullBox}>
          <p className={classes.subtitle}>????????????????</p>
        </div>
        {/* <div className={classes.inputBox}>
          <span className={classes.editTitle}>??????????????</span>
          <NumberFormat
            type="tel"
            prefix="+38"
            value={state.phone || ''}
            className={classes.inputField}
            onValueChange={({ formattedValue }) => {
              handleChange('phone', formattedValue);
            }}
          />
        </div> */}
        <div className={classes.inputBox}>
          <span className={classes.editTitle} />
          <NumberFormat
            type="tel"
            // prefix="+38"
            value={state.phone || ''}
            className={classes.inputField}
            onValueChange={({ formattedValue }) => {
              handleChange('phone', formattedValue);
            }}
            format="+38 ### ### ## ##"
          />
        </div>
        <div className={classes.inputBox}>
          <span className={classes.editTitle}>E-mail</span>
          <input type="email" className={classes.inputField} />
        </div>
        <div className={classes.selectBox}>
          <span className={classes.editTitle}>??????????</span>
          <Select
            variant="outlined"
            className={classes.select}
            placeholder="???? ????????????"
            displayEmpty
            defaultValue=""
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
              getContentAnchorEl: null,
            }}
            value={selectedCity}
            onChange={e => setSelectedCity(e.target.value)}
          >
            <MenuItem value="????????">????????</MenuItem>
            <MenuItem value="??????????????">??????????????</MenuItem>
            <MenuItem value="??????????">??????????</MenuItem>
            <MenuItem value="????????????">????????????</MenuItem>
          </Select>
        </div>
        <div className={classes.inputBox}>
          <span className={classes.editTitle}>???????????? ???? ????????????</span>
          <input type="text" className={classes.inputField} />
        </div>
        {!_.isEqual(state, userData) ? (
          <div className={classes.btnBox}>
            <Button variant="contained" className={classes.linkBtn} onClick={() => putUserProfile(state)}>
              ??????????????????
            </Button>
          </div>
        ) : null}
      </div>

      <div className={classes.container}>
        <div className={classes.inputFullBox}>
          <p className={classes.subtitle}>???????? ???????????? ??????????????</p>
        </div>
        <div className={classes.avatarBox}>
          <img src={avatar} className={classes.avatarImg} alt="Avatar" />
          <label className={classes.loadAvatar}>
            <input accept="image/*" type="file" onChange={e => postAvatar(e.currentTarget.files[0])} />
            <span>???????????????? ????????</span>
          </label>
        </div>
      </div>

      <div className={classes.container}>
        <Input
          inputRef={profileLinkInput}
          readOnly
          className={classes.profileLink}
          value={`${window.location.protocol}//${window.location.hostname}/master/${profileId}`}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="????????????????????"
                onClick={() => {
                  profileLinkInput.current.select();
                  document.execCommand('copy');
                }}
              >
                <FileCopyIcon className={classes.copyIcon} />
              </IconButton>
            </InputAdornment>
          }
        />
      </div>

      <div className={classes.container}>
        <div className={classes.inputFullBox}>
          <p className={classes.subtitle}>??????????????????: ?????????????? ?????????? ??????????</p>
        </div>
        {_.size(portfolioImages) ? (
          <label className={classes.loadImg}>
            {_.map(portfolioImages, image => (
              <React.Fragment key={image.id}>
                <div className={classes.uploadedItem}>
                  <img src={image.src} alt="??????????????????" className={classes.uploadedImage} />
                  <button type="button" className={classes.deleteButton} onClick={() => deleteImage(image.id)} />
                </div>
              </React.Fragment>
            ))}
          </label>
        ) : null}
        <div className={classes.portfolio}>
          {_.map(statePortfolioImages, (portfolioImage, i) => (
            <img
              key={`i_${i}`}
              src={URL.createObjectURL(portfolioImage)}
              alt="??????????????????"
              className={classes.portfolioItem}
            />
          ))}
          <label className={classes.loadPortfolioItem}>
            <input
              accept="image/*"
              multiple
              type="file"
              onChange={e => handleChangeImages(setPortfolioImages)(e.currentTarget.files)}
            />
          </label>
        </div>
        {statePortfolioImages.length ? (
          <div className={classes.btnBox}>
            <Button variant="contained" className={classes.linkBtn} onClick={() => postImages(statePortfolioImages)}>
              ??????????????????
            </Button>
          </div>
        ) : null}
      </div>

      <div className={classes.container}>
        <div className={classes.inputFullBox}>
          <p className={classes.subtitle}>??????????????????????</p>
        </div>
        {_.size(certImages) ? (
          <label className={classes.loadImg}>
            {_.map(certImages, image => (
              <React.Fragment key={image.id}>
                <div className={classes.uploadedItem}>
                  <img src={image.src} alt="????????????????????" className={classes.uploadedImage} />
                  <button type="button" className={classes.deleteButton} onClick={() => deleteCertImage(image.id)} />
                </div>
              </React.Fragment>
            ))}
          </label>
        ) : null}
        <div className={classes.portfolio}>
          {_.map(stateCertImages, (certImage, i) => (
            <img
              key={`i_${i}`}
              src={URL.createObjectURL(certImage)}
              alt="????????????????????"
              className={classes.portfolioItem}
            />
          ))}
          <label className={classes.loadPortfolioItem}>
            <input
              accept="image/*"
              multiple
              type="file"
              onChange={e => handleChangeImages(setCertImages)(e.currentTarget.files)}
            />
          </label>
        </div>
        {stateCertImages.length ? (
          <div className={classes.btnBox}>
            <Button variant="contained" className={classes.linkBtn} onClick={() => postCertImages(stateCertImages)}>
              ??????????????????
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
}

MasterProfile.propTypes = {
  classes: PropTypes.object,
  userData: PropTypes.object,
  avatar: PropTypes.string,
  masterBio: PropTypes.string,
  profileId: PropTypes.string,
  portfolioImages: PropTypes.array,
  certImages: PropTypes.array,
  postAvatar: PropTypes.func,
  deleteImage: PropTypes.func,
  postImages: PropTypes.func,
  postCertImages: PropTypes.func,
  deleteCertImage: PropTypes.func,
  putUserProfile: PropTypes.func,
  putMasterProfile: PropTypes.func,
};

const MasterProfileStyled = withStyles(styles)(MasterProfile);

export default memo(MasterProfileStyled);
