/**
 *
 * MasterInvite
 *
 */

import React, { memo, useState } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function MasterInvite({ classes, postInvites }) {
  const [emails, setEmails] = useState({
    0: '',
    1: '',
    2: '',
  });

  const isValidEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const getPayload = () => {
    const payload = [];
    _.forEach(emails, email => {
      if (_.trim(email) && isValidEmail(email)) {
        payload.push(email);
      }
    });
    return payload;
  };

  const payload = getPayload();
  return (
    <>
      <div className={classes.header}>
        <h3 className={classes.title}>Пригласить людей</h3>
        <p className={classes.desc}>
          Если у вас есть прошлые клиенты, которых вы могли бы пригласить зарегистрироваться на этом сайте, то вы можете
          сделать это здесь.
        </p>
      </div>
      <div className={classes.container}>
        <p className={classes.subtitle}>Отправить приглашения</p>
        {_.map(emails, (email, index) => (
          <div className={classes.row} key={`i_${index}`}>
            <input
              type="text"
              value={email}
              className={classes.input}
              placeholder="Введите e-mail..."
              onChange={({ target: { value } }) => {
                setEmails(prevEmails => ({
                  ...prevEmails,
                  [index]: value,
                }));
              }}
            />
            <button
              disabled={!_.size(payload)}
              type="submit"
              className={classes.btnLink}
              onClick={() => postInvites(payload)}
            >
              Отправить приглашение
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

MasterInvite.propTypes = {
  classes: PropTypes.object,
  postInvites: PropTypes.func,
};

const MasterInviteStyled = withStyles(styles)(MasterInvite);

export default memo(MasterInviteStyled);
