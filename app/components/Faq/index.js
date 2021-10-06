/**
 *
 * Faq
 *
 */

import React, { memo } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import styles from './styles';

function Faq({ classes }) {
  const FaqItems = [
    {
      label: 'Как мне найти специалиста?',
      desc: ['Достаточно ввести в поиск ту услугу, которая Вам нужна, указать гео и Вы увидите всех доступных специалистов в Вашем районе. Заходите на страницы, просматривайте фото работ и отзывы, чтобы принять решение!']
    },
    {
      label: 'Можно ли отменить заказ?', desc: ['Да, если сделать это за 24 часа до процедуры.']
    },
    {
      label: 'Оплата работы мастера',
      desc: ['Оплатить можно с помощью VISA или MasterCard. Деньги временно замораживаются на Вашей карте, пока специалист не закончит работу и вы не будете довольны результатом. Это позволит гарантировать качество работы!'],
    },
    { label: 'Безопасность и качество', desc: ['Наш сервис обеспечивает безопасность и качество как для мастеров, так и для клиентов. При заказе услуги деньги временно замораживаются на счету клиента. Так мы помогаем защитить Вас от “отмен” и “не приходов”. Но если специалист сделал свою работу не качественно, клиент имеет право не оплатить услугу.'] },
  ];
  return (
    <div className={classes.box}>
      {FaqItems.map((item, index) => (
        <Accordion key={item.label} className={classes.boxItem}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.label}>{item.label}</Typography>
          </AccordionSummary >
          <AccordionDetails >
            <Typography className={classes.desc}>
              {item.desc}
            </Typography>
          </AccordionDetails >
        </Accordion>
      ))}
    </div>
  );
}

Faq.propTypes = {
  classes: PropTypes.object,
};

const FaqStyled = withStyles(styles)(Faq);

export default memo(FaqStyled);
