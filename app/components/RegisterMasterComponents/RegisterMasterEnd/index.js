/**
 *
 * RegisterMasterEnd
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import styles from './styles';

function RegisterMasterEnd({ classes, postAvatar, data }) {
  const [avatar, setAvatar] = useState(null);
  return (
    <>
      <p className={classes.title}>Поздравляем!</p>
      <p className={classes.desc}>Ваш аккаунт готов, чтобы принимать заказы!</p>
      {avatar ? (
        <div className={classes.previewImg}>
          <img src={URL.createObjectURL(avatar)} alt="" width={165} />
        </div>
      ) : null}
      <label className={classes.loadImg}>
        <input accept="image/*" type="file" onChange={e => setAvatar(e.currentTarget.files[0])} />
        <span>Загрузить аватар</span>
      </label>
      <div className={classes.btnBox}>
        <Button variant="contained" className={classes.linkBtn} disabled={!avatar} onClick={() => postAvatar(avatar)}>
          Закончить
        </Button>
      </div>
      {_.size(data) ? <Redirect push to="/customer-master" /> : null}
    </>
  );
}

RegisterMasterEnd.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  postAvatar: PropTypes.func,
};

const RegisterMasterEndStyled = withStyles(styles)(RegisterMasterEnd);

export default memo(RegisterMasterEndStyled);
