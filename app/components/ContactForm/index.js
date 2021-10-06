/**
 *
 * ContactForm
 *
 */

import React, { memo, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './styles';

function ContactForm({ classes, handleSubmit }) {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    success: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setState(previousState => ({
      ...previousState,
      [name]: value,
    }));
  }

  function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function isFilled() {
    // eslint-disable-next-line camelcase
    const { name, email, subject, message, contact_with } = state;
    // eslint-disable-next-line camelcase
    return !name || !(email && isValidEmail(email)) || !subject || !message || !contact_with;
  }

  const { name, email, subject, message } = state;

  return (
    <div className={classes.contactForm}>
      <aside className={classes.contactFormAside}>
        <div className={classes.formInput}>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className={classes.input}
            placeholder="Имя..."
            value={name}
          />
        </div>
        <div className={classes.formInput}>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className={classes.input}
            placeholder="Еmail..."
            value={email}
          />
        </div>
        <div className={classes.formInput}>
          <input
            onChange={handleChange}
            name="subject"
            type="text"
            className={classes.input}
            placeholder="Тема письма"
            value={subject}
          />
        </div>
        <div className={classes.formInput}>
          <Select
            onChange={handleChange}
            name="contact_with"
            className={classes.input}
            placeholder="По вопросу"
            displayEmpty
            defaultValue=""
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left"
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left"
              },
              getContentAnchorEl: null
            }}
          >
            <MenuItem value="" disabled>
              По вопросу
            </MenuItem>
            <MenuItem value="support">Техническая поддержка</MenuItem>
            <MenuItem value="sales">По вопросам сотрудничества</MenuItem>
          </Select>
        </div>
      </aside>
      <aside className={classes.contactFormAside}>
        <div className={classes.formInput}>
          <textarea
            onChange={handleChange}
            name="message"
            type="text"
            className={classes.textarea}
            placeholder="Текст вашего сообщения"
            value={message}
          />
        </div>
      </aside>
      <div className={classes.btnBox}>
        <button
          type="button"
          className={classes.linkBtn}
          onClick={() => {
            handleSubmit(state);
            setState({ name: '', email: '', subject: '', message: '', contact_with: '', success: true });
          }}
          disabled={!!isFilled()}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
};

const ContactFormStyled = withStyles(styles)(ContactForm);

export default memo(ContactFormStyled);
