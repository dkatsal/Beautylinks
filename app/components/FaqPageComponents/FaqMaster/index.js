/**
 *
 * FaqMaster
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import bgImage1 from '../../../images/faq-client-1.svg';
import bgImage2 from '../../../images/faq-client-2.svg';
import bgImage3 from '../../../images/faq-client-3.svg';
import styles from './styles';

// eslint-disable-next-line no-unused-vars
function FaqMaster({ classes }) {
  return (
    <>
      <div className={classes.contBox}>
        <div className={classes.bgBox}>
          <img src={bgImage2} alt="Легко найти независимых специалистов." />
        </div>
        <div className={classes.boxText}>
          <ul className={classes.boxList}>
            <li>
              оформите свое портфолио так, чтобы выбрали именно Вас: добавьте свою специализацию и реальные фото работ, отзывы и сертификаты, заполните все пункты профиля;
            </li>
            <li>
              зарегистрируйтесь на liqpay, чтобы клиенты могли оплачивать Вашу работу: как это сделать смотрите на нашей странице @beautylinks_official
            </li>
            <li>
              укажите свое гео, чтобы клиенты находили Вас поблизости и не опаздывали на сеанс;
            </li>
            <li>
              оформляйте заказы каждый день, не отвлекаясь на звонки: это удобно сделать с помощью приложения и функционального рабочего кабинета;
            </li>
            <li>
              получите постоянный поток клиентов без вложений на раскрутку в соц.сетях;
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

FaqMaster.propTypes = {
  classes: PropTypes.object,
};

const FaqMasterStyled = withStyles(styles)(FaqMaster);

export default memo(FaqMasterStyled);
